/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="gridstack.d.ts" />


// Type definitions for Gridstack
// Project: http://troolee.github.io/gridstack.js/
// Definitions by: Pascal Senn <https://github.com/PascalSenn/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

var options: GridStack.IGridstackOptions = {
    float: true,
    draggable: {
        cursor: "myCursor"
    }
};
var gridstack = $(document).gridstack(options).data("gridstack");

gridstack.add_widget("test", 1, 2, 3, 4);
gridstack.batch_update();
gridstack.cell_height();;
gridstack.cell_height(2);
gridstack.cell_width();
gridstack.get_cell_from_pixel({ left:20, top: 20 });
