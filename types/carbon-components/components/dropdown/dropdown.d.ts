declare const Dropdown_base: any;
declare class Dropdown extends Dropdown_base {
    constructor(element: any, options: any);
    _handleKeyDown(event: any): void;
    _focusCleanup(): void;
    _updateFocus(itemToFocus: any): void;
    _toggle(event: any): void;
    getCurrentNavigation(): any;
    navigate(direction: any): void;
    select(itemToSelect: any): void;
    handleBlur(): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorTrigger: string;
        selectorMenu: string;
        selectorText: string;
        selectorTextInner: string;
        selectorItem: string;
        selectorItemSelected: string;
        selectorItemFocused: string;
        selectorItemHidden: string;
        selectorLinkSelected: string;
        classShowSelected: string;
        classSelected: string;
        classFocused: string;
        classOpen: string;
        classDisabled: string;
        eventBeforeSelected: string;
        eventAfterSelected: string;
    };
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}
export default Dropdown;
