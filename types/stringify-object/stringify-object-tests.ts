import stringifyObject, { Options } from 'stringify-object';
import { default as defaultStringifyObject } from 'stringify-object';

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

defaultStringifyObject({ a: 1, b: 2, c: 3 });

defaultStringifyObject('abc', {
    indent: '  ',
});
defaultStringifyObject('abc', options);

defaultStringifyObject([1, 2, 3], options, ' ');
