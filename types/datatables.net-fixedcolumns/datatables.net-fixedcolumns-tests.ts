$(document).ready(() => {
    const config: DataTables.Settings = {
        // FixedColumns extension options
        fixedColumns: {
            heightMatch: "semiauto",
            leftColumns: 2,
            rightColumns: 1,
        },
    };

    let cellIndex: DataTables.CellIndexReturn = {
        column: 4,
        row: 1,
        columnVisible: 0,
    };

    let dt = $("#example").DataTable();
    const cells = dt.cells();

    dt = cells.fixedNodes();

    const cell = dt.cell(":contains('Not shipped')");
    const node = cell.fixedNode();

    node.cloneNode();

    const fixedColumns = dt.fixedColumns();
    dt = fixedColumns.update();
    cellIndex = fixedColumns.cellIndex(node);
    dt = fixedColumns.relayout();
    const rowIndex: number = fixedColumns.rowIndex();

    const rows = dt.rows();
    dt = rows.recalcHeight();
});
