// Type definitions for react-bootstrap-table v2.3.0
// Project: https://github.com/AllenFang/react-bootstrap-table
// Definitions by: Frank Laub <https://github.com/flaub>, Michael Scharf <https://github.com/scharf>, Ian Ker-Seymer <https://github.com/ianks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../node/node.d.ts" />

// documentation taken from http://allenfang.github.io/react-bootstrap-table/docs.html

declare module "react-bootstrap-table" {
	import { ComponentClass, Props, ReactElement } from 'react';
	import { EventEmitter } from 'events';

	export interface BootstrapTableProps extends Props<BootstrapTable> {
		/**
		Use data to specify the data that you want to display on table.
		*/
		data: any[];
		/**
		If set, data is remote (use also fetchInfo)
		*/
		remote?: boolean,
		/**
		Use keyField to tell table which column is unique. This is same as isKey in <TableHeaderColumn>
		Tips: You need choose one configuration to set key field: keyField or isKey in <TableHeaderColumn>
		*/
		keyField?: string;
		/**
		Use height to set the height of table, default is 100%.
		*/
		height?: string;
		/**
		Set the max column width (pixels)
		*/
		maxHeight?: string;
		/**
		Enable striped by setting striped to true. Same as Bootstrap table class .table-striped, default is false.
		*/
		striped?: boolean;
		/**
		Enable hover by setting hover to true. Same as Bootstrap table class .table-hover, default is false.
		*/
		hover?: boolean;
		/**
		Enable condensed by setting condensed to true. Same as Bootstrap table class .table-condensed, default is false.
		*/
		condensed?: boolean;
		/**
		Become a borderless table by setting bordered to false, default is true.
		*/
		bordered?: boolean;
		/**
		Enable pagination by setting pagination to true, default is false.
		*/
		pagination?: boolean;
		/**
		Assign the class name of row(tr). This attribute accept a string or function and function is a better way to do more customization.
		If a string given, means the value will be presented as the row class.
		If a function given, will pass rowData and rowIndex as params and should return string for presenting class. for examples:
		
		@example
		
				function trClassFormat(rowData,rowIndex){
					return rowIndex%2==0?"tr-odd":"tr-even";  //return a class name.
				}
		*/
		trClassName?: string | ((rowData:any, rowIndex:number)=>string);
		/**
		Enable row insertion by setting insertRow to true, default is false.
		If you enable row insertion, there's a  button on the upper left side of table.
		*/
		insertRow?: boolean;
		/**
		Enable row deletion by setting deleteRow to true, default is false.
		If you enable row deletion, there's a  button on the upper left side of table.
		*/
		deleteRow?: boolean;
		/**
		Enable column filter by setting columnFilter to true, default is false.
		If enabled, there're input text field per column under the table, user can input your filter condition by each column.
		*/
		columnFilter?: boolean;
		/**
		Enable search by setting search to true, default is false.
		If enabled, there is a on the upper left side of the table. The default place holder is Search
		*/
		search?: boolean;
		/**
		Set searchPlaceholder to change the placeholder in search field, default is Search.
		*/
		searchPlaceholder?: string;
		/**
		Enable multi search by multiColumnSearch, default is false.
		If you want to use multi search, you must enable search at first.
		Tips: Use space to delimited search text. EX: 3 4, which means match all 3 or 4 datas in table.
		*/
		multiColumnSearch?: boolean;
		/**
		Enable export csv function, default is false.
		If you enable, there's a  button on the upper left side of table.
		*/
		exportCSV?: boolean;
		/**
		Set CSV filename (e.g. items.csv). Default is spreadsheet.csv
		*/
		csvFileName?: string;
		/**
		Enable row selection on table. selectRow accept an object which have the following properties
		*/
		selectRow?: SelectRow;
		/**
		Enable cell editing on table. cellEdit accept an object which have the following properties
		*/
		cellEdit?: CellEdit;
		/**
		For some options setting on this component, you can set the options attribute and give an object which contain following properties
		*/
		options?:Options;
		
		
		fetchInfo?:FetchInfo;

		tableStyle?: any;
		containerStyle?: any;
		headerStyle?: any;
		bodyStyle?: any;
		ignoreSinglePage?: boolean;

	}
	
	export type SelectRowMode = 'none' | 'radio' | 'checkbox';

