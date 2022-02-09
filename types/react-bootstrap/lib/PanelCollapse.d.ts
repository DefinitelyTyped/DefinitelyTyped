import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare namespace PanelCollapse {
    export interface PanelCollapseProps extends React.HTMLProps<PanelCollapse> {
        bsClass?: string | undefined;
        onEnter?: Function | undefined;
        onEntering?: Function | undefined;
        onEntered?: Function | undefined;
        onExit?: Function | undefined;
        onExiting?: Function | undefined;
        onExited?: Function | undefined;
    }
}
declare class PanelCollapse extends React.Component<PanelCollapse.PanelCollapseProps> { }
export = PanelCollapse;
