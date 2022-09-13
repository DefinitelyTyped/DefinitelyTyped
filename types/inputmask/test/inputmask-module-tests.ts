import Inputmask from 'inputmask';

Inputmask({
    mask: '(999) 999-9999',
    placeholder: '_',
    optionalmarker: ['[', ']'],
    quantifiermarker: ['{', '}'],
    groupmarker: ['(', ')'],
    alternatormarker: '|',
    escapeChar: '\\',
    regex: '[0-9]*',
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
    alias: 'email',
    onKeyDown: (
        e: KeyboardEvent,
        buffer: string[],
        caretPos: { begin: number; end: number },
        opts: Inputmask.Options,
    ) => {},
    onBeforeMask: (value: string, opts: Inputmask.Options) => 'processed',
    onBeforePaste: (pastedValue: string, opts: Inputmask.Options) => pastedValue,
    onBeforeWrite: undefined,
    onUnMask: (maskedValue: string, unmaskedValue: string) => unmaskedValue,
    showMaskOnFocus: true,
    showMaskOnHover: true,
    onKeyValidation: (key: number, result: boolean) => {},
    skipOptionalPartCharacter: ' ',
    numericInput: false,
    rightAlign: false,
    undoOnEscape: true,
    keepStatic: null,
    positionCaretOnTab: true,
    tabThrough: false,
    supportsInputType: ['text', 'tel', 'url', 'password', 'search'],
    ignorables: [
        8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
        122, 123, 0, 229,
    ],
    isComplete: (buffer, opts) => true,
    preValidation: (buffer, pos, c, isSelection, opts, maskset, caretPos, strict) => true,
    postValidation: (buffer, pos, c, currentResult, opts, maskset, strict) => true,
    staticDefinitionSymbol: '*',
    jitMasking: false,
    nullable: true,
    noValuePatching: false,
    casing: 'lower',
    importDataAttributes: true,
    shiftPositions: true,
    usePrototypeDefinitions: true,
    digits: '*',
    digitsOptional: true,
    enforceDigitsOnBlur: false,
    radixPoint: '.',
    positionCaretOnClick: 'radixFocus',
    groupSeparator: '',
    allowMinus: true,
    negationSymbol: {
        front: '-',
        back: '',
    },
    prefix: '',
    suffix: '',
    min: 125,
    max: '875',
    SetMaxOnOverflow: false,
    step: 1,
    unmaskAsNumber: false,
    inputType: 'text',
    inputmode: 'numeric',
    roundingFN: Math.round,
    shortcuts: { k: '000', m: '000000' },
    definitions: {
        X: {
            validator: '[xX]',
            casing: 'upper',
        },
        '-': {
            validator: (chrs, maskset, pos, strict, opts) => {
                return !!opts.allowMinus;
            },
        },
    },
}).mask('selector');

Inputmask('9-a{1,3}9{1,3}').mask('selector');
Inputmask('9', { repeat: 10 }).mask('selector');

Inputmask({ regex: '\\d*' }).mask('selector');
Inputmask({ regex: String.raw`\d*` }).mask('selector');

function testMask() {
    const inputElement = document.querySelector('input');
    if (inputElement) {
        Inputmask().mask(inputElement);
        Inputmask().mask([inputElement, inputElement]);
        Inputmask().mask(document.querySelectorAll('input'));
        Inputmask().mask(document.getElementsByTagName('input'));
    }
}

Inputmask.extendDefaults({
    autoUnmask: true,
});
Inputmask.extendDefinitions({
    A: {
        validator: '[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]',
        casing: 'upper',
    },
    '+': {
        validator: '[0-9A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]',
        casing: 'upper',
    },
});
Inputmask.extendAliases({
    numeric: {
        mask: 'r',
        greedy: false,
    },
});

Inputmask.extendDefinitions({
    f: {
        validator: '[0-9().+/ ]',
    },
    j: {
        validator: '(19|20)\\d{2}',
    },
    x: {
        validator: '[0-2]',
        definitionSymbol: 'i',
    },
    y: {
        validator: (chrs: string, maskset: any, pos: number) => {
            const valExp2 = new RegExp('2[0-5]|[01][0-9]');
            return valExp2.test(maskset.buffer[pos - 1] + chrs);
        },
        definitionSymbol: 'i',
    },
    z: {
        validator: (chrs: string, maskset: any, pos: number) => {
            const valExp3 = new RegExp('25[0-5]|2[0-4][0-9]|[01][0-9][0-9]');
            return valExp3.test(maskset.buffer[pos - 2] + maskset.buffer[pos - 1] + chrs);
        },
        definitionSymbol: 'i',
    },
});

function testElement(el: HTMLElement) {
    const id: string = el.id;
    if (el.inputmask) {
        const unmasked: string = el.inputmask.unmaskedvalue();
    }
}