	export interface SelectRow {
		/**
		For specifing the selection is single(radio) or multiple(checkbox).
		*/
		mode: SelectRowMode;
		/**
		Click the row will trigger selection on that row if enable clickToSelect, default is false.
		*/
		clickToSelect?: boolean;
		/**
		If true, click the row will trigger selection on that row and also trigger cell editing if you enabled cell edit. Default is false.
		*/
		clickToSelectAndEditCell?: boolean;
		/**
		You can assign the background color of row which be selected.
		*/
		bgColor?: string;
		/**
		You can assign the class name of row which be selected.
		*/
		className?: string;
		/**
		Give an array data to perform which rows you want to be selected when table loading.
		The content of array should be the rowkey which you want to be selected.
		*/
		selected?: string[];
		/**
		if true, the radio/checkbox column will be hide.
		You can enable this attribute if you enable clickToSelect and you don't want to show the selection column.
		*/
		hideSelectColumn?: boolean;
		/**
		Default is false, if enabled, there will be a button on top of table for toggling selected rows only.
		*/
		showOnlySelected?: boolean;
		/**
		Accept a custom callback function, if a row be selected or unselected, this function will be called.
		This callback function taking three arguments row, isSelected and event:
		
		    `row`: is the row data which you wanted to select or unselect.
			
		    `isSelected`: it's a boolean value means "whether or not that row will be selected?".
			
		    `event`: The event target object.
		
		If return value of this function is false, the select or deselect action will not be applied.
		*/
		onSelect?: (row:any, isSelected:Boolean, event:any)=>boolean;
		/**
		Accept a custom callback function, if click select all checkbox, this function will be called.
		This callback function taking two arguments isSelected and currentSelectedAndDisplayData:
		
		    `isSelected`: it's a boolean value means "whether or not that row will be selected?".
		
		    `currentSelectedAndDisplayData`: If pagination enabled, this result is the data which in a page. In contrast, this is all data in table.
		
		If return value of this function is false, the select all or deselect all action will not be applied.
		*/
		onSelectAll?: (isSelected:boolean, currentSelectedAndDisplayData:any)=>boolean;

	}

	export type CellEditClickMode = 'none' | 'click' | 'dbclick';

	export interface CellEdit {
		/**
		To spectify which condition will trigger cell editing.(click or dbclick)
		*/
		mode: CellEditClickMode;
		/**
		Enable blurToSave will trigger a saving event on cell when mouse blur on the input field. Default is false.
		In the default condition, you need to press ENTER to save the cell.
		*/
		blurToSave?: boolean;
		/**
		Accept a custom callback function, before cell saving, this function will be called.
		This callback function taking three arguments:row, cellName and cellValue
		It's necessary to return a bool value which whether apply this cell editing.
		*/
		beforeSaveCell?: (row:any, cellName:string, cellValue:any)=>boolean;
		/**
		Accept a custom callback function, after cell saving, this function will be called.
		This callback function taking three arguments:row, cellName and cellValue
		*/
		afterSaveCell?: (row:any, cellName:string, cellValue:any)=>void;		
	}
	
	export type SortOrder ='asc' | 'desc';

