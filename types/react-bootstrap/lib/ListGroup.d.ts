import * as React from 'react';

interface ListGroupProps extends React.HTMLProps<ListGroup> {
  componentClass?: React.ReactType; // Added since v0.30.0
  fill?: boolean; // TODO: Add more specific type
}

export default class ListGroup extends React.Component<ListGroupProps> { }
