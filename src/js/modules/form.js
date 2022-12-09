// import { sendToServer } from "../server/server";
import { messageStatus } from "../server/server";
import { messageModal } from "../server/server";
import { postData } from "../server/server";
import { showErrorInputMessage } from "./calcInTabs";
import checkNumInputs from "./checkNumInputs";

const form = (state) => {
  const forms = document.querySelectorAll('.form');

  const closeModalCallBack = () => document.querySelector('.popup').style.display = 'none';
  const closeMeasurerCallModal = () => document.querySelector('.popup_engineer').style.display = 'none';
  const closeBalconyEndForm = () => document.querySelector('.popup_calc_end').style.display = 'none';

  const sendForm = () => {
    checkNumInputs('input[name="user_phone"]');
    forms.forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const inputName = form.children[1];
        const inputPhone = form.children[2];
        const validationPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

        if (validationPhone.test(inputPhone.value)) {
          inputPhone.classList.remove('input_error');

          messageModal(messageStatus.loading);

          const sendToServer = (form, resource = 'clients') => {
            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === "end") {
              for (let key in state) {
                formData.append(key, state[key]);
              }      
            }
            const json = JSON.stringify(Object.fromEntries(formData)); // transform in JSON
          
            postData(`http://localhost:3000/${resource}`, json)
              .then(data => {
                console.log(data)
                messageModal(messageStatus.success)
              }) //.then(data => data)
              .catch(() => messageModal(messageStatus.error))
              //.finally(() => form.reset())
          };
          sendToServer(form, 'clients')

          closeModalCallBack();
          closeMeasurerCallModal(); 
          closeBalconyEndForm();
          document.body.style.overflow = ''; // come back to scroll on page

          document.querySelector('#width').value = ''; // clear balcony form after sent!
          document.querySelector('#height').value = ''; // clear balcony form after sent!
          inputName.value = ''; 
          inputPhone.value = '';
           
        } else { 
          inputPhone.classList.add('input_error');
          showErrorInputMessage(inputPhone, 'Please, enter correct phone number.');
        }
         
      })
    })
  };
  sendForm();
};

export default form;