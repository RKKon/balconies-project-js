
export const postData = async (url, data) => {
  const result = await fetch(url, {
        method: "POST",
        body: data,
        headers: {'Content-type': 'application/json'}
  });
  return await result.json();
}
export const messageStatus = {
  loading: "Loading...",
  success: `<span class="modal_message_tac">Thank you!</span> Soon we will contact you!`,
  error: "Error! Please try again."
}
// showThanksModal(message.success); // message 
// statusMessage.remove();

export const messageModal = (status) => {
  const forMessageDiv = document.querySelector('.header');
  const div = document.createElement('div');
  div.innerHTML = `<h2 class="modal_message">${status}</h2>`;
  forMessageDiv.append(div)
  setTimeout(() => {div.remove()}, 3500) 
}

export const sendToServer = (form, resource = 'clients') => {
  const formData = new FormData(form);
  const json = JSON.stringify(Object.fromEntries(formData));
  // if (form.getAttribute('data-calc') === "end") {
  //   for (let key in state) {
  //     formData.append(key, state[key]);
  //   }
  // }

  postData(`http://localhost:3000/${resource}`, json)
    .then(data => {
      console.log(data)
      messageModal(messageStatus.success)
    }) //.then(data => data)
    .catch(() => messageModal(messageStatus.error))
    //.finally(() => form.reset())
};