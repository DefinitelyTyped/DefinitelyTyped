type Date = string;
type Format = string;
declare function guessFormat(date: Date, format?: string): Format[] | Format;
export = guessFormat;
