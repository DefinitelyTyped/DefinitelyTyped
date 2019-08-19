// Type definitions for omelette 0.4
// Project: https://github.com/f/omelette
// Definitions by: Kamontat Chantrachirathumrong <https://github.com/kamontat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare var omelette: omelette.Omelette;

export = omelette;
export as namespace omelette;

declare namespace omelette {
    interface Omelette {
        (message: string): Instance;
        (literals: TemplateStringsArray, ...placeholders: TemplateValue[]): Instance;
    }

    interface Instance {
        cleanupShellInitFile(): void;

        init(): void;
        next(fn: () => void): void;

        on(action: string, callback: Callback): void;

        onAsync(actions: string, callback: CallbackAsync): void;

        setupShellInitFile(initFile?: string): void;

        tree(value: TreeValue): this;
    }

    type ReplyFn<T> = (value: T) => void;

    interface CallbackValue {
        before: string;
        fragment: number;
        line: string;
        reply: ReplyFn<Choices>;
    }

    interface CallbackAsyncValue {
        before: string;
        fragment: number;
        line: string;
        reply: ReplyFn<Promise<Choices>>;
    }

    type Callback = (obj: CallbackValue) => void;

    type CallbackAsync = (obj: CallbackAsyncValue) => Promise<void>;

    type Choices = string[];

    type TemplatePrimativeValue = string | Choices;

    type TemplateValue = TemplatePrimativeValue | Callback;

    interface TreeValue {
        [key: string]: Choices;
    }
}
