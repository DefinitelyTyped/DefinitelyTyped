// Type definitions for bip21 v2.0.0
// Project: https://github.com/bitcoinjs/bip21
// Definitions by: Stefan Huber <https://github.com/stefanhuber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Options =
    | {
          amount?: number;
      }
    | { [key: string]: string };

declare namespace bip21 {
    export function decode(uri: string, urnScheme?: string): { address: string; options: Options };
    export function encode(address: string, options?: Options, urnScheme?: string): string;
}

export = bip21;
