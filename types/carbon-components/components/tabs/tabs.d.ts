import ContentSwitcher from '../content-switcher/content-switcher';
declare class Tab extends ContentSwitcher {
    constructor(element: any, options: any);
    _changeState(detail: any, callback: any): void;
    _handleClick(event: any): void;
    _handleDocumentClick(event: any): void;
    _handleKeyDown(event: any): void;
    _updateMenuState(force: any): void;
    _updateTriggerText(target: any): void;
    static components: WeakMap<object, any>;
    static get options(): any;
    static NAVIGATE: {
        BACKWARD: number;
        FORWARD: number;
    };
}
export default Tab;
