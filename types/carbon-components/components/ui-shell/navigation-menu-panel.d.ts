declare const NavigationMenuPanel_base: any;
export default class NavigationMenuPanel extends NavigationMenuPanel_base {
    createdByLauncher: (event: any) => void;
    shouldStateBeChanged: (state: any) => boolean;
    _changeState: (state: any, callback: any) => void;
    static components: WeakMap<object, any>;
    static get options(): {
        initEventNames: string[];
        eventBeforeExpanded: string;
        eventAfterExpanded: string;
        eventBeforeCollapsed: string;
        eventAfterCollapsed: string;
        selectorFocusableMenuItem: string;
        classNavigationMenuPanelHeaderActionActive: string;
        attribLabelExpand: string;
        attribLabelCollapse: string;
    };
}
export {};
