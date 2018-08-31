import stringify = require('safe-stable-stringify');

// $ExpectType string
stringify('test');

// $ExpectType string
stringify('test', (key: string, value: any) => {});

// $ExpectType string
stringify('test', (key: string, value: any) => {}, '_');
