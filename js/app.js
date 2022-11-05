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

/* const playerItem = player[0];
const computerItem = computer[Math.floor(Math.random()* computer.length)]; */

/* console.log('Player choosed: ' + player[0]); */
/* console.log('Computer choosed: ' + computerItem); */


/* const computerOutput = document.querySelector('.computersChoice');
const winner = document.querySelector('.winner'); */



//Player win scenario


/* if (player === 'Rock') {
    if (computerItem === 'Scissor') {
        console.log("Player won!")
        winner.textContent = "Player wins!";
    }
} */
/* if (playerItem === 'Paper') {
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
} */