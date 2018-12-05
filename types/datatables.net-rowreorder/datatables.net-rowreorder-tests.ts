$(document).ready(() => {
    const config: DataTables.Settings = {
            // reorder extension options
            rowReorder: {
                dataSrc: "somesrc",
                editor: {},
                enable: true,
                formOptions: {},
                selector: "someselector",
                snapX: true,
                update: true,
            },
        };
});
