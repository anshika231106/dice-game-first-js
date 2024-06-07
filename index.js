var p1=Math.floor(Math.random()*6)+1;
var p2=Math.floor(Math.random()*6)+1;


if(p1>p2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(p1<p2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";    
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

var randomimg1="images/dice"+p1+".png";
var randomimg2="images/dice"+p2+".png";

document.querySelector(".img1").setAttribute("src",randomimg1);
document.querySelector(".img2").setAttribute("src",randomimg2);
