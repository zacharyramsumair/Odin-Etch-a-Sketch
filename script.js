let gridLengthControl = document.getElementById("grid-length");

let gridLengthLabel = document.querySelector(".grid-length-label");
let showValue = document.querySelector(".showValue");
let grid = document.querySelector(".grid");
let color = document.querySelector(".color");
let rainbow = document.querySelector(".rainbow");
let eraser = document.querySelector(".eraser");
let clear = document.querySelector(".clear");
let border = document.querySelector(".border");

let gridLength = 8;
let state = "color"
let currentColor = "#000"

// colour picker code start
// https://www.youtube.com/watch?v=WWaUTYN5Oe0
let colorIndicator = document.getElementById('color-indicator');
const colorPicker = new iro. ColorPicker("#color-picker", {
width:180, color: "#fff"
});
colorPicker.on("color:change", function(color){
    // colorIndicator.style.backgroundColor = color.hexString;
    colorIndicator.style.backgroundColor = color.hslString;
    
    if( state == "color"){
        currentColor = color.hslString;
    }
    // console.log(color.hslString)
})


// colour picker code end



gridLengthControl.oninput = () => {
    gridLength = gridLengthControl.value;

	gridLengthLabel.textContent = `${gridLength} x ${gridLength}`;
	showValue.style.left = `${gridLength * 100 /100}%`;
	showValue.textContent = `${gridLength}`;

}

gridLengthControl.onchange = () => {
    grid.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`
  
    grid.innerHTML =""
    for (let i = 0; i < gridLength * gridLength; i++) {
      const square = document.createElement('div')
      square.classList.add('square')
    //   square.addEventListener('mouseover', changeColor)
      square.addEventListener('mousedown', () => {changeColor(square)})
      grid.appendChild(square)
    }
   
};

color.addEventListener(("click"),() =>{
    state = "color"
    color.classList.add("selected")
    rainbow.classList.remove("selected")
    eraser.classList.remove("selected")
    // clear.classList.remove("selected")
})

rainbow.addEventListener(("click"),() =>{
    state = "rainbow"
    rainbow.classList.add("selected")
    color.classList.remove("selected")
    eraser.classList.remove("selected")
    // clear.classList.remove("selected")
})

eraser.addEventListener(("click"),() =>{
    state = "eraser"
    currentColor = "#fff"
    eraser.classList.add("selected")
    rainbow.classList.remove("selected")
    color.classList.remove("selected")
    // clear.classList.remove("selected")
})

clear.addEventListener('click' , () =>{
    startUp()
})

border.addEventListener('click' , () =>{
    let allSquares = document.getElementsByClassName("square")

    for (let square of allSquares){
        square.classList.toggle("removeBorder")
    }

    if(allSquares[0].classList.contains("removeBorder")){
        border.textContent = "Show Borders"
    } else{
        border.textContent = "Hide Borders"

    }
})



const changeColor =(square)=>{

    if(state == "rainbow"){
        currentColor = `hsl(${Math.floor(Math.random() * (360 - 0 + 1) + 0)}, 100%, 50%)`

    }
    square.style.backgroundColor = currentColor;
    
    // console.log(square)
}


const startUp =()=>{
    grid.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`
  
    grid.innerHTML =""
    for (let i = 0; i < gridLength * gridLength; i++) {
      const square = document.createElement('div')
      square.classList.add('square')
    //   square.addEventListener('mouseover', changeColor)
      square.addEventListener('mousedown', () => {changeColor(square)})
      grid.appendChild(square)
    }
}


startUp()



