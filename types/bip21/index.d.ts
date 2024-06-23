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
