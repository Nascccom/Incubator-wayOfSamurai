import React from 'react';
import h from './Header.module.css'


export const Header = () => {
    return (
      <header className={h.header}>
          <img className={`${h.header} ${h.img}`}
               alt={'Logo'}
               src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"/>
      </header>
    )
}