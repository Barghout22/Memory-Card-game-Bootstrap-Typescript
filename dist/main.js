var _a;
import { Card } from "./cards.js";
import { gameSetup } from "./gameSetup.js";
let audioPlayers = document.getElementsByTagName("audio");
let cardDivs = document.querySelectorAll(".imgCntainer");
let prog = document.querySelector("progress");
let progPercent = document.getElementById("progressPercentage");
let CardList = [];
let clickedCardIndex = -1;
let secondClickedCardIndex = -1;
let ClikedCardImg = "";
document.body.onclick = () => { var _a; return (_a = audioPlayers[0]) === null || _a === void 0 ? void 0 : _a.play(); };
gameSetup(CardList);
// cardDivs.forEach(card => {
//   card.addEventListener("click",()=>console.log("hello"));
// });
for (let i = 0; i < 20; i++) {
    (_a = cardDivs[i]) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (Card.successCounter == 10)
            return;
        let img = (_a = cardDivs[i]) === null || _a === void 0 ? void 0 : _a.querySelector("img");
        if ((img === null || img === void 0 ? void 0 : img.src) === "./assets/back.jpg")
            console.log("hellow");
        (_b = audioPlayers[1]) === null || _b === void 0 ? void 0 : _b.pause();
        ((_c = audioPlayers[1]) === null || _c === void 0 ? void 0 : _c.currentTime) ? audioPlayers[1].currentTime = 0 : null;
        (_d = audioPlayers[1]) === null || _d === void 0 ? void 0 : _d.play();
        img === null || img === void 0 ? void 0 : img.src = (_e = CardList[i]) === null || _e === void 0 ? void 0 : _e.HiddenImgSrc;
        if (clickedCardIndex === -1) {
            clickedCardIndex = i;
            ClikedCardImg = img === null || img === void 0 ? void 0 : img.src;
        }
        else if (ClikedCardImg === (img === null || img === void 0 ? void 0 : img.src)) {
            secondClickedCardIndex = i;
            if (clickedCardIndex !== secondClickedCardIndex) {
                Card.successCounter++;
                (_f = audioPlayers[2]) === null || _f === void 0 ? void 0 : _f.pause();
                ((_g = audioPlayers[2]) === null || _g === void 0 ? void 0 : _g.currentTime) ? audioPlayers[2].currentTime = 0 : null;
                (_h = audioPlayers[2]) === null || _h === void 0 ? void 0 : _h.play();
                clickedCardIndex = -1;
                ClikedCardImg = "";
                checkForSuccess();
            }
        }
        else {
            setTimeout(() => {
                var _a, _b, _c;
                (_a = audioPlayers[3]) === null || _a === void 0 ? void 0 : _a.pause();
                ((_b = audioPlayers[3]) === null || _b === void 0 ? void 0 : _b.currentTime) ? audioPlayers[3].currentTime = 0 : null;
                (_c = audioPlayers[3]) === null || _c === void 0 ? void 0 : _c.play();
                img === null || img === void 0 ? void 0 : img.src = "./assets/back.jpg";
                let secondCard = cardDivs[clickedCardIndex];
                let img2 = secondCard === null || secondCard === void 0 ? void 0 : secondCard.querySelector("img");
                img2 === null || img2 === void 0 ? void 0 : img2.src = "./assets/back.jpg";
                clickedCardIndex = -1;
                ClikedCardImg = "";
            }, 500);
        }
    });
}
function checkForSuccess() {
    var _a, _b;
    prog === null || prog === void 0 ? void 0 : prog.value = Card.successCounter * 10;
    progPercent === null || progPercent === void 0 ? void 0 : progPercent.innerText = `${prog === null || prog === void 0 ? void 0 : prog.value}%`;
    if (Card.successCounter === 10) {
        (_a = audioPlayers[4]) === null || _a === void 0 ? void 0 : _a.play();
        let endgameMessage = document.getElementsByTagName("p")[0];
        endgameMessage === null || endgameMessage === void 0 ? void 0 : endgameMessage.hidden = false;
        (_b = audioPlayers[0]) === null || _b === void 0 ? void 0 : _b.pause();
    }
}
//# sourceMappingURL=main.js.map