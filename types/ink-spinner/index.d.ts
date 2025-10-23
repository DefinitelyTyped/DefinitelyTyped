import * as cliSpinners from "cli-spinners";
import { Component } from "react";

interface SpinnerProps {
    /**
     * Type of a spinner to use. See https://github.com/sindresorhus/cli-spinners for available spinners.
     *
     * @default 'dot'
     */
    type?: cliSpinners.SpinnerName | undefined;
}

declare class Spinner extends Component<SpinnerProps> {}

export = Spinner;
