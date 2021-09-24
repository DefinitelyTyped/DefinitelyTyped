import * as React from "react";

export type PaginationProps = {
    itemsTotal: number;
    onClick: (...args: any[]) => any;
    className?: string | undefined;
    disableStyles?: boolean | undefined;
    displayTotal?: boolean | undefined;
    displayTotalProps?: any;
    initialPage?: number | undefined;
    itemsPerPage?: number | undefined;
    linkProps?: any;
    localizedText?: {
        next: string;
        previous: string;
    } | undefined;
    nextProps?: any;
    prevProps?: any;
    totalText?: string | undefined;
    visiblePageTotal?: number | undefined;
} & { [x: string]: any };

declare class Pagination extends React.Component<PaginationProps> {}

export default Pagination;
