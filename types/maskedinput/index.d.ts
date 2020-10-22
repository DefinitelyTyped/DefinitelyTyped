// Type definitions for Masked Input plugin for jQuery
// Project: http://digitalbush.com/projects/masked-input-plugin
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="jquery" />

interface JQueryMaskedInputOptions {
    mask?: string;
    alias?: string;
    placeholder?: string;
    repeat?: number;
    greedy?: boolean;
    skipOptionalPartCharacter?: string;
    clearIncomplete?: boolean;
    clearMaskOnLostFocus?: boolean;
    autoUnmask?: boolean;
    showMaskOnFocus?: boolean;
    showMaskOnHover?: boolean;
    showToolTip?: boolean;
    isComplete?: (buffer: any, options: any) => {};
    numeric?: boolean;
    radixPoint?: string;
    rightAlignNumerics?: boolean;
    oncomplete?: (value?: any) => void;
    onincomplete?: () => void;
    oncleared?: () => void;
    onUnMask?: (maskedValue: any, unmaskedValue: any) => void;
    onBeforeMask?: (initialValue: any) => void;
    onKeyValidation?: (result: any) => void;
    onBeforePaste?: (pastedValue: any) => void;
}

interface MaskedInputStatic {
    defaults: MaskedInputDefaults;
    isValid: (value: string, options: MaskedInputStaticDefaults) => boolean;
    format: (value: string, options: MaskedInputStaticDefaults) => boolean;
}

interface MaskedInputStaticDefaults {
    alias: string;
}

interface MaskedInputDefaults {
    aliases: any;
    definitions: any;
}

interface JQueryStatic {
    mask: MaskedInputStatic;
}

interface JQuery {
    mask(mask: string, options?: JQueryMaskedInputOptions): JQuery;
}
