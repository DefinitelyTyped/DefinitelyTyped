

interface SerializeData {
    x?: number | undefined;
    y?: number | undefined;
}

var options: GridsterOptions = {
    min_cols: 5,
    autogenerate_sytesheet: true,
    serialize_params: ($w: JQuery, wgd: GridsterCoords) => {
        return {
            x: wgd.row,
            y: wgd.col
        };
    },
    widget_base_dimensions: [100, 100]
};

var gridster: Gridster = $('.gridster ul').gridster(options).data('gridster');
gridster.add_widget('<li class="new">The HTML of the widget...</li>', 2, 1);
gridster.remove_widget($('gridster li').eq(3).get(0)!);
var json = gridster.serialize<SerializeData>();

var coords: GridsterCoords = gridster.get_highest_occupied_cell();
var position = coords.col + coords.row;

options.widget_base_dimensions = [100, 200];
gridster.resize_widget_dimensions(options);

options.widget_base_dimensions = ['auto', 200];
gridster.resize_widget_dimensions(options);

gridster.set_widget_min_size(0, [1, 2]);

function noOptions() {
    var grid: Gridster = $('.gridster ul').gridster().data('gridster')
}

function widgetSelectorHTMLElements() {
    var opts: GridsterOptions = {
        widget_selector: $('.gridster ul li').get()
    };

    var grid: Gridster = $('.gridster ul').gridster(opts).data('gridster')
}

function widgetSelectorString() {
    var opts: GridsterOptions = {
        widget_selector: '.gridster ul li'
    };

    var grid: Gridster = $('.gridster ul').gridster(opts).data('gridster')
}

function withNamespace() {
    var grid: Gridster = $('.gridster ul').gridster({
        namespace: 'custom-gridster'
    }).data('gridster')
}

function withStylesheet() {
    var grid: Gridster = $('.gridster ul').gridster({
        autogenerate_stylesheet: false
    }).data('gridster')
}

function withResize() {
    var grid: Gridster = $('.gridster ul').gridster({
        resize: {
            enabled: true,
            axes: ['both'],
            handle_append_to: 'li .handle-container',
            handle_class: '.handle',
            max_size: [5, 5],
            min_size: [1, 1],
            resize: (event: Event, ui: GridsterUi, $el: JQuery) => {},
            start: (event: Event, ui: { helper: JQuery; }, $el: JQuery) => {},
            stop: (event: Event, ui: { helper: JQuery; }, $el: JQuery) => {},
        }
    }).data('gridster')
}
