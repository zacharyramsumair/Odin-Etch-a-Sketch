let gridLengthControl = document.getElementById("grid-length");

let gridLengthLabel = document.querySelector(".grid-length-label");
let showValue = document.querySelector(".showValue");
let grid = document.querySelector(".grid");
let colour = document.querySelector(".colour");
let rainbow = document.querySelector(".rainbow");
let eraser = document.querySelector(".eraser");
let clear = document.querySelector(".clear");

let gridLength = 8;
let state = "colour"

// colour picker code start
// https://www.youtube.com/watch?v=WWaUTYN5Oe0
let colorIndicator = document.getElementById('color-indicator');
const colorPicker = new iro. ColorPicker("#color-picker", {
width:180, color: "#fff"
});
colorPicker.on("color:change", function(color){
    colorIndicator.style.backgroundColor = color.hexString;
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
      square.addEventListener('mouseover', changeColor)
      square.addEventListener('mousedown', changeColor)
      grid.appendChild(square)
    }
   
};

colour.addEventListener(("click"),() =>{
    state = "colour"
    colour.classList.add("selected")
    rainbow.classList.remove("selected")
    eraser.classList.remove("selected")
    // clear.classList.remove("selected")
})

rainbow.addEventListener(("click"),() =>{
    state = "rainbow"
    rainbow.classList.add("selected")
    colour.classList.remove("selected")
    eraser.classList.remove("selected")
    // clear.classList.remove("selected")
})

eraser.addEventListener(("click"),() =>{
    state = "eraser"
    eraser.classList.add("selected")
    rainbow.classList.remove("selected")
    colour.classList.remove("selected")
    // clear.classList.remove("selected")
})



const changeColor =()=>{
    console.log('n')
}