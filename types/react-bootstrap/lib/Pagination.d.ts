import * as React from 'react';
import { Sizes, SelectCallback } from 'react-bootstrap';
import * as PaginationFirst from './PaginationFirst'
import * as PaginationPrev from './PaginationPrev'
import * as PaginationNext from './PaginationNext'
import * as PaginationLast from './PaginationLast'
import * as PaginationEllipsis from './PaginationEllipsis'
import * as PaginationItem from './PaginationItem'

declare namespace Pagination {
    export interface PaginationProps extends React.HTMLProps<Pagination> {
        bsSize?: Sizes;
    }
}
declare class Pagination extends React.Component<Pagination.PaginationProps> {
    static First: typeof PaginationFirst;
    static Prev: typeof PaginationPrev;
    static Next: typeof PaginationNext;
    static Last: typeof PaginationLast;
    static Ellipsis: typeof PaginationEllipsis;
    static Item: typeof PaginationItem;
}
export = Pagination;
