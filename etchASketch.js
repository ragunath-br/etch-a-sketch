const containerDiv = document.querySelector('#container');
createGrid(16,16);


function createGrid(rows,columns){
    const docFragment = document.createDocumentFragment();
    for (let i = 1; i <= rows; i++){
        for (let j = 1;j <= columns; j++){
            let divElement = document.createElement('div');
            divElement.id = `div_${('0' + i).slice(-2)}${('0' + j).slice(-2)}`;
            docFragment.appendChild(divElement);
        }
    }
    containerDiv.appendChild(docFragment);
}