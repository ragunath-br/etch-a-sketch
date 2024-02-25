let noOfSquares = 0;

const containerDiv = document.querySelector('#container');

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetGrid);

createGrid(16,16);

containerDiv.addEventListener('mouseover',(event) =>{
    if(event.target.className === 'gridCell'){
        event.target.style.backgroundColor = getDynamicColor();
    }
    
});

function getDynamicColor(){
    rValue = Math.floor((Math.random())*255);
    gValue = Math.floor((Math.random())*255);
    bValue = Math.floor((Math.random())*255);
    dynamicColor = `rgb(${rValue},${gValue},${bValue})`;
    return dynamicColor
}

function resetGrid(){
    setNoOfSquares();
    let squareLength = calculateSquareLength(noOfSquares);
    containerDiv.innerHTML = '';    
    createGrid(noOfSquares,noOfSquares);
}


function setNoOfSquares(){
    noOfSquares = +(prompt('Enter the number of squares per side for the new grid(MAX:100)'));
    if(noOfSquares >100){
        noOfSquares = 100;
    }
}

function calculateSquareLength(noOfSquares){
    totalWidth = window.innerWidth;
    squareLength = (Math.floor(totalWidth/noOfSquares) - 2);
    return squareLength;
}

function createGrid(rows,columns){
    const docFragment = document.createDocumentFragment();
    for (let i = 1; i <= rows; i++){
        for (let j = 1;j <= columns; j++){
            let divElement = document.createElement('div');
            divElement.id = `div_${('0' + i).slice(-2)}${('0' + j).slice(-2)}`;
            squareLength = calculateSquareLength(rows);
            divElement.style.width = squareLength + 'px';
            divElement.style.height = squareLength + 'px';
            divElement.className = 'gridCell';
            docFragment.appendChild(divElement);
        }
    }
    containerDiv.appendChild(docFragment);
}