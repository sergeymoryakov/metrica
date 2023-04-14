const BURGER_OPENED_CLASSNAME = 'menu-burger-open';
const BURGER_BTN_OPENED_CLASSNAME = 'btn-menu-burger-open';
const BODY_FIXED_CLASSNAME_2 = 'body-fixed';

const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js-menu-burger');
const burgerBtnNode = document.querySelector('.js-btn-menu-burger');
const burgerContentNode = document.querySelector('.js-menu-burger-content')

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}