// Type definitions for ink-table 1.0
// Project: https://github.com/maticzav/ink-table#readme
// Definitions by: Łukasz Ostrowski <https://github.com/lukostry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { InkComponent, InkNode, StatelessComponent } from "ink";

export interface TableProps {
    cell?: InkComponent | undefined;
    data?: ReadonlyArray<object> | undefined;
    header?: InkComponent | undefined;
    padding?: number | undefined;
    skeleton?: InkComponent | undefined;
}

export const Cell: StatelessComponent<{ children: InkNode }>;
export const Header: StatelessComponent<{ children: InkNode }>;
export const Skeleton: StatelessComponent<{ children: InkNode }>;

declare const Table: StatelessComponent<TableProps>;

export default Table;
