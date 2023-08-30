// Type definitions for pseudo-localization 2.1
// Project: https://github.com/tryggvigy/pseudo-localization#readme
// Definitions by: Jonathan Hensley <https://github.com/jhensley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

export namespace PseudoLocalization {
    interface Options {
        blacklistedNodeNames?: string[] | undefined;
        strategy?: "accented" | "bidi" | undefined;
    }

    type Localize = (inputString: string, options?: Omit<Options, "blacklistedNodeNames">) => string;
    type Start = (options?: Options) => void;
    type Stop = () => void;
}

export const localize: PseudoLocalization.Localize;
export const start: PseudoLocalization.Start;
export const stop: PseudoLocalization.Stop;
