declare const Toolbar_base: any;
declare class Toolbar extends Toolbar_base {
    constructor(element: any, options: any);
    _handleDocumentClick(event: any): void;
    _handleKeyDown(event: any): void;
    _handleRowHeightChange(event: any, boundTable: any): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorSearch: string;
        selectorRowHeight: string;
        classTallRows: string;
        classSearchActive: string;
    };
}
export default Toolbar;
