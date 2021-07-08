import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace ButtonGroup {
    export interface ButtonGroupProps extends React.HTMLProps<ButtonGroup> {
        block?: boolean | undefined;
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        bsClass?: string | undefined;
        justified?: boolean | undefined;
        vertical?: boolean | undefined;
    }
}
declare class ButtonGroup extends React.Component<ButtonGroup.ButtonGroupProps> { }
export = ButtonGroup;
