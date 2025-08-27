declare function isNegatedGlob(pattern: string): isNegatedGlob.Result;
declare namespace isNegatedGlob {
    interface Result {
        negated: boolean;
        original: string;
        pattern: string;
    }
}
export = isNegatedGlob;
