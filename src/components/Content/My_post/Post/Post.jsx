import React from 'react';
import style from './Post.module.css';

function Post(props) {
  return (
<div className={style.content}>
      
        <div className = {style.newPost}>
        
            <img src='https://www.sunhome.ru/i/wallpapers/243/tropicheskii-plyazh.1920x1200.jpg'alt='pic'/>
           
            <br/> {props.message1}
        <br/>
        </div>
      </div>
      );
    }
    
    export default Post;

