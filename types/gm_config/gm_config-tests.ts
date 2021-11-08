// Testing GM_config (and by extension GM_configStruct)
GM_config.init({
    id: 'MyConfig',
    title: 'Script Settings',
    fields: {
        Name: {
            label: 'Name',
            type: 'text',
            default: 'DefinitelyTyped',
        },
    },
    css: '#MyConfig_section_0 { display: none !important; }',
});

new GM_configStruct({
    id: 'MyConfig',
    title: 'Script Settings',
    fields: {
        Name: {
            label: 'Name',
            type: 'text',
            default: 'DefinitelyTyped',
        },
    },
    css: '#MyConfig_section_0 { display: none !important; }',
});

GM_config.open(); // $ExpectType void
GM_config.close(); // $ExpectType void

const username = GM_config.get('Name');
GM_config.set('Name', '@types/gm_config'); // $ExpectType void

GM_config.save(); // $ExpectType void

GM_config.create(); // $ExpectType HTMLElement

GM_config.center(); // $ExpectType void

GM_config.remove(document.createElement('a')); // $ExpectType void

GM_config.isGM; // $ExpectType boolean

GM_config.setValue('Name', 'DefinitelyTyped'); // $ExpectType void | Promise<void>

GM_config.stringify({ message: 'Hello, World!' }); // $ExpectType string

GM_config.parser('{"message":"Hello, World!"}'); // $ExpectType any

GM_config.log('Hello, World!'); // $ExpectType void

GM_config.id; // $ExpectType string

GM_config.title; // $ExpectType string

GM_config.css.basic; // $ExpectType string[]
GM_config.css.basicPrefix; // $ExpectType string
GM_config.css.stylish; // $ExpectType string

GM_config.frame; // $ExpectType HTMLElement | undefined

GM_config.fields; // $ExpectType Record<string, GM_configField>

GM_config.onInit; // $ExpectType ((this: GM_configStruct) => void) | undefined
GM_config.onOpen; // $ExpectType ((this: GM_configStruct, document: Document, window: Window, frame: HTMLElement) => void) | undefined
GM_config.onSave; // $ExpectType ((this: GM_configStruct, values: any) => void) | undefined
GM_config.onClose; // $ExpectType ((this: GM_configStruct) => void) | undefined
GM_config.onReset; // $ExpectType ((this: GM_configStruct) => void) | undefined

GM_config.isOpen; // $ExpectType boolean

// Testing GM_configField
const myField = new GM_configField(
    {
        label: 'My Field',
        type: 'text',
        default: 'Default Text',
    },
    undefined,
    'MyField',
    undefined,
    'MyConfig',
);

myField.settings; // $ExpectType Field<never>

myField.id; // $ExpectType string

myField.configId; // $ExpectType string

myField.node; // $ExpectType HTMLElement | null

myField.wrapper; // $ExpectType HTMLElement | null

myField.save; // $ExpectType boolean

myField.create(); // $ExpectType HTMLElement

myField.toNode(); // $ExpectType HTMLElement

myField.reset(); // $ExpectType void

myField.remove(); // $ExpectType void

myField.reload(); // $ExpectType void

myField._checkNumberRange(42, '/!\\'); // $ExpectType true | null

// Testing custom types
const myType: CustomType = {
    default: null,
    toNode() {
        return document.createElement('a');
    },
    toValue() {
        return 12;
    },
    reset() {},
};

const customTypesConfig = new GM_configStruct({
    id: 'TestingCustomTypes',
    fields: {
        MyField: {
            type: 'myType',
        },
    },
    types: {
        myType,
    },
});

// Missing the types key for custom type 'myMissingType'
// $ExpectError
new GM_configStruct({
    id: 'MissingCustomTypes1',
    fields: {
        MyField: {
            type: 'myMissingType',
        },
    },
});

// Types key is empty when it should have a key for 'myMissingType'
// Object defined up here to avoid causing the error to occur on different lines
const emptyTypesObject = {
    id: 'MissingCustomTypes2',
    fields: {
        MyField: {
            // `as const` is required here to avoid the type being "string," which is generic enough not to cause errors
            // Directly passing this object to GM_configStruct instead of making it a const first would avoid this problem,
            // but dtslint likes to be a pain so this is how the test will be
            type: 'myMissingType' as const,
        },
    },
    types: {},
};

// $ExpectError
new GM_configStruct(emptyTypesObject);

// Testing events
const eventsConfig = new GM_configStruct({
    id: 'TestingEvents',
    fields: {},
    events: {
        init: () => alert('onInit()'),
        open: () => alert('onOpen()'),
        save: () => alert('onSave()'),
        close: () => alert('onClose()'),
        reset: () => alert('onReset()'),
    },
});
