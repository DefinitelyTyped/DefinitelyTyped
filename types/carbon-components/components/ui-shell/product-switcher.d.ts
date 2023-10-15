import NavigationMenuPanel, { NavigationMenuPanelOptions } from "./navigation-menu-panel";

interface ProductSwitcherOptions extends NavigationMenuPanelOptions {
    selectorInit: string;
    selectorFloatingMenus: string;
    attribInitTarget: string;
    classProductSwitcherExpanded: string;
}

declare class ProductSwitcher extends NavigationMenuPanel {
    constructor(element: HTMLElement, options?: Partial<ProductSwitcherOptions>);
    current: string;
    static SELECT_NONE: string;
    triggerButtonIds: Set<unknown>;
    _handleFocusOut: (event: FocusEvent) => void;
    _handleKeyDown: (event: KeyboardEvent) => void;
    createdByLauncher: (event: any) => void;
    shouldStateBeChanged: (current: any) => boolean;
    _changeState: (state: any, callback: any) => void;
    release(): any;
    static components: WeakMap<object, any>;
    static get options(): ProductSwitcherOptions;
}
export default ProductSwitcher;
