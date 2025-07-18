let turn = 0;
const turner = document.querySelector('.turn')
const button = document.querySelectorAll(".box");
let counter = 0

const updateTurnDisplay = () => {
        turn = (turn === 1) ? "X" : "O";
        turn = (turn === "O") ? "X" : "O";
        turner.innerText = `TURN ${turn}`;
        turn = (turn === "O") ? "X" : "O";
};

button.forEach((btn) => {
    btn.addEventListener("click" , () => {
        updateTurnDisplay();
        counter+= 1
        if(turn == "X"){
            btn.innerText = "X";
            btn.style.fontSize = "80px"
            btn.style.backgroundColor = "lightblue";
            btn.style.color = "green";
        }else{
            btn.innerText = "O";
            btn.style.fontSize = "80px"
            btn.style.backgroundColor = "lightblue";
            btn.style.color = "red";
        }
        turn = (turn === "X") ? 0 : 1;
        btn.disabled = true;
        const winner = checkWinner();
        if (winner) {
            showWinner(winner);
        } else if (counter === 9) {
            draw();
        }
       // checkWinner();
    });                //},{ once : true });
});

const buttonre = document.querySelector(".reset");
const buttonnew = document.querySelector(".new");

const enableBtn = () => {
    for (btn of button) {
        btn.innerText = "";
        btn.style.backgroundColor = "#34495e";
        btn.disabled = false;
        msgContainer.classList.add("hide");
    }
}

const resetGame = () => {
    counter = 0;
    turn = 0;
        turn = (turn === 1) ? "X" : "O";
        turner.innerText = `TURN ${turn}`;
        turn = (turn === "O") ? 1 : 0;
        updateTurnDisplay();
    enableBtn();
}

buttonre.addEventListener('click', resetGame);
buttonnew.addEventListener('click', resetGame);
let msgContainer = document.querySelector(".afterwinning");
let msg = document.querySelector(".win");

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableBtn = () => {
    for (btn of button) {
        btn.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `CONGRATULATION 🏆
    🎉WINNER:${winner}🎉`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const draw = () => {
        alert("THE GAME IS DRAW");
        resetGame();
}
// const isDraw = () => {
//     console.log(button.box.innerHTML)
//     return ([...button].every(btn => btn.innerText !== ""));
// };

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        //console.log(pattern[0] , pattern[1] , pattern[2]);
        let posi1val = button[pattern[0]].innerText;
        let posi2val = button[pattern[1]].innerText;
        let posi3val = button[pattern[2]].innerText;
        if(posi1val != "" && posi2val != "" && posi3val != ""){
            if(posi1val == posi2val && posi2val == posi3val){
                console.log("WINNER",posi1val);
                showWinner(posi1val);
                return posi1val;
            }
        }
    }
}
        //     }else if(allfilled = [...button].every(btn => btn.innerText !== "")){
        //         if(posi1val == posi2val && posi2val == posi3val){
        //             console.log("WINNER",posi1val);
        //             showWinner(posi1val);
        //         }else if(){
        //             draw();
        //         }else {
        // currentTurn = currentTurn === "X" ? "O" : "X";
        // updateTurnDisplay();


            // else if(posi1val != posi2val && posi2val != posi3val){
            //     console.log("draw");
            //     i++;
            //     draw();
            // }
    //             else if(posi1val != "" && posi2val != "" && posi3val != ""){
    //         if(posi1val != posi2val || posi2val != posi3val){
    //             console.log("WINNER");
    //         }    
    //      }
    // else if(allfilled = [...button].every(btn => btn.innerText !== "") && posi1val != posi2val && posi2val != posi3val){
    //             console.log("draw");
    //             draw();
    //             }
    //updateTurnDisplay();