import { Card } from "./cards.js";
import { gameSetup } from "./gameSetup.js";

let audioPlayers=document.getElementsByTagName("audio");
let cardDivs=document.getElementsByClassName("imgCntainer");
let prog=document.querySelector("progress");
let progPercent=document.getElementById("progressPercentage");
let CardList:Card[]=[];
let clickedCardIndex:number=-1;
let ClikedCardImg:string|undefined="";

document.body.onclick=()=>audioPlayers[0]?.play();

gameSetup(CardList);

for (let i=0;i<20;i++){
    cardDivs[i]?.addEventListener("click",()=>{
        audioPlayers[1]?.pause();
      audioPlayers[1]?.currentTime?audioPlayers[1].currentTime=0:null;
        audioPlayers[1]?.play();
        let img=cardDivs[i]?.querySelector("img");
        img?.src=CardList[i]?.HiddenImgSrc;
        if(clickedCardIndex===-1) 
            {
                clickedCardIndex=i;
                ClikedCardImg=img?.src;
        }
        else if (ClikedCardImg===img?.src){
            Card.successCounter++;
            audioPlayers[2]?.pause();
            audioPlayers[2]?.currentTime?audioPlayers[2].currentTime=0:null;
            audioPlayers[2]?.play();
            clickedCardIndex=-1;
            ClikedCardImg="";
            checkForSuccess();

        }
        else{
          setTimeout(()=>{
            audioPlayers[3]?.pause();
            audioPlayers[3]?.currentTime?audioPlayers[3].currentTime=0:null;
            audioPlayers[3]?.play();
            img?.src="./assets/back.jpg"
            let secondCard=cardDivs[clickedCardIndex];
            let img2=secondCard?.querySelector("img");
            img2?.src="./assets/back.jpg";
            clickedCardIndex=-1;
            ClikedCardImg="";

          },500);
        }


    })

}



function checkForSuccess(){
    prog?.value=Card.successCounter*10;
    progPercent?.innerText=`${prog?.value}%`;
    if(Card.successCounter===10){
        audioPlayers[4]?.play();

        let endgameMessage=document.getElementsByTagName("p")[0];
        endgameMessage?.hidden=false;
        audioPlayers[0]?.pause();
    }
}