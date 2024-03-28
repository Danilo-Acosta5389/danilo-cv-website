document.getElementById("github").onclick = function () {
        window.open("https://github.com/Danilo-Acosta5389", "_blank");
    };

document.getElementById("linkedin").onclick = function () {
        window.open("https://www.linkedin.com/in/danilo-acosta-dote-208a3224b/", "_blank");
    };


    /* ------------------- Modal nav menu ----------------*/

const checkbox = document.getElementById('menu-toggle');
const navModal = document.getElementById('top-nav-modal');

checkbox.addEventListener('click', () => {
  if (checkbox.checked == true) {
  navModal.classList.add('show2')
}
else 
navModal.classList.remove('show2')
})

window.addEventListener('click', (event) => {
  if (event.target == navModal) {
    navModal.classList.remove('show2');
    checkbox.checked = false;
  }
})