import bent from 'bent';

// $ExpectType RequestFunction
const string = bent('string');
// $ExpectType RequestFunction
const json = bent('json');
// $ExpectType RequestFunction
const buffer = bent('buffer');
// $ExpectType RequestFunction
const bufferWeb = bent('buffer');
// $ExpectType RequestFunction
const stream = bent();

// $ExpectType Promise<ValidResponse>
string('https://example.com');
// $ExpectType Promise<ValidResponse>
json('https://example.com');
// $ExpectType Promise<ValidResponse>
buffer('https://example.com');
// $ExpectType Promise<ValidResponse>
bufferWeb('https://example.com');
// $ExpectType Promise<ValidResponse>
stream('https://example.com');

bent('HEAD', 200, {Authorization: 'Token'});
bent(200);
bent('HEAD');
bent('https://example.com');
