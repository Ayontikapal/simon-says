let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let max=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function btnFlash(box){
    box.classList.add("flash");
    setTimeout(()=>{
        box.classList.remove("flash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rand=Math.floor(Math.random()*4);
    let ranCol=btns[rand];
    let randbtn=document.querySelector(`.${ranCol}`);
    btnFlash(randbtn);
    gameSeq.push(ranCol);
}

function btnPress(){
    let btn=this;
    userSeq.push(btn.classList[0]);
    btnFlash(btn);
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    // console.log(level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(max<level){
            max=level;
        }
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Highest score is <b>${max}</b> <br> Press any key to start again`;
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(()=>{
            body.style.backgroundColor="white";
        },300);
        Restart();
    }
}
let allBtns=document.querySelectorAll(".box");
for(let i=0;i<allBtns.length;i++){
    allBtns[i].addEventListener("click",btnPress);
}
function Restart(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}