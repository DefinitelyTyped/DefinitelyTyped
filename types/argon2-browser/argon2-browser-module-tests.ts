import { ArgonType, hash } from 'argon2-browser';

const mandatoryOptions = {
  pass: 'Qwerty12?',
  salt: 'Salty'
};

hash(mandatoryOptions).then(result => result.encoded); // $ExpectType Promise<string>
hash(mandatoryOptions).then(result => result.hash); // $ExpectType Promise<Uint8Array>
hash(mandatoryOptions).then(result => result.hashHex); // $ExpectType Promise<string>

hash({ ...mandatoryOptions, distPath: 'path' }).then(result => result.encoded); // $ExpectType Promise<string>
hash({ ...mandatoryOptions, hashLen: 24 }).then(result => result.encoded); // $ExpectType Promise<string>
hash({ ...mandatoryOptions, mem: 1024 }).then(result => result.encoded); // $ExpectType Promise<string>
hash({ ...mandatoryOptions, parallelism: 1 }).then(result => result.encoded); // $ExpectType Promise<string>
hash({ ...mandatoryOptions, time: 1 }).then(result => result.encoded); // $ExpectType Promise<string>
hash({ ...mandatoryOptions, type: ArgonType.Argon2d }).then(result => result.encoded); // $ExpectType Promise<string>
hash({ ...mandatoryOptions, type: ArgonType.Argon2i }).then(result => result.encoded); // $ExpectType Promise<string>
