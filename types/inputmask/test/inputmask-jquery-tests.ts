/// <reference types="jquery" />

$("#testmask").inputmask("remove");

$(":input").inputmask();

let value: string = $("#testmask").inputmask("unmaskedvalue");

$("#testmask").inputmask({
    mask: "(999) 999-9999",
    placeholder: "_",
    optionalmarker: [ "[", "]" ],
    quantifiermarker: [ "{", "}" ],
    groupmarker: [ "(", ")" ],
    alternatormarker: "|",
    escapeChar: "\\",
    regex: "[0-9]*",
    oncomplete: () => {},
    onincomplete: () => {},
    oncleared: () => {},
    repeat: 0,
    greedy: false,
    autoUnmask: false,
    removeMaskOnSubmit: false,
    clearMaskOnLostFocus: true,
    insertMode: true,
    insertModeVisual: true,
    clearIncomplete: false,
    alias: "email",
    onKeyDown: (e: KeyboardEvent, buffer: string[], caretPos: { begin: number, end: number }, opts: Inputmask.Options) => {},
    onBeforeMask: (value: string, opts: Inputmask.Options) => "processed",
    onBeforePaste: (pastedValue: string, opts: Inputmask.Options) => pastedValue,
    onBeforeWrite: undefined,
    onUnMask: (maskedValue: string, unmaskedValue: string) => unmaskedValue,
    showMaskOnFocus: true,
    showMaskOnHover: true,
    onKeyValidation: (key: number, result: boolean) => {},
    skipOptionalPartCharacter: " ",
    numericInput: false,
    rightAlign: false,
    undoOnEscape: true,
    keepStatic: null,
    positionCaretOnTab: true,
    tabThrough: false,
    supportsInputType: [ "text", "tel", "url", "password", "search" ],
    ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
    isComplete: (buffer, opts) => true,
    preValidation: (buffer, pos, c, isSelection, opts, maskset, caretPos, strict) => true,
    postValidation: (buffer, pos, c, currentResult, opts, maskset, strict) => true,
    staticDefinitionSymbol: "*",
    jitMasking: false,
    nullable: true,
    noValuePatching: false,
    casing: "lower",
    importDataAttributes: true,
    shiftPositions: true,
    usePrototypeDefinitions: true,
    digits: "*",
    digitsOptional: true,
    enforceDigitsOnBlur: false,
    radixPoint: ".",
    positionCaretOnClick: "radixFocus",
    groupSeparator: "",
    allowMinus: true,
    negationSymbol: {
        front: "-",
        back: ""
    },
    prefix: "",
    suffix: "",
    min: 125,
    max: "875",
    SetMaxOnOverflow: false,
    step: 1,
    unmaskAsNumber: false,
    inputType: "text",
    inputmode: "numeric",
    roundingFN: Math.round,
    shortcuts: {k: "000", m: "000000"},
    definitions: {
        X: {
            validator: "[xX]",
            casing: "upper"
        },
        "-": {
            validator: (chrs, maskset, pos, strict, opts) => {
                return !!opts.allowMinus;
            }
        }
    }
});
