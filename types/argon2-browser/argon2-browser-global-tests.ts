const mandatoryOptions = {
  pass: 'Qwerty12?',
  salt: 'Salty'
};

argon2.hash(mandatoryOptions).then(result => result.encoded); // $ExpectType Promise<string>
argon2.hash(mandatoryOptions).then(result => result.hash); // $ExpectType Promise<Uint8Array>
argon2.hash(mandatoryOptions).then(result => result.hashHex); // $ExpectType Promise<string>

argon2.hash({ ...mandatoryOptions, distPath: 'path' }).then(result => result.encoded); // $ExpectType Promise<string>
argon2.hash({ ...mandatoryOptions, hashLen: 24 }).then(result => result.encoded); // $ExpectType Promise<string>
argon2.hash({ ...mandatoryOptions, mem: 1024 }).then(result => result.encoded); // $ExpectType Promise<string>
argon2.hash({ ...mandatoryOptions, parallelism: 1 }).then(result => result.encoded); // $ExpectType Promise<string>
argon2.hash({ ...mandatoryOptions, time: 1 }).then(result => result.encoded); // $ExpectType Promise<string>
argon2.hash({ ...mandatoryOptions, type: argon2.ArgonType.Argon2d }).then(result => result.encoded); // $ExpectType Promise<string>
argon2.hash({ ...mandatoryOptions, type: argon2.ArgonType.Argon2i }).then(result => result.encoded); // $ExpectType Promise<string>
