interface LoadingOptions {
    selectorInit: string;
    selectorLoadingOverlay: string;
    classLoadingOverlay: string;
    classLoadingStop: string;
    classLoadingOverlayStop: string;
    active: boolean;
}

declare const Loading_base: any;
declare class Loading extends Loading_base {
    constructor(element: HTMLElement, options?: Partial<LoadingOptions>);
    set(active: boolean): this;
    toggle(): this;
    isActive(): boolean;
    end(): void;
    _deleteElement(): void;
    static components: WeakMap<object, any>;
    static get options(): LoadingOptions;
}
export default Loading;
