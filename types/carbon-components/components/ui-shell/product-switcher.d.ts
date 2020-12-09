import NavigationMenuPanel from './navigation-menu-panel';
declare class ProductSwitcher extends NavigationMenuPanel {
    constructor(element: any, options: any);
    current: string;
    static SELECT_NONE: string;
    triggerButtonIds: Set<unknown>;
    _handleFocusOut: (event: any) => void;
    _handleKeyDown: (event: any) => void;
    createdByLauncher: (event: any) => void;
    shouldStateBeChanged: (current: any) => boolean;
    _changeState: (state: any, callback: any) => void;
    release(): any;
    static components: WeakMap<object, any>;
    static get options(): any;
}
export default ProductSwitcher;
