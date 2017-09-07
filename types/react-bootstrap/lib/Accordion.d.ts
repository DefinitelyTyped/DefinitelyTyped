import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class Accordion extends React.Component<AccordionProps> { }
declare namespace Accordion { }
export = Accordion;

interface AccordionProps extends React.HTMLProps<Accordion> {
  bsSize?: Sizes;
  bsStyle?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  eventKey?: any;
  expanded?: boolean;
  footer?: any; // TODO: Add more specific type
  header?: any; // TODO: Add more specific type
}
