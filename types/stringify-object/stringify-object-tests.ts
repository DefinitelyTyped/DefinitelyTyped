import * as stringifyObject from 'stringify-object';

stringifyObject({ a: 1, b: 2, c: 3 });

stringifyObject('abc', {
  indent: '  '
});

stringifyObject('123', {
  indent: '  '
});

stringifyObject(123, {
    indent: '  ',
    singleQuotes: false
});

stringifyObject([1, 2, 3], {
    indent: '  ',
    singleQuotes: false,
    inlineCharacterLimit: 12
});

stringifyObject([1, 2, 3], {
  filter: (o, prop) => prop !== '_hidden_'
});

stringifyObject([1, 2, 3], {
  transform: (val, key, value) => value
});
