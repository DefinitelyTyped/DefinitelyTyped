let config_1: DataTables.Settings = {
    // FixedHeader extension options
    fixedHeader: {
        footer: true,
        footerOffset: 4,
        header: true,
        headerOffset: 3
    }
};

let dt: DataTables.Api = $("selector").DataTable({
    fixedHeader: true
});

// Statics
let fixed_1 = new $.fn.dataTable.FixedHeader(dt, {
    footer: true,
});

let fixed_2 = new $.fn.dataTable.FixedHeader(dt, true);

let version = $.fn.dataTable.FixedHeader.version;

$.fn.dataTable.FixedHeader.defaults.footer = false;

// API
dt.fixedHeader.adjust();
dt.fixedHeader.disable();
dt.fixedHeader.enable(true);

// Chaining
dt
    .fixedHeader.footerOffset(10)
    .fixedHeader.headerOffset(10);
