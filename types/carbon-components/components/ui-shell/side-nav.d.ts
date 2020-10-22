declare const SideNav_base: any;
declare class SideNav extends SideNav_base {
    static components: WeakMap<object, any>;
    constructor(element: any, options: any);
    static state: {
        EXPANDED: string;
        COLLAPSED: string;
    };
    isNavExpanded(): any;
    changeState(state: any): void;
    _handleClick: (evt: any) => void;
    static options: {
        selectorInit: string;
        selectorSideNavToggle: string;
        selectorSideNavSubmenu: string;
        selectorSideNavItem: string;
        selectorSideNavLink: string;
        selectorSideNavLinkCurrent: string;
        classSideNavExpanded: string;
        classSideNavItemActive: string;
        classSideNavLinkCurrent: string;
    };
}
export default SideNav;
