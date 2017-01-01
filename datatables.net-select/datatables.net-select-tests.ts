/// <reference types="jquery" />
/// <reference types="jquery.dataTables" />

$(document).ready(function() {

    var config: DataTables.Settings = {
        // Select extension options
        select: {
            blurable: true,
            className: "selectClass",
            info: true,
            items: "row",
            selector: "td:first-child",
            style: "os"
        }
    };
});
