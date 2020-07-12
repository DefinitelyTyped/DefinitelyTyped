declare const ContentSwitcher_base: any;
declare class ContentSwitcher extends ContentSwitcher_base {
    constructor(element: any, options: any);
    _handleClick(event: any): void;
    _changeState({ item }: {
        item: any;
    }, callback: any): void;
    setActive(item: any, callback: any): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorButton: string;
        classActive: string;
        eventBeforeSelected: string;
        eventAfterSelected: string;
    };
}
export default ContentSwitcher;
