import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Table {
    export interface TableProps extends ReactDOM.HTMLProps<Table> {
        bordered?: boolean;
        condensed?: boolean;
        hover?: boolean;
        responsive?: boolean;
        striped?: boolean;
        fill?: boolean;
        bsClass?: string;
    }
}
declare class Table extends React.Component<Table.TableProps> { }
export = Table;
