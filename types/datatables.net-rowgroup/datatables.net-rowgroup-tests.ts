let config_1: DataTables.Settings = {
	// RowGroup extension options
	rowGroup: {
		className: 'className',
		enable: true,
		dataSrc: 'data',
		endClassName: 'endClassName',
		endRender: (rows, group) => {
			return `${ group } (${ rows.count() } rows)`;
		},
		startRender: (rows, group) => {
			return `${ group } (${ rows.count() } rows)`;
		}
	}
};

let dt: DataTables.Api = $("selector").DataTable({
	rowGroup: true
});

// Statics
let fixed_1 = new $.fn.dataTable.RowGroup(dt, {
	enable: true,
});

let fixed_2 = new $.fn.dataTable.RowGroup(dt, true);

let version = $.fn.dataTable.RowGroup.version;

$.fn.dataTable.RowGroup.defaults.className = 'row-group-class';

// API
dt.rowGroup().dataSrc();
dt.rowGroup().disable();
dt.rowGroup().enable(true);

// Chaining
dt.rowGroup().dataSrc(12)
	.rowGroup().disable()
	.rowGroup().enable();
