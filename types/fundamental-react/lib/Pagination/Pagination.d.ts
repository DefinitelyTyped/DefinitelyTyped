import * as React from "react";

export type PaginationProps = {
    /* Total number of items. itemsTotal / itemsPerPage calculates how many navigation items should be shown in the control. */
    itemsTotal: number;
    onClick: (page: number) => void;
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Set to **true** to show total number of items along with `totalText` string. */
    displayTotal?: boolean;
    displayTotalProps?: {[x: string]: any};
    /* Initial page to be selected. */
    initialPage?: number;
    /* Number of items to display on page. */
    itemsPerPage?: number;
    /* Additional props to be spread to the page number `<a>` elements. */
    linkProps?: { [x: string]: any };
    localizedText?: {
        /* Value for aria-label on the next <a> element. */
        next: string;
        /* Value for aria-label on the previous <a> element. */
        previous: string;
    };
    /* Additional props to be spread to the next arrow `<a>` element. */
    nextProps?: { [x: string]: any };
    /* Additional props to be spread to the previous arrow `<a>` element. */
    prevProps?: { [x: string]: any };
    /* Localized text to display next to the total number of items.  Used with `displayTotal`. */
    totalText?: string;
} & { [x: string]: any };

declare class Pagination extends React.Component<PaginationProps> {}

export default Pagination;
