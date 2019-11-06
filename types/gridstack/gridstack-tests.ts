/// <reference types="jquery"/>

var options: IGridstackOptions = {
    float: true
};
var element: JQuery = $(document).gridstack(options);
var gridstack: GridStack = $(document).data("gridstack");
var gsFromElement: GridStack = element.data("gridstack");

if (gridstack !== gsFromElement) throw Error('These should match!');

gridstack.addWidget("test", 1, 2, 3, 4, true);
gridstack.addWidget(document.createElement('div'), 1, 2, 3, 4, true);
gridstack.addWidget($(document.createElement('div')), 1, 2, 3, 4, true);
gridstack.makeWidget($(document.createElement('div')));
gridstack.batchUpdate();
gridstack.cellHeight();;
gridstack.cellHeight(2);
gridstack.cellWidth();
gridstack.getCellFromPixel(<MousePosition>{ left:20, top: 20 });
gridstack.removeAll(false);
