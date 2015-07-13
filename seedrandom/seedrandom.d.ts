// Type definitions for seedrandom 2.4.2
// Project: https://github.com/davidbau/seedrandom
// Definitions by: Kern Handa <https://github.com/kernhanda>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare type seedrandomStateType = boolean | (() => prng);

interface prng {
  new(seed?: string, options?: seedRandomOptions, callback?: any): prng;
  (): number;
  quick(): number;
  int32(): number;
  double(): number;
  state(): () => prng;
}

interface seedrandomCallback {
  (prng?: prng, shortseed?: string, global?: boolean, state?: seedrandomStateType): prng;
}

interface seedRandomOptions {
  entropy?: boolean;
  'global'?: boolean;
  state?: seedrandomStateType;
  pass?: seedrandomCallback;
}

declare function seedrandom(seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback): seedrandom;
declare module seedrandom {
  function alea(seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) : prng;
  function xor128(seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) : prng;
  function tychei(seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) : prng;
  function xorwow(seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) : prng;
  function xor4096(seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) : prng;
  function xorshift7(seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) : prng;
  function quick(seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) : prng;
}
interface seedrandom extends prng {
}
export = seedrandom;
