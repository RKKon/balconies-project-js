const imageEnlargement = () => {
  const div = document.createElement('div');
  const worksImg = document.querySelectorAll('.worksImg');

  worksImg.forEach(picture => {
    picture.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.overflow = 'hidden'; // locked scroll on page
      if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent)) {
        div.classList.add('show_work_overlay')
        div.innerHTML = `<img class="phone_bigger_size_img" src="${picture.children[0].children[0].src}" alt='our work'></img>`
        document.querySelector('.works .row').append(div);
      } else {
        div.classList.add('show_work_overlay')
        div.innerHTML = `<img class="big_size_img" src="${picture.children[0].href}" alt='our work'></img>`
        document.querySelector('.works .row').append(div);
      }
    })
  })
  
  div.addEventListener('click', () => {
    div.classList.remove('show_work_overlay');
    div.innerHTML = '';
    document.body.style.overflow = '';
  })
}


export default imageEnlargement;