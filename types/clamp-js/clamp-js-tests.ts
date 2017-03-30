import * as clamp from 'clamp-js';

const lineElement: HTMLElement = document.createElement('div');
lineElement.style.setProperty('font-size', '3px');
lineElement.style.setProperty('line-height', '5px');
lineElement.style.setProperty('height', '11px');
lineElement.style.setProperty('width', '15px');

const newtext: Text = document.createTextNode('Lorem ipsum, dolor sit amet.');
lineElement.appendChild(newtext);

const clampFromElement = clamp(lineElement);
const clampFromDefaults = clamp(lineElement, {
    clamp: 'auto',
    useNativeClamp: true,
    splitOnChars: ['.', '-', '–', '—', ' '],
    animate: false,
    truncationChar: '…',
    truncationHTML: null
});
const clampWithOptions = clamp(lineElement, {
    clamp: 1,
    useNativeClamp: false,
    splitOnChars: [','],
    animate: true,
    truncationChar: '--',
    truncationHTML: '<span></span>'
});
