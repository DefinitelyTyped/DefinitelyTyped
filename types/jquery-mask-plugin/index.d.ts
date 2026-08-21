/// <reference types="jquery" />

declare namespace jQueryMask {
    interface Invalid {
        p: number;
        v: string;
        e: string;
    }

    interface Options {
        maskElements?: string | undefined;
        dataMaskAttr?: string | undefined;
        dataMask?: boolean | undefined;
        watchInterval?: number | undefined;
        watchInputs?: boolean | undefined;
        watchDataMask?: boolean | undefined;
        byPassKeys?: number[] | undefined;
        translation?: Translation | undefined;
        selectOnFocus?: boolean | undefined;
        reverse?: boolean | undefined;
        clearIfNotMatch?: boolean | undefined;
        placeholder?: string | undefined;
        onComplete?(value: string, e: Event, $element: JQuery, options: Options): void;
        onKeyPress?(value: string, e: Event, $element: JQuery, options: Options): void;
        onChange?(value: string, e: Event, $element: JQuery, options: Options): void;
        onInvalid?(value: string, e: Event, $element: JQuery, invalid: Invalid[], options: Options): void;
    }

    interface Pattern {
        pattern?: RegExp | undefined;
        recursive?: boolean | undefined;
        optional?: boolean | undefined;
        fallback?: string | undefined;
    }

    interface Translation {
        [key: string]: Pattern | {} | undefined;
        placeholder?: string | undefined;
    }
}

interface JQuery {
    /**
     * Applies the mask to the matching selector elements.
     * @param mask should be a string or a function.
     * @param options should be an options object.
     * @returns The element.
     */
    mask(mask: ((value: string) => string) | string, options?: jQueryMask.Options): JQuery;

    /**
     * Seek and destroy.
     * @returns The element.
     */
    unmask(): JQuery;

    /**
     * Gets the value of the field without the mask.
     * @returns Value without the mask.
     */
    cleanVal(): string;

    /**
     * Gets masked value programmatically
     * @returns Masked value.
     */
    masked(value: string): string;
}
