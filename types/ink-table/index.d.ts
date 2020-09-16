// Type definitions for ink-table 1.0
// Project: https://github.com/maticzav/ink-table#readme
// Definitions by: Łukasz Ostrowski <https://github.com/lukostry>
// Definitions: https://github.com/DefinitelyTyped/
// TypeScript Version: 2.8

import { InkComponent, InkNode, StatelessComponent } from 'ink';

export interface TableProps {
    cell?: InkComponent;
    data?: ReadonlyArray<object>;
    header?: InkComponent;
    padding?: number;
    skeleton?: InkComponent;
}

export const Cell: StatelessComponent<{ children: InkNode }>;
export const Header: StatelessComponent<{ children: InkNode }>;
export const Skeleton: StatelessComponent<{ children: InkNode }>;

declare const Table: StatelessComponent<TableProps>;

export default Table;
