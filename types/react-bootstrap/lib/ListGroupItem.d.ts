import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace ListGroupItem {
    export interface ListGroupItemProps extends React.HTMLProps<ListGroupItem> {
        active?: any;
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        eventKey?: any;
        header?: React.ReactNode | undefined;
        listItem?: boolean | undefined;
    }
}
declare class ListGroupItem extends React.Component<ListGroupItem.ListGroupItemProps> { }
export = ListGroupItem;
