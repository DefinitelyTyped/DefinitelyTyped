// Type definitions for prompts v1.1.1
// Project: https://github.com/terkelg/prompts
// Definitions by: Berkay GURSOY <https://github.com/Berkays>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = prompts;

declare function prompts(questions: prompts.PromptObject | Array<prompts.PromptObject>, options?: prompts.Options): any;

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
        title: string,
        value: string
    }

    interface Options {
        onSubmit: Function,
        onCancel: Function
    }

    interface PromptObject {
        type: string | Function,
        name: string | Function,
        message?: string | Function,
        initial?: string,
        style?: string,
        format?: Function,
        validate?: Function,
        onState?: Function,
        min?: number,
        max?: number,
        float?: boolean,
        round?: number,
        increment?: number,
        seperator?: string,
        active?: string,
        inactive?: string,
        choices?: Array<Choice>,
        hint?: string,
        suggest?: Function,
        limit?: number
    }
}

