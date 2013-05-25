/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.dataTables.d.ts"/>

// http://www.datatables.net/api

// $

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Highlight every second row
	oTable.$('tr:odd').css('backgroundColor', 'blue');
} );

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Filter to rows with 'Webkit' in them, add a background colour and then
	// remove the filter, thus highlighting the 'Webkit' rows only.
	oTable.fnFilter('Webkit');
	oTable.$('tr', {"filter": "applied"}).css('backgroundColor', 'blue');
	oTable.fnFilter('');
} );

// _

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Get the data from the first row in the table
	var data = oTable._('tr:first');

	// Do something useful with the data
	alert( "First cell is: "+data[0] );
} );


$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Filter to 'Webkit' and get all data for
	oTable.fnFilter('Webkit');
	var data = oTable._('tr', {"filter": "applied"});

	// Do something with the data
	alert( data.length+" rows matched the filter" );
} );

// fnAddData

var giCount = 2;

$(document).ready(function() {
	$('#example').dataTable();
} );

function fnClickAddRow() {
	$('#example').dataTable().fnAddData( [
		giCount+".1",
		giCount+".2",
		giCount+".3",
		giCount+".4" ]
	);

	giCount++;
}

// fnAdjustColumnSizing

$(document).ready(function() {
	var oTable = $('#example').dataTable( {
		"sScrollY": "200px",
		"bPaginate": false
	} );

	$(window).bind('resize', function () {
		oTable.fnAdjustColumnSizing();
	} );
} );

// fnClearTable

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
	oTable.fnClearTable();
} );

// fnClose

$(document).ready(function() {
	var oTable;

	// 'open' an information row when a row is clicked on
	$('#example tbody tr').click( function () {
		if ( oTable.fnIsOpen(this) ) {
			oTable.fnClose( this );
		} else {
			oTable.fnOpen( this, "Temporary row opened", "info_row" );
		}
	} );

	oTable = $('#example').dataTable();
} );

// fnDeleteRow

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Immediately remove the first row
	oTable.fnDeleteRow( 0 );
} );

// fnDestroy

$(document).ready(function() {
	// This example is fairly pointless in reality, but shows how fnDestroy can be used
	var oTable = $('#example').dataTable();
	oTable.fnDestroy();
} );

// fnDraw

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Re-draw the table - you wouldn't want to do it here, but it's an example :-)
	oTable.fnDraw();
} );

// fnFilter

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Sometime later - filter...
	oTable.fnFilter( 'test string' );
} );

// fnGetData

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	oTable.$('tr').click( function () {
		var data = oTable.fnGetData( this );
		// ... do something with the array / object of data for the row
	} );
} );

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	oTable.$('td').click( function () {
		var sData = oTable.fnGetData( this );
		alert( 'The cell clicked on had the value of '+sData );
	} );
} );

// fnGetNodes

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Get the nodes from the table
	var nNodes = oTable.fnGetNodes( );
} );

// fnGetPosition

$(document).ready(function() {
	$('#example tbody td').click( function () {
		// Get the position of the current data from the node
		var aPos = oTable.fnGetPosition( this );

		// Get the data array for this row
		var aData = oTable.fnGetData( aPos[0] );

		// Update the data array and return the value
		aData[ aPos[1] ] = 'clicked';
		this.innerHTML = 'clicked';
	} );

	// Init DataTables
	var oTable = $('#example').dataTable();
} );

// fnIsOpen

$(document).ready(function() {
	var oTable;

	// 'open' an information row when a row is clicked on
	$('#example tbody tr').click( function () {
		if ( oTable.fnIsOpen(this) ) {
			oTable.fnClose( this );
		} else {
			oTable.fnOpen( this, "Temporary row opened", "info_row" );
		}
	} );

	oTable = $('#example').dataTable();
} );

// fnOpen

$(document).ready(function() {
	var oTable;

	// 'open' an information row when a row is clicked on
	$('#example tbody tr').click( function () {
		if ( oTable.fnIsOpen(this) ) {
			oTable.fnClose( this );
		} else {
			oTable.fnOpen( this, "Temporary row opened", "info_row" );
		}
	} );

	oTable = $('#example').dataTable();
} );

// fnPageChange

$(document).ready(function() {
	var oTable = $('#example').dataTable();
	oTable.fnPageChange( 'next' );
} );

// fnSetColumnVis

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Hide the second column after initialisation
	oTable.fnSetColumnVis( 1, false );
} );

