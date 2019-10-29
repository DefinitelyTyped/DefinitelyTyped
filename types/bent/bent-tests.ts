import bent, { BentResponse, Json, RequestFunction } from 'bent';

// $ExpectType RequestFunction<string>
bent('string');
// $ExpectType RequestFunction<string>
bent('string', 'GET');
// $ExpectType RequestFunction<string>
bent('GET', 'string');
// $ExpectType RequestFunction<string>
bent('https://example.com', 'string');
// $ExpectType RequestFunction<string>
bent(200, 'string') as RequestFunction<string>;

// $ExpectType RequestFunction<Buffer | ArrayBuffer>
bent('buffer');
// $ExpectType RequestFunction<Buffer | ArrayBuffer>
bent('buffer', 'GET');
// $ExpectType RequestFunction<Buffer | ArrayBuffer>
bent('GET', 'buffer');
// $ExpectType RequestFunction<Buffer | ArrayBuffer>
bent('https://example.com', 'buffer');
// $ExpectType RequestFunction<Buffer | ArrayBuffer>
bent(200, 'buffer') as RequestFunction<Buffer | ArrayBuffer>;

// $ExpectType RequestFunction<Json>
bent('json');
// $ExpectType RequestFunction<Json>
bent('json', 'GET');
// $ExpectType RequestFunction<Json>
bent('GET', 'json');
// $ExpectType RequestFunction<Json>
bent('https://example.com', 'json');
// $ExpectType RequestFunction<Json>
bent(200, 'json') as RequestFunction<Json>;

// $ExpectType RequestFunction<BentResponse>
bent('GET', 200) as RequestFunction<BentResponse>;
// $ExpectType RequestFunction<BentResponse>
bent('https://example.com', 'GET') as RequestFunction<BentResponse>;
// $ExpectType RequestFunction<BentResponse>
bent(200) as RequestFunction<BentResponse>;

// $ExpectType Promise<string>
bent('string')('https://example.com');
// $ExpectType Promise<Json>
bent('json')('https://example.com');
// $ExpectType Promise<Buffer | ArrayBuffer>
bent('buffer')('https://example.com');
// $ExpectType Promise<BentResponse>
bent(200)('https://example.com') as Promise<BentResponse>;
