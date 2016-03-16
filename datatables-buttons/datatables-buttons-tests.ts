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
        
    $('#myTable').DataTable( {
        buttons: {
            name: 'primary'
        }
    });

    $('#myTable').DataTable( {
        buttons: [ 'copy', 'csv', 'print' ]
    });

    $('#myTable').DataTable( {
        buttons: {
            buttons: [
                'copy',
                { extend: 'excel', text: 'Save as Excel' }
            ]
        }
    });

    $('#myTable').DataTable({
        buttons: {
            dom: {
                buttons: {
                    tag: 'button'
                },
                buttonLiner: {
                    tag: null
                }
            },
            buttons: [
                'copy',
                { extend: 'excel', text: 'Save as Excel' }
            ]
        }
    });

    $('#myTable').DataTable( {
        buttons: {
            dom: {
                container: {
                    tag: 'aside'
                }
            }
        }
    });

    $('#myTable').DataTable( {
        buttons: {
            dom: {
                button: {
                    tag: 'input',
                    className: 'btn',
                }
            }
        }
    });

    $('#myTable').DataTable( {
        buttons: {
            dom: {
                container: {
                    tag: 'ul'
                },
                buttonContainer: {
                    tag: 'li'
                },
                button: {
                    tag: 'a'
                }
            }
        }
    });

    $('#myTable').DataTable( {
        buttons: {
            dom: {
                collection: {
                    tag: 'aside'
                }
            }
        }
    });

    $('#myTable').DataTable( {
        buttons: [
            {
                extend:    'copyHtml5',
                text:      '<i class="fa fa-files-o"></i>',
                titleAttr: 'Copy'
            }
        ]
    });

    $('#myTable').DataTable( {
        buttons: {
            buttons: [
                {
                    text: '',
                    init: function ( dt, node, config ) {
                        node.on( 'mouseenter'+config.namespace, function () {
                            console.log( 'Mouse enter' );
                        } );

                        node.on( 'mouseleave'+config.namespace, function () {
                            console.log( 'Mouse leave' );
                        } );
                    },
                    destroy: function ( dt, node, config ) {
                        node.off( 'mouseenter'+config.namespace );
                        node.off( 'mouseleave'+config.namespace );
                    }
                }
            ]
        }
    });

    $('#myTable').DataTable( {
        buttons: {
            buttons: [
                {
                    text: 'Alert',
                    action: function ( e, dt, node, config ) {
                        alert( 'Activated!' );
                        this.disable(); // disable button
                    }
                }
            ]
        }
    });

    $('#myTable').DataTable( {
        buttons: [
            { extend: 'print', key: 'p' }
        ]
    });

    $('#myTable').DataTable( {
        buttons: {
            buttons: [
                {
                    text: 'FileReader available',
                    available: function ( dt, config ) {
                        return true;
                    }
                }
            ]
        }
    });

    $('#myTable').DataTable( {
        buttons: {
            buttons: [
                'copy',
                { extend: 'excel', disable: false }
            ]
        }
    });
});