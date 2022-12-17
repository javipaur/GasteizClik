import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {solid,regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './lateralMenu.scss';
import { useTranslation } from 'react-i18next';
import { Item } from './Item';

export const LateralMenu = () => {

  const { t } = useTranslation();

  return (

    <nav className='lateralMenu'>
     <ul>
      <Item icon={<FontAwesomeIcon icon={solid('house')} />} text={t('Home')} path={"/home"}/> 
      <Item icon={<FontAwesomeIcon icon={regular('calendar-plus')} />} text={t('Eventos')} path={"/events"} />
      <Item icon={<FontAwesomeIcon icon={solid('table-list')} />} text={t('Programa')} path={"/program"}/>
      <Item icon={<FontAwesomeIcon icon={solid('users-rectangle')} />} text={t('Usuarios')} path={"/users"}/>
      <Item icon={<FontAwesomeIcon icon={solid('gears')} />} text={t('Configuración')} path={"/config"}/>
      
     </ul>
     

</nav>
  )
}
