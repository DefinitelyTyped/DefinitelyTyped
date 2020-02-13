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
    regex: undefined,
    oncomplete: () => {},
    onincomplete: () => {},
    oncleared: () => {},
    repeat: 0,
    greedy: false,
    autoUnmask: false,
    removeMaskOnSubmit: false,
    clearMaskOnLostFocus: true,
    insertMode: true,
    clearIncomplete: false,
    alias: undefined,
    onBeforeMask: undefined,
    onBeforePaste: (pastedValue: string, opts: Inputmask.Options) => pastedValue,
    onBeforeWrite: undefined,
    onUnMask: undefined,
    showMaskOnFocus: true,
    showMaskOnHover: true,
    onKeyValidation: () => {},
    skipOptionalPartCharacter: " ",
    numericInput: false,
    rightAlign: false,
    undoOnEscape: true,
    keepStatic: null,
    positionCaretOnTab: true,
    tabThrough: false,
    supportsInputType: [ "text", "tel", "url", "password", "search" ],
    ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
    isComplete: undefined,
    preValidation: undefined,
    postValidation: undefined,
    staticDefinitionSymbol: undefined,
    jitMasking: false,
    nullable: true,
    noValuePatching: false,
    casing: undefined,
    colorMask: false,
    disablePredictiveText: false,
    importDataAttributes: true,
    shiftPositions: true,
    digits: "*",
    digitsOptional: true,
    enforceDigitsOnBlur: false,
    radixPoint: ".",
    positionCaretOnClick: "radixFocus",
    groupSize: 3,
    groupSeparator: "",
    autoGroup: false,
    allowMinus: true,
    negationSymbol: {
        front: "-",
        back: ""
    },
    integerDigits: "+",
    integerOptional: true,
    prefix: "",
    suffix: "",
    decimalProtect: true,
    min: undefined,
    max: undefined,
    step: 1,
    unmaskAsNumber: false,
    inputType: "text",
    inputmode: "numeric",
    definitions: {
        X: {
            validator: "[xX]",
            casing: "upper"
        }
    }
});
