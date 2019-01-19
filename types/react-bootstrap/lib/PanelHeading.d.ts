import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PanelHeading {
    export interface PanelHeadingProps extends ReactDOM.HTMLProps<PanelHeading> {
        componentClass?: string;
        bsClass?: string;
    }
}
declare class PanelHeading extends React.Component<PanelHeading.PanelHeadingProps> { }
export = PanelHeading;
