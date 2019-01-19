import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PanelBody {
    export interface PanelBodyProps extends ReactDOM.HTMLProps<PanelBody> {
        collapsible?: boolean;
        bsClass?: string;
    }
}
declare class PanelBody extends React.Component<PanelBody.PanelBodyProps> { }
export = PanelBody;
