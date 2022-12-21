import React from 'react';
import s from './DialogsPage.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../Redux/state';


type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
}
export const DialogsPage = (props: DialogsPagePropsType) => {
    const dialogsMappedList = props.dialogsPage.dialogs.map(d => {
        return (
          <div className={s.avatarAndFriendName}>
              <img className={s.avatar} src={d.userAvatar} alt={'Avatar'}/>
              <DialogItem name={d.name} id={d.id}/>
          </div>
        )
    });

    const messagesMappedList = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    return (
      <div className={s.dialogs}>
          <div className={s.dialogsItem}>
              {dialogsMappedList}
          </div>
          <div className={s.messages}>
              {messagesMappedList}
          </div>
      </div>
    )
}