// fnSettings

$(document).ready(function() {
	var oTable = $('#example').dataTable();
	var oSettings = oTable.fnSettings();

	// Show an example parameter from the settings
	alert("" + oSettings._iDisplayStart);
} );

// fnSort

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Sort immediately with columns 0 and 1
	oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
} );

// fnSortListener

$(document).ready(function() {
	var oTable = $('#example').dataTable();

	// Sort on column 1, when 'sorter' is clicked on
	oTable.fnSortListener( document.getElementById('sorter'), 1 );
} );

// fnUpdate

$(document).ready(function() {
	var oTable = $('#example').dataTable();
	oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
	oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], 1 ); // Row
} );

// fnVersionCheck

$(document).ready(function() {
	var oTable = $('#example').dataTable();
	oTable.fnVersionCheck( '1.9.0');
} );

// http://datatables.net/usage/features

$(document).ready( function () {
	$('#example').dataTable( {
		"bAutoWidth": false
	} );
} );

$(document).ready( function() {
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "sources/arrays.txt",
		"bDeferRender": true
	} );
} );

$(document).ready( function () {
	$('#example').dataTable( {
		"bFilter": false
	} );
} );

$(document).ready( function () {
	$('#example').dataTable( {
		"bInfo": false
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"bJQueryUI": true
	} );
} );

$(document).ready( function () {
	$('#example').dataTable( {
		"bLengthChange": false
	} );
} );

$(document).ready( function () {
	$('#example').dataTable( {
		"bPaginate": false
	} );
} );

$(document).ready( function () {
	$('#example').dataTable( {
		"bProcessing": true
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"bScrollInfinite": true,
		"bScrollCollapse": true,
		"sScrollY": "200px"
	} );
} );

$(document).ready( function () {
	$('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "xhr.php"
	} );
} );

$(document).ready( function () {
	$('#example').dataTable( {
		"bSort": false
	} );
} );

$(document).ready( function () {
	$('#example').dataTable( {
		"bSortClasses": false
	} );
} );

$(document).ready( function () {
	$('#example').dataTable( {
		"bStateSave": true
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"sScrollX": "100%",
		"bScrollCollapse": true
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"sScrollY": "200px",
		"bPaginate": false
	} );
} );

// http://datatables.net/usage/options

$(document).ready( function() {
	$('#example').dataTable( {
		"sScrollY": "200px",
		"bPaginate": false
	} );

	// Some time later....
	$('#example').dataTable( {
		"bFilter": false,
		"bDestroy": true
	} );
} );

$(document).ready( function() {
	initTable();
	tableActions();
} );

function initTable ()
{
	return $('#example').dataTable( {
		"sScrollY": "200px",
		"bPaginate": false,
		"bRetrieve": true
	} );
}

function tableActions ()
{
	var oTable = initTable();
	// perform API operations with oTable
}

$(document).ready( function() {
	$('#example').dataTable( {
		"bScrollAutoCss": false,
		"sScrollY": "200px"
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"sScrollY": "200",
		"bScrollCollapse": true
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"bSortCellsTop": true
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"iCookieDuration": 60*60*24 // 1 day
	} );
} );

// 57 records available in the table, no filtering applied
$(document).ready( function() {
	$('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "scripts/server_processing.php",
		"iDeferLoading": 57
	} );
} );


// 57 records after filtering, 100 without filtering (an initial filter applied)
$(document).ready( function() {
	$('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "scripts/server_processing.php",
		"iDeferLoading": [ 57, 100 ],
		"oSearch": {
			"sSearch": "my_filter"
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"iDisplayLength": 50
	} );
} )

$(document).ready( function() {
	$('#example').dataTable( {
		"iDisplayStart": 20
	} );
} )

$(document).ready( function() {
	$('#example').dataTable( {
		"bScrollInfinite": true,
		"bScrollCollapse": true,
		"sScrollY": "200px",
		"iScrollLoadGap": 50
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"iTabIndex": 1
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oSearch": {"sSearch": "Initial search"}
	} );
} )

// Get data from { "data": [...] }
$(document).ready( function() {
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "sources/data.txt",
		"sAjaxDataProp": "data"
	} );
} );


// Get data from { "data": { "inner": [...] } }
$(document).ready( function() {
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "sources/data.txt",
		"sAjaxDataProp": "data.inner"
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"sAjaxSource": "http://www.sprymedia.co.uk/dataTables/json.php"
	} );
} )

