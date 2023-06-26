// Variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    dragZone = document.querySelector(".puzzle-pieces"),
    resetButton = document.querySelector("#resetBut");

let draggedPiece;

// Change puzzle board background image
function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    resetPuzzle();
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

// Reset puzzle by removing puzzle pieces from drop zones
function resetPuzzle() {
    dropZones.forEach((dropZone) => {
        if (dropZone.children.length > 0) {
            const puzzlePiece = dropZone.removeChild(dropZone.children[0]);
            dragZone.appendChild(puzzlePiece);
        }
    });
}

// Event listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
resetButton.addEventListener("click", resetPuzzle);

