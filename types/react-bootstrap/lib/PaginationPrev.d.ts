import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PaginationPrev {
    export interface PaginationPrevProps extends ReactDOM.HTMLProps<PaginationPrev> {
        disabled?: boolean;
    }
}
declare class PaginationPrev extends React.Component<PaginationPrev.PaginationPrevProps> { }
export = PaginationPrev;