$(document).ready( function() {
	$('#example').dataTable( {
		"sCookiePrefix": "my_datatable_"
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"sDom": '<"top"i>rt<"bottom"flp><"clear">'
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"sPaginationType": "full_numbers"
	} );
} )

$(document).ready( function() {
	$('#example').dataTable( {
		"sScrollX": "100%",
		"sScrollXInner": "110%"
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "scripts/post.php",
		"sServerMethod": "POST"
	} );
} );

// http://datatables.net/usage/callbacks

$(document).ready( function () {
	$('#example').dataTable( {
		"fnCookieCallback": function (sName, oData, sExpires, sPath) {
			// Customise oData or sName or whatever else here
			return sName + "="+JSON.stringify(oData)+"; expires=" + sExpires +"; path=" + sPath;
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"fnCreatedRow": function( nRow, aData, iDataIndex ) {
			// Bold the grade for all 'A' grade browsers
			if ( aData[4] == "A" )
			{
				$('td:eq(4)', nRow).html( '<b>A</b>' );
			}
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"fnDrawCallback": function( oSettings ) {
			alert( 'DataTables has redrawn the table' );
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"fnFooterCallback": function( nFoot, aData, iStart, iEnd, aiDisplay ) {
			(<HTMLElement> (nFoot.getElementsByTagName('th')[0])).innerHTML = "Starting index is "+iStart;
		}
	} );
} )

$(document).ready( function() {
	$('#example').dataTable( {
		"fnFormatNumber": function ( iIn ) {
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
	$('#example').dataTable( {
		"fnHeaderCallback": function( nHead, aData, iStart, iEnd, aiDisplay ) {
			(<HTMLElement> nHead.getElementsByTagName('th')[0]).innerHTML = "Displaying "+(iEnd-iStart)+" records";
		}
	} );
} )

$('#example').dataTable( {
	"fnInfoCallback": function( oSettings, iStart, iEnd, iMax, iTotal, sPre ) {
		return iStart +" to "+ iEnd;
	}
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"fnInitComplete": function(oSettings, json) {
			alert( 'DataTables has finished its initialisation.' );
		}
	} );
} )

$(document).ready( function() {
	$('#example').dataTable( {
		"fnPreDrawCallback": function( oSettings ) {
			if ( $('#test').val() == 1 ) {
				return false;
			}
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
			// Bold the grade for all 'A' grade browsers
			if ( aData[4] == "A" )
			{
				$('td:eq(4)', nRow).html( '<b>A</b>' );
			}
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"bProcessing": true,
		"bServerSide": true,
		"sAjaxSource": "xhr.php",
		"fnServerData": function ( sSource, aoData, fnCallback, oSettings ) {
			oSettings.jqXHR = $.ajax( {
				"dataType": 'json',
				"type": "POST",
				"url": sSource,
				"data": aoData,
				"success": fnCallback
			} );
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"bProcessing": true,
		"bServerSide": true,
		"sAjaxSource": "scripts/server_processing.php",
		"fnServerParams": function ( aoData ) {
			aoData.push( { "name": "more_data", "value": "my_value" } );
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"bStateSave": true,
		"fnStateLoad": function (oSettings) {
			var o;

			// Send an Ajax request to the server to get the data. Note that
			// this is a synchronous request.
			$.ajax( {
				"url": "/state_load",
				"async": false,
				"dataType": "json",
				"success": function (json) {
					o = json;
				}
			} );

			return o;
		}
	} );
} );

// Remove a saved filter, so filtering is never loaded
$(document).ready( function() {
	$('#example').dataTable( {
		"bStateSave": true,
		"fnStateLoadParams": function (oSettings, oData) {
			oData.oSearch.sSearch = "";
		}
	} );
} );


// Disallow state loading by returning false
$(document).ready( function() {
	$('#example').dataTable( {
		"bStateSave": true,
		"fnStateLoadParams": function (oSettings, oData) {
			return false;
		}
	} );
} );

// Show an alert with the filtering value that was saved
$(document).ready( function() {
	$('#example').dataTable( {
		"bStateSave": true,
		"fnStateLoaded": function (oSettings, oData) {
			alert( 'Saved filter was: '+oData.oSearch.sSearch );
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"bStateSave": true,
		"fnStateSave": function (oSettings, oData) {
			// Send an Ajax request to the server with the state object
			$.ajax( {
				"url": "/state_save",
				"data": oData,
				"dataType": "json",
				"method": "POST",
				"success": function () {}
			} );
		}
	} );
} );

// Remove a saved filter, so filtering is never saved
$(document).ready( function() {
	$('#example').dataTable( {
		"bStateSave": true,
		"fnStateSaveParams": function (oSettings, oData) {
			oData.oSearch.sSearch = "";
		}
	} );
} );

// http://datatables.net/usage/columns

$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "aDataSort": [ 0, 1 ], "aTargets": [ 0 ] },
			{ "aDataSort": [ 1, 0 ], "aTargets": [ 1 ] },
			{ "aDataSort": [ 2, 3, 4 ], "aTargets": [ 2 ] }
		]
	} );
} );

// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "aDataSort": [ 0, 1 ] },
			{ "aDataSort": [ 1, 0 ] },
			{ "aDataSort": [ 2, 3, 4 ] },
			null,
			null
		]
	} );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "asSorting": [ "asc" ], "aTargets": [ 1 ] },
			{ "asSorting": [ "desc", "asc", "asc" ], "aTargets": [ 2 ] },
			{ "asSorting": [ "desc" ], "aTargets": [ 3 ] }
		]
	} );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			null,
			{ "asSorting": [ "asc" ] },
			{ "asSorting": [ "desc", "asc", "asc" ] },
			{ "asSorting": [ "desc" ] },
			null
		]
	} );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "bSearchable": false, "aTargets": [ 0 ] }
		] } );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "bSearchable": false },
			null,
			null,
			null,
			null
		] } );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "bSortable": false, "aTargets": [ 0 ] }
		] } );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "bSortable": false },
			null,
			null,
			null,
			null
		] } );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "bVisible": false, "aTargets": [ 0 ] }
		] } );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "bVisible": false },
			null,
			null,
			null,
			null
		] } );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [ {
			"aTargets": [3],
			"fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
				if ( sData == "1.7" ) {
					$(nTd).css('color', 'blue')
				}
			}
		} ]
	});
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "iDataSort": 1, "aTargets": [ 0 ] }
		]
	} );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "iDataSort": 1 },
			null,
			null,
			null,
			null
		]
	} );
} );

