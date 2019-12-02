/// <reference types="../../slickgrid/slick.autotooltips" />

var tgrid = new Slick.Grid("#myGrid", [], [], {});
tgrid.registerPlugin(new Slick.AutoTooltips({
    enableForCells: true,
    enableForHeaderCells: true,
    maxToolTipLength: 100
}));
