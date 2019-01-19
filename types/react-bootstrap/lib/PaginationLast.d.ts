import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PaginationLast {
    export interface PaginationLastProps extends ReactDOM.HTMLProps<PaginationLast> {
        disabled?: boolean;
    }
}
declare class PaginationLast extends React.Component<PaginationLast.PaginationLastProps> { }
export = PaginationLast;