	export interface Options {
		/**
		Manage sort field by yourself
		*/
		sortName?: string;
		/**
		Manage sort order by yourself
		*/
		sortOrder?: SortOrder;
		/**
		Assign a default sort field.
		*/
		defaultSortName?: string;
		/**
		Assign a default sort ordering.
		*/
		defaultSortOrder?: SortOrder; 
		/**
		False to disable sort indicator on header column, default is true.
		*/
		sortIndicator?: boolean;
		/**
		Change the displaying text on table if data is empty.
		*/
		noDataText?: string | ReactElement<any>;
		/**
		A delay for trigger search after a keyup (millisecond)
		*/
		searchDelayTime?: number; 
		/**
		A custom text on export csv button
		*/
		exportCSVText?: string;
		/**
		Default is false, if true means you want to ignore any editable configuration when row insert.
		*/
		ignoreEditable?: boolean;
		/**
		Only work on enable search. If true, there will be a button beside search input field for clear search field text.
		*/
		clearSearch?: boolean;
		/**
		Assign a callback function which will be called after table update.
		*/
		afterTableComplete?: Function;
		/**
		Assign a callback function which will be called after row delete.
		This function taking one argument: rowKeys, which means the row key you dropped.
		*/
		afterDeleteRow?: (rowKeys:string[])=>void;
		/**
		Assign a callback function which will be called after row insert.
		This function taking one argument: row, which means the whole row data you added.
		*/
		afterInsertRow?: (row:any)=>void;
		/**
		Customize the text of previouse page button
		*/
		prePage?: string;
		/**
		Customize the text of next page button
		*/
		nextPage?: string;
		/**
		Customize the text of first page button
		*/
		firstPage?: string;
		/**
		Customize the text of last page button
		*/
		lastPage?: string;
		/**
		Accept a number, which means the page you want to show as default.
		*/
		page?: number;
		/**
		You can change the dropdown list for size per page if you enable pagination.
		*/
		sizePerPageList?: number[];
		/**
		Means the size per page you want to locate as default.
		*/
		sizePerPage?: number;
		/**
		To define the pagination bar length, default is 5.
		*/
		paginationSize?: number;
		/**
		Assign a callback function which will be called after page changed.
		This function taking two argument: page and sizePerPage.
		
		`page`: Current page.
		
		`sizePerPage`: The data size which in one page.
		*/
		onPageChange?: (page:number, sizePerPage:number)=>void;
		/**
		Assign a callback function which will be called after size per page dropdown changed.
		This function taking one argument: sizePerPage.
		
		`sizePerPage`: The data size which in one page.
		*/
		onSizePerPageList?: (sizePerPage:number)=>void;
		/**
		Assign a callback function which will be called after trigger sorting.
		This function taking two argument: `sortName` and `sortOrde`r.
		
		    `sortName`: The sort column name
			
		    `sortOrder`: The sort ordering.
		*/
		onSortChange?: (sortName:string, sortOrder:SortOrder)=>void;
		/**
		Assign a callback function which will be called after trigger searching.
		This function taking two argument: search and result.
		
		`search`: The search text which user input.
		
		`result`: The results after searching.
		*/
		afterSearch?: (search:string, result:any)=>void;
		/**
		Assign a callback function which will be called after trigger column filtering.
		This function taking two argument: filterConds and result.
		
		`filterConds`: It's an array object which contain all column filter conditions.
		
		`result`: The results after filtering.
		*/
		afterColumnFilter?: (filterConds:any[], result:any)=>void;
		/**
		Assign a callback function which will be called after a row click.
		This function taking one argument: row which is the row data which you click on.
		*/
		onRowClick?: (row:any)=>void;
		/**
		Assign a callback function which will be called when mouse enter into the table.
		*/
		onMouseEnter?: Function;
		/**
		Assign a callback function which will be called when mouse leave from the table.
		*/
		onMouseLeave?: Function;
		/**
		Assign a callback function which will be called when mouse over a row in table.
		This function taking one argument: row which is the row data which mouse over.
		*/
		onRowMouseOver?: Function;
		/**
		Assign a callback function which will be called when mouse leave from a row in table.
		This function taking one argument: row which is the row data which mouse out.
		*/
		onRowMouseOut?: Function;
		/**
		Assign a callback function which will be called when row dropping.
		It give you a chance to customize your confirmation for row deletion.
		This function taking two argument: next and rowKeys:
		
		  `next`: If you confirm to drop row, call next() to continue the process
		  
		  `rowKeys` is the row keys which been deleted, you can call next function to apply this deletion.
		*/
		handleConfirmDeleteRow?: (next:Function, rowKeys:any[])=>void;

		paginationShowsTotal?: boolean;
		
		onSearchChange?: Function;
		onAddRow?: Function;
		onExportToCSV?: Function;
		
		insertText?: string;
		deleteText?: string;
		saveText?: string;
		closeText?: string;
		
		
	}


	interface FetchInfo {
		dataTotalSize?: number;
	}

	export interface BootstrapTable extends ComponentClass<BootstrapTableProps> { 
		/**
		 * Call this function to insert an new row to table.
		 */
		handleAddRow(row:any): void;
		/**
		 * Call this function to insert an new row as first row on table.
		 */
		handleAddRowAtBegin(row:any): void;
		/**
		 * Call this function to drop rows in table.
		 */
		handleDropRow(rowKeys:any[]): void;
		/**
		 * Call this function to do column filtering on table.
		 */
		handleFilterData(filter:any): void;
		/**
		 * Call this function with search text for fully searching.
		 */
		handleSearch(search:string): void;
		/**
		 * Call this function to sort table.
		 */
		handleSort(order: SortOrder, field: string): void;
		/**
		 * Call this function to get the page by a rowkey
		 */
		getPageByRowKey(rowKey: string): any;
		/**
		 * Call this function to export table as csv.
		 */
		handleExportCSV(): void;
		/**
		 * Clean all the selection state on table.
		 */
		cleanSelected(): void;
	}
	export const BootstrapTable: BootstrapTable;

	export type DataAlignType = 'left' | 'center' | 'right' | 'start' | 'end';

