import React from 'react'
import './style.scss'
import Menu from '../Menu'
import Header from '../Header'
import { block } from '../../helpers/bem'

const b = block('layout')

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={ b() }>
            <div className={ b('site-bar') }>
                <Menu/>
            </div>
            <div className={ b('content-box') }>
                <Header/>
                <div className={ b('content') }>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;