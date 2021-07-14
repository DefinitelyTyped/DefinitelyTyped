import * as React from 'react';

declare namespace ControlLabel {
    export interface ControlLabelProps extends React.HTMLProps<ControlLabel> {
        bsClass?: string | undefined;
        htmlFor?: string | undefined;
        srOnly?: boolean | undefined;
    }
}
declare class ControlLabel extends React.Component<ControlLabel.ControlLabelProps> { }
export = ControlLabel;
