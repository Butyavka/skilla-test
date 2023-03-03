import React, {FC} from 'react'
import './style.scss'
import { block } from '../../helpers/bem'
import Checkbox from '../UI/Checkbox'
import { Call } from '../../types/calls'
import CallRow from './CallRow'

const b = block('calls-table')


interface ICallsTable {
    data: Call[] | []
}

const CallsTable: FC<ICallsTable> = ({ data }) => {
    return (
        <div className={ b() }>
            <div className={ b('header') }>
                <Checkbox className={ b('input') } id={ 'call-table-checkbox' }/>
                <div className={ b('type') }>Тип</div>
                <div className={ b('time') }>Время</div>
                <div  className={ b('person') }>Сотрудник</div>
                <div  className={ b('contact') }>Звонок</div>
                <div  className={ b('source') }>Источник</div>
                <div  className={ b('evaluation') }>Оценка</div>
                <div className={ b('record') }>Длительность</div>
            </div>
            {data.map(item => <CallRow { ...item } className={ b } key={ item.id } />)}
        </div>
    );
};

export default CallsTable;