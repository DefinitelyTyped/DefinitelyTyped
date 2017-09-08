import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class ListGroupItem extends React.Component<ListGroupItemProps> { }
declare namespace ListGroupItem { }
export = ListGroupItem

interface ListGroupItemProps extends React.HTMLProps<ListGroupItem> {
  active?: any;
  bsSize?: Sizes;
  bsStyle?: string;
  eventKey?: any;
  header?: any; // TODO: Add more specific type
  listItem?: boolean;
}
