// Type definitions for prompts 1.1
// Project: https://github.com/terkelg/prompts
// Definitions by: Berkay GURSOY <https://github.com/Berkays>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = prompts;

declare function prompts<T extends string = string>(questions: prompts.PromptObject<T> | prompts.PromptObject<T>[], options?: prompts.Options): prompts.Answers<T>;

declare namespace prompts {
    // Circular reference from prompts
    const prompt: any;

    function inject(obj: any): void;

    namespace inject {
        const prototype: {
        };
    }

    namespace prompts {
        function autocomplete(args: PromptObject): any;

        function confirm(args: PromptObject): void;

        function invisible(args: PromptObject): any;

        function list(args: PromptObject): any;

        function multiselect(args: PromptObject): any;

        function number(args: PromptObject): void;

        function password(args: PromptObject): any;

        function select(args: PromptObject): void;

        function text(args: PromptObject): void;

        function toggle(args: PromptObject): void;
    }

    interface Choice {
        title: string;
        value: string;
    }

    interface Options {
        onSubmit: (prompt: PromptObject, answer: any, answers: any[]) => void;
        onCancel: (prompt: PromptObject, answers: any) => void;
    }

    interface PromptObject<T extends string = string> {
        type: string | ((prev: any, values: any, prompt: PromptObject) => void);
        name: T | ((prev: any, values: any, prompt: PromptObject) => void);
        message?: string | ((prev: any, values: any, prompt: PromptObject) => void);
        initial?: string;
        style?: string;
        format?: ((prev: any, values: any, prompt: PromptObject) => void);
        validate?: ((prev: any, values: any, prompt: PromptObject) => void);
        onState?: ((prev: any, values: any, prompt: PromptObject) => void);
        min?: number;
        max?: number;
        float?: boolean;
        round?: number;
        increment?: number;
        seperator?: string;
        active?: string;
        inactive?: string;
        choices?: Choice[];
        hint?: string;
        suggest?: ((prev: any, values: any, prompt: PromptObject) => void);
        limit?: number;
    }
     
    type Answers<T extends string = string> = { [id in T]: string };
}
