// Type definitions for Masked Input plugin for jQuery
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

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
    isComplete?: (buffer, options) => {};
    numeric?: boolean;
    radixPoint?: string;
    rightAlignNumerics?: boolean;
    oncomplete?: (value?: any) => void;
    onincomplete?: () => void;
    oncleared?: () => void;
    onUnMask?: (maskedValue, unmaskedValue) => void;
    onBeforeMask?: (initialValue) => void;
    onKeyValidation?: (result) => void;
    onBeforePaste?: (pastedValue) => void;
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
    aliases;
    definitions;
}

interface JQueryStatic {
    inputmask: MaskedInputStatic;
}

interface JQuery {
    inputmask(mask: string, options?: JQueryMaskedInputOptions): JQuery;
}