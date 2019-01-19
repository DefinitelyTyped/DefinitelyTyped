import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PaginationFirst {
    export interface PaginationFirstProps extends ReactDOM.HTMLProps<PaginationFirst> {
        disabled?: boolean;
    }
}
declare class PaginationFirst extends React.Component<PaginationFirst.PaginationFirstProps> { }
export = PaginationFirst;
