import * as React from 'react';
import { TransitionCallbacks, Sizes, SelectCallback } from 'react-bootstrap';

declare namespace Panel {
    export interface PanelProps extends TransitionCallbacks, React.HTMLProps<Panel> {
        bsClass?: string;
        bsSize?: Sizes;
        bsStyle?: string;
        collapsible?: boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: React.ReactNode;
        header?: React.ReactNode;
        onSelect?: SelectCallback;
    }
}
declare class Panel extends React.Component<Panel.PanelProps> { }
export = Panel;
