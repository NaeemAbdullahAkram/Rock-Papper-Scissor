let playerText = document.getElementById('playerText');
let computerText = document.getElementById('computerText');
// let resultText = document.getElementById('resultText');

let gameButtons = document.querySelectorAll('.gameButton');

let player;
let computer;
let playerImg = document.getElementById('playerImg')
let computerImg = document.getElementById('computerImg');
let labelResult = document.querySelector('#labelResult');


let displayPlayerScore = document.getElementById('displayPlayerScore');
let displayComputerScore = document.getElementById('displayComputerScore');
let playerScore = 0, computerScore = 0;


function buttonContent(button){
    if(button.textContent == "👊"){
        return "ROCK";
    }
    else if(button.textContent == "🖐"){
        return "PAPER";
    }
    else{
        return "SCISSORS"
    }
}

gameButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        player = buttonContent(button);
        playerText.textContent = `Player : ${player}`
        computerPlays();
        labelResult.textContent = `${checkWinner()}`;
        updateScore();
        
    })
    // 
    function computerPlays(){
        let randNum = Math.floor(Math.random() * 3) + 1;
        computer = buttonContent(gameButtons[randNum - 1])
        computerText.textContent = `Computer : ${computer}`

    }
    
    function checkWinner(){
        if(computer == player){
            labelResult.style.color = '#2F4F4F'
            return "DRAW !😐";
            
        }

        switch(computer){
            case 'ROCK':
                displayImgs();
                if(player == 'PAPER'){
                    labelResult.style.color = 'green';
                    return "YOU WIN !😃"
                }
                else{
                    labelResult.style.color = 'red';
                    return "❌ YOU LOSE !😥"
                }
                 
                
            case 'PAPER':
                displayImgs();
                if(player == 'SCISSORS'){
                    labelResult.style.color = 'green';
                    
                    return "YOU WIN !😃"
                }
                else{
                    labelResult.style.color = 'red';
                    return "❌ YOU LOSE !😥"
                }

            case 'SCISSORS':
                displayImgs();
                if(player == 'ROCK'){
                    labelResult.style.color = 'green'
                    return "YOU WIN !😃"
                }
                else{
                    labelResult.style.color = 'red';
                    return "❌ YOU LOSE !😥"
                }
            
        }
        
        
    }

    function updateScore(){
        if(checkWinner() == 'YOU WIN !😃'){
            playerScore ++;
            displayPlayerScore.textContent = `${playerScore}`
        }
        else if(checkWinner() == '❌ YOU LOSE !😥'){
            computerScore ++;
            displayComputerScore.textContent = `${computerScore}`
        }
    }

    function displayImgs(){
        //Display for the player 
        if(player == 'PAPER'){
            playerImg.src = 'paper.jpg';
            playerImg.style.display = 'inline-block';
        }
        else if(player == 'ROCK'){
            playerImg.src = 'rock.jpg';
            playerImg.style.display = 'inline-block';
        }
        else{
            playerImg.src = 'scissors.jpg'
            playerImg.style.display = 'inline-block';
        }
        
        //Display for the computer

        if(computer == 'PAPER'){
            computerImg.src = 'paper.jpg';
            computerImg.style.display = 'inline-block';
        }
        else if(computer == 'ROCK'){
            computerImg.src = 'rock.jpg'
            computerImg.style.display = 'inline-block';
        }
        else{
            computerImg.src = 'scissors.jpg'
            computerImg.style.display = 'inline-block';
        }
    }
    
    
})