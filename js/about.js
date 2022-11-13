/*-------------------Modals in About Me--------------*/


const aboutMe = document.getElementById('sideAboutMe');
const modalAboutMe = document.getElementById('modalAboutMe');
const closeModalAbout = document.getElementById('closeAboutMe');

aboutMe.addEventListener('click', () => {
    modalAboutMe.classList.add('show');
});

closeModalAbout.addEventListener('click', () => {
    modalAboutMe.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target == modalAboutMe) {
        modalAboutMe.classList.remove('show');
    }
});