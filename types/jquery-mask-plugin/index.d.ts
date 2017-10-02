// Type definitions for jQuery Mask Plugin 1.14
// Project: https://igorescobar.github.io/jQuery-Mask-Plugin/
// Definitions by: Anže Videnič <https://github.com/avidenic>, Igor Escobar <http://www.igorescobar.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace jQueryMask {
    interface Invalid {
        p: number;
        v: string;
        e: string;
    }

    interface Options {
        maskElements?: string;
        dataMaskAttr?: string;
        dataMask?: boolean;
        watchInterval?: number;
        watchInputs?: boolean;
        watchDataMask?: boolean;
        byPassKeys?: number[];
        translation?: Translation;
        selectOnFocus?: boolean;
        reverse?: boolean;
        clearIfNotMatch?: boolean;
        onComplete?(value: string, e: Event, $element: JQuery, options: Options): void;
        onKeyPress?(value: string, e: Event, $element: JQuery, options: Options): void;
        onChange?(value: string, e: Event, $element: JQuery, options: Options): void;
        onInvalid?(value: string, e: Event, $element: JQuery, invalid: Invalid[], options: Options): void;
    }

    interface Pattern {
        pattern?: RegExp;
        recursive?: boolean;
        optional?: boolean;
        fallback?: string;
    }

    interface Translation {
        [key: string]: Pattern | {} | undefined;
        placeholder?: string;
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
