import Context = require("./Context");
import Dictionary = require("./Dictionary");
import Macro = require("./Macro");
import localisation = require("./localisation");
import { StepFn } from ".";

declare class Library implements localisation.Language.Library {
    constructor(dictionary?: Dictionary);
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, next: (err?: Error) => void) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, next: (err?: Error) => void) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, arg2: string) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, arg2: any, next: (err?: Error) => void) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, arg2: any, arg3: string) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, next: (err?: Error) => void) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, arg4: string) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, arg4: any, next: (err?: Error) => void) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, arg4: any, arg5: string) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, next: (err?: Error) => void) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: string) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (
            this: StepFn,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any,
            arg5: any,
            arg6: any,
            next: (err?: Error) => void,
        ) => void,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
    define(
        signatures: string | string[] | RegExp | RegExp[],
        fn?: (this: StepFn, ...args: any[]) => Promise<void>,
        macro_context?: Context,
        options?: Macro.Options,
    ): this;
}

export = Library;
