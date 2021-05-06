// Type definitions for prompts 2.0
// Project: https://github.com/terkelg/prompts
// Definitions by: Berkay GURSOY <https://github.com/Berkays>
//                 Daniel Perez Alvarez <https://github.com/unindented>
//                 Kamontat Chantrachirathumrong <https://github.com/kamontat>
//                 theweirdone <https://github.com/theweirdone>
//                 whoaa512 <https://github.com/whoaa512>
//                 John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node" />

export = prompts;

import { Readable, Writable } from 'stream';

declare function prompts<T extends string = string>(
    questions: prompts.PromptObject<T> | Array<prompts.PromptObject<T>>,
    options?: prompts.Options
): Promise<prompts.Answers<T>>;

declare namespace prompts {
    // Circular reference from prompts
    const prompt: any;

    function inject(arr: ReadonlyArray<any>): void;

    namespace inject {
        const prototype: {};
    }

    function override(obj: { [key: string]: any }): void;

    namespace override {
        const prototype: {};
    }

    namespace prompts {
        function autocomplete(args: PromptObject): any;

        function confirm(args: PromptObject): void;

        function date(args: PromptObject): any;

        function invisible(args: PromptObject): any;

        function list(args: PromptObject): any;

        function multiselect(args: PromptObject): any;

        function number(args: PromptObject): void;

        function password(args: PromptObject): any;

        function select(args: PromptObject): void;

        function text(args: PromptObject): void;

        function toggle(args: PromptObject): void;
    }

    // Based upon: https://github.com/terkelg/prompts/blob/d7d2c37a0009e3235b2e88a7d5cdbb114ac271b2/lib/elements/select.js#L29
    interface Choice {
        title: string;
        value: any;
        disabled?: boolean;
        selected?: boolean;
        description?: string;
    }

    interface Options {
        onSubmit?: (prompt: PromptObject, answer: any, answers: any[]) => void;
        onCancel?: (prompt: PromptObject, answers: any) => void;
    }

    interface PromptObject<T extends string = string> {
        type: PromptType | Falsy | PrevCaller<T, PromptType | Falsy>;
        name: ValueOrFunc<T>;
        message?: ValueOrFunc<string>;
        initial?: string | number | boolean | Date;
        style?: string | PrevCaller<T, string | Falsy>;
        format?: PrevCaller<T, void>;
        validate?: PrevCaller<T, boolean | string | Promise<boolean | string>>;
        onState?: PrevCaller<T, void>;
        min?: number | PrevCaller<T, number | Falsy>;
        max?: number | PrevCaller<T, number | Falsy>;
        float?: boolean | PrevCaller<T, boolean | Falsy>;
        round?: number | PrevCaller<T, number | Falsy>;
        instructions?: string | boolean;
        increment?: number | PrevCaller<T, number | Falsy>;
        separator?: string | PrevCaller<T, string | Falsy>;
        active?: string | PrevCaller<T, string | Falsy>;
        inactive?: string | PrevCaller<T, string | Falsy>;
        choices?: Choice[] | PrevCaller<T, Choice[] | Falsy>;
        hint?: string | PrevCaller<T, string | Falsy>;
        warn?: string | PrevCaller<T, string | Falsy>;
        suggest?: ((input: any, choices: Choice[]) => Promise<any>);
        limit?: number | PrevCaller<T, number | Falsy>;
        mask?: string | PrevCaller<T, string | Falsy>;
        stdout?: Writable;
        stdin?: Readable;
    }

    type Answers<T extends string> = { [id in T]: any };

    type PrevCaller<T extends string, R = T> = (
        prev: any,
        values: Answers<T>,
        prompt: PromptObject
    ) => R;

    type Falsy = false | null | undefined;

    type PromptType = "text" | "password" | "invisible" | "number" | "confirm" | "list" | "toggle" | "select" | "multiselect" | "autocomplete" | "date" | "autocompleteMultiselect";

    type ValueOrFunc<T extends string> = T | PrevCaller<T>;
}
