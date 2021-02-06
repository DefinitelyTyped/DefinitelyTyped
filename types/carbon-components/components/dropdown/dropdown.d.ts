interface DropdownOptions {
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
}

declare const Dropdown_base: any;
declare class Dropdown extends Dropdown_base {
    constructor(element: HTMLElement, options: DropdownOptions);
    _handleKeyDown(event: KeyboardEvent): void;
    _focusCleanup(): void;
    _updateFocus(itemToFocus: HTMLElement): void;
    _toggle(event: MouseEvent): void;
    getCurrentNavigation(): undefined | HTMLElement;
    navigate(direction: number): void;
    select(itemToSelect: HTMLElement): void;
    handleBlur(): void;
    static components: WeakMap<object, any>;
    static get options(): DropdownOptions;
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}
export default Dropdown;
