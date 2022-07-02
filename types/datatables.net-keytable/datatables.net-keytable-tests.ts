$(document).ready(() => {
    const config: DataTables.Settings = {
        // KeyTable extension options
        keys: {
            blurable: true,
            className: "focusClass",
            clipboard: false,
            columns: ":not(:first-child)",
            editOnFocus: false,
            focus: ":eq(0)",
            tabIndex: 2,
            keys: [ "\t".charCodeAt(0) ],
            clipboardOrthogonal: 'export',
            editor: null
        }
    };
});
