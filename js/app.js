
/*------------- Rock, paper, scissor game ------------------ */


const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');

const player = [rockBtn, paperBtn, scissorBtn];
const computer = ['Rock', 'Paper', 'Scissor'];

player.forEach(playerChoice => {
    //console.log(playerChoice);
    playerChoice.addEventListener('click',function(event){

        //document.querySelector('.rock').innerHTML = "Rock";

        const computerItem = computer[Math.floor(Math.random()* computer.length)];
        const playerItem = event.target.innerHTML;

        console.log(event.target.innerHTML);
        const computerOutput = document.querySelector('.computersChoice');
        const winner = document.querySelector('.winner');


        if (playerItem === 'Rock') {
            if (computerItem === 'Scissor') {
                console.log("Player won!")
                winner.textContent = "Player wins!";
            }
        }

        if (playerItem === 'Paper') {
            if (computerItem === 'Rock') {
                console.log("Player won!")
                winner.textContent = "Player wins!";
            }
        }
        if (playerItem === 'Scissor') {
            if (computerItem === 'Paper') {
                console.log("Player won!")
                winner.textContent = "Player wins!";
            }
        }
        
        
        // Computer wins scenario
        
        
        if (computerItem === 'Rock') {
            if (playerItem === 'Scissor') {
                console.log("Computer won!")
                winner.textContent = "Computer wins!";
            }
        }
        if (computerItem === 'Paper') {
            if (playerItem === 'Rock') {
                console.log("Computer won!")
                winner.textContent = "Computer wins!";
            }
        }
        if (computerItem === 'Scissor') {
            if (playerItem === 'Paper') {
                console.log("Computer won!")
                winner.textContent = "Computer wins!";
            }
        }
        
        computerOutput.textContent = computerItem;
        
        
        
        // It's a tie!
        
        if (playerItem === computerItem) {
            winner.textContent = "It's a tie!";
            console.log("It's a tie!");
        }


    })

})



/* ---------------------Modals in portfolio-------------------------- */


/* --------Project 1 image larger size------ */

const modalImgProject1 = document.getElementById('imgProject1');
const modalProject1 = document.getElementById('modalProject1');
const closeModalProject1 = document.getElementById('closeModalProject1');


modalImgProject1.addEventListener('click', () => {
    modalProject1.classList.add('show');
});

closeModalProject1.addEventListener('click', () => {
    modalProject1.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target == modalProject1) {
        modalProject1.classList.remove('show');
    };
});


/* --------Project 3 image larger size------ */

const modalImgProject3 = document.getElementById('imgProject3');
const modalProject3 = document.getElementById('modalProject3');
const closeModalProject3 = document.getElementById('closeModalProject3');

modalImgProject3.addEventListener('click', () => {
    modalProject3.classList.add('show');
});

closeModalProject3.addEventListener('click', () => {
    modalProject3.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target == modalProject3) {
        modalProject3.classList.remove('show');
    }
});