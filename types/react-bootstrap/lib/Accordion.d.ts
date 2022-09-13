import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace Accordion {
    export interface AccordionProps extends React.HTMLProps<Accordion> {
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        collapsible?: boolean | undefined;
        defaultExpanded?: boolean | undefined;
        eventKey?: any;
        expanded?: boolean | undefined;
        footer?: React.ReactNode | undefined;
        header?: React.ReactNode | undefined;
    }
}
declare class Accordion extends React.Component<Accordion.AccordionProps> { }
export = Accordion;


