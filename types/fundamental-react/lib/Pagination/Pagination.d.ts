import * as React from "react";

export type PaginationProps = {
    itemsTotal: number;
    onClick: (...args: any[]) => any;
    className?: string;
    disableStyles?: boolean;
    displayTotal?: boolean;
    displayTotalProps?: any;
    initialPage?: number;
    itemsPerPage?: number;
    linkProps?: any;
    localizedText?: {
        next: string;
        previous: string;
    };
    nextProps?: any;
    prevProps?: any;
    totalText?: string;
    visiblePageTotal?: number;
} & { [x: string]: any };

declare class Pagination extends React.Component<PaginationProps> {}

export default Pagination;
