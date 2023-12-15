interface TranslateOption {
    from?: string | undefined;
    to?: string | undefined;
    raw?: boolean | undefined;
}
interface TranslateResult {
    text: string;
    from: {
        language: {
            didYouMean: boolean;
            iso: string;
        };
        text: {
            autoCorrected: boolean;
            value: string;
            didYouMean: boolean;
        };
    };
    raw: string;
}
declare function translate(text: string, options?: TranslateOption): Promise<TranslateResult>;
export = translate;
