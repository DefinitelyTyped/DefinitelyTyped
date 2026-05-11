// JSBox Input API TypeScript Declaration

declare namespace InputTypes {
    interface TextOptions {
        text?: string; // It is not documented, but it exists based on empirical testing.
        type?: number; // $kbType
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
