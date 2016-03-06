/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="gridstack.d.ts" />

let options = {
    float: true
};
let gridstack = $(document).gridstack(options).data("gridstack");

gridstack.addWidget("test", 1, 2, 3, 4, true);
gridstack.batchUpdate();
gridstack.cellHeight();
gridstack.cellHeight("2px");
gridstack.cellWidth();
gridstack.getCellFromPixel({ left:20, top: 20 });
