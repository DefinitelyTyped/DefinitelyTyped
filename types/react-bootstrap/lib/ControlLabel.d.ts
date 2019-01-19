import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace ControlLabel {
    export interface ControlLabelProps extends ReactDOM.HTMLProps<ControlLabel> {
        bsClass?: string;
        htmlFor?: string;
        srOnly?: boolean;
    }
}
declare class ControlLabel extends React.Component<ControlLabel.ControlLabelProps> { }
export = ControlLabel;
