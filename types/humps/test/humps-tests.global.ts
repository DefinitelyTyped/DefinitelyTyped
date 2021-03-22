const someObject = { attr_one: 'foo', attr_two: 'bar' };
const someArray = [{ attr_one: 'foo' }, { attr_one: 'bar' }];

const someOptions: humps.HumpsOptions = {
    separator: '-',
};
const someOptions2: humps.HumpsOptions = {
    split: /^[A-Z0-9_]+$/,
};
const someOptions3: humps.HumpsOptions = {
    separator: '-',
    process(key: string, convert: humps.HumpsProcessorParameter, options?: humps.HumpsOptions) {
        return /^[A-Z0-9_]+$/.test(key) ? key : convert(key, options);
    },
};

humps.camelize('hello_world');

humps.decamelize('fooBar');
humps.decamelize('fooBarBaz', someOptions);

humps.camelizeKeys(someObject);

humps.camelizeKeys(someArray);

humps.camelizeKeys(someObject, (key, convert) => {
    return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
});

humps.decamelizeKeys(someObject, (key, convert, options) => {
    return /^[A-Z0-9_]+$/.test(key) ? key : convert(key, options);
});

humps.camelize('hello_world-foo bar');

humps.pascalize('hello_world-foo bar');

humps.decamelize('helloWorldFooBar');
humps.decamelize('helloWorldFooBar', someOptions);
humps.decamelize('helloWorld1', { split: /(?=[A-Z0-9])/ });

humps.depascalize('helloWorldFooBar');

humps.camelizeKeys(someObject);
humps.pascalizeKeys(someObject);
humps.decamelizeKeys(someObject);
humps.depascalizeKeys(someObject);

humps.camelizeKeys(someObject, someOptions);
humps.pascalizeKeys(someObject, someOptions);
humps.decamelizeKeys(someObject, someOptions);
humps.depascalizeKeys(someObject, someOptions);

humps.camelizeKeys(someObject, someOptions2);
humps.pascalizeKeys(someObject, someOptions2);
humps.decamelizeKeys(someObject, someOptions2);
humps.depascalizeKeys(someObject, someOptions2);

humps.camelizeKeys(someObject, someOptions3);
humps.pascalizeKeys(someObject, someOptions3);
humps.decamelizeKeys(someObject, someOptions3);
humps.depascalizeKeys(someObject, someOptions3);

[...humps.camelizeKeys(someArray)];
[...humps.pascalizeKeys(someArray)];
[...humps.decamelizeKeys(someArray)];
[...humps.depascalizeKeys(someArray)];
