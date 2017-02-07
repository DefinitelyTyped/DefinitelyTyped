// Type definitions for dropkickjs v2.1.9
// Project: http://dropkickjs.com/
// Definitions by Dmitry Pesterev <https://github.com/VorobeY1326/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DropkickOptions {
    disabled?: boolean;
    form?: Node;
    length?: number;
    mobile?: boolean;
    multiple?: boolean;
    options?: Array<string>;
    selectedIndex?: number;
    selectedOptions?: Array<string>;
    value?: string;

    change?: () => void;
    close?: () => void;
    initialize?: () => void;
    open?: () => void;
}

declare class Dropkick {
    constructor(id: string, options?: DropkickOptions);
    constructor(element: HTMLElement, options?: DropkickOptions);

    add(value: string | Node, before?: number | string): void;
    close(): void;
    disable(disabled?: boolean): void;
    disable(index: number, disabled?: boolean): void;
    dispose(): void;
    focus(): void;
    hide(index: number, hidden?: boolean): void;
    item(index: number): Node;
    open(): void;
    refresh(): void;
    remove(index: number): void;
    reset(clear?: boolean): void;
    search(string: string, mode?: string): Array<string>;
    select(element: number|string, selectDisabled?: boolean): Node;
    selectOne(element: number, selectDisabled?: boolean): Node;

    disabled: boolean;
    form: Node;
    length: number;
    mobile: boolean;
    multiple: boolean;
    options: Array<string>;
    selectedIndex: number;
    selectedOptions: Array<string>;
    value: string;
}