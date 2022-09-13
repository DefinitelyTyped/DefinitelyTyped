import bent, { BentResponse, Json, RequestFunction } from 'bent';

interface Body {
    foo: string;
}

// $ExpectType RequestFunction<string>
bent('string');
// $ExpectType RequestFunction<string>
bent('string', 'GET');
// $ExpectType RequestFunction<string>
bent('GET', 'string');
// $ExpectType RequestFunction<string>
bent('https://example.com', 'string');
// $ExpectType RequestFunction<string>
bent<string>(200, 'string');

// $ExpectType RequestFunction<Buffer | ArrayBuffer> || RequestFunction<ArrayBuffer | Buffer>
bent('buffer');
// $ExpectType RequestFunction<Buffer | ArrayBuffer> || RequestFunction<ArrayBuffer | Buffer>
bent('buffer', 'GET');
// $ExpectType RequestFunction<Buffer | ArrayBuffer> || RequestFunction<ArrayBuffer | Buffer>
bent('GET', 'buffer');
// $ExpectType RequestFunction<Buffer | ArrayBuffer> || RequestFunction<ArrayBuffer | Buffer>
bent('https://example.com', 'buffer');
// $ExpectType RequestFunction<Buffer | ArrayBuffer> || RequestFunction<ArrayBuffer | Buffer>
bent<Buffer | ArrayBuffer>(200, 'buffer');

// $ExpectType RequestFunction<any>
bent('json');
// $ExpectType RequestFunction<any>
bent('json', 'GET');
// $ExpectType RequestFunction<any>
bent('GET', 'json');
// $ExpectType RequestFunction<any>
bent('https://example.com', 'json');
// $ExpectType RequestFunction<Json>
bent<Json>(200, 'json');

// $ExpectType RequestFunction<Body>
bent<Body>('json');
// $ExpectType RequestFunction<Body>
bent<Body>('GET', 'json');
// $ExpectType RequestFunction<Body>
bent<Body>('https://example.com', 'json');
// $ExpectType RequestFunction<Body>
bent<Body>(200, 'json');

// $ExpectType RequestFunction<BentResponse>
bent('GET', 200) as RequestFunction<BentResponse>;
// $ExpectType RequestFunction<BentResponse>
bent('https://example.com', 'GET') as RequestFunction<BentResponse>;
// $ExpectType RequestFunction<BentResponse>
bent<BentResponse>(200);

// $ExpectType Promise<string>
bent('string')('https://example.com');
// $ExpectType Promise<any>
bent('json')('https://example.com');
// $ExpectType Promise<Body>
bent<Body>('json')('https://example.com');
// $ExpectType Promise<Buffer | ArrayBuffer> || Promise<ArrayBuffer | Buffer>
bent('buffer')('https://example.com');
// $ExpectType Promise<BentResponse>
bent(200)('https://example.com') as Promise<BentResponse>;
