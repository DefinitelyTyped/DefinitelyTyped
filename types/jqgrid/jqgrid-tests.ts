var mydata: any[] = [];
var myFun = function () { };

$('#jqGrid')
	.jqGrid({
		datatype: 'local',
		data: mydata,
		loadonce: true,
		gridview: true,
		height: 400,
		shrinkToFit: true,
		width: null,
		colModel: [
			{ label: 'Name', name: 'id', width: 75, key: true, align: 'left', sorttype: '', formatoptions: '' },
			{ label: 'Description', name: 'description', width: 100, unformat: myFun, editoptions: '', edittype: ''  }
		],
		viewrecords: true, // show the current page, data rang and total records on the toolbar
		caption: 'Matches',
		onSelectRow(id: any, status: any, e: Event) { },
		subGrid: true,
		altRows: true,
		subGridOptions: {
			plusicon: "blue",
			minusicon: "bigger-110 blue",
			openicon: "fa fa-chevron-right"
		},
		subGridModel: mydata,
		subGridUrl: '',
		subGridRowExpanded: function () {

		},
		loadComplete: function () {

		},
		editurl: '',
		loadloadComplete: function () {

		},
		
	});
