import ContentSwitcher, { ContentSwitcherOptions } from "../content-switcher/content-switcher";

interface TabOptions extends ContentSwitcherOptions {
    selectorInit: string;
    selectorMenu: string;
    selectorTrigger: string;
    selectorTriggerText: string;
    selectorButton: string;
    selectorButtonEnabled: string;
    selectorButtonSelected: string;
    selectorLink: string;
    classActive: string;
    classHidden: string;
    classOpen: string;
    classButtonDisabled: string;
    eventBeforeSelected: string;
    eventAfterSelected: string;
}

declare class Tab extends ContentSwitcher {
    constructor(element: HTMLElement, options?: Partial<TabOptions>);
    _changeState(detail: { item: HTMLElement }, callback: (...params: any) => void): void;
    _handleClick(event: MouseEvent): void;
    _handleDocumentClick(event: MouseEvent): void;
    _handleKeyDown(event: KeyboardEvent): void;
    _updateMenuState(force?: boolean): void;
    _updateTriggerText(target: HTMLElement): void;
    static components: WeakMap<object, any>;
    static get options(): TabOptions;
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}
export default Tab;
