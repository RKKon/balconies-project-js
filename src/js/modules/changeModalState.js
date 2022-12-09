import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionToElements = (event, elem, prop) => {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
              elem.forEach((box, k) => {
                box.checked = false;
                if (i == k) {box.checked = true}
              })
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT': 
            state[prop] = item.value;
            break;
        }
        console.log(state);
      })
    });
  };
  bindActionToElements('click',windowForm, 'form');
  bindActionToElements('input', windowWidth, 'width');
  bindActionToElements('input', windowHeight, 'height');
  bindActionToElements('change', windowType, 'type');
  bindActionToElements('change', windowProfile, 'profile');
}

export default changeModalState;