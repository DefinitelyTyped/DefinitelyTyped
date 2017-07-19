import * as React from 'react';

declare class ListGroup extends React.Component<ListGroupProps> { }
declare namespace ListGroup { }
export = ListGroup

interface ListGroupProps extends React.HTMLProps<ListGroup> {
  componentClass?: React.ReactType; // Added since v0.30.0
  fill?: boolean; // TODO: Add more specific type
}
