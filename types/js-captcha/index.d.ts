declare namespace jCaptcha {
    /**
     * Options for the base jCaptcha class. Derived from https://github.com/robiveli/js-captcha#options
     */
    interface Options {
        el?: string | undefined;

        requiredValue?: string | undefined;

        resetOnError?: boolean | undefined;
        focusOnError?: boolean | undefined;
        clearOnSubmit?: boolean | undefined;

        canvasClass?: string | undefined;
        canvasStyle: {
            width?: number | undefined;
            height?: number | undefined;

            font?: string | undefined;
            fillStyle?: string | undefined;
            textAlign?: string | undefined;
            textBaseline?: string | undefined;
        };

        callback?: ((response: "success" | "error", captcha: Element, numberOfTries: number) => void) | undefined;
    }
}

declare class jCaptcha {
    constructor(options?: jCaptcha.Options);

    validate(): void;
    reset(): void;
}

export as namespace jCaptcha;
export = jCaptcha;
