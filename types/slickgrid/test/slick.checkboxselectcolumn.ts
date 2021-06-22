/// <reference types="../../slickgrid/slick.checkboxselectcolumn" />
/// <reference types="../../slickgrid/slick.rowselectionmodel" />
/// <reference types="../../slickgrid/slick.columnpicker" />
/**
 * Extracted from https://github.com/mleibman/SlickGrid/blob/master/examples/example-checkbox-row-select.html
 */
(() => {
    var grid: Slick.Grid<Slick.SlickData>;
    var data: any[] = [];
    var options = {
        editable: true,
        enableCellNavigation: true,
        asyncEditorLoading: false,
        autoEdit: false
    };
    var columns: Slick.SlickData[] = [];
    $(function () {
        for (var i = 0; i < 100; i++) {
            // I'm not actually sure what this is supposed to be doing, but
            // this is verbatim the example :/
            var d: any = (data[i] = {});
            d[0] = "Row " + i;
        }
        var checkboxSelector = new Slick.CheckboxSelectColumn({
            cssClass: "slick-cell-checkboxsel"
        });
        columns.push(checkboxSelector.getColumnDefinition());
        for (var i = 0; i < 5; i++) {
            columns.push({
                id: i,
                name: String.fromCharCode("A".charCodeAt(0) + i),
                field: i,
                width: 100,
                editor: Slick.Editors.Text
            });
        }
        grid = new Slick.Grid("#myGrid", data, columns, options);
        grid.setSelectionModel(new Slick.RowSelectionModel({ selectActiveRow: false }));
        grid.registerPlugin(checkboxSelector);
        var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, { fadeSpeed: 1 });
    })
})();
