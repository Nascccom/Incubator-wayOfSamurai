import p from './Post.module.css';
import React from 'react';

type PostType = {
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
      <div className={p.item}>
          <img className={p.img}
               alt={'Avatar for message'}
               src="https://i.pinimg.com/736x/15/50/c4/1550c40c0bb74dc6a507a5a10a2d21fc.jpg"
          />
          {props.message}
          <div>
              <span>like - {props.likesCount}</span>
          </div>
      </div>
    )
}