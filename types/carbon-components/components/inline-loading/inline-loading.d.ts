declare const InlineLoading_base: any;
declare class InlineLoading extends InlineLoading_base {
    constructor(element: any, options: any);
    setState(state: any): this;
    static states: {
        INACTIVE: string;
        ACTIVE: string;
        FINISHED: string;
        ERROR: string;
    };
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorSpinner: string;
        selectorFinished: string;
        selectorError: string;
        selectorTextActive: string;
        selectorTextFinished: string;
        selectorTextError: string;
        classLoadingStop: string;
    };
}
export default InlineLoading;
