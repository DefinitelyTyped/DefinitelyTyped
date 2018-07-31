// Type definitions for latinize 0.2.0
// Project: https://github.com/dundalek/latinize
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace LatinizeModule {
    export interface Latinize {
        (str: string): string;
        characters: { [char: string]: string };
    }
}


declare var latinize: LatinizeModule.Latinize;
export = latinize;
export as namespace latinize;
