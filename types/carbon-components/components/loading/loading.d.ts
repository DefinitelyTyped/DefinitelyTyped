declare const Loading_base: any;
declare class Loading extends Loading_base {
    constructor(element: any, options: any);
    set(active: any): this;
    toggle(): this;
    isActive(): any;
    end(): void;
    _deleteElement(): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorLoadingOverlay: string;
        classLoadingOverlay: string;
        classLoadingStop: string;
        classLoadingOverlayStop: string;
        active: boolean;
    };
}
export default Loading;
