let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let btn_popup = document.querySelector(".popup");
    btn_popup.addEventListener("click", function(){
    createBoard(getSize);
    });
})

function createBoard(size){
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0;i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        container.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("give me the size!")
    let message = document.querySelector(".message")
    if (input == ""){
        message.innerHTML = "please provide a number.";
        return 0
    }
    else if (input < 0 || input > 100){
        message.innerHTML = "provide a number between 1 and 100";
        return 0
    }
    else {
        message.innerHTML = "great. now you can play";
        return input
    }
}

function colorDiv(){
    if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor  = 'black'
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}