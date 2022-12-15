import './slider'; // Slider left by order. It works a bit in mobile version.

import modals from './modules/modals'
import imageEnlargement from './modules/imageEnlargement';
import tabs from './modules/tabs';
import balconyCalcModalTabs from './modules/balconyCalcModalTabs';
import timer from './modules/timer';
import form from './modules/form';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let modalState = {};
  // main work happening with state in changeModalState(). But for user experience 
  // I had to put some setting changing in state, like if user choose Aluminum balcony(not in form),
  // in select and in data to server save that parameter.

  changeModalState(modalState);
  modals();
  imageEnlargement();
  tabs(modalState);
  balconyCalcModalTabs(modalState);
  form(modalState);
  timer('2022-12-31'); // you can set a date which you needed

});


