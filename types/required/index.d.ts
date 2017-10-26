// Type definitions for @types/required 0.0
// Project: http://typescriptlang.org
// Definitions by: Alexander Abashkin <https://github.com/monolithed>, ssonne <https://github.com/ssonne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// Declare non-homomorphic keys
type NHKeys<T> = ({ [P in keyof T]: P } & { [x: string]: any })[keyof T];

type Required<T> = {
  [K in NHKeys<T>]: T[K];
};
