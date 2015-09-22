/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="SlickGrid.d.ts" />

interface MyData extends Slick.SlickData {
	title: string;
	duration: string;
	percentComplete: number;
	start: string;
	finish: string;
	effortDriven: boolean;
}

var grid: Slick.Grid<MyData>;
var columns: Slick.Column<MyData>[] = [
	{ id: "title", name: "Title", field: "title" },
	{ id: "duration", name: "Duration", field: "duration" },
	{ id: "%", name: "% Complete", field: "percentComplete" },
	{ id: "start", name: "Start", field: "start" },
	{ id: "finish", name: "Finish", field: "finish" },
	{ id: "effort-driven", name: "Effort Driven", field: "effortDriven" }
];

var options: Slick.GridOptions<MyData> = {
	enableCellNavigation: true,
	enableColumnReorder: false
};

var data: MyData[] = [];
for (var i = 0; i < 500; i++) {
	data[i] = {
		title: "Task " + i,
		duration: "5 days",
		percentComplete: Math.round(Math.random() * 100),
		start: "01/01/2009",
		finish: "01/05/2009",
		effortDriven: (i % 5 == 0)
	};
}

grid = new Slick.Grid<MyData>("#myGrid", data, columns, options);

grid.init();

grid.getData();

grid.getDataItem(14).title;

grid.setData([{ title: "task", duration: "5 days", percentComplete: 5, start: "01/01/2013", finish: "12/12/2013", effortDriven: false }], true);

var ids: string[] = [];
for (i = 0; i < grid.getDataLength(); i++) {
	ids.push(grid.getDataItem(i).title);
}

var $selectedCells = $('.' + grid.getOptions().selectedCellCssClass);

grid.getSelectedRows();

grid.getSelectionModel();

grid.setOptions({ selectedCellCssClass: "newSelection" });
grid.setSelectedRows([0]);
$('.newSelection');

grid.setSelectedRows([0, 1, 2]);

class SingleCellSelectionModel extends Slick.SelectionModel<MyData, Slick.Range[]> {
	private self: SingleCellSelectionModel = null;
	private _grid: Slick.Grid<MyData>;

	constructor() {
		super();
		this.self = this;
	}

	public init(grid: Slick.Grid<MyData>) {
		this.self._grid = grid;
		this.self._grid.onClick.subscribe(this.self.handleGridClick);
	}

	public destroy() {
		this.self._grid.onClick.unsubscribe(this.self.handleGridClick);
	}

	public handleGridClick(e: any, args: any) {
		var cell = this.self._grid.getCellFromEvent(e);
		if (!cell || !this.self._grid.canCellBeSelected(cell.row, cell.cell)) {
			return;
		}

		this.onSelectedRangesChanged.notify([new Slick.Range(cell.row, cell.cell, cell.row, cell.cell)], new Slick.EventData(), this);
	}
}

var selectionModel = new SingleCellSelectionModel();
selectionModel.init(grid);
grid.setSelectionModel(selectionModel);

var column = grid.getColumns()[grid.getColumnIndex("title")];

var cols = grid.getColumns();
var sortable = cols[0].sortable;
sortable ? console.log("It's sortable!") : console.log("It's not sortable!");

var data2 = grid.getColumns();
data2[0].name = "First";
grid.setColumns(data);

grid.updateColumnHeader("FirstName", "A First Name");

grid.addCellCssStyles("test", {
	0: {
		"number_column": "cell-bold",
		"title_column": "cell-title cell-highlighted"
	},
	4: {
		"percent_column": "cell-highlighted"
	}
});

grid.canCellBeActive(5, 10);

grid.canCellBeSelected(5, 10);

grid.editActiveCell(new Slick.Editors.Date<MyData>({
	column: cols,
	container: undefined,
	grid: grid
}));

grid.setActiveCell(0, 0);
grid.editActiveCell(new Slick.Editors.Date<MyData>({
	column: cols,
	container: undefined,
	grid: grid
}));

grid.flashCell(5, 10);
grid.flashCell(5, 10, 500);

grid.getActiveCell().row;
grid.getActiveCell().cell;

grid.getActiveCellNode().innerHTML;

grid.getActiveCellPosition().bottom;
grid.getActiveCellPosition().height;
grid.getActiveCellPosition().left;
grid.getActiveCellPosition().right;
grid.getActiveCellPosition().top;
grid.getActiveCellPosition().visible;
grid.getActiveCellPosition().width;

grid.getCellCssStyles("test")[0]["number_column"];

grid.getCellEditor();

grid.getCellFromEvent(new Slick.Event());

grid.getCellFromPoint(5, 10);

grid.getCellNode(5, 10);

grid.getCellNodeBox(5, 10);
grid.getCellNodeBox(5, 10).bottom;
grid.getCellNodeBox(5, 10).height;
grid.getCellNodeBox(5, 10).left;
grid.getCellNodeBox(5, 10).right;
grid.getCellNodeBox(5, 10).top;
grid.getCellNodeBox(5, 10).visible;
grid.getCellNodeBox(5, 10).width;

grid.gotoCell(5, 10);
grid.gotoCell(5, 10, true);

grid.navigateDown();
grid.navigateLeft();
grid.navigateNext();
grid.navigatePrev();
grid.navigateRight();
grid.navigateUp();

grid.removeCellCssStyles("test");

grid.resetActiveCell();

grid.setActiveCell(5, 10);

grid.setCellCssStyles("test", {
	0: {
		"number_column": "cell-bold",
		"title_column": "cell-title cell-highlighted"
	},
	4: {
		"percent_column": "cell-highlighted"
	}
});

// Begin DataView tests
var dataView = new Slick.Data.DataView<MyData>();
var gridWithDataView = new Slick.Grid<MyData>('#grid2', dataView, columns, options);
dataView.getIdxById('foo') + 5;

columns.forEach(column => {
	if (column.editor !== Slick.Editors.Integer) {
		return;
	}
});

grid.onSort.subscribe((e, args) => {
    var sortCol:string = args.sortCols[0].sortCol.field;
});
