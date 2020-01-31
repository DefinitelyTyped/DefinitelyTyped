import React = require('react');

export interface PaginationProps {
    tabIndex?: number;
    ariaLabel?: string;
    activePage?: number;
    activePageAriaLabel?: string;
    totalPages: number;
    nextButtonText?: string;
    pageAriaLabel?: string;
    pageHref?: () => void;
    prevButtonText?: string;
    onPageClick?: () => void;
    infoFormatter?: () => void;
    followOnlyFirstPage?: boolean;
}

export default class Pagination extends React.Component<PaginationProps> {}
