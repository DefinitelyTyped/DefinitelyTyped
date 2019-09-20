declare namespace jCaptcha {
    /**
     * Options for the base jCaptcha class. Derived from https://github.com/robiveli/js-captcha#options
     */
    interface Options {
        el?: string;

        requiredValue?: string;

        resetOnError?: boolean;
        focusOnError?: boolean;
        clearOnSubmit?: boolean;

        canvasWidth?: number;
        canvasHeight?: number;
        canvasFontSize?: string;
        canvasFontFamily?: string;
        canvasFillStyle?: string;

        callback?: (response: "success" | "error", input: NodeListOf<Element>) => void;
    }
}

declare class jCaptcha {
    constructor(options?: jCaptcha.Options);

    validate(): void;
    reset(): void;
}

export = jCaptcha;
export as namespace jCaptcha;
