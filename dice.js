let player1Score = 0;
let player2Score = 0;
let round_num = 0;
let player1Turn = true;

const diceResult = document.querySelector(".dice-result")
const scoreboard1 = document.querySelector(".scoreboard1")
const scoreboard2 = document.querySelector(".scoreboard2")
const roundNum = document.querySelector(".round_num")
const rollBtn  = document.querySelector(".dice-roll")
const resetBtn = document.querySelector(".dice-reset")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const playerKey1 = document.querySelector(".player-key-one")
const playerKey2 = document.querySelector(".player-key-two")
const submitBtn = document.querySelector(".submit-btn")
const playerName1= document.querySelector(".player-name-one")
const playerName2= document.querySelector(".player-name-two")
const player1win= document.querySelector(".gold-medal-one")
const player2win= document.querySelector(".gold-medal-two")

//charactor
const characterPlayer1_first = document.querySelector(".character-player-one-first")
const characterPlayer2_first = document.querySelector(".character-player-two-first") 
const characterPlayer1_second = document.querySelector(".character-player-one-second")
const characterPlayer2_second = document.querySelector(".character-player-two-second")

const border1 = document.querySelector(".border1")
const border2 = document.querySelector(".border2")


//button choose character
characterPlayer1_first.addEventListener("click", function(){
    document.querySelector(".border1").innerHTML='<img class="img1" src="./img/robot-1.png" alt="player one">'
})

characterPlayer2_first.addEventListener("click", function(){  
    document.querySelector(".border2").innerHTML='<img class="img2" src="./img/robot-3.png" alt="player two">' 
})

characterPlayer1_second.addEventListener("click", function(){
    document.querySelector(".border1").innerHTML='<img class="img1 test" src="./img/robot-2.png" alt="player one">'
})

characterPlayer2_second.addEventListener("click", function(){
    document.querySelector(".border2").innerHTML='<img class="img2 test" src="./img/robot-4.png" alt="player two">'
})


//user name
submitBtn.addEventListener("click", function(){

    const playerKey1name = playerKey1.value
    const playerKey2name = playerKey2.value
    playerName1.textContent = playerKey1name
    playerName2.textContent = playerKey2name
})

//roll dice
rollBtn.addEventListener("click", function(){  

    const randomNum = Math.floor(Math.random() * 6) + 1
    diceResult.innerHTML=`<img src="./img/${randomNum}.png" width="30" height="30" class="dice-img">`
    
    playerKey1.value = ""
    playerKey2.value = ""

    if (player1Turn){
        player1Score += randomNum
        border1.classList.add("active1")
        border2.classList.remove("active2")
        scoreboard1.textContent = player1Score
        
    } else {
        player2Score += randomNum
        border2.classList.add("active2")
        border1.classList.remove("active1")
        scoreboard2.textContent = player2Score
    }

    if (player1Score >= 20) {
        diceResult.textContent = "Team Blue has won!"
        player1win.style.display = "block"
        resetBtn.style.display = "block"
        
    } else if (player2Score >= 20) {
        diceResult.textContent = "Team Pink has won!"
        player2win.style.display = "block"
        resetBtn.style.display = "block"
    }
    

    // ! is a logical operator that will convert a value to its opposite boolean
    player1Turn = !player1Turn
})

//reset
resetBtn.addEventListener("click", function(){
    resetBtn.style.display = "none"
    player1Score = 0;
    player2Score = 0;
    player1Turn = true
    diceResult.textContent = ""
    scoreboard1.textContent = 0;
    scoreboard2.textContent = 0;
    border1.classList.remove("active1")
    border2.classList.remove("active2")
    playerKey1.value = ""
    playerKey2.value = ""
    playerName1.textContent = "Player One"
    playerName2.textContent = "Player Two"
    player1win.style.display = "none"
    player2win.style.display = "none"
})
