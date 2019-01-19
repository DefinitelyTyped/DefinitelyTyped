import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PanelFooter {
    export interface PanelFooterProps extends ReactDOM.HTMLProps<PanelFooter> {
        bsClass?: string;
    }
}
declare class PanelFooter extends React.Component<PanelFooter.PanelFooterProps> { }
export = PanelFooter;
