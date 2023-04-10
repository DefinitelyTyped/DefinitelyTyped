// Type definitions for iput 1.1
// Project: https://github.com/lizheming/iput
// Definitions by: DongKyoo Kim <https://github.com/kdk8747>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface IputProp {
    className?: string;
    defaultValue?: string | string[];
    isError?: () => boolean;
    onChange?: (value: string) => void;
}
export interface IputState {
    value: string[];
}
export default class IPut extends React.Component<IputProp, IputState> {
    onPropsChange(): void;
    handleChange(e: React.ChangeEvent<HTMLInputElement>, i: number): void;
    handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, i: number): void;
    handlePaste(e: React.ClipboardEvent<HTMLInputElement>, i: number): void;
    render(): JSX.Element;
}
