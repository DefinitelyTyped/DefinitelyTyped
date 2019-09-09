import { HTMLElement } from './element';

export function render(
    view: HTMLElement | { el: HTMLElement },
    inner: boolean,
): string;