	export interface TableHeaderColumnProps extends Props<TableHeaderColumn> {
		/**
		The field of data you want to show on column.
		*/
		dataField: string;
		/**
		Use isKey to tell table which column is unique. This is same as keyField in <BootstrapTable>
		Tips: You need choose one configuration to set key field: isKey or keyField in <BootstrapTable>
		*/
		isKey?: boolean;
		/**
		Set the column width. ex: 150, it's means 150px 
		*/
		width?: string;
		/**
		Set align in column, value is left, center, right, start and end.
		*/
		dataAlign?: DataAlignType;
		/**
		True to enable table sorting. Default is disabled.
		*/
		dataSort?: boolean;
		/**
		Allow user to render a custom sort caret. You should give a function and should return a JSX.
		This function taking one arguments: order which present the sort order currently.
		*/
		caretRender?: Function;
		/**
		To customize the column. This callback function should return a String or a React Component.
		In addition, this function taking two argument: cell and row.
		*/
		dataFormat?: (cell:any, row:any) => string | ReactElement<any>;
		/**
		To to enable search or filter data on formatting. Default is false
		*/
		filterFormatted?: boolean;
		/**
		True to hide column.
		*/
		hidden?: boolean;
		/**
		False to disable search functionality on column, default is true.
		*/
		searchable?: boolean;
		/**
		Give a customize function for data sorting.
		This function taking four arguments: a, b, order, sortField, extraData
		*/
		sortFunc?: (a:any, b:any, order:SortOrder, sortField:any, extraData:any) => number;
		/**
		It's a extra data for custom sort function, if defined, this data will be pass as fifth argument in sortFunc.
		*/
		sortFuncExtraData?: any;
		/**
		Add custom css class on table header column, this attribute only accept String or Function.
		If Function, it taking four arguments: cell, row, rowIndex, columnIndex.
		In addition, this function should return a String which is the class name you want to add on.
		*/
		className?: string | ((cell:any, row:any, rowIndex:number, columnIndex:number) => string);
		/**
		Add custom css class on table body column, this attribute only accept String or Function.
		If Function, it taking four arguments: cell, row, rowIndex, columnIndex.
		In addition, this function should return a String which is the class name you want to add on.
		*/
		columnClassName?: String | ((cell:any, row:any, rowIndex:number, columnIndex:number) => string);
		/**
		Add True to set column editable, false is non-editable. If give Object,
		you can do more customization when editing cell. This object have following properties:
		
		@example
		{
			type: //edit type, avaiable value is textarea, select, checkbox
			validator: //give function for validation and taking only one "cell value" as argument. This function should return Bool.
			options:{
				values: //values means data in select or checkbox.If checkbox, use ':'(colon) to separate value, ex: Y:N
			}
		}
				
		*/
		editable?: boolean | Editable;
		/**
		It only work when you enable insertRow and be assign on rowKey column.
		If true, the row key will be generated automatically after a row insertion.
		*/
		autoValue?: boolean;
		/**
		To Enable a column filter within header column.
		This feature support a lots of filter type and condition. Please check example
		Following is the format for filter
		*/
		filter?: Filter;

		onSort?: Function;
		csvFormat?: Function;
		
		columnTitle?: boolean;
		sort?: SortOrder;
		formatExtraData?: any;
	}
	export interface Editable {
		type?: string;//edit type, avaiable value is textarea, select, checkbox
		/**
		 function for validation and taking only one "cell value" as argument. This function should return Bool.
		 */
		validator?: (cell: any) => boolean;
		/**			
		 {
				values: //values means data in select or checkbox.If checkbox, use ':'(colon) to separate value, ex: Y:N
		 }		

		 */
		options?: any;

		/**
		 Configuration for the textarea editable type
		 */
		cols?: number;
		rows?: number;
	}
	
	export type FilterType = 'TextFilter' | 'RegexFilter' | 'SelectFilter' | 'NumberFilter' | 'DateFilter' | 'CustomFilter';
	
	export interface Filter {
		/**
		 "TextFilter"||"SelectFilter"||"NumberFilter"||"DateFilter"||"RegexFilter"||"YOUR_CUSTOM_FILTER"
		 */
		type?: FilterType; 
		/**
		 * Default value on filter. If type is NumberFilter or DateFilter, this value will like { number||date: xxx, comparator: '>' }
		 */
  		defaultValue?: any;
		  /**
		   * Assign a millisecond for delay when trigger filtering, default is 500.
		   */
  		delay?: number; 
		  /**
		   * Only work on TextFilter. Assign the placeholder text on text and regex filter
		   */
  		placeholder?: string| RegExp;
		  /**
		   * Only work on NumberFilter. Accept an array which conatin the filter condition, like: ['<','>','=']
		   */
  		numberComparators: string[];
	}

	export interface TableHeaderColumn extends ComponentClass<TableHeaderColumnProps> { }
	export const TableHeaderColumn: TableHeaderColumn;

	export class TableDataSet extends EventEmitter {
		constructor(data: any);
		setData(data: any): void;
		clear(): void;
		getData(): any;
	}
}
