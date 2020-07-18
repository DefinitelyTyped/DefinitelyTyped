Inputmask({
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
}).mask("selector");

Inputmask("9-a{1,3}9{1,3}").mask("selector");
Inputmask("9", { repeat: 10 }).mask("selector");

Inputmask({ regex: "\\d*" }).mask("selector");
Inputmask({ regex: String.raw`\d*` }).mask("selector");

function testMask() {
    const inputElement = document.querySelector("input");
    if (inputElement) {
        Inputmask().mask(inputElement);
        Inputmask().mask([inputElement, inputElement]);
        Inputmask().mask(document.querySelectorAll("input"));
        Inputmask().mask(document.getElementsByTagName("input"));
    }
}

Inputmask.extendDefaults({
    autoUnmask: true
});
Inputmask.extendDefinitions({
    A: {
        validator: "[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
        casing: "upper"
    },
    '+': {
        validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
        casing: "upper"
    }
});
Inputmask.extendAliases({
    numeric: {
        mask: "r",
        greedy: false
    }
});

Inputmask.extendDefinitions({
    f: {
        validator: "[0-9\(\)\.\+/ ]"
    },
    j: {
        validator: "(19|20)\\d{2}"
    },
    x: {
        validator: "[0-2]",
        definitionSymbol: "i"
    },
    y: {
        validator: (chrs: string, buffer: string[], pos: number) => {
            const valExp2 = new RegExp("2[0-5]|[01][0-9]");
            return valExp2.test(buffer[pos - 1] + chrs);
        },
        definitionSymbol: "i"
    },
    z: {
        validator: (chrs: string, buffer: string[], pos: number) => {
            const valExp3 = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
            return valExp3.test(buffer[pos - 2] + buffer[pos - 1] + chrs);
        },
        definitionSymbol: "i"
    }
});

function testElement(el: HTMLElement) {
    const id: string = el.id;
    if (el.inputmask) {
        const unmasked: string = el.inputmask.unmaskedvalue();
    }
}
