import * as React from 'react';

declare namespace Grid {
    export interface GridProps extends React.HTMLProps<Grid> {
        componentClass?: React.ElementType | undefined;
        fluid?: boolean | undefined;
        bsClass?: string | undefined;
    }
}
declare class Grid extends React.Component<Grid.GridProps> { }
export = Grid;
