/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.dataTables.d.ts"/>

// http://www.datatables.net/api


$(document).ready(function() {
    var table = $('#example').DataTable();

    // Highlight every second row
    table.$('tr:odd').css('backgroundColor', 'blue');
} );

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Filter to rows with 'Webkit' in them, add a background colour and then
    // remove the filter, thus highlighting the 'Webkit' rows only.
    table.fnFilter('Webkit');
    table.$('tr', {filter: "applied"}).css('backgroundColor', 'blue');
    table.fnFilter('');
} );

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Filter to 'Webkit' and get all data for
    table.fnFilter('Webkit');
    var data = table.$('tr', {filter: "applied"});

    // Do something with the data
    alert( data.length+" rows matched the filter" );
} );

// fnAddData

var giCount = 2;

$(document).ready(function() {
    $('#example').DataTable();
} );

function fnClickAddRow() {
    $('#example').DataTable().rows.add( [
        giCount+".1",
        giCount+".2",
        giCount+".3",
        giCount+".4" ]
    );

    giCount++;
}

// fnAdjustColumnSizing

$(document).ready(function() {
    var table = $('#example').DataTable( {
        scrollY: "200px",
        paging: false
    } );

    $(window).bind('resize', function () {
        table.columns.adjust();
    } );
} );

// fnClearTable

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
    table.clear();
} );

// fnClose

$(document).ready(function() {
    var table;

    // 'open' an information row when a row is clicked on
    $('#example tbody tr').click( function () {
        if ( table.fnIsOpen(this) ) {
            table.fnClose( this );
        } else {
            table.fnOpen( this, "Temporary row opened", "info_row" );
        }
    } );

    table = $('#example').DataTable();
} );

// fnDeleteRow

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Immediately remove the first row
    table.fnDeleteRow( 0 );
} );

// fnDestroy

$(document).ready(function() {
    // This example is fairly pointless in reality, but shows how fnDestroy can be used
    var table = $('#example').DataTable();
    table.fnDestroy();
} );

// fnDraw

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
    table.fnDraw();
} );

// fnFilter

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Sometime later - filter...
    table.fnFilter( 'test string' );
} );

// fnGetData

$(document).ready(function() {
    var table = $('#example').DataTable();

    table.$('tr').click( function () {
        var data = table.fnGetData( this );
        // ... do something with the array / object of data for the row
    } );
} );

$(document).ready(function() {
    var table = $('#example').DataTable();

    table.$('td').click( function () {
        var sData = table.fnGetData( this );
        alert( 'The cell clicked on had the value of '+sData );
    } );
} );

// fnGetNodes

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Get the nodes from the table
    var nNodes = table.fnGetNodes( );
} );

// fnGetPosition

$(document).ready(function() {
    $('#example tbody td').click( function () {
        // Get the position of the current data from the node
        var aPos = table.fnGetPosition( this );

        // Get the data array for this row
        var aData = table.fnGetData( aPos[0] );

        // Update the data array and return the value
        aData[ aPos[1] ] = 'clicked';
        this.innerHTML = 'clicked';
    } );

    // Init DataTables
    var table = $('#example').DataTable();
} );

// fnIsOpen

$(document).ready(function() {
    var table;

    // 'open' an information row when a row is clicked on
    $('#example tbody tr').click( function () {
        if ( table.fnIsOpen(this) ) {
            table.fnClose( this );
        } else {
            table.fnOpen( this, "Temporary row opened", "info_row" );
        }
    } );

    table = $('#example').DataTable();
} );

// fnOpen

$(document).ready(function() {
    var table;

    // 'open' an information row when a row is clicked on
    $('#example tbody tr').click( function () {
        if ( table.fnIsOpen(this) ) {
            table.fnClose( this );
        } else {
            table.fnOpen( this, "Temporary row opened", "info_row" );
        }
    } );

    table = $('#example').DataTable();
} );

// fnPageChange

$(document).ready(function() {
    var table = $('#example').DataTable();
    table.fnPageChange( 'next' );
} );

// fnSetColumnVis

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Hide the second column after initialisation
    table.fnSetColumnVis( 1, false );
} );

// fnSettings

$(document).ready(function() {
    var table = $('#example').DataTable();
    var oSettings = table.fnSettings();

    // Show an example parameter from the settings
    alert("" + oSettings._iDisplayStart);
} );

