import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace ListGroup {
    interface ListGroupProps extends ReactDOM.HTMLProps<ListGroup> {
        bsClass?: string;
        componentClass?: React.ReactType; // Added since v0.30.0
        // TODO: Add more specific type
        fill?: boolean;
    }
}
declare class ListGroup extends React.Component<ListGroup.ListGroupProps> { }
export = ListGroup;
