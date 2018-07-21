import * as v8n from 'v8n';

v8n(); // $ExpectType Validation
v8n().chain; // $ExpectType Rule[]
v8n().string(); // $ExpectType Validation
v8n().string().test('test'); // $ExpectType boolean
v8n().string().check('test'); // $ExpectType never
v8n().extend({ test: () => true }); // $ExpectType void
