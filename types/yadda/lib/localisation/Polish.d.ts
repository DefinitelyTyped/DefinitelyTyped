import English = require("./English");
import Language = require("./Language");

declare namespace Polish {
    interface Vocabulary extends English.Vocabulary {
        zakladajac: string;
        majac: string;
        jezeli: string;
        jesli: string;
        gdy: string;
        kiedy: string;
        wtedy: string;
    }

    interface Library extends English.Library {
        zakladajac(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        zakladajac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        zakladajac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        zakladajac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        zakladajac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        zakladajac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        zakladajac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        zakladajac(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        majac(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        majac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        majac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        majac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        majac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        majac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        majac(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        majac(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        jezeli(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        jezeli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        jezeli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        jezeli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        jezeli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        jezeli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        jezeli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        jezeli(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        jesli(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        jesli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        jesli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        jesli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        jesli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        jesli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        jesli(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        jesli(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        gdy(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        gdy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        gdy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        gdy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        gdy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        gdy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        gdy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        gdy(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        kiedy(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        kiedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        kiedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        kiedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        kiedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        kiedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        kiedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        kiedy(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        wtedy(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        wtedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        wtedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        wtedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        wtedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        wtedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        wtedy(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        wtedy(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
    }
}

declare const Polish: Language<Polish.Library>;

export = Polish;
