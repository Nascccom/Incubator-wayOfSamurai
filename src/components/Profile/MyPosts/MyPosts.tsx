import s from './MyPosts.module.css';
import React from 'react';
import {Post} from './Post/Post';
import {PostType} from '../../Redux/state';


type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts = (props: MyPostsPropsType) => {
    const postsMapped = props.posts.map(p => <Post message={p.post}
                                                   likesCount={p.likesCount}/>)

    return (
      <div className={s.postsBlock}>
          <div>
              <h3>My post</h3>
              <div>
                  <div>
                      <textarea></textarea>
                  </div>
                  <div>
                      <button>Add new post</button>
                  </div>
              </div>
          </div>
          <div className={s.posts}>
              {postsMapped}
          </div>

      </div>
    )
}


