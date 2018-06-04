// Type definitions for jquery-awesome-cursor 0.3
// Project: https://jwarby.github.io/jquery-awesome-cursor
// Definitions by: Zsolt Kovács <https://github.com/zskovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
declare namespace JQueryAwesomeCursor {
    type flip = "horizontal" | "vertical" | "both";
    type cssHandler = (name: string) => void;

    interface Options {
        color?: string;
        size?: number;
        hotspot?: number[] | string;
        flip?: flip;
        rotate?: number;
        outline?: string;
        font?: Font;
    }

    interface Font {
        family: string;
        cssClass: string | cssHandler;
    }
}

interface JQueryStatic {
    awesomeCursor(icon: string, options?: JQueryAwesomeCursor.Options): JQuery;
}

interface JQuery {
    awesomeCursor(icon: string, options?: JQueryAwesomeCursor.Options): JQuery;
}
