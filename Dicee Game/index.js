
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
  document.getElementsByTagName("h1")[0].innerText = "🚩Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
  document.getElementsByTagName("h1")[0].innerText = "Player 2 Wins🚩";
}else{
  document.getElementsByTagName("h1")[0].innerText = "Draw";
}
