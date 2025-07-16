// function turn1(){
// for(let n = 1;n < 10;n++){
//     if (n % 2 === 0){
//         return 1;
//     }else{
//         return 0;
//     }
// }
// }
// let turn = 0;
// const button = document.querySelector(".box");           //dom manuplulation
// if(turn == 1){
//     function changebutton() {                                   //work to be done after some click or action
//     button.innerText = "x";
//     button.style.backgroundColor = "lightblue";
//     button.style.color = "black";
//     console.log("button clicked");
//     } 
//     button.addEventListener('click' , changebutton);            //add event like click and mouseover
// }else if(turn == 0){
//     function changebutton() {                                   //work to be done after some click or action
//     button.innerText = "o";
//     button.style.backgroundColor = "lightblue";
//     button.style.color = "black";
//     console.log("button clicked");   
//     }
//     button.addEventListener('click' , changebutton);
// }
// const button = document.querySelectorAll(".box");
// button.forEach((btn) => {
//     btn.addEventListener("click" , () => {
//         if(turn === 1){
//             btn.innerText = "x";
//             button.style.backgroundColor = "lightblue";
//             button.style.color = "black";
//         }else{
//             button.innerText = "o";
//             button.style.backgroundColor = "lightblue";
//             button.style.color = "black";
//         }            //btn.innerText = (turn === 1) ? "x" : "o";
//         turn = (turn === 1) ? 0 : 1;
//     },{once : true});
// });
let turn = 0;
const button = document.querySelectorAll(".box");
button.forEach((btn) => {
    btn.addEventListener("click" , () => {
        if(turn == 1){
            btn.innerText = "x";
            btn.style.fontSize = "80px"
            btn.style.backgroundColor = "lightblue";
            btn.style.color = "green";
        }else{
            btn.innerText = "o";
            btn.style.fontSize = "80px"
            btn.style.backgroundColor = "lightblue";
            btn.style.color = "red";
        }
        turn = (turn === 1) ? 0 : 1;
    },{ once : true });
});
const buttonnew = document.querySelector(".new");
function newgame() {
    buttonnew.innerText = "NEW GAME";
    buttonnew.style.backgroundColor = "darkblue";
    buttonnew.style.color = "white";
    button.removeEventListener("click" , button);
    } 
    buttonnew.addEventListener('click' , newgame);
const buttonre = document.querySelector(".reset");
function regame() {
    buttonre.innerText = "↻ RESET GAME";
    buttonre.style.backgroundColor = "darkblue";
    buttonre.style.color = "white";
    button.removeEventListener("click" , button);
    } 
    buttonre.addEventListener('click' , regame);