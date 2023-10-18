import * as React from "react";
export interface PaginationProps {
    total: number;
    display: number;
    current: number;
    onChange(value: number): void;
}
declare class Pagination extends React.Component<PaginationProps, {}> {}
export default Pagination;
