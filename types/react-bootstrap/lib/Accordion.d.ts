import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sizes } from 'react-bootstrap';

declare namespace Accordion {
    export interface AccordionProps extends ReactDOM.HTMLProps<Accordion> {
        bsSize?: Sizes;
        bsStyle?: string;
        collapsible?: boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: React.ReactNode;
        header?: React.ReactNode;
    }
}
declare class Accordion extends React.Component<Accordion.AccordionProps> { }
export = Accordion;


