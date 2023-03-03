import React, {FC, useState} from 'react'
import './style.scss'
import { block } from '../../../helpers/bem'
import { ReactComponent as CheckedIcon } from '../../../assets/icons/checked.svg'


const b = block('checkbox')

interface ICheckbox {
    active?: boolean;
    onChange?: () => void;
    id: string;
    className?: string;
}

const Checkbox: FC<ICheckbox> = ({ className, id, active = false, onChange }) => {
    const [isActive, setIsActive] = useState(active)

    const handlerClick = () => {
        setIsActive(!isActive)

        if (onChange) onChange()
    }

    return (
        <div className={ className }>
            <label className={ b('label', { checked: isActive }) } htmlFor={ id }>
                {isActive && <CheckedIcon className={ b('icon') }/>}
            </label>
            <input className={ b() } type="checkbox" id={ id } checked={ isActive } onChange={ handlerClick }/>
        </div>
    );
};

export default Checkbox;