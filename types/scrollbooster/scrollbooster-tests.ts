import ScrollBooster from 'scrollbooster';

const viewport = document.querySelector<HTMLDivElement>('.viewport');
const content = document.querySelector<HTMLDivElement>('.scrollable-content');

const sb = new ScrollBooster({
    viewport,
    content,
    bounce: true,
    textSelection: false,
    emulateScroll: true,
    bounceForce: 0.1,
    friction: 0.1,
    direction: 'all',
    inputsFocus: true,
    pointerMode: 'all',
    scrollMode: 'transform',
    onUpdate: state => {
        // state contains useful metrics: position, dragOffset, isDragging, isMoving, borderCollision
        // you can control scroll rendering manually without 'scrollMethod' option:
        if (content) {
            content.style.transform = `translate(
                ${-state.position.x}px,
                ${-state.position.y}px
    )`;
        }
    },
    shouldScroll: (_, event) => {
        // disable scroll if clicked on button
        const isButton = (event.target as HTMLElement).nodeName.toLowerCase() === 'button';
        return !isButton;
    },
    onClick: (state, event) => {
        // prevent default link event
        const isLink = (event.target as HTMLElement).nodeName.toLowerCase() === 'link';
        if (isLink) {
            event.preventDefault();
            console.log(state); // ScrollingState object
        }
    },
});

// methods usage examples:
sb.updateMetrics();
sb.scrollTo({ x: 100, y: 100 });
sb.updateOptions({ emulateScroll: false });
sb.destroy();
