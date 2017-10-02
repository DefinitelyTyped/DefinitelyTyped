/// <reference types="jquery" />

// Grid
$(() => {
        this.grid = $('#grid').grid({
            primaryKey: 'ID',
            columns: [
                { field: 'ID', width: 50, sortable: true },
                { field: 'Name', sortable: true },
            ],
            pager: { limit: 5, sizes: [2, 5, 10, 20] }
        });
});

// Dialog
$(() => {
        this.dialog = $('#playerModal').dialog({
            autoOpen: false,
            title: 'Player',
            width: 400
        });
});