import * as React from 'react';
import { Collapse as RBCollapse, SelectCallback, Sizes, TransitionCallbacks } from 'react-bootstrap';

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
        onToggle?: (expanded: boolean, event: React.SyntheticEvent<Panel>) => void;
        onSelect?: SelectCallback;
    }

    export interface HeadingProps {
        componentClass?: JSX.Element;
        bsClass?: string;
    }

    export interface TitleProps {
        componentClass?: JSX.Element;
        bsClass?: string;
        toggle?: boolean;
    }

    export interface BodyProps {
        bsClass?: string;
        /**
         * Documentation marked it as required, but its default is false
         * @default false
         */
        collapsible?: boolean;
    }

    export interface ToggleProps {
        componentClass?: JSX.Element;
        onClick?: React.SyntheticEvent<Panel>;
    }

    export interface FooterProps {
        bsClass?: string;
    }

    export class Heading extends React.Component<Panel.PanelProps> {

    }

    export class Title extends React.Component<Panel.TitleProps> {

    }

    export class Toggle extends React.Component<ToggleProps> {

    }

    export class Collapse extends RBCollapse {

    }

    export class Body extends React.Component<Panel.BodyProps> {

    }

    export class Footer extends React.Component<Panel.FooterProps> {

    }

}

declare class Panel extends React.Component<Panel.PanelProps> {
}

export = Panel;
