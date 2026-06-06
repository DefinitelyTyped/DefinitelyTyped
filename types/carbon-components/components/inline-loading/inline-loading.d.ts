interface InlineLoadingOptions {
    selectorInit: string;
    selectorSpinner: string;
    selectorFinished: string;
    selectorError: string;
    selectorTextActive: string;
    selectorTextFinished: string;
    selectorTextError: string;
    classLoadingStop: string;
}

declare const InlineLoading_base: any;
declare class InlineLoading extends InlineLoading_base {
    constructor(element: HTMLElement, options?: Partial<InlineLoadingOptions>);
    setState(state: string): this;
    static states: {
        INACTIVE: string;
        ACTIVE: string;
        FINISHED: string;
        ERROR: string;
    };
    static components: WeakMap<object, any>;
    static get options(): InlineLoadingOptions;
}
export default InlineLoading;
