// Type definitions for unique-random
// Project: https://github.com/sindresorhus/unique-random
// Definitions by: Yuki Kokubun <https://github.com/Kuniwak>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "unique-random" {
  function uniqueRandom(min: number, max: number): () => number;

  export = uniqueRandom;
}
