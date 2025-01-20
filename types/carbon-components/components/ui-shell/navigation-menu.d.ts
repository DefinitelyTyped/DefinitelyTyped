import NavigationMenuPanel, { NavigationMenuPanelOptions } from "./navigation-menu-panel";

interface NavigationMenuOptions extends NavigationMenuPanelOptions {
    selectorInit: string;
    attribInitTarget: string;
    selectorShellNavSubmenu: string;
    selectorShellNavLink: string;
    selectorShellNestedNavLink: string;
    selectorShellNavLinkCurrent: string;
    selectorFocusableNavItems: string;
    selectorShellNavItem: string;
    selectorShellNavCategory: string;
    selectorShellNavNestedCategory: string;
    classShellNavItemActive: string;
    classShellNavLinkCurrent: string;
    classShellNavCategoryExpanded: string;
}

export default class NavigationMenu extends NavigationMenuPanel {
    constructor(element: HTMLElement, options?: Partial<NavigationMenuOptions>);
    getCurrentNavigation: () => Element;
    navigate: (direction: number) => void;
    _handleKeyDown: (event: KeyboardEvent) => void;
    _handleFocusOut: (event: FocusEvent) => void;
    changeNavSubmenuState: ({
        matchesNavSubmenu,
        shouldBeCollapsed,
    }: {
        matchesNavSubmenu: Element;
        shouldBeCollapsed: boolean;
    }) => void;
    _handleClick: (event: MouseEvent) => void;
    static components: WeakMap<object, any>;
    static get options(): NavigationMenuOptions;
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}

export {};
