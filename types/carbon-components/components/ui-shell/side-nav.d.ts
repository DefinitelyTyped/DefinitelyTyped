interface SideNavOptions {
    selectorInit: string;
    selectorSideNavToggle: string;
    selectorSideNavSubmenu: string;
    selectorSideNavItem: string;
    selectorSideNavLink: string;
    selectorSideNavLinkCurrent: string;
    classSideNavExpanded: string;
    classSideNavItemActive: string;
    classSideNavLinkCurrent: string;
}

declare const SideNav_base: any;
declare class SideNav extends SideNav_base {
    static components: WeakMap<object, any>;
    constructor(element: HTMLElement, options?: Partial<SideNavOptions>);
    static state: {
        EXPANDED: string;
        COLLAPSED: string;
    };
    isNavExpanded(): boolean;
    changeState(state: string): void;
    _handleClick: (evt: MouseEvent) => void;
    static options: SideNavOptions;
}
export default SideNav;
