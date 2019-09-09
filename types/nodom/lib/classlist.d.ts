import { HTMLElement } from './element';

export class ClassList extends Array {
    constructor(element: HTMLElement);

    add(className: string): void;

    contains(className: string): boolean;

    remove(className: string): void;

    reset(className?: string): void;
}
