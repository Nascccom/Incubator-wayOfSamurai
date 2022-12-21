import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to={'/ProfilePage'} activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  to={'/DialogsPage'} activeClassName={s.active}>Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/NewsPage'} activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/MusicPage'} activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/SettingsPage'} activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  )
}