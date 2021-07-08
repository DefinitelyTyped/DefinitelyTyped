// Type definitions for react-bootstrap-table2-paginator 2.1
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Wlad Meixner <https://github.com/gosticks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// documentation taken from https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html

import { PaginationOptions, BootstrapTableProps } from 'react-bootstrap-table-next';

export interface PaginationCtxOptions {
    options?: PaginationOptions | undefined;
}

/**
 * declaration for table pagination sub module and factory
 */
declare function paginationFactory(options: PaginationOptions): PaginationCtxOptions;

export default paginationFactory;

interface PaginationChildProps extends PaginationOptions {
    tableId?: string | undefined;
    bootstrap4?: boolean | undefined;
}

/**
 * Pagination context provider
 */
export function PaginationProvider(props: {
    pagination?: PaginationCtxOptions | undefined;
    children: (childProps: {
        paginationProps: PaginationChildProps;
        paginationTableProps: BootstrapTableProps;
    }) => React.ReactElement | null;
}): React.ReactElement | null;

export const PaginationTotalStandalone: React.FC<PaginationChildProps>;
export const PaginationListStandalone: React.FC<PaginationChildProps>;

export interface SizePerPageDropdownStandaloneProps extends PaginationChildProps {
    open?: boolean | undefined;
    hidden?: boolean | undefined;
    btnContextual?: boolean | undefined;
    variation?: 'dropdown' | 'dropup' | undefined;
    className?: string | undefined;
}

export const SizePerPageDropdownStandalone: React.FC<SizePerPageDropdownStandaloneProps>;