// fnSort

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Sort immediately with columns 0 and 1
    table.fnSort( [ [0,'asc'], [1,'asc'] ] );
} );

// fnSortListener

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Sort on column 1, when 'sorter' is clicked on
    table.fnSortListener( document.getElementById('sorter'), 1 );
} );

// fnUpdate

$(document).ready(function() {
    var table = $('#example').DataTable();
    table.fnUpdate( 'Example update', 0, 0 ); // Single cell
    table.fnUpdate( ['a', 'b', 'c', 'd', 'e'], 1 ); // Row
} );

// fnVersionCheck

$(document).ready(function() {
    var table = $('#example').DataTable();
    table.fnVersionCheck( '1.9.0');
} );

// http://datatables.net/usage/features

$(document).ready( function () {
    $('#example').DataTable( {
        autoWidth: false
    } );
} );

$(document).ready( function() {
    var table = $('#example').DataTable( {
        ajax: "sources/arrays.txt",
        deferRender: true
    } );
} );

$(document).ready( function () {
    $('#example').DataTable( {
        searching: false
    } );
} );

$(document).ready( function () {
    $('#example').DataTable( {
        info: false
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        jQueryUI: true
    } );
} );

$(document).ready( function () {
    $('#example').DataTable( {
        lengthChange: false
    } );
} );

$(document).ready( function () {
    $('#example').DataTable( {
        paging: false
    } );
} );

$(document).ready( function () {
    $('#example').DataTable( {
        processing: true
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        scrollCollapse: true,
        scrollY: "200px"
    } );
} );

$(document).ready( function () {
    $('#example').DataTable( {
        serverSide: true,
        ajax: "xhr.php"
    } );
} );

$(document).ready( function () {
    $('#example').DataTable( {
        ordering: false
    } );
} );

$(document).ready( function () {
    $('#example').DataTable( {
        orderClasses: false
    } );
} );

$(document).ready( function () {
    $('#example').DataTable( {
        stateSave: true
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        scrollX: "100%",
        scrollCollapse: true
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        scrollY: "200px",
        paging: false
    } );
} );

// http://datatables.net/usage/options

$(document).ready( function() {
    $('#example').DataTable( {
        scrollY: "200px",
        paging: false
    } );

    // Some time later....
    $('#example').DataTable( {
        searching: false,
        destroy: true
    } );
} );

$(document).ready( function() {
    initTable();
    tableActions();
} );

function initTable ()
{
    return $('#example').DataTable( {
        scrollY: "200px",
        paging: false,
        retrieve: true
    } );
}

function tableActions ()
{
    var table = initTable();
    // perform API operations with table
}

$(document).ready( function() {
    $('#example').DataTable( {
        scrollY: "200px"
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        scrollY: "200",
        scrollCollapse: true
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        orderCellsTop: true
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        stateDuration: 60*60*24 // 1 day
    } );
} );

// 57 records available in the table, no filtering applied
$(document).ready( function() {
    $('#example').DataTable( {
        serverSide: true,
        ajax: "scripts/server_processing.php",
        deferLoading: 57
    } );
} );


