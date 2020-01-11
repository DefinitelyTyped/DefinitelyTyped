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
    prop8: {
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
