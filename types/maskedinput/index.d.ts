/// <reference types="jquery" />

interface JQueryMaskedInputOptions {
    mask?: string | undefined;
    alias?: string | undefined;
    placeholder?: string | undefined;
    repeat?: number | undefined;
    greedy?: boolean | undefined;
    skipOptionalPartCharacter?: string | undefined;
    clearIncomplete?: boolean | undefined;
    clearMaskOnLostFocus?: boolean | undefined;
    autoUnmask?: boolean | undefined;
    showMaskOnFocus?: boolean | undefined;
    showMaskOnHover?: boolean | undefined;
    showToolTip?: boolean | undefined;
    isComplete?: ((buffer: any, options: any) => {}) | undefined;
    numeric?: boolean | undefined;
    radixPoint?: string | undefined;
    rightAlignNumerics?: boolean | undefined;
    oncomplete?: ((value?: any) => void) | undefined;
    onincomplete?: (() => void) | undefined;
    oncleared?: (() => void) | undefined;
    onUnMask?: ((maskedValue: any, unmaskedValue: any) => void) | undefined;
    onBeforeMask?: ((initialValue: any) => void) | undefined;
    onKeyValidation?: ((result: any) => void) | undefined;
    onBeforePaste?: ((pastedValue: any) => void) | undefined;
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
