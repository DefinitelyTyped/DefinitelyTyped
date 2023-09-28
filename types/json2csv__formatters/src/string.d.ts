export interface Options {
    quote?: string | undefined;
    escapedQuote?: string | undefined;
}

export default function stringFormatter(opts?: Options): (value: string) => string;
