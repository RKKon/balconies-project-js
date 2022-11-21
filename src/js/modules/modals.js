"use strict"
const modals = () => {
  /* Modal  */
  const modalCallBack = document.querySelector('.popup');
  const orderCallBack = document.querySelectorAll('.phone_link');
  const crossCloseModal = document.querySelectorAll('.popup_close');

  const measurerCallBtn = document.querySelector('.popup_engineer_btn');
  const measurerCallModal = document.querySelector('.popup_engineer');

  function showModal(openCallBackModal, openCallMeasurerModal) {
    openCallBackModal.forEach(modal => { 
      modal.addEventListener('click', (e) => {
        e.preventDefault() // because of tag <a>
        modalCallBack.style.display = 'block';
      })
    })
    openCallMeasurerModal.addEventListener('click', () => { 
      measurerCallModal.style.display = 'block';
    })
  }
  showModal(orderCallBack, measurerCallBtn);
  setTimeout(() => measurerCallModal.style.display = 'block', 1160000) //in 60 sec show Modal

  function closeModal(modal) {
    modal.addEventListener('click', (e) => { // close Modal by click overlay
      if (e.target.classList.contains('popup_overlay')) { 
        modal.style.display = 'none' ;
      }
    })

    crossCloseModal.forEach(cross => {  // close Modal by click cross
      cross.addEventListener('click', () => {
        modal.style.display = 'none';
      })
    })
  } 
  closeModal(measurerCallModal);
  closeModal(modalCallBack);

  
  /* From send*/
  const forMessageDiv = document.querySelector('.header')
  const form = document.querySelectorAll('.form');
  
  form.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      console.log('sent');
      const div = document.createElement('div');
      div.innerHTML = `<h2 class="modal_message"> 
        <span class="modal_message_tac">Thank you!</span> Soon we will contact you!</h2>`;
      measurerCallModal.style.display = 'none'; // close measurerCallModal
      modalCallBack.style.display = 'none'; // close modalCallBack  
      forMessageDiv.append(div)
      setTimeout(() => {div.remove()}, 3000)  
      // if (false) {
      //   div.innerHTML = `<h2 class="modal_message"> Loading... </h2>`;
      // } else if (true) {
      //   div.innerHTML = `<h2 class="modal_message"> 
      //   <span class="modal_message_tac">Thank you!</span> Soon we will contact you!</h2>`;
      // } else {
      //   div.innerHTML = `<h2 class="modal_message"> Error! Please try again.</h2>`;
      // }   
    })
  })

};

export default modals;