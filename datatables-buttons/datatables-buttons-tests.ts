/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../jquery.dataTables/jquery.dataTables.d.ts" />
/// <reference path="datatables-buttons.d.ts" />

$(document).ready(function () {

    var config: DataTables.Settings =
        {
            // Buttons extension options
            buttons: [
                {
                    extend: 'excel',
                    text: 'Excel',
                    className: 'class',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    action: function (e, dt, node, config) { },
                    available: function (dt, config) { return true; },
                    destroy: function (dt, node, config) { },
                    enabled: true,
                    init: function (dt, node, config) { },
                    key: 'a',
                    name: 'name',
                    namespace: 'namespace',
                    titleAttr: 'title',
                }
            ],
        }

});