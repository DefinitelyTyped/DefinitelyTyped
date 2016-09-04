/// <reference path="./slick.autotooltips.d.ts" />

var grid = new Slick.Grid("#myGrid", [], [], {});
grid.registerPlugin(new Slick.AutoTooltips({
    enableForCells: true,
    enableForHeaderCells: true,
    maxToolTipLength: 100
}));
