interface TooltipOptions {
    selectorInit: string;
    selectorContent: string;
    classShown: string;
    attribTooltipTarget: string;
    objMenuOffset: (
        menuBody: Element,
        menuDirection: string,
    ) =>
        | {
            [x: number]: number;
            left: number;
            top: number;
        }
        | undefined;
    initEventNames: string[];
}

declare const Tooltip_base: any;
declare class Tooltip extends Tooltip_base {
    constructor(element: HTMLElement, options?: Partial<TooltipOptions>);
    _hasContextMenu: boolean;
    createdByEvent(event: Event): void;
    changeState(state: string, detail: object, callback?: () => void): void;
    _hookOn(element: HTMLElement): void;
    _handleClick({
        relatedTarget,
        type,
        hadContextMenu,
        details,
    }: {
        relatedTarget: Element;
        type: string;
        hadContextMenu: boolean;
        details: object;
    }): void;
    static components: WeakMap<object, any>;
    static get options(): TooltipOptions;
}
export default Tooltip;
