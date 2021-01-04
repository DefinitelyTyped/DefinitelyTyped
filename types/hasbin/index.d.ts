// Type definitions for HasBin 1.2
// Project: <https://github.com/springernature/hasbin/>
// Definitions by: Micha Streppel <https://github.com/michastreppel/>
// Definitions: <https://github.com/DefinitelyTyped/DefinitelyTyped/>

interface HasMultiBin<T> {
    (bins: string[], callback: (result: T) => void): void;
    sync(bins: string[]): T;
}

interface HasBin {
    (bin: string, callback: (result: boolean) => void): void;
    sync(bin: string): boolean;
    all: HasMultiBin<boolean>;
    some: HasMultiBin<boolean>;
    first: HasMultiBin<false | string>;
}

declare const hasbin: HasBin;
export = hasbin;
