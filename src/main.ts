import { Card } from "./cards";
import { ImageSrcContainer } from "./imageSrcContainer";

let audioPlayers=document.getElementsByTagName("audio");
let cardDivs=document.getElementsByClassName("imgCntainer");
let imgCntainer:ImageSrcContainer[]=[];
let CardList:Card[]=[];
for(let i=1;i<=10;i++){
    let temp=new ImageSrcContainer(`../assets/images/${i}.jpg`);
    imgCntainer.push(temp);
}
window.onload=function(){
    for(let i=0;i<20;i++){
        let noCardPicked=true;
        while(noCardPicked){
            let ImageIndex=Math.round(Math.random()*10)
            if(imgCntainer[ImageIndex]){
                if(imgCntainer[ImageIndex].pickedCounter<2){
                    let tempCard=new Card(imgCntainer[ImageIndex].ImgSrc,i)
                    CardList.push(tempCard);
                    noCardPicked=false;
                }}
               }
              }
 //   setTimeout(()=>{ audioPlayers[0]?.play()},100);

}

console.log(CardList);

let cards