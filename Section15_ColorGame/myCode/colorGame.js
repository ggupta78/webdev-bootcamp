/*const colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];*/

var numSquares = 6;
var colors = [];
var pickedColor;


const squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();    
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (let index = 0; index < modeButtons.length; index++) {
        modeButtons[index].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            
            numSquares = (this.textContent === "Easy") ? 3 : 6;
            
            reset();
        });
    }
}

function setupSquares() {
    for (let index = 0; index < squares.length; index += 1) {
        // Add initial colors to squares
        squares[index].style.backgroundColor = colors[index];
    
        // Add click listners to squares
        squares[index].addEventListener("click", function(){
            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for (let index = 0; index < squares.length; index += 1) {
        if(colors[index]) {
            squares[index].style.display = "block";
            squares[index].style.backgroundColor = colors[index];
        } else {
            squares[index].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     numSquares = 3;
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let index = 0; index < squares.length; index++) {
//         if(colors[index]) {
//             squares[index].style.backgroundColor = colors[index];    
//         } else {
//             squares[index].style.display = "none";
//         }
        
//     }
// })

// hardBtn.addEventListener("click", function(){
//     numSquares = 6;
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let index = 0; index < squares.length; index++) {
//         squares[index].style.backgroundColor = colors[index];    
//         squares[index].style.display = "block";        
//     }
// })

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color) {
    //loop through all squares and change their color
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (let index = 1; index <= num; index++) {
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}