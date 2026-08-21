// JSBox Input API TypeScript Declaration

declare namespace InputTypes {
    interface TextOptions {
        /** Not documented but actually exists. */
        text?: string;
        type?: (typeof $kbType)[keyof typeof $kbType];
        placeholder?: string;
        handler: (text: string) => void;
    }

    interface SpeechOptions {
        locale?: string;
        autoFinish?: boolean;
        handler: (text: string) => void;
    }
}

interface JBInput {
    text(options: InputTypes.TextOptions): void;
    text(options?: Omit<InputTypes.TextOptions, "handler">): Promise<string>;
    speech(options: InputTypes.SpeechOptions): void;
    speech(options?: Omit<InputTypes.SpeechOptions, "handler">): Promise<string>;
}

declare const $input: JBInput;
