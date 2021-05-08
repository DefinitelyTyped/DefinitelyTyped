// Type definitions for winbox 0.1
// Project: https://nextapps-de.github.io/winbox/
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace WinBox;

interface WinBox {
    dom: Node;
    background: string;
    body: HTMLElement;
    border: string | number;

    class: string | string[];

    html: string;
    id: string | number;
    index: number;
    max: boolean;
    modal: boolean;
    root: Node;
    title: string;
    url: string;
    onfocus: (this: WinBox) => void;
    onblur: (this: WinBox) => void;
    onresize: (this: WinBox, width: number, height: number) => void;
    onmove: (this: WinBox, x: number, y: number) => void;
    onclose: (this: WinBox, force: boolean) => boolean;
    mount(src?: Element): WinBox;
    unmount(dest?: Element): WinBox;
    setTitle(title: string): WinBox;
    setBackground(background: string): WinBox;
    setUrl(url: string): WinBox;
    focus(): WinBox;
    hide(): WinBox;
    show(): WinBox;
    minimize(state?: boolean): WinBox;
    maximize(state?: boolean): WinBox;
    fullscreen(state?: boolean): WinBox;
    close(force?: boolean): boolean | void;
    move(x?: string | number, y?: string | number, skipUpdate?: boolean): WinBox;
    resize(w?: string | number, h?: string | number, skipUpdate?: boolean): WinBox;
    addClass(classname: string): WinBox;
    removeClass(classname: string): WinBox;
}
declare namespace WinBox {
    interface WinBoxConstructor {
        (title: string, params?: Params): WinBox;
        (params: Params): WinBox;
        new (title: string, params?: Params): WinBox;
        new (params: Params): WinBox;
    }

    interface Params {
        background?: string;
        body?: HTMLElement;
        border?: string | number;
        bottom?: string | number;
        class?: string | string[];
        height?: string | number;
        html?: string;
        id?: string | number;
        index?: number;
        left?: string | number;
        max?: boolean;
        modal?: boolean;
        mount?: Node;
        right?: string | number;
        root?: Node;
        title?: string;
        top?: string | number;
        url?: string;
        width?: string | number;
        x?: "right" | "center" | string | number;
        y?: "bottom" | "center" | string | number;
        onclose?: (this: WinBox, force?: boolean) => boolean;
        onfocus?: (this: WinBox) => void;
        onblur?: (this: WinBox) => void;
        onresize?: (this: WinBox, width: number, height: number) => void;
        onmove?: (this: WinBox, x: number, y: number) => void;
    }

    interface Params {
        background?: string;
        body?: HTMLElement;
        border?: string | number;
        bottom?: string | number;
        class?: string | string[];
        height?: string | number;
        html?: string;
        id?: string | number;
        index?: number;
        left?: string | number;
        max?: boolean;
        modal?: boolean;
        mount?: Node;
        right?: string | number;
        root?: Node;
        title?: string;
        top?: string | number;
        url?: string;
        width?: string | number;
        x?: "right" | "center" | string | number;
        y?: "bottom" | "center" | string | number;
        onclose?: (this: WinBox, force?: boolean) => boolean;
        onfocus?: (this: WinBox) => void;
        onblur?: (this: WinBox) => void;
        onresize?: (this: WinBox, width: number, height: number) => void;
        onmove?: (this: WinBox, x: number, y: number) => void;
    }
}

declare const WinBox: WinBox.WinBoxConstructor & {
    new: ((title: string, params?: WinBox.Params) => WinBox) | ((params: WinBox.Params) => WinBox);
};

export = WinBox;
