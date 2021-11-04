import stringifyObject, { Options } from 'stringify-object';

const options: Options = {
    indent: '  ',
    singleQuotes: false,
    inlineCharacterLimit: 12,
    filter: (o, prop) => prop !== '_hidden_',
    transform: (val, key, value) => value,
};

stringifyObject({ a: 1, b: 2, c: 3 });

stringifyObject('abc', {
    indent: '  ',
});
stringifyObject('abc', options);

stringifyObject([1, 2, 3], options, ' ');
