export interface ContentSwitcherOptions {
    selectorInit: string;
    selectorButton: string;
    classActive: string;
    eventBeforeSelected: string;
    eventAfterSelected: string;
}

declare const ContentSwitcher_base: any;
declare class ContentSwitcher extends ContentSwitcher_base {
    constructor(element: HTMLElement, options?: Partial<ContentSwitcherOptions>);
    _handleClick(event: Event): void;
    _changeState({ item }: { item: HTMLElement }, callback?: () => void): void;
    setActive(item: HTMLElement, callback?: () => void): void;
    static components: WeakMap<object, any>;
    static get options(): ContentSwitcherOptions;
}
export default ContentSwitcher;
