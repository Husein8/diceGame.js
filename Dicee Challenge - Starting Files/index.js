var h1 = document.querySelector("h1");
var player1 = prompt("First player");
var player2 = prompt("Second player");

var player1Name = document.querySelector(".player1").textContent = player1;
var player2Name = document.querySelector(".player2").textContent = player2;

let i = 0;
function forPlaying(){
// for random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// to get a random picture
var randomDiceImage = "images/dice" + randomNumber1 + ".png";

// taking img1
var firstImage = document.querySelector(".img1");

// changing the picture
firstImage.setAttribute("src", randomDiceImage);

// for random number
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// to get a random picture
var randomDiceImage = "images/dice" + randomNumber2 + ".png";

// taking img2
var secondImage = document.querySelector(".img2");

// changing the picture
secondImage.setAttribute("src", randomDiceImage);
  
    if(randomNumber1 > randomNumber2){
        h1.textContent = `You are a winner ${player1}`
    }else if(randomNumber2 > randomNumber1){
        h1.textContent = `You are a winner ${player2}`   
    }else{
        h1.textContent = `It's a draw, try again`           
    }
    
}

