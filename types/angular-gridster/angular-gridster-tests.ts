import * as angular from "angular";

import gridster from "angular-gridster";

const myApp = angular.module("testModule", ["gridster"]);

// configure gridster's global options
myApp.run(["gridsterConfig", (gridsterConfig: angular.gridster.GridsterConfig) => {
        gridsterConfig.mobileBreakPoint = 697;
        gridsterConfig.colWidth = "100";
        gridsterConfig.rowHeight = "100";
        gridsterConfig.minColumns = 1;
        gridsterConfig.columns = 20;
        gridsterConfig.margins = [5, 5];
        gridsterConfig.minSizeX = 2;
        gridsterConfig.minSizeY = 2;
        gridsterConfig.outerMargin = true;
        gridsterConfig.pushing = true;
        gridsterConfig.floating = true;
        gridsterConfig.swapping = true;
        gridsterConfig.draggable = { enabled: true};
        gridsterConfig.resizable = { enabled: true,
                                     handles: ["n", "s", "e", "w", "ne", "se", "sw", "nw"]};
    }
]);
