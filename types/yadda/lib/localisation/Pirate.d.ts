import English = require("./English");
import Language = require("./Language");

declare namespace Pirate {
    interface Vocabulary extends English.Vocabulary {
        giveth: string;
        whence: string;
        thence: string;
    }

    interface Library extends English.Library {
        giveth(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        giveth(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        giveth(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        giveth(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        giveth(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        giveth(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        giveth(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        giveth(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        whence(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        whence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        whence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        whence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        whence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        whence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        whence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        whence(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        thence(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        thence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        thence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        thence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        thence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        thence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        thence(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        thence(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
    }
}

declare const Pirate: Language<Pirate.Library>;

export = Pirate;
