/// <reference path="SlickGrid.d.ts" />
/// <reference path="slick.rowmovemanager.d.ts" />
/// <reference path="slick.rowselectionmodel.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../jquery.event.drop/jquery.event.drop.d.ts" />

/**
 * Extracted from https://github.com/mleibman/SlickGrid/blob/master/examples/example9-row-reordering.html
 */
var grid: Slick.Grid<any>;
var data: any[] = [];
var columns = [
    {
        id: "#",
        name: "",
        width: 40,
        behavior: "selectAndMove",
        selectable: false,
        resizable: false,
        cssClass: "cell-reorder dnd"
    },
    {
        id: "name",
        name: "Name",
        field: "name",
        width: 500,
        cssClass: "cell-title",
        editor: Slick.Editors.Text,
        validator: requiredFieldValidator
    },
    {
        id: "complete",
        name: "Complete",
        width: 60,
        cssClass: "cell-effort-driven",
        field: "complete",
        cannotTriggerInsert: true,
        formatter: Slick.Formatters.Checkmark,
        editor: Slick.Editors.Checkbox
    }
];
var options = {
    editable: true,
    enableAddRow: true,
    enableCellNavigation: true,
    forceFitColumns: true,
    autoEdit: false
};
function requiredFieldValidator(value: any) {
    if (value == null || value == undefined || !value.length) {
        return { valid: false, msg: "This is a required field" };
    } else {
        return { valid: true, msg: null };
    }
}
$(function () {
    data = [
        { name: "Make a list", complete: true },
        { name: "Check it twice", complete: false },
        { name: "Find out who's naughty", complete: false },
        { name: "Find out who's nice", complete: false }
    ];
    grid = new Slick.Grid("#myGrid", data, columns, options);
    grid.setSelectionModel(new Slick.RowSelectionModel());
    var moveRowsPlugin = new Slick.RowMoveManager<any>({
        cancelEditOnDrag: true
    });
    moveRowsPlugin.onBeforeMoveRows.subscribe(function (e, data) {
        for (var i = 0; i < data.rows.length; i++) {
            // no point in moving before or after itself
            if (data.rows[i] == data.insertBefore || data.rows[i] == data.insertBefore - 1) {
                e.stopPropagation();
                return false;
            }
        }
        return true;
    });
    moveRowsPlugin.onMoveRows.subscribe(function (e, args) {
        var extractedRows: any[] = [], left: any, right: any;
        var rows = args.rows;
        var insertBefore = args.insertBefore;
        left = data.slice(0, insertBefore);
        right = data.slice(insertBefore, data.length);
        rows.sort(function (a: any, b: any) { return a - b; });
        for (var i = 0; i < rows.length; i++) {
            extractedRows.push(data[rows[i]]);
        }
        rows.reverse();
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (row < insertBefore) {
                left.splice(row, 1);
            } else {
                right.splice(row - insertBefore, 1);
            }
        }
        data = left.concat(extractedRows.concat(right));
        var selectedRows: any[] = [];
        for (var i = 0; i < rows.length; i++)
            selectedRows.push(left.length + i);
        grid.resetActiveCell();
        grid.setData(data);
        grid.setSelectedRows(selectedRows);
        grid.render();
    });
    grid.registerPlugin(moveRowsPlugin);
    grid.onDragInit.subscribe(function (e, dd) {
        // prevent the grid from cancelling drag'n'drop by default
        e.stopImmediatePropagation();
    });
    grid.onDragStart.subscribe(function (e: JQueryEventObject, dd: any) {
        var cell = grid.getCellFromEvent(e);
        if (!cell) {
            return;
        }
        dd.row = cell.row;
        if (!data[dd.row]) {
            return;
        }
        if (Slick.GlobalEditorLock.isActive()) {
            return;
        }
        e.stopImmediatePropagation();
        dd.mode = "recycle";
        var selectedRows = grid.getSelectedRows();
        if (!selectedRows.length || $.inArray(dd.row, selectedRows) == -1) {
            selectedRows = [dd.row];
            grid.setSelectedRows(selectedRows);
        }
        dd.rows = selectedRows;
        dd.count = selectedRows.length;
        var proxy = $("<span></span>")
            .css({
                position: "absolute",
                display: "inline-block",
                padding: "4px 10px",
                background: "#e0e0e0",
                border: "1px solid gray",
                "z-index": 99999,
                "-moz-border-radius": "8px",
                "-moz-box-shadow": "2px 2px 6px silver"
            })
            .text("Drag to Recycle Bin to delete " + dd.count + " selected row(s)")
            .appendTo("body");
        dd.helper = proxy;
        $(dd.available).css("background", "pink");
        return proxy;
    });
    grid.onDrag.subscribe(function (e: JQueryEventObject, dd: any) {
        if (dd.mode != "recycle") {
            return;
        }
        dd.helper.css({ top: e.pageY + 5, left: e.pageX + 5 });
    });
    grid.onDragEnd.subscribe(function (e: JQueryEventObject, dd: any) {
        if (dd.mode != "recycle") {
            return;
        }
        dd.helper.remove();
        $(dd.available).css("background", "beige");
    });
    $.drop({ mode: "mouse" });
    $("#dropzone")
        .bind("dropstart", function (e, dd) {
            if (dd.mode != "recycle") {
                return;
            }
            $(this).css("background", "yellow");
        } as (evt?: JQueryEventObject) => void)
        .bind("dropend", function (e, dd) {
            if (dd.mode != "recycle") {
                return;
            }
            $(dd.available).css("background", "pink");
        } as (evt?: JQueryEventObject) => void)
        .bind("drop", function (e, dd) {
            if (dd.mode != "recycle") {
                return;
            }
            var rowsToDelete = dd.rows.sort().reverse();
            for (var i = 0; i < rowsToDelete.length; i++) {
                data.splice(rowsToDelete[i], 1);
            }
            grid.invalidate();
            grid.setSelectedRows([]);
        } as (evt?: JQueryEventObject) => void);
    grid.onAddNewRow.subscribe(function (e, args) {
        var item = { name: "New task", complete: false };
        $.extend(item, args.item);
        data.push(item);
        grid.invalidateRows([data.length - 1]);
        grid.updateRowCount();
        grid.render();
    });
})
