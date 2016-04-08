// Type definitions for latinize
// Project: https://github.com/dundalek/latinize
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Latinize {
    export interface ILatinize {
        (str: string): string;
        characters: { [char: string]: string };
    }
}


declare module "latinize" {
    let latinize: Latinize.ILatinize;
    export = latinize;
}
