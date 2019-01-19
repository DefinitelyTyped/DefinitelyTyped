import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Grid {
    export interface GridProps extends ReactDOM.HTMLProps<Grid> {
        componentClass?: React.ReactType;
        fluid?: boolean;
        bsClass?: string;
    }
}
declare class Grid extends React.Component<Grid.GridProps> { }
export = Grid;
