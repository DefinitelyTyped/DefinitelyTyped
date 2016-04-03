// Type definitions for Drop v0.5.7
// Project: http://github.hubspot.com/drop/
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../tether/tether.d.ts" />

declare module drop {

    interface DropStatic {
        new(options: IDropOptions): Drop;
        createContext(options: IDropContextOptions): DropStatic;
    }

    interface IDropContextOptions {
        classPrefix?: string;
        defaults?: IDropOptions;
    }

    interface IDropOptions {
        target?: Element;
        content?: Element | string | ((drop?: Drop) => string) | ((drop?: Drop) => Element);
        position?: string;
        openOn?: string;
        constrainToWindow?: boolean;
        constrainToScrollParent?: boolean;
        remove?: boolean;
        tetherOptions?: tether.ITetherOptions;
    }

    interface Drop {
        content: HTMLElement;
        element: HTMLElement;
        tether: tether.Tether;
        open(): void;
        close(): void;
        remove(): void;
        toggle(): void;
        position(): void;
        destroy(): void;
        /*
         * Drop instances fire "open" and "close" events.
         */
        on(event: string, handler: Function, context?: any): void;
        once(event: string, handler: Function, context?: any): void;
        off(event: string, handler?: Function): void;
    }

}

declare module "drop" {
    export = drop;
}

declare var Drop: drop.DropStatic;

