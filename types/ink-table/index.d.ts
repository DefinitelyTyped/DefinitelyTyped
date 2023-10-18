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
