import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PaginationItem {
    export interface PaginationItemProps extends ReactDOM.HTMLProps<PaginationItem> {
        disabled?: boolean;
        active?: boolean;
    }
}
declare class PaginationItem extends React.Component<PaginationItem.PaginationItemProps> { }
export = PaginationItem;
