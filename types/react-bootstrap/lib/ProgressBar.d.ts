import * as React from 'react';
import { Sizes, Omit } from 'react-bootstrap';

declare namespace ProgressBar {
    export interface ProgressBarProps extends Omit<React.HTMLProps<ProgressBar>, "label"> {
        // Optional
        active?: boolean | undefined;
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        bsClass?: string | undefined;
        interpolatedClass?: any; // TODO: Add more specific type
        max?: number | undefined;
        min?: number | undefined;
        now?: number | undefined;
        srOnly?: boolean | undefined;
        striped?: boolean | undefined;
        label?: React.ReactNode | undefined;
    }
}
declare class ProgressBar extends React.Component<ProgressBar.ProgressBarProps> { }
export = ProgressBar;
