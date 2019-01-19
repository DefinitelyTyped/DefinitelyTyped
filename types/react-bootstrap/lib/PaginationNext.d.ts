import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PaginationNext {
    export interface PaginationNextProps extends ReactDOM.HTMLProps<PaginationNext> {
        disabled?: boolean;
    }
}
declare class PaginationNext extends React.Component<PaginationNext.PaginationNextProps> { }
export = PaginationNext;
