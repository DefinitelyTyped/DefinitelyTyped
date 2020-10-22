$(document).ready(() => {
    const config: DataTables.Settings = {
        // Scroller extension options
        scroller: {
            trace: true,
            rowHeight: 30,
            serverWait: 1000,
            displayBuffer: 10,
            boundaryScale: 0.6,
            loadingIndicator: true
        }
    };
});
