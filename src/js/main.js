import jquerySlider from './slider'

import modals from './modules/modals'
import imageEnlargement from './modules/imageEnlargement';
import tabs from './modules/tabs';
import calcInTabs from './modules/calcInTabs';
import timer from './modules/timer';
import form from './modules/form';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let modalState = {};

  changeModalState(modalState);
  modals();
  imageEnlargement();
  tabs();
  calcInTabs();
  form(modalState);
  timer('2022-12-31');
  
});
// clear object(modalState) after sent to server. And make more fill this object.
// calcInTabs when fill form allowed to close only by click cross
// 3) tabs apply animation by change display block on opacity or visibility etc.
// (the same as 3)) more smooth animation in img show and modals
// close modal by Esc. 

// mobile - while touch movement on slider didn't move content inside, bad big image if touch

// #10 is ready but need to set Timer


