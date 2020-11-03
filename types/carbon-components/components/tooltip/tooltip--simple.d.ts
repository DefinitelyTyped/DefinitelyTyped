declare const TooltipSimple_base: any;
export default class TooltipSimple extends TooltipSimple_base {
    constructor(element: any, options: any);
    tooltipFadeOut: any;
    getTooltipTriggerButton: () => any;
    allowTooltipVisibility: ({ visible }: {
        visible: any;
    }) => void;
    static get options(): {
        selectorInit: string;
        selectorTriggerButton: string;
        classTooltipHidden: string;
        classTooltipVisible: string;
    };
    static components: WeakMap<object, any>;
}
export {};
