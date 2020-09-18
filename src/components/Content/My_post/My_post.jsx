import Post from './Post/Post';
import React from 'react';
import style from './My_post.module.css';

function My_post() {
  return (
<div className={style.myPost}>
      <Post message1 = 'Мой первый пост'/>
      <Post message1 = 'Мой второй пост'/>
      <Post message1 = 'Ещё один пост'/>
      </div>
      );
    }
    
    export default My_post;