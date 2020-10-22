// Type definitions for react-mathquill 0.1
// Project: https://github.com/viktorstrate/react-mathquill#readme
// Definitions by: Marco Gonzalez <https://github.com/magonzalez9>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { ComponentProps, Component } from 'react';
import { MQ, Config } from '@edtr-io/mathquill';

export interface Props extends Omit<ComponentProps<'span'>, 'onChange'> {
    latex?: string;
    config?: Config;
    onChange?(mathField: MQ): void;
    mathquillDidMount?(mathField: MQ): void;
}

export function addStyles(): void;

declare class MathQuill extends Component<Props> {}

export default MathQuill;
