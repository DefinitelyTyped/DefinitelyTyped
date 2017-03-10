$(document).ready(() => {
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
