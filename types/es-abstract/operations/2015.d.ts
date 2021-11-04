import ES2015 = require('../es2015');

interface ES2015Operations extends Record<keyof ES2015, string> {
    // Unimplemented operations:
    Construct: string;
    CreateArrayFromList: string;
    CreateListIterator: string;
    NormalCompletion: string;
    RegExpBuiltinExec: string;
}

declare const ES2015Operations: ES2015Operations;
export = ES2015Operations;
