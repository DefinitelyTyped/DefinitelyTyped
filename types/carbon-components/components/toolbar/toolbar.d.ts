interface ToolbarOptions {
    selectorInit: string;
    selectorSearch: string;
    selectorRowHeight: string;
    classTallRows: string;
    classSearchActive: string;
}

declare const Toolbar_base: any;
declare class Toolbar extends Toolbar_base {
    constructor(element: HTMLElement, options?: Partial<ToolbarOptions>);
    _handleDocumentClick(event: MouseEvent): void;
    _handleKeyDown(event: KeyboardEvent): void;
    _handleRowHeightChange(event: MouseEvent, boundTable: HTMLElement): void;
    static components: WeakMap<object, any>;
    static get options(): ToolbarOptions;
}
export default Toolbar;
