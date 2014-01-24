declare module Slick {

    export interface Column<T extends Slick.SlickData> {
        header: Header;
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

    export module Plugins {

        export class HeaderButtons<T extends Slick.SlickData> extends Plugin<T> {
            constructor();
            public onCommand: Slick.Event<any>;
        }
    }
}
