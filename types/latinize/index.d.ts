declare namespace LatinizeModule {
    export interface Latinize {
        (str: string): string;
        characters: { [char: string]: string };
    }
}

declare var latinize: LatinizeModule.Latinize;
export = latinize;
export as namespace latinize;
