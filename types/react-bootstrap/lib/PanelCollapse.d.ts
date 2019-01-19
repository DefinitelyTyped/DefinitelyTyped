import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PanelCollapse {
    export interface PanelCollapseProps extends ReactDOM.HTMLProps<PanelCollapse> {
        bsClass?: string;
        onEnter?: Function;
        onEntering?: Function;
        onEntered?: Function;
        onExit?: Function;
        onExiting?: Function;
        onExited?: Function;
    }
}
declare class PanelCollapse extends React.Component<PanelCollapse.PanelCollapseProps> { }
export = PanelCollapse;
