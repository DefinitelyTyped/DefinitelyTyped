import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sizes } from 'react-bootstrap';

declare namespace ListGroupItem {
    export interface ListGroupItemProps extends ReactDOM.HTMLProps<ListGroupItem> {
        active?: any;
        bsSize?: Sizes;
        bsStyle?: string;
        eventKey?: any;
        header?: React.ReactNode;
        listItem?: boolean;
    }
}
declare class ListGroupItem extends React.Component<ListGroupItem.ListGroupItemProps> { }
export = ListGroupItem;
