declare const StructuredList_base: any;
declare class StructuredList extends StructuredList_base {
    constructor(element: any, options: any);
    _direction(evt: any): any;
    _nextIndex(array: any, arrayItem: any, direction: any): any;
    _getInput(index: any): any;
    _handleInputChecked(index: any): void;
    _handleClick(evt: any): void;
    _handleKeydownChecked(evt: any): void;
    _handleKeydownArrow(evt: any): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorRow: string;
        selectorListInput: (id: any) => string;
        classActive: string;
    };
}
export default StructuredList;
