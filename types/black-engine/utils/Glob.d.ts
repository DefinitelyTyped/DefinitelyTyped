export class Glob {
    constructor(pattern: string);
    mRegExp: RegExp;
    test(string: string): boolean;
}
