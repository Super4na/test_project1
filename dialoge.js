const talkSound = new Audio("/music/SFX_Girl_Voice.mp3");

let imgCounter = 1;
function firstDialogue() {
   /*  debugger; */
        if ( imgCounter >5) {
            context.clearRect(25, 313,450, 147);
            return
        }
        else if (imgCounter === 4) {
            const image = new Image();
            image.src = `/Dialogues/D${imgCounter}.PNG`
            image.addEventListener("load", () => {
                context.drawImage(image,25,313,450,147);
                talkSound.play();
            })
            imgCounter ++;
            return
        }
        else  {
            const image = new Image();
            image.src = `/Dialogues/D${imgCounter}.PNG`
            image.addEventListener("load", () => {
                context.drawImage(image,25,313,450,147);
                talkSound.play();
            })
        }

}

function secondDialogue() {
    console.log('inside dialogue 2');
    if ( imgCounter > 10) {
        context.clearRect(25, 313,450, 147);
        return
    }
    else if (imgCounter === 9) {
        const image = new Image();
        image.src = `/Dialogues/D${imgCounter}.PNG`
        image.addEventListener("load", () => {
            context.drawImage(image,25,313,450,147);
            talkSound.play();
        })
        imgCounter ++;
        return }
    else {
        const image = new Image();
            image.src = `/Dialogues/D${imgCounter}.PNG`
            image.addEventListener("load", () => {
                context.drawImage(image,25,313,450,147);
                talkSound.play();
            })
    }
}

function thirdDialogue() {
    if ( imgCounter >15) {
        context.clearRect(25, 313,450, 147);
        return
    }
    else if (imgCounter === 14) {
        const image = new Image();
        image.src = `/Dialogues/D${imgCounter}.PNG`
        image.addEventListener("load", () => {
            context.drawImage(image,25,313,450,147);
            talkSound.play();
        })
        imgCounter ++;
        return }
    else {
        const image = new Image();
        image.src = `/Dialogues/D${imgCounter}.PNG`
        image.addEventListener("load", () => {
            context.drawImage(image,25,313,450,147);
            talkSound.play();
        })
    }
}

function restart() {
        girl.x = 50;
        girl.y = 400;
        score = 0;
        lives =10;
        miniGameOn = false;
        gameIsOver = false;
        talking = 0;
        levelUp = 0;
        isFirstDialog = false;
        isSecondDialog = false;
        isThirdDialog = false;
        imgCounter = 1;
        context.clearRect(0,0, 500, 500);
        girl.draw();
        boy.draw();
}


document.addEventListener(`keydown`, (e) => {
    if ( (e.key).toLowerCase() =="n" && imgCounter === 3 ) {
        imgCounter+=2;
        firstDialogue(imgCounter);
        gameisOver =true;
        const gOver = new Image();
        gOver.src = `/Dialogues/S4.PNG`
        gOver.addEventListener("load", () => {
                setTimeout(()=> {
                context.drawImage(gOver,25,313,450,147);
        },2500)   
        setTimeout(()=>{restart()},5000);
      })
    }
    if ((e.key).toLowerCase() =="n" && imgCounter === 8 ) {
        imgCounter+=2;
        secondDialogue(imgCounter);
        gameisOver =true;
        const gOver = new Image();
      gOver.src = `/Dialogues/S4.PNG`;
      gOver.addEventListener("load", () => {
            setTimeout(()=> {
            context.drawImage(gOver,25,313,450,147);
        },2500)   
      })
      setTimeout(()=>{restart()},5000);
        
    }
    if ((e.key).toLowerCase() =="n" && imgCounter === 13) {
        imgCounter+=2;
        thirdDialogue(imgCounter);
        gameisOver =true;
        const gOver = new Image();
        gOver.src = `/Dialogues/S4.PNG`
        gOver.addEventListener("load", () => {
                setTimeout(()=> {
                context.drawImage(gOver,25,313,450,147);
        },2500)   
      })
      setTimeout(()=>{restart()},5000);
        
    }
});

document.addEventListener(`keydown`, (e) => {
    
    if (e.key == "Enter") {
        imgCounter ++;
        if (imgCounter <= 6 && isFirstDialog) {
            firstDialogue(imgCounter);
        } else if (imgCounter >= 7 && imgCounter < 11 && isSecondDialog) {
            secondDialogue(imgCounter);
        } else if (imgCounter >=12 && imgCounter < 16 && isThirdDialog) {
            thirdDialogue(imgCounter);
            
        }
    }
}
)