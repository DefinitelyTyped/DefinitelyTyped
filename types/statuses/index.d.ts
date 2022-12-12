// Type definitions for statuses 2.0
// Project: https://github.com/jshttp/statuses
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.7

type NonNumericAscii =
    '\x00' | '\x01' | '\x02' | '\x03' | '\x04' | '\x05' | '\x06' | '\x07' | '\b' | '\t' | '\n' | '\v' | '\f' | '\r' | '\x0E' | '\x0F'
    | '\x10' | '\x11' | '\x12' | '\x13' | '\x14' | '\x15' | '\x16' | '\x17' | '\x18' | '\x19' | '\x1A' | '\x1B' | '\x1C' | '\x1D' | '\x1E' | '\x1F'
    | ' ' | '!' | '"' | '#' | '$' | '%' | '&' | '\'' | '(' | ')' | '*' | '+' | ',' | '-' | '.' | '/'
    | /* digits would be here */ ':' | ';' | '<' | '=' | '>' | '?'
    | '@' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O'
    | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | '[' | '\\' | ']' | '^' | '_'
    | '`' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o'
    | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '{' | '|' | '}' | '~' | '\x7F';

type IsNumericString<S extends string> = S extends `${number}` ? any : never;

type IsNonNumericString<S extends string> = S extends `${NonNumericAscii}${infer _}` ? any : never;

type Result<S extends string> =
    S extends IsNumericString<S>
    ? string
    : S extends IsNonNumericString<S>
    ? number
    : string|number;

export = status;

declare const status: Status;

interface Status {
    (code: number): string;
    <S extends string>(code: S): Result<S>;

    codes: number[];
    code: { [msg: string]: number | undefined };
    empty: { [code: number]: boolean | undefined };
    message: { [code: number]: string | undefined };
    redirect: { [code: number]: boolean | undefined };
    retry: { [code: number]: boolean | undefined };
}
