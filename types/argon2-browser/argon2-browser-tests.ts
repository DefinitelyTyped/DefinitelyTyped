import * as argon2 from 'argon2-browser';

const mandatoryOptions = {
  pass: 'Qwerty12?',
  salt: 'somesalt'
};

const verifyOptions = {
  pass: "Qwerty12?",
  encoded: "$argon2d$v=19$m=1024,t=1,p=1$c29tZXNhbHQ$TOg+KXa3SC9Wv+UvX9HP7NUsOY/0IM4b1PlasiUwhHs"
};

(async () => {
  // $ExpectType string
  (await argon2.hash(mandatoryOptions)).encoded;
  // $ExpectType Uint8Array
  (await argon2.hash(mandatoryOptions)).hash;
  // $ExpectType string
  (await argon2.hash(mandatoryOptions)).hashHex;

  // $ExpectType string
  (await argon2.hash({ ...mandatoryOptions, distPath: 'path' })).encoded;
  // $ExpectType string
  (await argon2.hash({ ...mandatoryOptions, hashLen: 24 })).encoded;
  // $ExpectType string
  (await argon2.hash({ ...mandatoryOptions, mem: 1024 })).encoded;
  // $ExpectType string
  (await argon2.hash({ ...mandatoryOptions, parallelism: 1 })).encoded;
  // $ExpectType string
  (await argon2.hash({ ...mandatoryOptions, time: 1 })).encoded;
  // $ExpectType string
  const encodedSecret = (await argon2.hash({ ...mandatoryOptions, secret: new Uint8Array([1, 2, 3]) })).encoded;
  // $ExpectType string
  const encodedAdditional = (await argon2.hash({ ...mandatoryOptions, ad: new Uint8Array([1, 2, 3]) })).encoded;
  // $ExpectType string
  (await argon2.hash({ ...mandatoryOptions, type: argon2.ArgonType.Argon2d })).encoded;
  // $ExpectType string
  (await argon2.hash({ ...mandatoryOptions, type: argon2.ArgonType.Argon2i })).encoded;

  // $ExpectType undefined
  await argon2.verify(verifyOptions);

  // @ts-expect-error
  (await argon2.hash({ ...mandatoryOptions, secret: 'test'})).encoded;
  // @ts-expect-error
  (await argon2.hash({ ...mandatoryOptions, ad: 'test'})).encoded;
})();
