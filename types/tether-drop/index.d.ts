import Tether = require("tether");

export = Drop;
export as namespace Drop;

// global Drop constructor
declare class Drop {
    constructor(options: Drop.IDropOptions);

    public content: HTMLElement;
    public tether: Tether;
    public open(): void;
    public close(): void;
    public remove(): void;
    public toggle(): void;
    public isOpened(): boolean;
    public position(): void;
    public destroy(): void;

    /*
     * Drop instances fire "open" and "close" events.
     */
    public on(event: string, handler: Function, context?: any): void;
    public once(event: string, handler: Function, context?: any): void;
    public off(event: string, handler?: Function): void;

    public static createContext(options: Drop.IDropContextOptions): typeof Drop;
}

declare namespace Drop {
    interface IDropContextOptions {
        classPrefix?: string | undefined;
        defaults?: IDropOptions | undefined;
    }

    interface IDropOptions {
        target?: Element | undefined;
        content?: Element | string | ((drop?: Drop) => string) | ((drop?: Drop) => Element) | undefined;
        position?: string | undefined;
        openOn?: string | undefined;
        classes?: string | undefined;
        constrainToWindow?: boolean | undefined;
        constrainToScrollParent?: boolean | undefined;
        remove?: boolean | undefined;
        beforeClose?: ((event: Event, drop: Drop) => boolean) | undefined;
        openDelay?: number | undefined;
        closeDelay?: number | undefined;
        focusDelay?: number | undefined;
        blurDelay?: number | undefined;
        hoverOpenDelay?: number | undefined;
        hoverCloseDelay?: number | undefined;
        tetherOptions?: Tether.ITetherOptions | undefined;
    }
}
