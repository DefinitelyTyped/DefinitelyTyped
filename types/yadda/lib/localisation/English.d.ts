import Language = require("./Language");

import Dictionary = require("../Dictionary");

import { StepFn } from "..";

declare const English: Language<English.Library>;

declare namespace English {
    interface Vocabulary extends Language.Vocabulary {
        feature: string;
        scenario: string;
        examples: string;
        pending: string;
        only: string;
        background: string;
        given: string;
        when: string;
        then: string;
    }

    interface Library extends Language.Library {
        given(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, ...args: any[]) => Promise<void>): this;
        given(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, next: (err?: Error) => void) => void,
        ): this;
        given(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, next: (err?: Error) => void) => void,
        ): this;
        given(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, arg2: any, next: (err?: Error) => void) => void,
        ): this;
        given(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, next: (err?: Error) => void) => void,
        ): this;
        given(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, arg4: any, next: (err?: Error) => void) => void,
        ): this;
        given(
            step: string | string[] | RegExp | RegExp[],
            fn?: (
                this: StepFn,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any,
                arg5: any,
                next: (err?: Error) => void,
            ) => void,
        ): this;
        given(
            step: string | string[] | RegExp | RegExp[],
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
        ): this;
        when(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, ...args: any[]) => Promise<void>): this;
        when(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, next: (err?: Error) => void) => void,
        ): this;
        when(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, next: (err?: Error) => void) => void,
        ): this;
        when(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, arg2: any, next: (err?: Error) => void) => void,
        ): this;
        when(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, next: (err?: Error) => void) => void,
        ): this;
        when(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, arg4: any, next: (err?: Error) => void) => void,
        ): this;
        when(
            step: string | string[] | RegExp | RegExp[],
            fn?: (
                this: StepFn,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any,
                arg5: any,
                next: (err?: Error) => void,
            ) => void,
        ): this;
        when(
            step: string | string[] | RegExp | RegExp[],
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
        ): this;
        then(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, ...args: any[]) => Promise<void>): this;
        then(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, next: (err?: Error) => void) => void,
        ): this;
        then(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, next: (err?: Error) => void) => void,
        ): this;
        then(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, arg2: any, next: (err?: Error) => void) => void,
        ): this;
        then(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, next: (err?: Error) => void) => void,
        ): this;
        then(
            step: string | string[] | RegExp | RegExp[],
            fn?: (this: StepFn, arg1: any, arg2: any, arg3: any, arg4: any, next: (err?: Error) => void) => void,
        ): this;
        then(
            step: string | string[] | RegExp | RegExp[],
            fn?: (
                this: StepFn,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any,
                arg5: any,
                next: (err?: Error) => void,
            ) => void,
        ): this;
        then(
            step: string | string[] | RegExp | RegExp[],
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
        ): this;
    }
}

export = English;
