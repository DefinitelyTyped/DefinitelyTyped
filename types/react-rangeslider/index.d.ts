// Type definitions for react-rangeslider 2.2
// Project: https://github.com/whoisandy/react-rangeslider
// Definitions by: Riku Kallio <https://github.com/RichieRock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface SliderProps {
    disabled?: boolean | undefined;
    format?: ((value: number) => string | number | undefined) | undefined;
    handleLabel?: string | undefined;
    labels?: { [value: number]: string } | undefined;
    max?: number | undefined;
    min?: number | undefined;
    onChange?(value: number): void;
    onChangeComplete?(value: number): void;
    onChangeStart?(value: number): void;
    orientation?: string | undefined;
    reverse?: boolean | undefined;
    step?: number | undefined;
    tooltip?: boolean | undefined;
    className?: string | undefined;
    value: number;
}

export default class Slider extends React.Component<SliderProps> {}
