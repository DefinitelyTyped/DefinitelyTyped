// Type definitions for react-rangeslider 2.2
// Project: https://github.com/whoisandy/react-rangeslider
// Definitions by: Riku Kallio <https://github.com/RichieRock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface SliderProps {
    disabled?: boolean;
    format?: (value: number) => string | number | undefined;
    handleLabel?: string;
    labels?: { [value: number]: string };
    max?: number;
    min?: number;
    onChange?(value: number): void;
    onChangeComplete?(value: number): void;
    onChangeStart?(value: number): void;
    orientation?: string;
    reverse?: boolean;
    step?: number;
    tooltip?: boolean;
    className?: string;
    value: number;
}

export default class Slider extends React.Component<SliderProps> {}
