const keysFolder='./keys/';

const leftSideKeys=['g','v','f','c','d','x','s'];
const rightSideKeys=['h','n','j','m','k',',','l'];
const leftSideKeyCodes=['KeyG','KeyV','KeyF','KeyC','KeyD','KeyX','KeyS'];
const rightSideKeyCodes=['KeyH','KeyN','KeyJ','KeyM','KeyK','Comma','KeyL'];

const leftSideKeysB=['t','r','e','w','q'];
const rightSideKeysB=['y','u','i','o','p'];
const leftSideKeyBCodes=['KeyT','KeyR','KeyE','KeyW','KeyQ'];
const rightSideKeyBCodes=['KeyY','KeyU','KeyI','KeyO','KeyP'];

const leftSideNotes=['c3','d3','e3','f3','g3','a3','b3'];
const rightSideNotes=['c4','d4','e4','f4','g4','a4','b4'];

const leftSideNotesB=['c-3','d-3','f-3','g-3','a-3'];
const rightSideNotesB=['c-4','d-4','f-4','g-4','a-4'];

const leftSideKeyAudios=[];
for (let i=0; i<leftSideKeys.length; i++){
    leftSideKeyAudios.push(new Audio(keysFolder + leftSideNotes[i] + '.mp3'));
}
const rightSideKeyAudios=[];
for (let i=0; i<rightSideKeys.length; i++){
    rightSideKeyAudios.push(new Audio(keysFolder + rightSideNotes[i] + '.mp3'));
}
const leftSideKeyBAudios=[];
for (let i=0; i<leftSideKeysB.length; i++){
    leftSideKeyBAudios.push(new Audio(keysFolder + leftSideNotesB[i] + '.mp3'));
}
const rightSideKeyBAudios=[];
for (let i=0; i<rightSideKeysB.length; i++){
    rightSideKeyBAudios.push(new Audio(keysFolder + rightSideNotesB[i] + '.mp3'));
}


let noteIndexArr=[0,0];
let kei=0;

window.addEventListener("keydown", (event)=>{
    while (kei===0){
        const leftSideKeyPosi=leftSideKeyCodes.indexOf(event.code);
        const rightSideKeyPosi=rightSideKeyCodes.indexOf(event.code);
        const leftSideKeyBPosi=leftSideKeyBCodes.indexOf(event.code);
        const rightSideKeyBPosi=rightSideKeyBCodes.indexOf(event.code);
        if (leftSideKeyPosi !== -1){
            noteIndexArr=[0, leftSideKeyPosi];
            leftSideKeyAudios[leftSideKeyPosi].currentTime = 0;
            leftSideKeyAudios[leftSideKeyPosi].play();
        }
        else if (rightSideKeyPosi !== -1){
            noteIndexArr=[1, rightSideKeyPosi];
            rightSideKeyAudios[rightSideKeyPosi].currentTime = 0;
            rightSideKeyAudios[rightSideKeyPosi].play();
        }
        else if (leftSideKeyBPosi !== -1){
            noteIndexArr=[2, leftSideKeyBPosi];
            leftSideKeyBAudios[leftSideKeyBPosi].currentTime = 0;
            leftSideKeyBAudios[leftSideKeyBPosi].play();
        }
        else if (rightSideKeyBPosi !== -1){
            noteIndexArr=[3, rightSideKeyBPosi];
            rightSideKeyBAudios[rightSideKeyBPosi].currentTime = 0;
            rightSideKeyBAudios[rightSideKeyBPosi].play();
        }
        kei++;
    }
})

window.addEventListener("keyup", (event)=>{
    const leftSideKeyPosi=leftSideKeyCodes.indexOf(event.code);
    const rightSideKeyPosi=rightSideKeyCodes.indexOf(event.code);
    const leftSideKeyBPosi=leftSideKeyBCodes.indexOf(event.code);
    const rightSideKeyBPosi=rightSideKeyBCodes.indexOf(event.code);
    if (noteIndexArr[0]===0){
        leftSideKeyAudios[noteIndexArr[1]].pause();
        leftSideKeyAudios[noteIndexArr[1]].currentTime = 0;
        kei=0;
    }
    else if (noteIndexArr[0]===1){
        rightSideKeyAudios[noteIndexArr[1]].pause();
        rightSideKeyAudios[noteIndexArr[1]].currentTime = 0;
        kei=0;
    }
    else if (noteIndexArr[0]===2){
        leftSideKeyBAudios[noteIndexArr[1]].pause();
        leftSideKeyBAudios[noteIndexArr[1]].currentTime = 0;
        kei=0;
    }
    else if (noteIndexArr[0]===3){
        rightSideKeyBAudios[noteIndexArr[1]].pause();
        rightSideKeyBAudios[noteIndexArr[1]].currentTime = 0;
        kei=0;
    }
})
