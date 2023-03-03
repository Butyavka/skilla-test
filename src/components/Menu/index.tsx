import React from 'react'
import './style.scss'
import { block } from '../../helpers/bem'
import { ReactComponent as Logo} from '../../assets/icons/logo.svg'
import { ReactComponent as ChartIcon} from '../../assets/icons/menu/chart.svg'
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/menu/briefcase.svg'
import { ReactComponent as DocumentsIcon } from '../../assets/icons/menu/documents.svg'
import { ReactComponent as LibraryIcon } from '../../assets/icons/menu/library.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/menu/mail.svg'
import { ReactComponent as OrdersIcon } from '../../assets/icons/menu/orders.svg'
import { ReactComponent as PeopleIcon } from '../../assets/icons/menu/people.svg'
import { ReactComponent as PersonIcon } from '../../assets/icons/menu/person.svg'
import { ReactComponent as PhoneIcon } from '../../assets/icons/menu/phone.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/menu/settings.svg'
import { ReactComponent as PlusIcon } from '../../assets/icons/circle-plus.svg'
import { ReactComponent as AlertIcon } from '../../assets/icons/circle-alert.svg'
import Button from '../UI/Button';

const b = block('menu')

const menuItems = [
    {
        title: 'Итоги',
        icon: ChartIcon
    },
     {
         title: 'Заказы',
         icon: OrdersIcon
     },
     {
         title: 'Сообщения',
         icon: MailIcon
     },
     {
         title: 'Звонки',
         icon: PhoneIcon,
         active: true,
         hasNew: true
     },
     {
         title: 'Контрагенты',
         icon: PeopleIcon
     },
     {
         title: 'Документы',
         icon: DocumentsIcon
     },
     {
         title: 'Исполнители',
         icon: PersonIcon
     },
     {
         title: 'Отчеты',
         icon: BriefcaseIcon
     },
     {
         title: 'База знаний',
         icon: LibraryIcon
     },
     {
         title: 'Настройки',
         icon: SettingsIcon
     }
]

const Menu = () => {
    return (
        <div className={ b() }>
            <div className={ b('logo') }>
                <Logo/>
            </div>
            <div className={ b('items') }>
                {menuItems.map((item, index) => (
                    <div key={ index } className={ b('item', { active: item.active, new: item.hasNew }) }>
                        <item.icon className={ b('icon') }/>
                        {item.title}
                    </div>
                ))}
            </div>
            <div className={ b('buttons') }>
                <Button
                    text="Добавить заказ"
                    icon={ <PlusIcon className={ b('buttons-icon') }/> }
                    size="big"
                />
                <Button
                    text="Оплата"
                    icon={ <AlertIcon className={ b('buttons-icon') }/> }
                    size="big"
                />
            </div>
        </div>
    );
};

export default Menu;