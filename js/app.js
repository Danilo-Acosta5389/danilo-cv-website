

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
        const winner = document.querySelector('.rps-winner');


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


    });

})


/* -------------------------Number guessing game------------------------*/
//                            !!!COMING SOON!!!
/* 
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber  + ' - Woopsi. You got caught cheating!');

const inputField = document.querySelector('.guessField');
const button = document.querySelector('.button');
const resetBtn = document.querySelector('.restartBtn');

const result = document.getElementById('result');
const yourGuess = document.querySelector('.yourGuess');
const guesses = document.querySelector('.guesses');


const show = document.querySelector('.mainThing');
const winner = document.querySelector('.winner');
const loser = document.querySelector('.loser');


const list = document.querySelector('.listAttempts');

let maxGuesses = 0;

inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }
})

clearInput = () => {
    var getValue = document.getElementById("input");
      if (getValue.value !="") {
          getValue.value = "";
      }

      return getValue;
}


userGuess = () => {
    
    const userNumber = Number(inputField.value);
    console.log(userNumber);
    const newLi = document.createElement('li');
    

    clearInput();



    if (userNumber == randomNumber) {

        yourGuess.textContent = userNumber;
        guesses.textContent = 'Correct. You won!';
        result.textContent = userNumber;

        show.classList.add('show');
        winner.classList.add('win');
        console.log('You won!');

        maxGuesses++;

        newLi.innerText = userNumber;
        list.appendChild(newLi)

    } 

    

    if (userNumber < randomNumber && userNumber > 0) {
        console.log('Too low')
        yourGuess.textContent = userNumber;
        guesses.textContent = 'Too low'
        maxGuesses++;

        newLi.innerText = userNumber;
        list.appendChild(newLi);

    } else if (userNumber < 1) {
        console.log('nope');
        guesses.textContent = 'Please input number between 1 and 100.';
    }

    if (userNumber > randomNumber && userNumber < 101) {
        console.log('Too high');
        yourGuess.textContent = userNumber;
        guesses.textContent = 'Too high';
        maxGuesses++;

        newLi.innerText = userNumber;
        list.appendChild(newLi);

    } else if (userNumber > 100) {
        console.log('too much');
        guesses.textContent = 'Please input number between 1 and 100.';
    }

    console.log(maxGuesses);

    if (maxGuesses == 5) {

        show.classList.add('show');
        loser.classList.add('lose');

        console.log('Game over!');
    }
}

restartGame = () => {
    window.location.reload(false);
} */



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