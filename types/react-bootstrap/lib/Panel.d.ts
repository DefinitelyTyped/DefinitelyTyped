import * as React from 'react';
import { TransitionCallbacks, Sizes, SelectCallback } from 'react-bootstrap';
import * as PanelHeading from './PanelHeading'
import * as PanelTitle from './PanelTitle'
import * as PanelToggle from './PanelToggle'
import * as PanelCollapse from './PanelCollapse'
import * as PanelBody from './PanelBody'
import * as PanelFooter from './PanelFooter'

declare namespace Panel {
    export interface PanelProps extends TransitionCallbacks, React.HTMLProps<Panel> {
        bsStyle?: string;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        onSelect?: SelectCallback;
        onToggle?: SelectCallback;
    }
}
declare class Panel extends React.Component<Panel.PanelProps> { 
    static Heading: typeof PanelHeading;
    static Title: typeof PanelTitle;
    static Toggle: typeof PanelToggle;
    static Collapse: typeof PanelCollapse;
    static Body: typeof PanelBody;
    static Footer: typeof PanelFooter;
}
export = Panel;
