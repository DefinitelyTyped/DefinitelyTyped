/// <reference types="jquery" />
/// <reference types="jquery.dataTables" />

$(document).ready(function() {

    var config: DataTables.Settings = {
        // FixedHeader extension options
        fixedHeader: {
            footer: true,
            footerOffset: 4,
            header: true,
            headerOffset: 3
        }
    };
});
