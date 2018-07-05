import copy = require('copy-text-to-clipboard');

const button: HTMLButtonElement | null = <HTMLButtonElement> document.getElementById('my-button');
if (button) {
    button.addEventListener('click', () => {
        copy('🦄🌈');
    });
}
