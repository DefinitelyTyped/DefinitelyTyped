// Type definitions for randomatic 3.1
// Project: https://github.com/jonschlinkert/randomatic
// Definitions by: Frelia <https://github.com/execfera>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function randomatic(p: string, l?: number, options?: {
  chars?: string;
  exclude?: string | string[];
}): string;

declare namespace randomatic {
  const isCrypto: boolean;
}

export = randomatic;
