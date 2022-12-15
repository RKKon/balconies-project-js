"use strict"

export const closeModal = (modal, crossClass = '.popup_close', allowedClickOverlay = true) => {
  const crossCloseModal = document.querySelectorAll(crossClass);

  const hideDisplay = () => {
    modal.style.display = 'none' ;
    document.body.style.overflow = ''; // come back to scroll on page
    document.body.style.marginRight = `0px`;
  }

  if (allowedClickOverlay) {
    modal.addEventListener('click', (e) => { // close Modal by click overlay
      if (e.target.classList.contains('popup_overlay')) { hideDisplay() }
    })
  }

  document.addEventListener('keydown', (e) => { // close Modal by keydown Escape
    if (e.code === 'Escape') { hideDisplay(); }
  })

  crossCloseModal.forEach(cross => cross.addEventListener('click', hideDisplay))
};

export const calcScroll = () => {
  let div = document.createElement('div');

  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflow = "scroll";
  div.style.visibility = "hidden";

  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
};

const modals = () => {
  const modalCallBack = document.querySelector('.popup');
  const orderCallBack = document.querySelectorAll('.phone_link');

  const measurerCallBtn = document.querySelector('.popup_engineer_btn');
  const measurerCallModal = document.querySelector('.popup_engineer');
  const scroll = calcScroll();
  const showModalCallBack = (block = 'block') => modalCallBack.style.display = block;
  const showMeasurerCallModal = (block = 'block') => measurerCallModal.style.display = block;

  const showModal = (openCallBackModal, openCallMeasurerModal) => {
    openCallBackModal.forEach(modal => { 
      modal.addEventListener('click', (e) => {
        e.preventDefault() // because of tag <a>
        showModalCallBack();
        document.body.style.overflow = 'hidden'; // locked scroll on page
        document.body.style.marginRight = `${scroll}px`;   
      })
    })
    openCallMeasurerModal.addEventListener('click', () => { 
      showMeasurerCallModal();
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;  
    })
  }
  showModal(orderCallBack, measurerCallBtn);
  setTimeout(showMeasurerCallModal, 20000) //in 20 sec show Modal

  closeModal(measurerCallModal, '.popup_close');
  closeModal(modalCallBack, '.popup_close');

};

export default modals;