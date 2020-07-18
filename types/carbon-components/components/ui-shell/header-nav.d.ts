declare const HeaderNav_base: any;
declare class HeaderNav extends HeaderNav_base {
    constructor(element: any, options: any);
    static components: WeakMap<object, any>;
    getCurrentNavigation: () => any;
    navigate: (direction: any) => void;
    _handleKeyDown: (event: any) => void;
    static get options(): {
        selectorInit: string;
        selectorNavKind: string;
        selectorSubmenu: string;
        selectorSubmenuLink: string;
        selectorSubmenuItem: string;
    };
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}
export default HeaderNav;
