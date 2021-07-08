import * as React from 'react';

declare namespace Table {
    export interface TableProps extends React.HTMLProps<Table> {
        bordered?: boolean | undefined;
        condensed?: boolean | undefined;
        hover?: boolean | undefined;
        responsive?: boolean | undefined;
        striped?: boolean | undefined;
        fill?: boolean | undefined;
        bsClass?: string | undefined;
    }
}
declare class Table extends React.Component<Table.TableProps> { }
export = Table;
