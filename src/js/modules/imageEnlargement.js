const imageEnlargement = () => {
  const div = document.createElement('div');
  const worksImages = document.querySelectorAll('.worksImg');
  let currentIndex = 0;

  worksImages.forEach((picture, index) => {
    picture.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.overflow = 'hidden'; // locked scroll on page
      currentIndex = index;
      const mobile = /Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;
      if (mobile.test(navigator.userAgent)) {
        div.classList.add('show_work_overlay')
        div.innerHTML = `<img class="phone_bigger_size_img" src="${picture.children[0].children[0].src}" alt='our work'></img>`
        document.querySelector('.works .row').append(div);
      } else {
        div.classList.add('show_work_overlay')
        createCurrentImg();
        document.querySelector('.works .row').append(div);
      }
    })
  })

  div.addEventListener('click', (e) => {
    if (e.target.classList.contains('slider_arrow_left')) {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : worksImages.length - 1;
      createCurrentImg()
    } else if (e.target.classList.contains('slider_arrow_right')) {
      currentIndex = (currentIndex < worksImages.length - 1) ? currentIndex + 1 : 0;
      createCurrentImg()
    } else {
      div.classList.remove('show_work_overlay');
      div.innerHTML = '';
      document.body.style.overflow = '';
    }
  })

  function createCurrentImg() {
    let currentSlide = worksImages[currentIndex]
    return div.innerHTML = `
      <img class="slider_arrow_left" src="assets/img/glazing/left_arrow.png" alt="left arrow"></img>
      <img class="big_size_img" src="${currentSlide.children[0].href}" alt='our work'></img>
      <img class="slider_arrow_right" src="assets/img/glazing/right_arrow.png" alt="right arrow"></img>`
  }


  let startX = 0;
  let endX = 0;

  div.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  div.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  div.addEventListener('touchend', () => {
    if (startX > endX + 50) {
      currentIndex = (currentIndex < worksImages.length - 1) ? currentIndex + 1 : 0;
    } else if (startX < endX - 50) {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : worksImages.length - 1;
    }
    let currentSlide = worksImages[currentIndex];
    div.innerHTML = `<img class="phone_bigger_size_img" src="${currentSlide.children[0].children[0].src}" alt='our work'></img>`
  });

}


export default imageEnlargement;