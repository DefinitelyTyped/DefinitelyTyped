import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Row {
    export interface RowProps extends ReactDOM.HTMLProps<Row> {
        componentClass?: React.ReactType;
    }
}
declare class Row extends React.Component<Row.RowProps> { }
export = Row;
