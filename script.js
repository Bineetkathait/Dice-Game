var player1=Math.floor(Math.random()*6+1);
var player2=Math.floor(Math.random()*6+1);
function winner(player1 ,player2){

    if(player1>player2){
        document.querySelector("h1").textContent="Winner is Player1";
    }
    else if(player2>player1){
        document.querySelector("h1").textContent="Winner is Player2";
    }
    else if(player1==player2){
        document.querySelector("h1").textContent="Draw";
    }
}
function dicePlayer1(number){
     if(number==1){
        document.querySelector("div .img1").setAttribute("src","images/dice1.png");
     }
     if(number==2){
        document.querySelector("div .img1").setAttribute("src","images/dice2.png");
     }
     if(number==3){
        document.querySelector("div .img1").setAttribute("src","images/dice3.png");
     }
     if(number==4){
        document.querySelector("div .img1").setAttribute("src","images/dice4.png");
     }
     if(number==5){
        document.querySelector("div .img1").setAttribute("src","images/dice5.png");
     }
     if(number==6){
        document.querySelector("div .img1").setAttribute("src","images/dice6.png");
     }
}
function dicePlayer2(number){
    if(number==1){
       document.querySelector("div .img2").setAttribute("src","images/dice1.png");
    }
    if(number==2){
       document.querySelector("div .img2").setAttribute("src","images/dice2.png");
    }
    if(number==3){
       document.querySelector("div .img2").setAttribute("src","images/dice3.png");
    }
    if(number==4){
       document.querySelector("div .img2").setAttribute("src","images/dice4.png");
    }
    if(number==5){
       document.querySelector("div .img2").setAttribute("src","images/dice5.png");
    }
    if(number==6){
       document.querySelector("div .img2").setAttribute("src","images/dice6.png");
    }
}
dicePlayer1(player1);
dicePlayer2(player2);
winner(player1,player2);