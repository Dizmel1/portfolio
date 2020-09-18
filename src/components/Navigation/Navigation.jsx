import React from 'react';
import style from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={style.navigation}>
      <div className = {style.item}>
          <a>Профиль</a>
      </div>
      <div>
          <a>Сообщение</a>
      </div>
      <div>
          <a>Новости</a>
      </div>
      <div>
          <a>Музыка</a>
      </div>
      <div>
          <a>Настройки</a>
      </div>
    </nav>
  );
}

export default Navigation;
