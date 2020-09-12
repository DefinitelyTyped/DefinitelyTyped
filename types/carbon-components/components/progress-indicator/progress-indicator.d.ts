declare const ProgressIndicator_base: any;
declare class ProgressIndicator extends ProgressIndicator_base {
    constructor(element: any, options: any);
    getSteps(): Array<{
        element: any;
        index: number;
    }>;
    getCurrent(): {
        element: any;
        index: number;
    };
    setCurrent(newCurrentStep?: any): void;
    _updateStep(args: any): void;
    _getSVGComplete(): string;
    _getCurrentSVG(): string;
    _getIncompleteSVG(): string;
    addOverflowTooltip(): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorStepElement: string;
        selectorCurrent: string;
        selectorIncomplete: string;
        selectorComplete: string;
        selectorLabel: string;
        selectorTooltip: string;
        selectorTooltipText: string;
        classStep: string;
        classComplete: string;
        classCurrent: string;
        classIncomplete: string;
        classOverflowLabel: string;
        classTooltipMulti: string;
        maxWidth: number;
        tooltipMaxHeight: number;
    };
}
export default ProgressIndicator;
