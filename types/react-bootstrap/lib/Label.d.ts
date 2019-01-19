import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sizes } from 'react-bootstrap';

declare namespace Label {
    export interface LabelProps extends ReactDOM.HTMLProps<Label> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
}
declare class Label extends React.Component<Label.LabelProps> { }
export = Label;
