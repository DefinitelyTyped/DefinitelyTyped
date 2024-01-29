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
