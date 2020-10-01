import NavigationMenuPanel from './navigation-menu-panel';
export default class NavigationMenu extends NavigationMenuPanel {
    constructor(element: any, options: any);
    getCurrentNavigation: () => any;
    navigate: (direction: any) => void;
    _handleKeyDown: (event: any) => void;
    _handleFocusOut: (event: any) => void;
    changeNavSubmenuState: ({ matchesNavSubmenu, shouldBeCollapsed }: {
        matchesNavSubmenu: any;
        shouldBeCollapsed: any;
    }) => void;
    _handleClick: (event: any) => void;
    static components: WeakMap<object, any>;
    static get options(): any;
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}
