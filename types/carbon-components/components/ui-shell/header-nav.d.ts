interface HeaderNavOptions {
    selectorInit: string;
    selectorNavKind: string;
    selectorSubmenu: string;
    selectorSubmenuLink: string;
    selectorSubmenuItem: string;
}

declare const HeaderNav_base: any;
declare class HeaderNav extends HeaderNav_base {
    constructor(element: HTMLElement, options?: HeaderNavOptions);
    static components: WeakMap<object, any>;
    getCurrentNavigation: () => null | Element;
    navigate: (direction: number) => void;
    _handleKeyDown: (event: KeyboardEvent) => void;
    static get options(): HeaderNavOptions;
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}
export default HeaderNav;
