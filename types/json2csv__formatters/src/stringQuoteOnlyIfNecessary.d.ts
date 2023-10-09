export interface Options {
    quote?: string | undefined;
    escapedQuote?: string | undefined;
    separator?: string | undefined;
    eol?: string | undefined;
}

export default function stringQuoteOnlyIfNecessaryFormatter(opts?: Options): (value: string) => string;
