// Type definitions for contextjs 2.1.1
// Project: https://github.com/jakiestfu/Context.js
// Definitions by: Kern Handa <https://github.com/kernhanda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface MenuObject {
    action?: (e: Event) => void;
    divider?: boolean;
    header?: string;
    href?: string;
    subMenu?: MenuObject[];
    target?: string;
    text?: string;
}

interface InitSettings {
    above?: string | boolean;
    compress?: boolean;
    fadeSpeed?: number;
    filter?: (e: Element) => void;
    preventDoubleContext?: boolean;
}

declare namespace context {
    function init(settings?: InitSettings): void;
    function destroy(selector: any): void;
    function attach(selector: any, menuObjects: MenuObject[]): void;
    function settings(settings: InitSettings): void;
}

export = context;
