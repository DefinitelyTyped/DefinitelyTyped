declare function GetOwnPropertyKeys<O extends object>(
    O: O,
    Type: 'String',
): Array<number extends keyof O ? string : Extract<keyof O, string>>;
declare function GetOwnPropertyKeys<O extends object>(
    O: O,
    Type: 'Symbol',
): Array<Extract<keyof O, symbol>>;
declare function GetOwnPropertyKeys<O extends object>(
    O: O,
    Type: 'String' | 'Symbol',
):
    | Array<number extends keyof O ? string : Extract<keyof O, string>>
    | Array<Extract<keyof O, symbol>>;
export = GetOwnPropertyKeys;
