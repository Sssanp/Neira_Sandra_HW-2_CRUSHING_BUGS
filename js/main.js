//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone");

let draggedPiece;

// Change puzzle board background image
function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}

// Start drag event 
function handleStartDrag(e) {
    draggedPiece = this;
}

// Drag over event 
function handleDragOver(e) {
    e.preventDefault();
    console.log("dragged over me");
}



// Drop event 
function handleDrop(e) {
    e.preventDefault();
    if (this.children.length >= 1) {
        return;
    }
    this.appendChild(draggedPiece);
    console.log("dropped something on me");
}

//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));