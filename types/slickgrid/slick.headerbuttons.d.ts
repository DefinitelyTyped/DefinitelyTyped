declare namespace Slick {
    export interface Column<T extends SlickData> {
        header?: Header;
    }

    export interface Header {
        buttons: HeaderButton[];
    }

    export interface HeaderButton {
        command?: string;
        cssClass?: string;
        handler?: Function;
        image?: string;
        showOnHover?: boolean;
        tooltip?: string;
    }

    export interface OnCommandEventArgs<T extends SlickData> {
        grid: Grid<T>;
        column: Column<T>;
        command: string;
        button: HeaderButton;
    }

    export namespace Plugins {
        export class HeaderButtons<T extends SlickData> extends Plugin<T> {
            constructor();
            public onCommand: Event<OnCommandEventArgs<T>>;
        }
    }
}
