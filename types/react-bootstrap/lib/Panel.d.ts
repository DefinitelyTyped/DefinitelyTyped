import * as React from 'react';
import { TransitionCallbacks, Sizes, SelectCallback } from 'react-bootstrap';

declare namespace Panel {
    export interface PanelProps extends TransitionCallbacks, React.HTMLProps<Panel> {
        bsClass?: string;
        bsSize?: Sizes;
        bsStyle?: string;
        collapsible?: string | boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: React.ReactNode;
        header?: React.ReactNode;
        onToggle?: () => void;
        onSelect?: SelectCallback;
    }

    export interface HeadingProps {
        componentClass?: JSX.Element;
        bsClass?: string;
    }

    export interface BodyProps {
        bsClass?: string;
        collapsible?: boolean;
    }

    export class Heading extends React.Component<Panel.PanelProps> {
    }

    export class Body extends React.Component<Panel.BodyProps> {
    }
}

declare class Panel extends React.Component<Panel.PanelProps> {
}

export = Panel;
