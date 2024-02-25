let noOfSquares = 0;

const containerDiv = document.querySelector('#container');

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', setNoOfSquares);

function setNoOfSquares(){
    noOfSquares = +(prompt('Enter the number of squares per side for the new grid(MAX:100)'))
}



createGrid(16,16);

containerDiv.addEventListener('mouseover',(event) =>{
    if(event.target.className === 'gridCell'){
        event.target.style.backgroundColor = 'blue';
    }
    
});


function createGrid(rows,columns){
    const docFragment = document.createDocumentFragment();
    for (let i = 1; i <= rows; i++){
        for (let j = 1;j <= columns; j++){
            let divElement = document.createElement('div');
            divElement.id = `div_${('0' + i).slice(-2)}${('0' + j).slice(-2)}`;
            divElement.className = 'gridCell';
            docFragment.appendChild(divElement);
        }
    }
    containerDiv.appendChild(docFragment);
}