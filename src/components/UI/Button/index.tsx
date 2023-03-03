import React, { FC, MouseEvent, ReactNode } from 'react'
import './style.scss'
import { block } from '../../../helpers/bem'

type buttonSize = 'small' | 'normal' | 'big'
type buttonVariant = 'outlined' | 'contained'

interface IButton {
    size?: buttonSize;
    text?: string;
    className?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    icon?: ReactNode;
    variant?: buttonVariant;
}

const b = block('button')

const Button: FC<IButton> = ({
    size = 'normal',
    text,
    onClick,
    className,
    disabled,
    icon,
    variant = 'contained'
}) => (
    <button
        disabled={ disabled }
        className={ b({ [size]: true, [variant]: true }).mix(className) }
        onClick={ onClick && onClick }
    >
        {text && <div className={ b('text') }>{text}</div>}
        {icon && <div className={ b('icon') }>{icon}</div>}
    </button>
)

export default Button;