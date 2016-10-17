/// <reference types="jquery"/>



// Type definitions for Gridstack
// Project: http://troolee.github.io/gridstack.js/
// Definitions by: Pascal Senn <https://github.com/PascalSenn/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

var options = <IGridstackOptions> {
    float: true
};
var gridstack:GridStack = $(document).gridstack(options);

gridstack.addWidget("test", 1, 2, 3, 4, true);
gridstack.batchUpdate();
gridstack.cellHeight();;
gridstack.cellHeight(2);
gridstack.cellWidth();
gridstack.getCellFromPixel(<MousePosition>{ left:20, top: 20 });
