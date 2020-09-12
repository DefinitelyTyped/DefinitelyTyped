// Type definitions for js-captcha 1.3
// Project: https://github.com/robiveli/js-captcha
// Definitions by: PikachuEXE <https://github.com/pikachuexe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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

        canvasClass?: string;
        canvasStyle: {
            width?: number;
            height?: number;

            font?: string;
            fillStyle?: string;
            textAlign?: string;
            textBaseline?: string;
        };

        callback?: (response: "success" | "error", captcha: Element, numberOfTries: number) => void;
    }
}

declare class jCaptcha {
    constructor(options?: jCaptcha.Options);

    validate(): void;
    reset(): void;
}

export as namespace jCaptcha;
export = jCaptcha;
