const imageEnlargement = () => {
  const forMessageDiv = document.querySelector('.works .row')
  const div = document.createElement('div');
  const worksImg = document.querySelectorAll('.worksImg');
  worksImg.forEach(picture => {
    picture.addEventListener('click', (e) => {
      e.preventDefault();
      div.classList.add('show_work_overlay')
      div.innerHTML = `<img class="big_size_img" src="${picture.children[0].href}" alt='our work'></img>`
      forMessageDiv.append(div)
    })
    div.addEventListener('click', () => {
      div.classList.remove('show_work_overlay');
      div.innerHTML = ''
    })
  })
}

export default imageEnlargement;