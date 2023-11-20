interface MenuObject {
    action?: ((e: Event) => void) | undefined;
    divider?: boolean | undefined;
    header?: string | undefined;
    href?: string | undefined;
    subMenu?: MenuObject[] | undefined;
    target?: string | undefined;
    text?: string | undefined;
}

interface InitSettings {
    above?: string | boolean | undefined;
    compress?: boolean | undefined;
    fadeSpeed?: number | undefined;
    filter?: ((e: Element) => void) | undefined;
    preventDoubleContext?: boolean | undefined;
}

declare namespace context {
    function init(settings?: InitSettings): void;
    function destroy(selector: any): void;
    function attach(selector: any, menuObjects: MenuObject[]): void;
    function settings(settings: InitSettings): void;
}

export = context;
