interface DropkickOptions {
    disabled?: boolean | undefined;
    form?: Node | undefined;
    length?: number | undefined;
    mobile?: boolean | undefined;
    multiple?: boolean | undefined;
    options?: string[] | undefined;
    selectedIndex?: number | undefined;
    selectedOptions?: string[] | undefined;
    value?: string | undefined;

    change?(): void;
    close?(): void;
    initialize?(): void;
    open?(): void;
}

declare class Dropkick {
    constructor(id: string | HTMLElement, options?: DropkickOptions);

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
    search(string: string, mode?: string): string[];
    select(element: number | string, selectDisabled?: boolean): Node;
    selectOne(element: number, selectDisabled?: boolean): Node;

    disabled: boolean;
    form: Node;
    length: number;
    mobile: boolean;
    multiple: boolean;
    options: string[];
    selectedIndex: number;
    selectedOptions: string[];
    value: string;
}