// 57 records after filtering, 100 without filtering (an initial filter applied)
$(document).ready( function() {
    $('#example').DataTable( {
        serverSide: true,
        ajax: "scripts/server_processing.php",
        deferLoading: [ 57, 100 ],
        search: {
            search: "my_filter"
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        pageLength: 50
    } );
} )

$(document).ready( function() {
    $('#example').DataTable( {
        displayStart: 20
    } );
} )

$(document).ready( function() {
    $('#example').DataTable( {
        scrollCollapse: true,
        scrollY: "200px"
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        tabIndex: 1
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        search: {search: "Initial search"}
    } );
} )

// Get data from { data: [...] }
$(document).ready( function() {
    var table = $('#example').DataTable( {
        ajax: "sources/data.txt",
        dataSrc: "data"
    } );
} );


// Get data from { data: { inner: [...] } }
$(document).ready( function() {
    var table = $('#example').DataTable( {
        ajax: "sources/data.txt",
        dataSrc: "data.inner"
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        ajax: "http://www.sprymedia.co.uk/dataTables/json.php"
    } );
} )

$(document).ready( function() {
    $('#example').DataTable( {
        dom: '<"top"i>rt<"bottom"flp><"clear">'
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        pagingType: "full_numbers"
    } );
} )

$(document).ready( function() {
    $('#example').DataTable( {
        scrollX: "100%",
        scrollXInner: "110%"
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        serverSide: true,
        ajax: "scripts/post.php",
        //ajax: "POST"
    } );
} );

// http://datatables.net/usage/callbacks

$(document).ready( function() {
    $('#example').DataTable( {
        createdRow: function( nRow, aData, iDataIndex ) {
            // Bold the grade for all 'A' grade browsers
            if ( aData[4] == "A" )
            {
                $('td:eq(4)', nRow).html( '<b>A</b>' );
            }
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        drawCallback: function( oSettings ) {
            alert( 'DataTables has redrawn the table' );
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        footerCallback: function( nFoot, aData, iStart, iEnd, aiDisplay ) {
            (<HTMLElement> (nFoot.getElementsByTagName('th')[0])).innerHTML = "Starting index is "+iStart;
        }
    } );
} )

$(document).ready( function() {
    $('#example').DataTable( {
        formatNumber: function ( iIn ) {
            if ( iIn < 1000 ) {
                return iIn.toString();
            } else {
                var
                    s=(iIn+""),
                    a=s.split(""), out="",
                    iLen=s.length;

                for ( var i=0 ; i<iLen ; i++ ) {
                    if ( i%3 === 0 && i !== 0 ) {
                        out = "'"+out;
                    }
                    out = a[iLen-i-1]+out;
                }
            }
            return out;
        }
} );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        headerCallback: function( nHead, aData, iStart, iEnd, aiDisplay ) {
            (<HTMLElement> nHead.getElementsByTagName('th')[0]).innerHTML = "Displaying "+(iEnd-iStart)+" records";
        }
    } );
} )

$('#example').DataTable( {
    infoCallback: function( oSettings, iStart, iEnd, iMax, iTotal, sPre ) {
        return iStart +" to "+ iEnd;
    }
} );

$(document).ready( function() {
    $('#example').DataTable( {
        initComplete: function(oSettings, json) {
            alert( 'DataTables has finished its initialisation.' );
        }
    } );
} )

$(document).ready( function() {
    $('#example').DataTable( {
        preDrawCallback: function( oSettings ) {
            if ( $('#test').val() == 1 ) {
                return false;
            }
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        rowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
            // Bold the grade for all 'A' grade browsers
            if ( aData[4] == "A" )
            {
                $('td:eq(4)', nRow).html( '<b>A</b>' );
            }
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        processing: true,
        serverSide: true,
        ajax: {
            url: "xhr.php",
            dataType: 'json',
            type: "POST",
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        processing: true,
        serverSide: true,
        ajax: "scripts/server_processing.php",
        //ajax: function ( aoData ) {
        //    aoData.push( { name: "more_data", value: "my_value" } );
        //}
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        stateSave: true,
        stateLoadCallback: function (oSettings) {
            var o;

            // Send an Ajax request to the server to get the data. Note that
            // this is a synchronous request.
            $.ajax( {
                url: "/state_load",
                async: false,
                dataType: "json",
                success: function (json) {
                    o = json;
                }
            } );

            return o;
        }
    } );
} );

// Remove a saved filter, so filtering is never loaded
$(document).ready( function() {
    $('#example').DataTable( {
        stateSave: true,
        stateLoadParams: function (oSettings, oData) {
            oData.search.search = "";
        }
    } );
} );


// Disallow state loading by returning false
$(document).ready( function() {
    $('#example').DataTable( {
        stateSave: true,
        stateLoadParams: function (oSettings, oData) {
            return false;
        }
    } );
} );

// Show an alert with the filtering value that was saved
$(document).ready( function() {
    $('#example').DataTable( {
        stateSave: true,
        stateLoaded: function (oSettings, oData) {
            alert( 'Saved filter was: '+oData.search.search );
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        stateSave: true,
        stateSaveCallback: function (oSettings, oData) {
            // Send an Ajax request to the server with the state object
            $.ajax( {
                url: "/state_save",
                data: oData,
                dataType: "json",
                method: "POST",
                success: function () {}
            } );
        }
    } );
} );

// Remove a saved filter, so filtering is never saved
$(document).ready( function() {
    $('#example').DataTable( {
        stateSave: true,
        stateSaveParams: function (oSettings, oData) {
            oData.search.search = "";
        }
    } );
} );

// http://datatables.net/usage/columns

$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { orderData: [ 0, 1 ], targets: [ 0 ] },
            { orderData: [ 1, 0 ], targets: [ 1 ] },
            { orderData: [ 2, 3, 4 ], targets: [ 2 ] }
        ]
    } );
} );

// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { orderData: [ 0, 1 ] },
            { orderData: [ 1, 0 ] },
            { orderData: [ 2, 3, 4 ] },
            null,
            null
        ]
    } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { orderSequence: [ "asc" ], targets: [ 1 ] },
            { orderSequence: [ "desc", "asc", "asc" ], targets: [ 2 ] },
            { orderSequence: [ "desc" ], targets: [ 3 ] }
        ]
    } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            null,
            { orderSequence: [ "asc" ] },
            { orderSequence: [ "desc", "asc", "asc" ] },
            { orderSequence: [ "desc" ] },
            null
        ]
    } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { searchable: false, targets: [ 0 ] }
        ] } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { searchable: false },
            null,
            null,
            null,
            null
        ] } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { orderable: false, targets: [ 0 ] }
        ] } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { orderable: false },
            null,
            null,
            null,
            null
        ] } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { visible: false, targets: [ 0 ] }
        ] } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { visible: false },
            null,
            null,
            null,
            null
        ] } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [ {
            targets: [3],
            createdCell: function (nTd, sData, oData, iRow, iCol) {
                if ( sData == "1.7" ) {
                    $(nTd).css('color', 'blue')
                }
            }
        } ]
    });
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { orderData: [ 1 ], targets: [ 0 ] }
        ]
    } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { orderData: [ 1 ] },
            null,
            null,
            null,
            null
        ]
    } );
} );

// Read table data from objects
$(document).ready( function() {
    var table = $('#example').DataTable( {
        ajax: "sources/deep.txt",
        columns: [
            { data: "engine" },
            { data: "browser" },
            { data: "platform.inner" },
            { data: "platform.details.0" },
            { data: "platform.details.1" }
        ]
    } );
} );


// Using data as a function to provide different information for
// sorting, filtering and display. In this case, currency (price)
$(document).ready( function() {
    var table = $('#example').DataTable( {
        columnDefs: [ {
            targets: [ 0 ],
            data: function ( source, type, val ) {
                if (type === 'set') {
                    source.price = val;
                    // Store the computed dislay and filter values for efficiency
                    source.price_display = val=="" ? "" : "$"+val;
                    source.price_filter  = val=="" ? "" : "$"+val+" "+val;
                    return;
                }
                else if (type === 'display') {
                    return source.price_display;
                }
                else if (type === 'filter') {
                    return source.price_filter;
                }
                // 'sort', 'type' and undefined all just use the integer
                return source.price;
            }
        } ]
    } );
} );

// Create a comma separated list from an array of objects
$(document).ready( function() {
    var table = $('#example').DataTable( {
        ajax: "sources/deep.txt",
        columns: [
            { data: "engine" },
            { data: "browser" },
            {
                data: "platform",
                render: "[, ].name"
            }
        ]
    } );
} );


// Use as a function to create a link from the data source
$(document).ready( function() {
    var table = $('#example').DataTable( {
        columnDefs: [ {
            targets: [ 0 ],
            data: "download_link",
            render: function ( data, type, full ) {
                return '<a href="'+data+'">Download</a>';
            }
        } ]
    } );
} );

// Make the first column use TH cells
$(document).ready( function() {
    var table = $('#example').DataTable( {
        columnDefs: [ {
            targets: [ 0 ],
            cellType: "th"
        } ]
    } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { className: "my_class", targets: [ 0 ] }
        ]
    } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { className: "my_class" },
            null,
            null,
            null,
            null
        ]
    } );
} );

// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            null,
            null,
            null,
            {
                contentPadding: "mmm"
            }
        ]
    } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            {
                data: null,
                defaultContent: "Edit",
                targets: [ -1 ]
            }
        ]
    } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            null,
            null,
            null,
            {
                data: null,
                defaultContent: "Edit"
            }
        ]
    } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { name: "engine", targets: [ 0 ] },
            { name: "browser", targets: [ 1 ] },
            { name: "platform", targets: [ 2 ] },
            { name: "version", targets: [ 3 ] },
            { name: "grade", targets: [ 4 ] }
        ]
    } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { name: "engine" },
            { name: "browser" },
            { name: "platform" },
            { name: "version" },
            { name: "grade" }
        ]
    } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { orderDataType: "dom-text", targets: [ 2, 3 ] },
            { type: "numeric", targets: [ 3 ] },
            { orderDataType: "dom-select", targets: [ 4 ] },
            { orderDataType: "dom-checkbox", targets: [ 5 ] }
        ]
    } );
} );

// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            null,
            null,
            { orderDataType: "dom-text" },
            { orderDataType: "dom-text", type: "numeric" },
            { orderDataType: "dom-select" },
            { orderDataType: "dom-checkbox" }
        ]
    } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { title: "My column title", targets: [ 0 ] }
        ]
    } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { title: "My column title" },
            null,
            null,
            null,
            null
        ]
    } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { type: "html", targets: [ 0 ] }
        ]
    } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { type: "html" },
            null,
            null,
            null,
            null
        ]
    } );
} );

// Using columnDefs
$(document).ready( function() {
    $('#example').DataTable( {
        columnDefs: [
            { width: "20%", targets: [ 0 ] }
        ]
    } );
} );


// Using columns
$(document).ready( function() {
    $('#example').DataTable( {
        columns: [
            { width: "20%" },
            null,
            null,
            null,
            null
        ]
    } );
} );

// http://www.datatables.net/usage/i18n

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            aria: {
                sortAscending: " - click/return to sort ascending"
            }
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            aria: {
                sortDescending: " - click/return to sort descending"
            }
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            paginate: {
                first: "First page"
            }
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            paginate: {
                last: "Last page"
            }
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            paginate: {
                next: "Next page"
            }
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            paginate: {
                previous: "Previous page"
            }
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            emptyTable: "No data available in table"
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            info: "Got a total of _TOTAL_ entries to show (_START_ to _END_)"
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            infoEmpty: "No entries to show"
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            infoFiltered: " - filtering from _MAX_ records"
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            infoPostFix: "All records shown are derived from real information."
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            thousands: "'"
        }
    } );
} );

// Language change only
$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            lengthMenu: "Display _MENU_ records"
        }
    } );
} );


// Language and options change
$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            lengthMenu: 'Display <select>'+
                '<option value="10">10</option>'+
                '<option value="20">20</option>'+
                '<option value="30">30</option>'+
                '<option value="40">40</option>'+
                '<option value="50">50</option>'+
                '<option value="-1">All</option>'+
                '</select> records'
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            loadingRecords: "Please wait - loading..."
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            processing: "DataTables is currently busy"
        }
    } );
} );

// Input text box will be appended at the end automatically
$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            search: "Filter records:"
        }
    } );
} );


// Specify where the filter should appear
$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            search: "Apply filter _INPUT_ to table"
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            url: "http://www.sprymedia.co.uk/dataTables/lang.txt"
        }
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        language: {
            zeroRecords: "No records to display"
        }
    } );
} );

// http://www.datatables.net/usage/server-side

$(document).ready( function () {
    $('#example').DataTable( {
        serverSide: true,
        ajax: "xhr.php"
    } );
} );

// POST data to server
$(document).ready( function() {
    $('#example').DataTable( {
        processing: true,
        serverSide: true,
        ajax: "xhr.php",
        //ajax: function ( sSource, aoData, fnCallback, oSettings ) {
        //    oSettings.jqXHR = $.ajax( {
        //        dataType: 'json',
        //        type: "POST",
        //        url: sSource,
        //        data: aoData,
        //        success: fnCallback
        //    } );
        //}
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        processing: true,
        serverSide: true,
        ajax: "scripts/server_processing.php",
        //ajax: function ( aoData ) {
        //    aoData.push( { name: "more_data", value: "my_value" } );
        //}
    } );
} );

// Get data from { data: [...] }
$(document).ready( function() {
    var table = $('#example').DataTable( {
        ajax: "sources/data.txt",
        dataSrc: "data"
    } );
} );


// Get data from { data: { inner: [...] } }
$(document).ready( function() {
    var table = $('#example').DataTable( {
        ajax: "sources/data.txt",
        dataSrc: "data.inner"
    } );
} );

$(document).ready( function() {
    $('#example').DataTable( {
        ajax: "http://www.sprymedia.co.uk/dataTables/json.php"
    } );
} )

$(document).ready( function() {
    $('#example').DataTable( {
        serverSide: true,
        ajax: {
            url: "scripts/post.php",
            type: "POST"
        }
    } );
} );
