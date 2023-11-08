import { messageStatus } from "../server/server";
import { messageModal } from "../server/server";
import { postData } from "../server/server";
import { showErrorInputMessage } from "./balconyCalcModalTabs";
import checkNumInputs from "./checkNumInputs";

const form = (state) => {
  const forms = document.querySelectorAll(".form");

  const closeModalCallBack = () => (document.querySelector(".popup").style.display = "none");
  const closeMeasurerCallModal = () =>
    (document.querySelector(".popup_engineer").style.display = "none");
  const closeBalconyEndForm = () =>
    (document.querySelector(".popup_calc_end").style.display = "none");

  const sendToServer = (form, resource = "clients") => {
    const formData = new FormData(form);
    if (form.getAttribute("data-calc") === "end") {
      for (let key in state) {
        formData.append(key, state[key]);
      }
    }
    const json = JSON.stringify(Object.fromEntries(formData)); // transform in JSON

    // on GitHub no json server. this why using it.
    const randomID = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
    const showResult = JSON.parse(json);
    showResult.id = randomID;
    console.log(showResult);
    messageModal(messageStatus.success);

    // postData(`http://localhost:3000/${resource}`, json)
    //   .then((data) => {
    //     console.log(data);
    //     messageModal(messageStatus.success);
    //   })
    //   .catch(() => messageModal(messageStatus.error));
  };

  const sendForm = () => {
    checkNumInputs('input[name="user_phone"]');
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputName = form.children[1];
        const inputPhone = form.children[2];
        const validationPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

        if (validationPhone.test(inputPhone.value)) {
          inputPhone.classList.remove("input_error");

          messageModal(messageStatus.loading);

          sendToServer(form, "clients");

          closeModalCallBack();
          closeMeasurerCallModal();
          closeBalconyEndForm();
          document.body.style.overflow = ""; // back scroll on page

          document.querySelector("#width").value = ""; // clear balcony form after sent!
          document.querySelector("#height").value = "";
          inputName.value = "";
          inputPhone.value = "";
        } else {
          inputPhone.classList.add("input_error");
          showErrorInputMessage(inputPhone, "Please, enter correct phone number.");
        }
      });
    });
  };
  sendForm();
};

export default form;
