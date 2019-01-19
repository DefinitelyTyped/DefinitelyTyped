import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PaginationEllipsis {
    export interface PaginationEllipsisProps extends ReactDOM.HTMLProps<PaginationEllipsis> {
        disabled?: boolean;
    }
}
declare class PaginationEllipsis extends React.Component<PaginationEllipsis.PaginationEllipsisProps> { }
export = PaginationEllipsis;
