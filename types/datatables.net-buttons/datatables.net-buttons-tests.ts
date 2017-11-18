const config_1: DataTables.Settings = {
    // Buttons extension options
    buttons: [{
        extend: 'excel',
        text: 'Excel',
        className: 'class',
        filename: "exported_file.csv",
        exportOptions: {
            columns: ':visible'
        }
    },
    {
        extend: 'excel',
        text: 'Excel',
        className: 'class',
        filename: "exported_file.csv",
        exportOptions: {
            columns: [1, 6, 2, 3, 4]
        }
    },
    {
        action(e, dt, node, config) { },
        available(dt, config) { return true; },
        destroy(dt, node, config) { },
        enabled: true,
        init(dt, node, config) { },
        key: 'a',
        name: 'name',
        namespace: 'namespace',
        titleAttr: 'title',
        title: 'title'
    }],
};

const config_2: DataTables.Settings = {
    // Buttons extension options
    buttons: {
        buttons: [
            "csv",
            {
                extend: "csv",
                name: "CSV-Export",
                className: "test-class"
            },
            (dt) => {
                return {
                    extend: "csv",
                    name: "CSV-Function",
                    className: "test-class"
                };
            }
        ],
    }
};

const config_3: DataTables.ButtonsSettings = {
    name: "Test",
    tabIndex: 1,
    buttons: [
        "copy",
        {
            extend: "csv",
            name: "CSV-Export",
            className: "test-class"
        },
        (dt) => {
            return {
                extend: "csv",
                name: "CSV-Function",
                className: "test-class"
            };
        },
        {
            extend: 'colvis',
            columnText(dt, idx, title) {
                return (idx + 1) + title;
            }
        },
        {
            extend: 'colvis',
            columns: ':gt(0)'
        },
        {
            extend: 'copy',
            text: 'Copy current page',
            exportOptions: {
                modifier: {
                    page: 'current'
                }
            }
        },
        {
            extend: 'csv',
            // Name the CSV
            filename: 'file_name',
            text: 'Customized CSV',
            exportOptions: {
                columns: [0, 1, $("#name_column"), $("#test_column"), $("#height_column"), $("#area_column")]
            },
            // Function which customize the CSV (input : csv is the object that you can preprocesss)
            customize(csv) {
                if (typeof (csv) !== "string") {
                    return;
                }
                // Split the csv to get the rows
                const split_csv = csv.split("\n");

                // Remove the row one to personnalize the headers
                split_csv[0] = '"Latitude","Longitude","Site Name","Description","Antenna Height","Antenna gain","Env loss","Candidate"';

                // For each row except the first one (header)
                $.each(split_csv.slice(1), (index, csv_row) => {
                    // Split on quotes and comma to get each cell
                    const csv_cell_array = csv_row.split('","');

                    // Remove replace the two quotes which are left at the beginning and the end (first and last cell)
                    csv_cell_array[0] = csv_cell_array[0].replace(/"/g, '');
                    csv_cell_array[5] = csv_cell_array[5].replace(/"/g, '');

                    // RANDOM EXAMPLE : Make some test, special cutomizing depending of the value of the cell (if cell 5 is equal to a certain value, give a value to row 6)
                    if (csv_cell_array[5].toLowerCase().trim() === "a certain value") {
                        csv_cell_array[6] = "2";
                    } else if (csv_cell_array[5].toLowerCase() === "another value") {
                        csv_cell_array[6] = "5";
                    } else {
                        csv_cell_array[6] = "";
                    }

                    // RANDOM EXAMPLE : Empty the 5th cell and set the 7th to true
                    csv_cell_array[5] = "";
                    csv_cell_array[7] = "true";

                    // Join the table on the quotes and comma; add back the quotes at the beginning and end
                    const csv_cell_array_quotes = `"${csv_cell_array.join('","')}"`;

                    // Insert the new row into the rows array at the previous index (index +1 because the header was sliced)
                    split_csv[index + 1] = csv_cell_array_quotes;
                });

                // Join the rows with line breck and return the final csv (datatables will take the returned csv and process it)
                csv = split_csv.join("\n");
                return csv;
            }
        }
    ],
    dom: {
        button: {
            active: "active"
        }
    }
};

// Statics
const buttons = new $.fn.dataTable.Buttons($("selector").DataTable(), config_3);
const version = $.fn.dataTable.Buttons.version;

$.fn.dataTable.Buttons.defaults = {
    buttons: []
};

$.fn.dataTable.ext.buttons.collection.className += ' dropdown-toggle';

// API
let dt = $("selector").DataTable();

const export_1 = dt.buttons.exportData({
    columns: '',
});

dt.buttons.resize();

dt.button(0).action((e, dt, button, config) => {
    console.log('Button activated');
});

dt.button().add(0, {
    action: (e, dt, button, config) => {
        dt.ajax.reload();
    },
    text: 'Reload table'
});

dt.button(0)
    .nodes()
    .css('background', 'blue');

dt.buttons().destroy();
