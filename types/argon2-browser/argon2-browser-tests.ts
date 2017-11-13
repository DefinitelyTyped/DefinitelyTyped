import { argon2 } from 'argon2-browser';

const mandatoryOptions = {
  pass: 'Qwerty12?',
  salt: 'Salty'
};

(async () => {
  (await argon2.hash(mandatoryOptions)).encoded; // string
  (await argon2.hash(mandatoryOptions)).hash; // Uint8Array
  (await argon2.hash(mandatoryOptions)).hashHex; // string

  (await argon2.hash({ ...mandatoryOptions, distPath: 'path' })).encoded; // string
  (await argon2.hash({ ...mandatoryOptions, hashLen: 24 })).encoded; // string
  (await argon2.hash({ ...mandatoryOptions, mem: 1024 })).encoded; // string
  (await argon2.hash({ ...mandatoryOptions, parallelism: 1 })).encoded; // string
  (await argon2.hash({ ...mandatoryOptions, time: 1 })).encoded; // string
  (await argon2.hash({ ...mandatoryOptions, type: argon2.ArgonType.Argon2d })).encoded; // string
  (await argon2.hash({ ...mandatoryOptions, type: argon2.ArgonType.Argon2i })).encoded; // string
})();
