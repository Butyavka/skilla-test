import React from 'react'
import './style.scss'
import { ReactComponent as SpinnerIcon } from '../../../assets/icons/spinner.svg'
import { block } from '../../../helpers/bem'

const b = block('loading')

const Loading = () => {
    return (
        <div className={ b() }>
            <SpinnerIcon  className={ b('icon') }/>
            <div className={ b('text') }>Загружаем</div>
        </div>
    );
};

export default Loading;