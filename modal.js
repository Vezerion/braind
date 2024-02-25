const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const modalOpen = document.querySelector('.content__grid-3__item-3');
const modalClose = document.querySelector('.modal__close');


modalOpen.addEventListener('click', (e) => {
    overlay.classList.add('active');
    body.classList.add('overflow-hidden');
});
body.addEventListener('click', (e) => {
    if(e.target === overlay || e.target === modalClose) {
        overlay.classList.remove('active');
        body.classList.remove('overflow-hidden');
    }
})