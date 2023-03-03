import React, { FC, useRef, useState } from 'react'
import './style.scss'
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg'
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg'
import { block } from '../../helpers/bem'
import { DatePresets } from '../../constants/calendarPresets'

const b = block('calendar')

interface ICalendar {
    onChange: (value: { dateStart: string, dateEnd: string }) => void;
    presets: DatePresets[];
}

const Calendar: FC<ICalendar> = ({ onChange, presets }) => {
    const [open, setOpen] = useState(false)
    const [activePreset, setActivePreset] = useState(0)
    const selectElement = useRef(null)

    const onChangeDate = (id: number, isArrow: boolean = false) => {
        if (isArrow && (id > presets.length - 1 || id < 0)) {
            const newId = id < 0 ? presets.length - 1 : 0
            
            setActivePreset(newId)
            onChange(presets[newId].date)
        } else {
            setActivePreset(id)
            onChange(presets[id].date)
        }
    }

    return (
        <div className={ b() }>
            <button
                className={ b('button', { left: true }) }
                onClick={ () => onChangeDate(activePreset - 1, true) }
            >
                <ArrowIcon className={ b('button-icon') }/>
            </button>
            <div className={ b('title-box') } onClick={ () => setOpen(!open) }>
                <CalendarIcon className={ b('title-icon') }/>
                <div className={ b('title') }>{presets[activePreset].title}</div>
            </div>
            <button
                className={ b('button', { right: true }) }
                onClick={ () => onChangeDate(activePreset + 1, true) }
            >
                <ArrowIcon className={ b('button-icon') }/>
            </button>
            <div className={ b('select', { open }) } ref={ selectElement }>
                {presets.map(item => (
                    <div
                        key={ item.id }
                        className={ b('select-item', { active: item.id === activePreset }) }
                        onClick={ () => onChangeDate(item.id) }
                    >
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;