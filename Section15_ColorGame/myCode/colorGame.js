const colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

const squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for (let index = 0; index < squares.length; index += 1) {
    // Add initial colors to squares
    squares[index].style.backgroundColor = colors[index];

    // Add click listners to squares
    squares[index].addEventListener("click", function(){
        // Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // Compare color to pickedColor
        if (clickedColor === pickedColor) {
            alert("Correct");
        }
        else {
            alert("Wrong");
        }
    });

}