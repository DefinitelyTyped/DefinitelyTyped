declare const Tooltip_base: any;
declare class Tooltip extends Tooltip_base {
    constructor(element: any, options: any);
    _hasContextMenu: boolean;
    createdByEvent(event: any): void;
    changeState(state: any, detail: any, callback: any): void;
    _hookOn(element: any): void;
    _handleClick({ relatedTarget, type, hadContextMenu, details }: {
        relatedTarget: any;
        type: any;
        hadContextMenu: any;
        details: any;
    }): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorContent: string;
        classShown: string;
        attribTooltipTarget: string;
        objMenuOffset: (menuBody: any, menuDirection: any) => {
            [x: number]: number;
            left: number;
            top: number;
        } | undefined;
        initEventNames: string[];
    };
}
export default Tooltip;
