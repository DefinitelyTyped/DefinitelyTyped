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
        given(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, ...args: string[]) => Promise<void>): this;
        given(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, next: (err?: Error) => void) => void): this;
        given(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, next: (err?: Error) => void) => void): this;
        given(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        given(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        given(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        given(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        given(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        when(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, ...args: string[]) => Promise<void>): this;
        when(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, next: (err?: Error) => void) => void): this;
        when(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, next: (err?: Error) => void) => void): this;
        when(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        when(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        when(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        when(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        when(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        then(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, ...args: string[]) => Promise<void>): this;
        then(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, next: (err?: Error) => void) => void): this;
        then(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, next: (err?: Error) => void) => void): this;
        then(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        then(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        then(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        then(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        then(step: string | string[] | RegExp | RegExp[], fn?: (this: StepFn, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
    }
}

export = English;
