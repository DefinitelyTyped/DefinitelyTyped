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

  await argon2.verify(verifyOptions); // undefined

  argon2.unloadRuntime(); // void
})();
