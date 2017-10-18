var config_1: DataTables.Settings = {
    // FixedHeader extension options
    fixedHeader: {
        footer: true,
        footerOffset: 4,
        header: true,
        headerOffset: 3
    }
};

var dt: DataTables.Api = $("selector").DataTable({
    fixedHeader: true
});

// Statics
var fixed_1 = new $.fn.dataTable.FixedHeader(dt, { 
    footer: true,
});

var fixed_2 = new $.fn.dataTable.FixedHeader(dt, true);

var version = $.fn.dataTable.FixedHeader.version;

$.fn.dataTable.FixedHeader.defaults.footer = false;

// API
dt.fixedHeader.adjust();
dt.fixedHeader.disable();
dt.fixedHeader.enable(true);

// Chaining
dt
    .fixedHeader.footerOffset(10)
    .fixedHeader.headerOffset(10);

    