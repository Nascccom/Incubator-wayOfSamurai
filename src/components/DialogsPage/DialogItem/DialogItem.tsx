import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css'

type DialogItemTypeProps = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemTypeProps> = (props) => {
    const path = `/dialogs/${props.id}`


    return (
      <div className={`${s.dialog} ${s.active}`}>
          <NavLink to={path}> {props.name} </NavLink>
      </div>
    )
}