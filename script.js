console.log("Tic tac toe is running")
let audioTurn = new Audio("ting.wav") 
let game = new Audio("game_over.wav")

let turn = "X"
let gameover = false;

const changeTurn = () =>{
    return turn === "X" ? "O" : "X"
}

//Win logic

const checkWin = () =>{
    let boxText = document.getElementsByClassName("boxText");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "" ) ){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won"
            gameover = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "300px"
        }
        
        
    })
}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () =>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


//Rest Game

reset.addEventListener('click', () =>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element =>{
        element.innerText = ""
    } );
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})