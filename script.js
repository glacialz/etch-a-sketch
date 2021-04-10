let rColor = 0;

function setGridSize(size) {
    const grid = document.querySelector('.grid');
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
    for (let i = 0; i < size ** 2; i++) {
        const tempDiv = document.createElement('div');
        tempDiv.className = `box-${i}`
        grid.appendChild(tempDiv);
    }
}

function getBoxClassName(e) {
    const boxClassName = '.' + e.className;
    return document.querySelector(boxClassName)
}

function onHover(e) {
    const boxDom = getBoxClassName(e.target);
    boxDom.setAttribute('style', `background-color: ${getNextColor()};`);
}

function resetGrid(e) {
    const grid = document.querySelector('.grid');
    const children = grid.childNodes
    children.forEach((e) => {
        const boxDom = getBoxClassName(e);
        boxDom.setAttribute('style', 'background-color: white;');
    })
}

function getNextColor() {
    rColor += 8;
    return `hsl(${rColor}, 50%, 50%)`;
}

const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    const input = document.querySelector('.size');
    setGridSize(input.value);
});

const grid = document.querySelector('.grid');
grid.addEventListener('mouseover', (e) => onHover(e));

const btn = document.querySelector('.reset');
btn.addEventListener('click', resetGrid);

