// Type definitions for ink-text-input 2.0
// Project: https://github.com/vadimdemedes/ink-text-input#readme
// Definitions by: Łukasz Ostrowski <https://github.com/lukostry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'ink';

interface TextInputProps {
    focus?: boolean;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    placeholder?: string;
    value?: string;
}

declare class TextInput extends Component<TextInputProps> { }

export = TextInput;
