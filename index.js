 var randomNumber1=Math.ceil(Math.random()*6);
 var image1="images/dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",image1);


var randomNumber2=Math.ceil(Math.random()*6);
var image2="images/dice"+randomNumber1+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",image2);

if(randomNumber1>randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="Player2 Wins!";
}
else{
  document.getElementsByTagName("h1")[0].innerHTML="Draw!";
}
