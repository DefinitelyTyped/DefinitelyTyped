import asFormData = require('json-form-data');

// $ExpectError
asFormData();

// $ExpectType FormData
asFormData({});

const json = {
    prop1: 'test',
    prop2: 2,
    prop3: null,
    prop4: undefined,
    prop5: true,
    prop6: false,
    prop7: new File(['file content'], 'my_file.txt'),
    prop8: new Date('05 January 2020 16:52:00 GMT'),
    prop9: {
        prop1: 'test',
        prop2: 2,
        prop3: null,
        prop4: undefined,
        prop5: true,
        prop6: false,
        prop7: ['test', 2, null, undefined, true, false],
    },
};

// $ExpectType FormData
asFormData(json);

// $ExpectType FormData
asFormData(json, {
    includeNullValues: true,
    initialFormData: new FormData(),
    mapping: value => (Boolean(value) ? 'true' : 'false'),
    showLeafArrayIndexes: false,
});
