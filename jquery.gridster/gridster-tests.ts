/// <reference path="gridster.d.ts" />

var el: HTMLElement = new HTMLElement();

interface SerializeData {
	x?: number;
	y?: number;
}

var options: GridsterOptions = {
	min_cols: 5,
	autogenerate_sytesheet: true,
	serialize_params: ($w: JQuery, wgd: GridsterCoords) => {
		return {
			x: wgd.row,
			y: wgd.col
		};
	}
};

var gridster = <Gridster>$('.gridster ul').gridster(el, options).data('grister');
gridster.add_widget('<li class="new">The HTML of the widget...</li>', 2, 1);
gridster.remove_widget($('gridster li').eq(3).get(0));
var json = gridster.serialize<SerializeData>();
