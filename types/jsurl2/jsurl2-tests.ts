import * as jsurl from 'jsurl2';

jsurl.parse('test', {
    deURI: true,
});

jsurl.stringify(
    {
        foo: 'bar',
    },
    {
        rich: true,
        short: false,
    },
);

jsurl.tryParse(
    'test',
    { defaultObjectKey: 'defaultValue' },
    {
        deURI: true,
    },
);
