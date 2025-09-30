import { Card } from "./cards.js";
import { ImageSrcContainer } from "./imageSrcContainer.js";
let imgCntainer:ImageSrcContainer[]=[];


export function gameSetup(CardList:Card[]){
for(let i=1;i<=10;i++){
    let temp=new ImageSrcContainer(`../assets/images/${i}.jpg`);
    imgCntainer.push(temp);
}
for(let i=0;i<20;i++){
        let noCardPicked=true;
        while(noCardPicked){
            let ImageIndex=Math.round(Math.random()*10)
            if(imgCntainer[ImageIndex]){
                if(imgCntainer[ImageIndex].pickedCounter<2){
                    imgCntainer[ImageIndex].pickedCounter++;
                    let tempCard=new Card(imgCntainer[ImageIndex].ImgSrc,i);

                    CardList.push(tempCard);
                    noCardPicked=false;
                }}
               }
              }

}