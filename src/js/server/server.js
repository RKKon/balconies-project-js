export const postData = async (url, data) => {
  const result = await fetch(url, {
    method: "POST",
    body: data,
    headers: { "Content-type": "application/json" },
  });
  return await result.json();
};

// export const updateDB = async (url = "../../../db.json") => {
//   let newData;
//   await fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.clients.push({ name: "Mike", age: 30, city: "New York" });
//       newData = JSON.stringify(data);
//     });
//   await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json; charset=utf-8",
//     },
//     body: newData,
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// };
// updateDB();

export const messageStatus = {
  loading: "Loading...",
  success: `<span class="modal_message_tac">Thank you!</span> Soon we will contact you!`,
  error: "Server error! You probably did not turn on json server.",
};

export const messageModal = (status) => {
  const forMessageDiv = document.querySelector(".header");
  const div = document.createElement("div");
  div.innerHTML = `<h2 class="modal_message">${status}</h2>`;
  forMessageDiv.append(div);
  setTimeout(() => {
    div.remove();
  }, 3500);
};
