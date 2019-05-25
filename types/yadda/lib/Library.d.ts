import Context = require("./Context");
import Dictionary = require("./Dictionary");
import Macro = require("./Macro");
import localisation = require("./localisation");
import { StepFn } from ".";

declare class Library implements localisation.Language.Library {
    constructor(dictionary?: Dictionary);
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, next: (err?: Error) => void) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, next: (err?: Error) => void) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, next: (err?: Error) => void) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void, macro_context?: Context, options?: Macro.Options): this;
    define(signatures: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, ...args: string[]) => Promise<void>, macro_context?: Context, options?: Macro.Options): this;
}

export = Library;
