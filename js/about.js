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

/* ------------------- Modal nav menu ----------------*/

// const checkbox = document.getElementById('menu-toggle');
// const navModal = document.getElementById('top-nav-modal');

// checkbox.addEventListener('click', () => {
//   if (checkbox.checked == true) {
//   navModal.classList.add('show2')
// }
// else 
// navModal.classList.remove('show2')
// })

// window.addEventListener('click', (event) => {
//   if (event.target == navModal) {
//     navModal.classList.remove('show2');
//     checkbox.checked = false;
//   }
// })