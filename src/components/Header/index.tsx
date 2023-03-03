import React from 'react'
import './style.scss'
import { block } from '../../helpers/bem'

const b = block('header')

const Header = () => {
    return (
        <div className={ b() }>
            header
        </div>
    );
};

export default Header;