// Read table data from objects
$(document).ready( function() {
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "sources/deep.txt",
		"aoColumns": [
			{ "mData": "engine" },
			{ "mData": "browser" },
			{ "mData": "platform.inner" },
			{ "mData": "platform.details.0" },
			{ "mData": "platform.details.1" }
		]
	} );
} );


// Using mData as a function to provide different information for
// sorting, filtering and display. In this case, currency (price)
$(document).ready( function() {
	var oTable = $('#example').dataTable( {
		"aoColumnDefs": [ {
			"aTargets": [ 0 ],
			"mData": function ( source, type, val ) {
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
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "sources/deep.txt",
		"aoColumns": [
			{ "mData": "engine" },
			{ "mData": "browser" },
			{
				"mData": "platform",
				"mRender": "[, ].name"
			}
		]
	} );
} );


// Use as a function to create a link from the data source
$(document).ready( function() {
	var oTable = $('#example').dataTable( {
		"aoColumnDefs": [ {
			"aTargets": [ 0 ],
			"mData": "download_link",
			"mRender": function ( data, type, full ) {
				return '<a href="'+data+'">Download</a>';
			}
		} ]
	} );
} );

// Make the first column use TH cells
$(document).ready( function() {
	var oTable = $('#example').dataTable( {
		"aoColumnDefs": [ {
			"aTargets": [ 0 ],
			"sCellType": "th"
		} ]
	} );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "sClass": "my_class", "aTargets": [ 0 ] }
		]
	} );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "sClass": "my_class" },
			null,
			null,
			null,
			null
		]
	} );
} );

// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			null,
			null,
			null,
			{
				"sContentPadding": "mmm"
			}
		]
	} );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{
				"mData": null,
				"sDefaultContent": "Edit",
				"aTargets": [ -1 ]
			}
		]
	} );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			null,
			null,
			null,
			{
				"mData": null,
				"sDefaultContent": "Edit"
			}
		]
	} );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "sName": "engine", "aTargets": [ 0 ] },
			{ "sName": "browser", "aTargets": [ 1 ] },
			{ "sName": "platform", "aTargets": [ 2 ] },
			{ "sName": "version", "aTargets": [ 3 ] },
			{ "sName": "grade", "aTargets": [ 4 ] }
		]
	} );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "sName": "engine" },
			{ "sName": "browser" },
			{ "sName": "platform" },
			{ "sName": "version" },
			{ "sName": "grade" }
		]
	} );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "sSortDataType": "dom-text", "aTargets": [ 2, 3 ] },
			{ "sType": "numeric", "aTargets": [ 3 ] },
			{ "sSortDataType": "dom-select", "aTargets": [ 4 ] },
			{ "sSortDataType": "dom-checkbox", "aTargets": [ 5 ] }
		]
	} );
} );

// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			null,
			null,
			{ "sSortDataType": "dom-text" },
			{ "sSortDataType": "dom-text", "sType": "numeric" },
			{ "sSortDataType": "dom-select" },
			{ "sSortDataType": "dom-checkbox" }
		]
	} );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "sTitle": "My column title", "aTargets": [ 0 ] }
		]
	} );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "sTitle": "My column title" },
			null,
			null,
			null,
			null
		]
	} );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "sType": "html", "aTargets": [ 0 ] }
		]
	} );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "sType": "html" },
			null,
			null,
			null,
			null
		]
	} );
} );

// Using aoColumnDefs
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumnDefs": [
			{ "sWidth": "20%", "aTargets": [ 0 ] }
		]
	} );
} );


// Using aoColumns
$(document).ready( function() {
	$('#example').dataTable( {
		"aoColumns": [
			{ "sWidth": "20%" },
			null,
			null,
			null,
			null
		]
	} );
} );

// http://www.datatables.net/usage/i18n

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"oAria": {
				"sSortAscending": " - click/return to sort ascending"
			}
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"oAria": {
				"sSortDescending": " - click/return to sort descending"
			}
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"oPaginate": {
				"sFirst": "First page"
			}
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"oPaginate": {
				"sLast": "Last page"
			}
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"oPaginate": {
				"sNext": "Next page"
			}
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"oPaginate": {
				"sPrevious": "Previous page"
			}
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sEmptyTable": "No data available in table"
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sInfo": "Got a total of _TOTAL_ entries to show (_START_ to _END_)"
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sInfoEmpty": "No entries to show"
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sInfoFiltered": " - filtering from _MAX_ records"
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sInfoPostFix": "All records shown are derived from real information."
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sInfoThousands": "'"
		}
	} );
} );

// Language change only
$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sLengthMenu": "Display _MENU_ records"
		}
	} );
} );


// Language and options change
$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sLengthMenu": 'Display <select>'+
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
	$('#example').dataTable( {
		"oLanguage": {
			"sLoadingRecords": "Please wait - loading..."
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sProcessing": "DataTables is currently busy"
		}
	} );
} );

// Input text box will be appended at the end automatically
$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sSearch": "Filter records:"
		}
	} );
} );


// Specify where the filter should appear
$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sSearch": "Apply filter _INPUT_ to table"
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sUrl": "http://www.sprymedia.co.uk/dataTables/lang.txt"
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"oLanguage": {
			"sZeroRecords": "No records to display"
		}
	} );
} );

// http://www.datatables.net/usage/server-side

$(document).ready( function () {
	$('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "xhr.php"
	} );
} );

// POST data to server
$(document).ready( function() {
	$('#example').dataTable( {
		"bProcessing": true,
		"bServerSide": true,
		"sAjaxSource": "xhr.php",
		"fnServerData": function ( sSource, aoData, fnCallback, oSettings ) {
			oSettings.jqXHR = $.ajax( {
				"dataType": 'json',
				"type": "POST",
				"url": sSource,
				"data": aoData,
				"success": fnCallback
			} );
		}
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"bProcessing": true,
		"bServerSide": true,
		"sAjaxSource": "scripts/server_processing.php",
		"fnServerParams": function ( aoData ) {
			aoData.push( { "name": "more_data", "value": "my_value" } );
		}
	} );
} );

// Get data from { "data": [...] }
$(document).ready( function() {
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "sources/data.txt",
		"sAjaxDataProp": "data"
	} );
} );


// Get data from { "data": { "inner": [...] } }
$(document).ready( function() {
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "sources/data.txt",
		"sAjaxDataProp": "data.inner"
	} );
} );

$(document).ready( function() {
	$('#example').dataTable( {
		"sAjaxSource": "http://www.sprymedia.co.uk/dataTables/json.php"
	} );
} )

$(document).ready( function() {
	$('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "scripts/post.php",
		"sServerMethod": "POST"
	} );
} );












































































