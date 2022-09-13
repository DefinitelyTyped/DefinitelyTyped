import humps = require('humps');

const someSnakeObject = { attr_one: 'foo', attr_two: 'bar' };
const someCamelObject = { attrOne: 'foo', attrTwo: 'bar' };
const somePascalObject = { AttrOne: 'foo', AttrTwo: 'bar' };

const someSnakeArray = [{ attr_one: 'foo' }, { attr_two: 'bar' }];
const someCamelArray = [{ attrOne: 'foo' }, { attrTwo: 'bar' }];
const somePascalArray = [{ AttrOne: 'foo' }, { AttrTwo: 'bar' }];

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

humps.camelizeKeys(someSnakeObject);

humps.camelizeKeys(someSnakeArray);
humps.camelizeKeys(someCamelArray);
humps.camelizeKeys(somePascalArray);

humps.camelizeKeys(someSnakeObject, (key, convert) => {
    return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
});

humps.decamelizeKeys(someCamelObject, (key, convert, options) => {
    return /^[A-Z0-9_]+$/.test(key) ? key : convert(key, options);
});

humps.camelize('hello_world-foo bar');

humps.pascalize('hello_world-foo bar');

humps.decamelize('helloWorldFooBar');
humps.decamelize('helloWorldFooBar', someOptions);
humps.decamelize('helloWorld1', { split: /(?=[A-Z0-9])/ });

humps.depascalize('helloWorldFooBar');

humps.camelizeKeys(someSnakeObject);
humps.pascalizeKeys(someSnakeObject);
humps.decamelizeKeys(someCamelObject);
humps.depascalizeKeys(somePascalObject);

humps.camelizeKeys(someSnakeObject, someOptions);
humps.pascalizeKeys(someSnakeObject, someOptions);
humps.decamelizeKeys(someCamelObject, someOptions);
humps.depascalizeKeys(somePascalObject, someOptions);

humps.camelizeKeys(someSnakeObject, someOptions2);
humps.pascalizeKeys(someSnakeObject, someOptions2);
humps.decamelizeKeys(someCamelObject, someOptions2);
humps.depascalizeKeys(somePascalObject, someOptions2);

humps.camelizeKeys(someSnakeObject, someOptions3);
humps.pascalizeKeys(someSnakeObject, someOptions3);
humps.decamelizeKeys(someCamelObject, someOptions3);
humps.depascalizeKeys(somePascalObject, someOptions3);

humps.camelizeKeys<{ attr_one: string, attr_two: string }>(someSnakeObject); // $ExpectType Camelized<{ attr_one: string; attr_two: string; }>
humps.pascalizeKeys<{ attr_one: string, attr_two: string }>(someSnakeObject); // $ExpectType Pascalized<{ attr_one: string; attr_two: string; }>
humps.decamelizeKeys<{ attrOne: string, attrTwo: string }>(someCamelObject); // $ExpectType Decamelized<{ attrOne: string; attrTwo: string; }>
humps.depascalizeKeys<{ AttrOne: string, AttrTwo: string }>(somePascalObject); // $ExpectType Depascalized<{ AttrOne: string; AttrTwo: string; }>

[...humps.camelizeKeys(someSnakeArray)];
[...humps.pascalizeKeys(someSnakeArray)];
[...humps.decamelizeKeys(someCamelArray)];
[...humps.depascalizeKeys(somePascalArray)];
