interface ProgressIndicatorOptions {
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
}

declare const ProgressIndicator_base: any;
declare class ProgressIndicator extends ProgressIndicator_base {
    constructor(element: HTMLElement, options?: Partial<ProgressIndicatorOptions>);
    getSteps(): Array<{
        element: HTMLElement;
        index: number;
    }>;
    getCurrent(): {
        element: HTMLElement;
        index: number;
    };
    setCurrent(newCurrentStep?: number): void;
    _updateStep(args: { element: HTMLElement; className: string; html: string }): void;
    _getSVGComplete(): string;
    _getCurrentSVG(): string;
    _getIncompleteSVG(): string;
    addOverflowTooltip(): void;
    static components: WeakMap<object, any>;
    static get options(): ProgressIndicatorOptions;
}
export default ProgressIndicator;
