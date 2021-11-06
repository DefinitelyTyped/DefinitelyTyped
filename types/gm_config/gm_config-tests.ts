// Adapted from https://github.com/sizzlemctwizzle/GM_config/wiki/#customizing-gm_config
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

GM_config.open();

const username = GM_config.get('Name');
GM_config.set('Name', '@types/gm_config');

// Testing GM_configField
const someField = new GM_configField(
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

document.body.appendChild(someField.toNode());
GM_config.set('Name', someField.toValue()); // $ExpectError

const value = someField.toValue();
if (value) GM_config.set('Name', value);

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

const newConfig = new GM_configStruct({
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
