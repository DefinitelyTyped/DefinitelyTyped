export interface NavigationMenuPanelOptions {
    initEventNames: string[];
    eventBeforeExpanded: string;
    eventAfterExpanded: string;
    eventBeforeCollapsed: string;
    eventAfterCollapsed: string;
    selectorFocusableMenuItem: string;
    classNavigationMenuPanelHeaderActionActive: string;
    attribLabelExpand: string;
    attribLabelCollapse: string;
}

declare const NavigationMenuPanel_base: any;
export default class NavigationMenuPanel extends NavigationMenuPanel_base {
    createdByLauncher: (event: Event) => void;
    shouldStateBeChanged: (state: string) => boolean;
    _changeState: (state: string, callback: () => void) => void;
    static components: WeakMap<object, any>;
    static get options(): NavigationMenuPanelOptions;
}
export {};
