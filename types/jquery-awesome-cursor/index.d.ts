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
        color?: string | undefined;
        size?: number | undefined;
        hotspot?: number[] | string | undefined;
        flip?: flip | undefined;
        rotate?: number | undefined;
        outline?: string | undefined;
        font?: Font | undefined;
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
