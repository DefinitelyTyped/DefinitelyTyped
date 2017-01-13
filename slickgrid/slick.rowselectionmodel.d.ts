// Type definitions for SlickGrid RowSelectionModel Plugin 2.1.0
// Project: https://github.com/mleibman/SlickGrid
// Definitions by: Derek Cicerone <https://github.com/derekcicerone/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare namespace Slick {
    class RowSelectionModel<T extends SlickData, E> extends SelectionModel<T, E> {
        constructor(options?:{selectActiveRow:boolean;});

        getSelectedRows():number[];

        setSelectedRows(rows:number[]):void;

        getSelectedRanges():number[];

        setSelectedRanges(ranges:number[]):void;
    }
}
