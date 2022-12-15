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

export const messageModal = (status) => {
  const forMessageDiv = document.querySelector('.header');
  const div = document.createElement('div');
  div.innerHTML = `<h2 class="modal_message">${status}</h2>`;
  forMessageDiv.append(div)
  setTimeout(() => {div.remove()}, 3500) 
};