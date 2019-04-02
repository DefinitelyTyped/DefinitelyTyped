import 'argon2-browser';

const hashMandatoryOptions: argon2.HashOptions = {
  pass: 'Qwerty12?',
  salt: 'Salty',
};

const verifyMandatoryOptions: argon2.VerifyOptions = {
  encoded: '$argon2d$v=19$m=1024,t=1,p=1$U2FsdHlTYWx0eQ$1jpGIXoUTdOQSUFaAP8qCnsr8yTGbF2srlkfrUM+hIo',
  pass: 'Qwerty12?',
};

(async () => {
  (await argon2.hash(hashMandatoryOptions)).encoded; // $ExpectType string
  (await argon2.hash(hashMandatoryOptions)).hash; // $ExpectType Uint8Array
  (await argon2.hash(hashMandatoryOptions)).hashHex; // $ExpectType string

  (await argon2.hash({ ...hashMandatoryOptions, distPath: 'path' })).encoded; // $ExpectType string
  (await argon2.hash({ ...hashMandatoryOptions, hashLen: 24 })).encoded; // $ExpectType string
  (await argon2.hash({ ...hashMandatoryOptions, mem: 1024 })).encoded; // $ExpectType string
  (await argon2.hash({ ...hashMandatoryOptions, parallelism: 1 })).encoded; // $ExpectType string
  (await argon2.hash({ ...hashMandatoryOptions, time: 1 })).encoded; // $ExpectType string
  (await argon2.hash({ ...hashMandatoryOptions, type: argon2.ArgonType.Argon2d })).encoded; // $ExpectType string
  (await argon2.hash({ ...hashMandatoryOptions, type: argon2.ArgonType.Argon2i })).encoded; // $ExpectType string
  (await argon2.hash({ ...hashMandatoryOptions, type: argon2.ArgonType.Argon2id })).encoded; // $ExpectType string

  await argon2.verify(verifyMandatoryOptions);
  await argon2.verify({...verifyMandatoryOptions, encoded: new Uint8Array([0, 1, 2, 3])});

  await argon2.verify({ ...verifyMandatoryOptions, distPath: 'path' });
  await argon2.verify({ ...verifyMandatoryOptions, type: argon2.ArgonType.Argon2d });
  await argon2.verify({ ...verifyMandatoryOptions, type: argon2.ArgonType.Argon2i });
  await argon2.verify({ ...verifyMandatoryOptions, type: argon2.ArgonType.Argon2id });
})();
