declare const CopyButton_base: any;
declare class CopyButton extends CopyButton_base {
    constructor(element: any, options: any);
    handleAnimationEnd(event: any): void;
    handleClick(): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        feedbackTooltip: string;
        classShowFeedback: string;
        classAnimating: string;
        classFadeIn: string;
        classFadeOut: string;
        timeoutValue: number;
    };
}
export default CopyButton;
