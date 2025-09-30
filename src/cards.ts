
export class Card{

static successCounter=0;
    HiddenImgSrc;
    Id;
    clicked=false;
    constructor(imgSrc:string,id:number){
        this.HiddenImgSrc=imgSrc;
        this.Id=id;
    }
}