import { trap, untrap } from 'makeup-screenreader-trap';

const widgetEl: HTMLElement | null = document.querySelector('.expander');

if (widgetEl) {
    trap(widgetEl);
}

untrap();
