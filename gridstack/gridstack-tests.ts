/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="gridstack.d.ts" />


// Type definitions for Gridstack
// Project: http://troolee.github.io/gridstack.js/
// Definitions by: Pascal Senn <https://github.com/PascalSenn/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

var options = <IGridstackOptions> {
    float: true
};
var gridstack:GridStack = $(document).gridstack(options);

gridstack.add_widget("test", 1, 2, 3, 4, true);
gridstack.batch_update();
gridstack.cell_height();;
gridstack.cell_height(2);
gridstack.cell_width();
gridstack.get_cell_from_pixel(<MousePosition>{ left:20, top: 20 });
