import React, { useEffect, useMemo, useState } from 'react'
import './style.scss'
import { block } from '../../helpers/bem'
import { getList } from '../../api/calls'
import CallsTable from '../../components/CallsTable'
import { Call } from '../../types/calls'
import moment from 'moment'
import { getMinutesWithSeconds } from '../../helpers/time'
import { formattingPhoneNumber } from '../../helpers/formattingPhoneNumber'
import Calendar from '../../components/Calendar'
import { FORMATS } from '../../constants/dateFormats'
import { DEFAULT_DATE_PRESETS } from '../../constants/calendarPresets'
import Select from '../../components/Select'
import { CALLS } from '../../constants/filtres'

const b = block('calls-page')



const CallsPage = () => {
    const [data, setData] = useState<Call[]>([])
    const [date, setDate] = useState({
        dateEnd: moment().format(FORMATS.YYYY_MM_DD),
        dateStart: moment().subtract(3, 'days').format(FORMATS.YYYY_MM_DD)
    })
    const [callType, setCallType] = useState(null)
    const filteredData = useMemo(() => filterData(callType), [callType, data])

    function filterData(value: boolean | null) {
        if (value === null) return data

        return  data.filter(item => item.type === value)
    }

    useEffect(() => {
         getList( date.dateStart, date.dateEnd).then(result => {
            const newData = result.data.results.map((item: any) => ({
                id: item.id,
                type: !!item.in_out,
                status: item.status,
                dateAndTime: item.date,
                date: item.date_notime,
                contactName: item.contact_name,
                contactCompany: item.contact_company,
                personAvatar: item.person_avatar,
                recordId: item.record,
                fromSite: !!item.from_site,
                source: item.source,
                recordTime: item.time ? getMinutesWithSeconds(item.time) : item.time.toString(),
                time: moment(item.date).format(FORMATS.hh_mm),
                partnershipId: item.partnership_id,
                partnerPhone: item.partner_data.phone,
                formattedPhone: formattingPhoneNumber(item.partner_data.phone)
            }))

             setData(newData)
        })
    }, [date])


    return (
        <div className="container">
            <div className={ b('filters-list', { top: true }) }>
                <Calendar onChange={ setDate } presets={ DEFAULT_DATE_PRESETS }/>
            </div>
            <div className={ b('filters-list') }>
                <Select options={ CALLS } onChange={ (item) => setCallType(item.value) } />
            </div>
            <CallsTable data={ filteredData }/>
        </div>
    );
};

export default CallsPage;