var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimgsrc="./images/dice" + randomnumber1 + ".png";
document.querySelectorAll(".img1")[0].setAttribute("src",randomimgsrc);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimgsrc="./images/dice" + randomnumber2 + ".png";
document.querySelectorAll(".img2")[0].setAttribute("src",randomimgsrc);

if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 WINS!!!";
}
else if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 WINS!!!🚩";
}
else{
    document.querySelector("h1").innerHTML="DRAW!!!👍";
}
