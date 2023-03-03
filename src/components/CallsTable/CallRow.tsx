import React, { FC, useState } from 'react'
import Checkbox from '../UI/Checkbox'
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow--with-stick.svg'
import { Call, CALL_STATUS } from '../../types/calls'
import { ReactComponent as WebIcon } from '../../assets/icons/web.svg'
import Button from '../UI/Button'
import { getRecord } from '../../api/calls'
import Loading from '../UI/Loading'

interface ICallRow extends Call {
    className?: any;
}

const CallRow:FC<ICallRow> = ({
    id,
    type,
    time,
    contactCompany,
    contactName,
    personAvatar,
    className,
    fromSite,
    recordTime,
    recordId,
    source,
    status,
    partnershipId,
    partnerPhone,
    formattedPhone
}) => {
    const [audioURL, setAudioURL] = useState(null)
    const [loading, setLoading] = useState(false)
    const canGetRecord = recordId !== '' && audioURL === null && !loading
    let getRecordTimeout: NodeJS.Timeout

    const hoverHandler = () => {
        if (recordId === '') return

        getRecordTimeout = setTimeout(() => {
            setLoading(true)

            getRecord(recordId, partnershipId)
                .then(response => new Blob([response.data], {type: response.headers['Content-type']}))
                .then(blob => URL.createObjectURL(blob))
                .then(blobURL => {
                    // @ts-ignore
                    setAudioURL(blobURL)
                    setLoading(false)
                })
        }, 1500)
    }

    const leaveHandler = () => {
        clearTimeout(getRecordTimeout)
    }

    return (
        <div
            className={ className('row') }
            key={ id }
            onMouseOver={ canGetRecord ? hoverHandler : undefined }
            onMouseLeave={ canGetRecord ? leaveHandler : undefined }
        >
            <Checkbox className={ className('input-cell') } id={ id }/>
            <div className={ className('type-cell') }>
                <ArrowIcon
                    className={
                        className('type-icon', {
                            incoming: type, outgoing: !type, missed: status === CALL_STATUS.FAIL
                        })
                    }
                />
            </div>
            <div className={ className('time-cell') }>{time}</div>
            <div className={ className('avatar') }>
                {personAvatar !== '' && <img className={ className('avatar-img') } src={ personAvatar } alt="avatar" />}
            </div>
            <div className={ className('web-box') }>
                {fromSite && <WebIcon className={ className('web-icon') }/>}
            </div>
            <div className={ className('contact-cell') }>
                {contactName !== '' && (
                    <div className={ className('contact-name') }>
                        {contactName}
                    </div>
                )}
                {contactCompany !== '' ? (
                    <div className={ className('contact-company') }>
                        {contactCompany}
                    </div>
                ) : (
                    <a href={ `tel:+${partnerPhone}` } className={ className('contact-phone') }>
                        {formattedPhone}
                    </a>
                )}
            </div>
            <div className={ className('source') }>{source}</div>
            <div className={ className('evaluation') }><Button text="Распознать"  variant="outlined"  /></div>
            <div className={ className('record') }>
                {loading && <Loading/>}
                {audioURL ? (
                    <audio src={ audioURL } controls></audio>
                ) : recordTime !== '0' && !loading && (
                    <span className={ className('record-text') }>
                        {recordTime}
                    </span>
                )}
            </div>
        </div>
    );
};

export default CallRow;