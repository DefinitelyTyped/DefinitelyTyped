import { trap, untrap } from 'makeup-keyboard-trap';

const widgetEl: HTMLElement | null = document.querySelector('.expander');

trap(widgetEl);

untrap();
