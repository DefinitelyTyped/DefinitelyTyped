declare namespace Slick {
    class RowSelectionModel<T extends SlickData, E> extends SelectionModel<T, E> {
        constructor(options?: { selectActiveRow: boolean });

        getSelectedRows(): number[];

        setSelectedRows(rows: number[]): void;

        getSelectedRanges(): number[];

        setSelectedRanges(ranges: number[]): void;
    }
}
