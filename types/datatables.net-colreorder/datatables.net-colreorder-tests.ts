$(document).ready(() => {
    const config: DataTables.Settings = {
        // ColReorder extension options
        colReorder: {
            fixedColumnsLeft: 0,
            fixedColumnsRight: 0,
            order: [1, 2, 3],
            realtime: true,
            reorderCallback: () => {},
        }
    };
});
