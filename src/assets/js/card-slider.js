const productContainers = [...document.querySelectorAll('.cards-box__card-container')];
const nxtBtn = [...document.querySelectorAll('.btns__nxt-btn')];
const preBtn = [...document.querySelectorAll('.btns__pre-btn')];

productContainers.forEach((item, i) => {
  nxtBtn[i].addEventListener('click', () => {
    if (window.screen.width >= 1184) {
      item.scrollLeft += 1056;

    } else if (window.screen.width >= 768) {
      item.scrollLeft += 704;
    } else {
      item.scrollLeft += 352;
    }
  });
  preBtn[i].addEventListener('click', () => {
    if (window.screen.width >= 1184) {
      item.scrollLeft -= 1056;

    } else if (window.screen.width >= 768) {
      item.scrollLeft -= 704;
    } else {
      item.scrollLeft -= 352;
    }
    });
})