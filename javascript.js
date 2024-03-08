function createBoard(size){
    let container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0;i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        div.style.border = "1px solid black"
        container.insertAdjacentElement("beforeend", div);
    }
}

createBoard(32)