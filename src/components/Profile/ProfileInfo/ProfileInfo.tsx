import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
      <div>
          <div>
              <img className={s.img}
                   alt={'Avatar'}
                   src="https://thumbs.dreamstime.com/b/footbridge-sea-beach-meditation-journey-calm-hormone-sunset-sea-yoga-footbridge-sea-beach-meditation-journey-calm-hormone-128381503.jpg"/>
          </div>
          <div className={s.descriptionBlock}>
              ava + description
          </div>
      </div>
    )
}