let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let turnX=true;
let winmsg=document.querySelector("#win-msg")
let winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const enableGame =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        winmsg.classList.add("hide");
    }
}
const resetGame=()=>{
    turnX=true;
    enableGame();
}
const disableGame =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winnerr)=>{
    winmsg.innerText=`Winner is ${winnerr}`;
    winmsg.classList.remove("hide");
    disableGame();
}
const checkWinner=()=>{
    for(let pat of winPattern){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                //console.log("Winner is Player ",pos1);
                showWinner(pos1);
            }
        }
    }    
}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        //console.log("box was clicked");
        if(turnX){
            box.innerText="X";
            turnX=false;

        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;

        checkWinner();
    })
})
resetbtn.addEventListener("click",resetGame)
