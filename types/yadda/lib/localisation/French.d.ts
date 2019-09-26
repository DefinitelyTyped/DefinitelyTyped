import English = require("./English");
import Language = require("./Language");

declare namespace French {
    interface Vocabulary extends English.Vocabulary {
        soit: string;
        etantdonnalorss: string;
        etantdonnalors: string;
        etantdonne: string;
        quand: string;
        lorsque: string;
        alors: string;
    }

    interface Library extends English.Library {
        soit(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        soit(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        soit(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        soit(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        soit(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        soit(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        soit(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        soit(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        etantdonnalorss(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        etantdonnalorss(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        etantdonnalorss(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        etantdonnalorss(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        etantdonnalorss(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        etantdonnalorss(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        etantdonnalorss(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        etantdonnalorss(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        etantdonnalors(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        etantdonnalors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        etantdonnalors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        etantdonnalors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        etantdonnalors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        etantdonnalors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        etantdonnalors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        etantdonnalors(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        etantdonne(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        etantdonne(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        etantdonne(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        etantdonne(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        etantdonne(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        etantdonne(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        etantdonne(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        etantdonne(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        quand(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        quand(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        quand(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        quand(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        quand(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        quand(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        quand(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        quand(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        lorsque(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        lorsque(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        lorsque(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        lorsque(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        lorsque(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        lorsque(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        lorsque(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        lorsque(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        alors(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        alors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        alors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        alors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        alors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        alors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        alors(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        alors(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
    }
}

declare const French: Language<French.Library>;

export = French;
