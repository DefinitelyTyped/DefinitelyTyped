import Draggabilly from 'draggabilly';

const elem = document.querySelector('.draggable') as Element;

const draggieA = new Draggabilly('.test');
const draggieB = new Draggabilly(elem);

const draggie = new Draggabilly(elem, {
    axis: 'x',
    containment: true,
    grid: [20, 20],
    handle: '.handle'
});

const draggiePosX: number = draggie.position.x;
const draggiePosY: number = draggie.position.y;

draggie.on('dragMove', (event, pointer, moveVector) => {
    const pointerPageX: number = pointer.pageX;
    const pointePageY: number = pointer.pageY;

    const moveVectorX: number = moveVector.x;
    const moveVectorY: number = moveVector.y;
});

draggie.on('dragStart', (event, pointer) => {});

draggie.on('dragEnd', (event, pointer) => {});

draggie.on('pointerDown', (event, pointer) => {});

draggie.on('pointerMove', (event, pointer, moveVector) => {});

draggie.on('pointerUp', (event, pointer) => {});

draggie.on('staticClick', (event, pointer) => {});

draggie.off('dragMove', (event, pointer, moveVector) => {});

draggie.once('dragMove', (event, pointer, moveVector) => {});

draggie.enable();

draggie.disable();

draggie.destroy();
