declare const HeaderSubmenu_base: any;
declare class HeaderSubmenu extends HeaderSubmenu_base {
    constructor(element: any, options: any);
    static components: WeakMap<object, any>;
    static actions: {
        CLOSE_SUBMENU: string;
        OPEN_SUBMENU: string;
        TOGGLE_SUBMENU_WITH_FOCUS: string;
        DELEGATE_TO_FLYOUT_MENU: string;
    };
    _getAction: (event: any) => any;
    _getNewState: (action: any) => boolean;
    _setState: ({ shouldBeExpanded, shouldFocusOnOpen }: {
        shouldBeExpanded: any;
        shouldFocusOnOpen: any;
    }) => void;
    getCurrentNavigation: () => any;
    navigate: (direction: any) => void;
    _handleEvent: (event: any) => void;
    _handleKeyDown: (event: any) => void;
    static get options(): {
        selectorInit: string;
        selectorTrigger: string;
        selectorItem: string;
        attribExpanded: string;
    };
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}
export default HeaderSubmenu;
