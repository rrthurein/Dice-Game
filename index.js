var randomNumber1 = Math.floor(Math.random()*6 +1);
var randomNumber2 = Math.floor(Math.random()*6 +1);

var change = "image/face" + randomNumber1 + ".jpeg";
var change1 = "image/face" + randomNumber2 + ".jpeg";

document.querySelector(".dice .dice1").setAttribute("src", change);
document.querySelector(".dice .dice2").setAttribute("src", change1);

if (change1 === change){
  document.querySelector("h1").innerHTML = "You guys are tie!"
}
else if (change1 > change){
  document.querySelector("h1").innerHTML = "Player 2 is the winner!"
}
else{
  document.querySelector("h1").innerHTML = "Player 1 is the winner!"
}
