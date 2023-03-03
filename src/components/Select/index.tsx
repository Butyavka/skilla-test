import React, { useState, FC } from 'react'
import './style.scss'
import { block } from '../../helpers/bem'
import { ReactComponent as ArrowIcon } from '../../assets/icons/thin-arrow.svg'

const b = block('select')

type selectOption = {
    id: number,
    title: string,
    value: any
}

interface ISelect {
    options: selectOption[];
    defaultActive?: number;
    className?: string;
    onChange: (element: selectOption) => void;
}


const Select:FC<ISelect> = ({ options, defaultActive = 0, className, onChange }) => {
    const [activeId, setActiveId] = useState(defaultActive)
    const [activeItem, setActiveItem] = useState(getActiveItem(defaultActive))
    const [open, setOpen] = useState(false)

    const handlerItemClick = (option: selectOption) => {
        setActiveId(option.id)
        setActiveItem(option)
        onChange(option)
        setOpen(false)
    }

    function getActiveItem(id: number) {
        return options.find(item => item.id === id)
    }

    return (
        <div className={ b({}).mix(className) }>
            <div
                onClick={ () => setOpen(!open) }
                className={ b('header', { open }) }
            >
                {activeItem?.title}
                <ArrowIcon className={ b('header-icon', { open }) }/>
            </div>
            <ul className={ b('list', { open }) }>
                {options.map(item => (
                    <li
                        key={ item.id }
                        onClick={ () => handlerItemClick(item) }
                        className={ b('item', { active: item.id === activeId }) }
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;