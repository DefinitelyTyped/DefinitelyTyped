// Type definitions for ink-text-input 2.0
// Project: https://github.com/vadimdemedes/ink-text-input#readme
// Definitions by: Łukasz Ostrowski <https://github.com/lukostry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
