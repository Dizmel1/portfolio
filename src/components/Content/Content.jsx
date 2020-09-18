import React from 'react';
import style from './Content.module.css';
import My_post from './My_post/My_post'

function Content() {
  return (
    <div className={style.content}>
      <div className ={style.avatar}>
          <img src='https://www.sunhome.ru/i/wallpapers/243/tropicheskii-plyazh.1920x1200.jpg'alt='pic'/>
      </div>
      <div className = {style.description} >
       <div className = {style.name}>
         <h3>Anton Kozhukhov</h3>
         </div> <br/>       
        <p>Schoolboy</p>
        <br/>
        <hr align = 'left'/>
        <div className = {style.status}><p>Zheleznovodsk, Russia</p>
        <p>Family status: Not married</p>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        

      </div>
      <My_post/>
    </div>
  );
}

export default Content;
