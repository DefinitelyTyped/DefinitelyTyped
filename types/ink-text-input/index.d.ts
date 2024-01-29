import { Component } from "ink";

interface TextInputProps {
    focus?: boolean | undefined;
    onChange?: ((value: string) => void) | undefined;
    onSubmit?: ((value: string) => void) | undefined;
    placeholder?: string | undefined;
    value?: string | undefined;
}

declare class TextInput extends Component<TextInputProps> {}

export = TextInput;
