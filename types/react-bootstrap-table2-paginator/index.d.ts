// Type definitions for react-bootstrap-table2-paginator 2.1
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Wlad Meixner <https://github.com/gosticks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8.3

import { PaginationOptions } from 'react-bootstrap-table-next';

// documentation taken from https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html

/**
 * declaration for table pagination sub module and factory
 */
declare function paginationFactory(options: PaginationOptions): { options?: PaginationOptions };
export default paginationFactory;
