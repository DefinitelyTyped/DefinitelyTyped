// Type definitions for ink-spinner 3.0
// Project: https://github.com/vadimdemedes/ink-spinner#readme
// Definitions by: Łukasz Ostrowski <https://github.com/lukostry>, Justin Anastos <https://github.com/justinanastos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as cliSpinners from 'cli-spinners';
import { Component } from 'react';

interface SpinnerProps {
    /**
     * Type of a spinner to use. See https://github.com/sindresorhus/cli-spinners for available spinners.
     *
     * @default 'dot'
     */
    type?: cliSpinners.SpinnerName;
}

declare class Spinner extends Component<SpinnerProps> {}

export = Spinner;
