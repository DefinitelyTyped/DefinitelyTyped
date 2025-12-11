declare function CreateRegExpStringIterator(
    R: RegExp,
    S: string,
    global: boolean,
    fullUnicode: boolean,
): IterableIterator<RegExpMatchArray>;
export = CreateRegExpStringIterator;
