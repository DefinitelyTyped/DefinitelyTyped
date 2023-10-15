interface TooltipSimpleOptions {
    selectorInit: string;
    selectorTriggerButton: string;
    classTooltipHidden: string;
    classTooltipVisible: string;
}

declare const TooltipSimple_base: any;
export default class TooltipSimple extends TooltipSimple_base {
    constructor(element: HTMLElement, options?: Partial<TooltipSimpleOptions>);
    tooltipFadeOut: () => void;
    getTooltipTriggerButton: () => Element;
    allowTooltipVisibility: ({ visible }: { visible: boolean }) => void;
    static get options(): TooltipSimpleOptions;
    static components: WeakMap<object, any>;
}
export {};
