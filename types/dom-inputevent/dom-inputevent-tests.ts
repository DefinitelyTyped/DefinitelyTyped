const input = document.createElement('input');
input.addEventListener('input', (event: InputEvent) => {
    return event.data === 'foo' && event.isComposing === true;
});

const foo = new InputEvent('input');
const bar = new InputEvent('beforeinput', {
    data: 'bar',
    isComposing: true,
});
