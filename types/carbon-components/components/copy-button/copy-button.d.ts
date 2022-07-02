interface CopyButtonOptions {
    selectorInit: string;
    feedbackTooltip: string;
    classShowFeedback: string;
    classAnimating: string;
    classFadeIn: string;
    classFadeOut: string;
    timeoutValue: number;
}

declare const CopyButton_base: any;
declare class CopyButton extends CopyButton_base {
    constructor(element: HTMLElement, options?: Partial<CopyButtonOptions>);
    handleAnimationEnd(event: AnimationEvent): void;
    handleClick(): void;
    static components: WeakMap<object, any>;
    static get options(): CopyButtonOptions;
}
export default CopyButton;
