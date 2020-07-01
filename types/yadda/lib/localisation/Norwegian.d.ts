import English = require("./English");
import Language = require("./Language");

declare namespace Norwegian {
    interface Vocabulary extends English.Vocabulary {
        gitt: string;
        når: string;
        så: string;
    }

    interface Library extends English.Library {
        gitt(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        gitt(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        gitt(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        gitt(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        gitt(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        gitt(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        gitt(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        gitt(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        når(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        når(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        når(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        når(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        når(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        når(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        når(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        når(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        så(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        så(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        så(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        så(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        så(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        så(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        så(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        så(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
    }
}

declare const Norwegian: Language<Norwegian.Library>;

export = Norwegian;
