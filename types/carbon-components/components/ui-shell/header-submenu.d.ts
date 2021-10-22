interface HeaderSubmenuOptions {
    selectorInit: string;
    selectorTrigger: string;
    selectorItem: string;
    attribExpanded: string;
}

declare const HeaderSubmenu_base: any;
declare class HeaderSubmenu extends HeaderSubmenu_base {
    constructor(element: HTMLElement, options?: Partial<HeaderSubmenuOptions>);
    static components: WeakMap<object, any>;
    static actions: {
        CLOSE_SUBMENU: string;
        OPEN_SUBMENU: string;
        TOGGLE_SUBMENU_WITH_FOCUS: string;
        DELEGATE_TO_FLYOUT_MENU: string;
    };
    _getAction: (event: Event) => null | string;
    _getNewState: (action: null | string) => boolean;
    _setState: ({
        shouldBeExpanded,
        shouldFocusOnOpen,
    }: {
        shouldBeExpanded: boolean;
        shouldFocusOnOpen: boolean;
    }) => void;
    getCurrentNavigation: () => null | Element;
    navigate: (direction: number) => void;
    _handleEvent: (event: MouseEvent) => void;
    _handleKeyDown: (event: KeyboardEvent) => void;
    static get options(): HeaderSubmenuOptions;
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}
export default HeaderSubmenu;
