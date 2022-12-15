import { closeModal } from "./modals"; 
import { calcScroll } from "./modals";

export const showErrorInputMessage = (placePutMessage, errorMessage = 'Error, enter correct data') => {
  const divErrorMessage = document.createElement('div');
  divErrorMessage.innerHTML = errorMessage;
  divErrorMessage.classList.add('modal_error_message'); 
  placePutMessage.after(divErrorMessage); 
  setTimeout(() => divErrorMessage.remove(), 4000);
};

const balconyCalcModalTabs = (state) => {
  const balconyPopupCalc = document.querySelector('.popup_calc');
  const balconyType = document.querySelectorAll('.balcon_icons_img');
  const balconyPopupCalcBtn = document.querySelector('.popup_calc_button');
  const balconyPopupCalcProfile = document.querySelector('.popup_calc_profile');
  const balconyCalcCheckbox = document.querySelectorAll('input.checkbox');
  const popupCalcProfileBtn = document.querySelector('.popup_calc_profile_button');
  const balconyPopupCalcEnd = document.querySelector('.popup_calc_end');

  const scroll = calcScroll(); //smoothly Remove Scroll

  closeModal(balconyPopupCalc, '.popup_calc_close');
  closeModal(balconyPopupCalcProfile, '.popup_calc_profile_close', false);
  closeModal(balconyPopupCalcEnd, '.popup_calc_end_close', false);

  const balconyRemoveActiveClass = () => {
    return balconyType.forEach(balcony => balcony.classList.remove('do_image_more'));
  }

  const setBalconyModalImg = () => {
    balconyType.forEach((balcony, i) => {
      const balconyModalBigImg = document.querySelectorAll('.big_img img');
      balconyModalBigImg[0].classList.add('big_img_active'); //show first type of big img
      balcony.addEventListener('click', () => {
        balconyRemoveActiveClass();
        balcony.classList.add('do_image_more'); // add active class      
        // add big picture
        balconyModalBigImg.forEach(bigImg => bigImg.classList.remove('big_img_active')); //remove class
        balconyModalBigImg[i].classList.add('big_img_active'); //add class active 
      })
    })
  };
  setBalconyModalImg();
  
  const showPopupCalcProfile = () => balconyPopupCalcProfile.style.display = 'block';
  const closeBalconyPopupCalc = () => balconyPopupCalc.style.display = 'none';

  const validationBalconySize = () => {
    balconyPopupCalcBtn.addEventListener('click', () => {
      const balconyWidthSize = document.querySelector('#width'); 
      const balconyHeightSize = document.querySelector('#height');
      const inputWidth = +balconyWidthSize.value;
      const inputHeight = +balconyHeightSize.value;
      
      if (inputWidth && inputHeight &&
          typeof(inputWidth) !== 'string' && typeof(inputHeight) !== 'string') {
        closeBalconyPopupCalc();
        showPopupCalcProfile();
      } else {
        balconyWidthSize.classList.add('input_error');
        balconyHeightSize.classList.add('input_error');
        showErrorInputMessage(balconyHeightSize.nextElementSibling, 'Please, enter size.');
      }
      if (inputWidth && typeof(inputWidth) !== 'string') {
        balconyWidthSize.classList.remove('input_error');
      } 
      if (inputHeight && typeof(inputHeight) !== 'string') {
        balconyHeightSize.classList.remove('input_error');
      }      
    })
  };
  validationBalconySize();
  

  const closeBalconyPopupProfile = () => balconyPopupCalcProfile.style.display = 'none';
  const showBalconyPopupCalcEnd = () => balconyPopupCalcEnd.style.display = 'block';
 
  const choosingColdOrWarmBalcony = () => {
    popupCalcProfileBtn.addEventListener('click', () => {      
      if (balconyCalcCheckbox[0].checked && !balconyCalcCheckbox[1].checked) { // Cold
        closeBalconyPopupProfile();
        showBalconyPopupCalcEnd();
      } else if (balconyCalcCheckbox[1].checked && !balconyCalcCheckbox[0].checked)  {
        closeBalconyPopupProfile();
        showBalconyPopupCalcEnd();       
      } else {
        showErrorInputMessage(document.querySelector('.last-label'), 'Please, choose cold or warm.')    
      }
    })
  };
  choosingColdOrWarmBalcony();
  
  const setBalconyCalcCheckbox = (i = 0) => {
    balconyCalcCheckbox[1].checked = false;
    balconyCalcCheckbox[0].checked = false;
    balconyCalcCheckbox[i].checked = true;
    i === 0 ? state["profile"] = 'Cold' : state["profile"] = 'Warm'; // set up default profile(cold or warm)
  }

  const glazingPriceBtnCold = document.querySelectorAll('.glazing_cold_btn');
  const glazingPriceBtnWarm = document.querySelectorAll('.glazing_warm_btn');
  const openModalBalconyCalc = (openModalBtn, i = 0) => {
    openModalBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        balconyPopupCalc.style.display = 'block';
        document.body.style.marginRight = `${scroll}px`;
        setBalconyCalcCheckbox(i);
        if (!state["form"]) {state["form"] = 1;} // set up default balcony form
        if (!state["type"]) {state["type"] = 'tree';} // by default pick tree      
        document.body.style.overflow = 'hidden'; // block scroll
      })
    })
  };
  openModalBalconyCalc(glazingPriceBtnCold, 0);
  openModalBalconyCalc(glazingPriceBtnWarm, 1);
      
};

export default balconyCalcModalTabs;
