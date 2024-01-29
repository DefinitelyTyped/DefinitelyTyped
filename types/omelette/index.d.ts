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
        on(action: "complete", callback: CallbackOnComplete): void;

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
    type CallbackOnComplete = (fragment: string, obj: CallbackValue) => void;

    type CallbackAsync = (obj: CallbackAsyncValue) => Promise<void>;

    type Choices = string[];

    type TemplatePrimativeValue = string | Choices;

    type TemplateValue = TemplatePrimativeValue | Callback;

    type TreeCallback<V> = () => V;

    interface TreeValue {
        [key: string]: TreeValue | Choices | TreeCallback<Choices>;
    }
}
