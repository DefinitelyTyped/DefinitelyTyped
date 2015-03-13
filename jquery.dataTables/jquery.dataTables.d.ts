// Type definitions for JQuery DataTables 1.10.5
// Typescript 1.4
// Project: http://www.datatables.net
// Definitions by: Armin Sander <https://github.com/pragmatrix/>
// 1.10.5 (newAPI) Definitions by: Barrie Nemetchek
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// missing:
// - Static methods that are defined in JQueryStatic.fn are not typed.
// - Plugin and extension definitions are not typed.

interface JQuery
{
	dataTable(): JQuery;
	DataTable(param?: DataTables.Options): DataTables.DataTable;
	/// Perform a jQuery selector action on the table's TR elements (from the tbody) and return the resulting jQuery object.
	DataTable(selector: DataTables.Selector, opts?: DataTables.SelectorModifier): DataTables.DataTable;

}

declare module DataTables {
	export type Selector = Number|String|Object|Function|JQuery|Array<String|Number|Object|Function|JQuery>;
	export type SelectorModifier = { order?: String; search?: String; page?: String };
	
	export interface ajaxLoadResult extends DataTable {
		load(callback?: Function, resetPaging?: boolean);
	}
	export interface DataTableAPI<T> {
		/// CORE
		$(selector: Selector, modifier?: SelectorModifier): JQuery;
		ajax: {
			json(): Object;
			params(): Object;
			reload(callback?: Function, resetPaging?: boolean): DataTable;
			url: {
				(): String;
				(url: String): ajaxLoadResult;
			}
		}

		/// Clear the table of all data.
		clear(): DataTable;
		/// Retrieve the data for the whole table, in row index order.
		data(): DataTableAPI<any>;
		/// Destroy the DataTables in the current context.
		destroy(remove?: boolean): DataTable;
		/// Redraw the table.
		draw(reset?: boolean): DataTable;
		/// Table events listener.
		on(event: string, callback?: (...args) => void);
		/// Table events removal.
		off(event: string, callback?: (...args) => void);
		/// Listen for a table event once and then remove the listener.
		one(event: string, callback?: (...args) => void);
		/// Gets/sets the current ordering of the table
		order: {
			/// Gets/sets the current ordering of the table
			(): Array<Array<any>>;
			/// Set the ordering to apply to the table using a 2D ordering array
			(order: Array<Array<any>>): DataTable;
			/// Add an ordering listener to an element, for a given column.
			listener(node: Element|JQuery|String, column: Number, callback: () => void): DataTable;
		}
		/// Gets or sets the current page of the table
		page: {
			/// Get the current page of the table
			(): number;
			/// Set the page to be displayed by the table
			(set: String|Number): DataTable;
			/// Get paging information about the table
			info(): { page: Number; pages: Number; Start: Number; end: Number; length: Number; recordsTotal: Number; recordsDisplay: Number };
			/// Get the page length of the table
			len(): Number;
			/// Set the page length to be used for the display
			len(set: Number): DataTable;
		}
		/// Get the currently applied global search.
		search(): String;
		/// Set the global search to use on the table
		search(input: String, regex?: boolean, smart?: boolean, caseInsen?: boolean): DataTable;
		/// Obtain the table's settings object
		settings(): DataTableAPI<Settings>;
		state: {
			/// Get the last saved state of the table
			(): state;
			/// Clear the saved state of the table.
			clear(): DataTable;
			/// Get the table state that was loaded during initialisation.
			loaded(): state;
			/// Trigger a state save
			save(): DataTable;
		}

		cell: {
			/// Select the cell found by a cell selector
			(cellSelector: Selector, modifier?: SelectorModifier): DataTableCellResult;
			/// Select the cell found from both row and column selectors
			(rowSelector: Selector, columnSelector: Selector, modifier?: SelectorModifier): DataTableCellResult;
		}
		cells: {
			/// Select the cell found by a cell selector
			(modifier?: SelectorModifier): DataTableCellsResult;
			(cellSelector: Selector, modifier?: SelectorModifier): DataTableCellsResult;
		}

		column: {
			/// Select the column found by a column selector
			(columnSelector: Selector, modifier?: SelectorModifier): DataTableColumnResult;
		}

		columns: {
			/// Select all columns
			(modifier?: SelectorModifier): DataTableColumnsResult;
			/// Select columns found by a column selector
			(columnSelector: Selector, modifier?: SelectorModifier): DataTableColumnsResult;
		}

		row: {
			/// Select the row found by a row selector
			(rowSelector: Selector, modifier?: SelectorModifier): DataTableRowResult;
			
			/// Add a new row to the table.
			add(data: Array<any>|Object): DataTable;
		}

		rows: {
			/// Select multiple rows from a table.
			(modifier?: SelectorModifier): DataTableRowsResult;
			/// Select the row found by a row selector
			(rowSelector: Selector, modifier?: SelectorModifier): DataTableRowsResult;

			/// Add multiple new rows to the table
			add(data: Array<any>): String;
		}

		table: {
			/// Select a table based on a selector from the API's context
			(tableSelector: Selector): DataTable;
		}

		// Utility
		[n: number]: T;
		concat: <U extends T[]>(...items: U[]) => T[];
		forEach: (callbackfn: (value: T, index?: number, API?: DataTableAPI<T>) => void, thisArg?: any) => void;
		eq(idx: Number): DataTableAPI<T>;
		filter: (callbackfn: (value: T, index?: number, API?: DataTableAPI<T>) => boolean, thisArg?: any) => DataTableAPI<T>;
		flatten: () => DataTableAPI<T>;
		indexOf: (value: any) => number;
		iterator: {
			(type: String, callbackfn: (settings: Settings) => void, returns?: boolean): any; // Table
			(type: String, callbackfn: (settings: Settings, value: Column, index?: number) => void, returns?: boolean): any; // Columns
			(type: String, callbackfn: (settings: Settings, columnindex: Number, tableCounter: Number, columnCounter: number) => void, returns?: boolean): any; // Column
			(type: String, callbackfn: (settings: Settings, columnindex: Number, tableCounter: Number, columnCounter: number, rowIndexes: Number) => void, returns?: boolean): any; // Column-Rows
			(type: String, callbackfn: (settings: Settings, value: Row, index?: number) => void, returns?: boolean): any; // Rows
			(type: String, callbackfn: (settings: Settings, rowIndex: Number, tableCounter: Number, rowCounter: number) => void, returns?: boolean): any; // Row
			(type: String, callbackfn: (settings: Settings, rowIndex: Number, columnIndex: Number, tableCounter: Number, cellCounter: number) => void, returns?: boolean): any; // Cell
		};
		join: (separator?: string) => string;
		lastIndexOf: (value: T) => number;
		length: number;
		map: <U>(callbackfn: (value: T, index: number, API?: DataTableAPI<T>) => U, thisArg?: any) => DataTableAPI<U>;
		pluck: (property: String|Number) => DataTableAPI<any>;
		pop: () => T;
		push: (...items: T[]) => number;
		reduce: <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, API?: DataTableAPI<T>) => U, initialValue?: U) => U;
		reduceRight: <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, API?: DataTableAPI<T>) => U, initialValue?: U) => U;
		reverse: () => DataTableAPI<T>;
		shift: () => T;
		sort: (compareFn?: (a: T, b: T) => number) => DataTableAPI<T>;
		splice: (start?: number, deleteCount?: number, ...items: T[]) => T[];
		to$: () => JQuery;
		toArray: () => Array<T>;
		toJQuery: () => JQuery;
		unique: () => DataTableAPI<T>;
		unshift: (...items: T[]) => number;
	}
	export interface DataTableCellResult extends DataTableAPI<Cell> {
		/// Get the DataTables cached data for the selected cell
		cache(type: String): DataTableAPI<Cell>;
		/// Get the data for the selected cell
		data(): any;
		/// Set the data for the selected cell
		data(set: any): DataTableAPI<Cell>;
		/// Get index information about the selected cell
		index(): Index;
		/// Invalidate information in the selected cell
		invalidate(source?: String): DataTableAPI<Cell>;
		/// Get the DOM element for the selected cell
		node(): Node;
		/// Get rendered data for a cell
		render(type: String): Object;
	}
	export interface DataTableCellsResult extends DataTableAPI<Cell> {
		/// Get the DataTables cached data for the selected cells
		cache(type: String): DataTableAPI<Cell>;
		/// Get the data for the selected cells
		data(): any;
		/// Get index information about the selected cells
		indexes(): DataTableAPI<Index>;
		/// Invalidate information in the selected cells
		invalidate(source?: String): DataTableAPI<Cell>;
		/// Get the DOM element for the selected cells
		nodes(): DataTableAPI<Element>;
		/// Get rendered data for a cell
		render(type: String): DataTableAPI<Object>;
	}
	export interface DataTableColumnResult extends DataTableAPI<Column> {
		/// Get the DataTables cached data for the selected column
		cache(type: String): DataTableColumnResult;
		/// Get the data for the selected column
		data(): DataTableAPI<any>;
		/// Get the data source property for the selected column.
		dataSrc(): Number|String|Function;
		/// Get the footer node for the selected column.
		footer(): Node;
		/// Get the header node for the selected column.
		header(): Node;
		/// Get index information about the selected column
		index(type?: String): DataTableAPI<Index>;
		/// Convert between column index formats
		index(type: String, index: Number): Number;
		/// Get the DOM element for the selected column
		nodes(): DataTableAPI<Node>;
		order: {
			/// Order the table by the selected column.
			(direction: String): DataTableAPI<Column>;
			/// Gets/sets the current ordering of the table
			(): Array<Array<any>>;
			/// Set the ordering to apply to the table using a 2D ordering array
			(order: Array<Array<any>>): DataTable;
			/// Add an ordering listener to an element, for a given column.
			listener(node: Element|JQuery|String, column: Number, callback: () => void): DataTable;
		}
		/// Get the currently applied column search.
		search(): String;
		/// Set the search term for the column from the selector
		search(input: String, regex?: boolean, smart?: boolean, caseInsen?: boolean): DataTable;
		/// Get the visibility of the selected column.
		visible(): boolean;
		visible(show: boolean, redrawCalculations?: boolean): DataTableAPI<Column>;
	}

	export interface DataTableColumnsResult extends DataTableAPI<Column> {
		/// Get the DataTables cached data for the selected columns
		cache(type: String): DataTableColumnResult;
		/// Get the data for the selected columns
		data(): DataTableAPI<any>;
		/// Get the data source property for the selected column.
		dataSrc(): Number|String|Function;
		/// Get the footer nodes for the selected column.
		footer(): DataTableAPI<Node>;
		/// Get the header node for the selected column.
		header(): DataTableAPI<Node>;
		/// Get index information about the selected columns
		indexes(type?: String): DataTableAPI<Index>;
		/// Convert between column index formats
		nodes(): DataTableAPI<Node>;
		order: {
			/// Order the table by the selected columns
			(direction: String): DataTableAPI<Column>;
			/// Gets/sets the current ordering of the table
			(): Array<Array<any>>;
			/// Set the ordering to apply to the table using a 2D ordering array
			(order: Array<Array<any>>): DataTable;
			/// Add an ordering listener to an element, for a given column.
			listener(node: Element|JQuery|String, column: Number, callback: () => void): DataTable;
		}
		/// Get the visibility of the selected columns.
		visible(): DataTableAPI<boolean>;
		visible(show: boolean, redrawCalculations?: boolean): DataTableAPI<Column>;
		/// Recalculate the column widths
		adjust(): DataTable;
	}

	export interface DataTableRowResult extends DataTableAPI<Row> {
		/// Get the DataTables cached data for the selected row
		cache(type: String): DataTable;
		/// Get the data for the selected row
		data(): DataTableAPI<any>;
		data(d: Array<any>|Object): DataTable;
		/// Get index information about the selected row
		index(type?: String): DataTable;
		/// Invalidate the data held in DataTables for the selected row
		invalidate(source?: String): DataTable;
		/// Obtain the tr node for the selected row
		node(): Node;


		///// Hide the child row(s) of a parent row
		//hide(): DataTable;
		///// Make the child row(s) of a parent row visible
		//show(): DataTable;
		///// Delete the selected row from the DataTable.
		//remove(): Node;


		child: {
			/// Select a single row from a table.
			(): JQuery;
			/// Show or remove and destroy the child rows for the selected row.
			(showRemove: boolean): DataTableRowChildResult;
			/// Set the data to show in the child row(s)
			(data: String|Node|JQuery|Array<any>, className?: String): DataTableRowChildResult;

			/// Hide the child row(s) of a parent row
			hide(): DataTable;
			/// Check if the child rows of a parent row are visible
			isShown(): boolean;
			/// Destroy child row(s) for the selected parent row
			remove(): DataTableAPI<Child>;
			/// Make the child row(s) of a parent row visible
			show(): DataTableAPI<Child>;
		}
	}

	export interface DataTableRowChildResult extends DataTableAPI<Child> {
		/// Hide child rows after creating new child rows
		hide(): DataTable;
		/// Destroy child row(s) for the selected parent row
		remove(): DataTableRowResult;
		/// Make newly defined child rows visible
		show(): DataTableRowResult;
	}

	export interface DataTableRowsResult extends DataTableAPI<Row> {
		/// Get the DataTables cached data for the selected row
		cache(type: String): DataTable;
		/// Get the data for the rows from the selector
		data: {
			(): Array<any>|any;
			(d: Array<any>|any): DataTableAPI<Row>;
		}
		/// Get the rows indexes of the selected rows
		indexes(): DataTableAPI<Row>;
		/// Invalidate the data held in DataTables for the selected rows
		invalidate(source?: String): DataTableAPI<Row>;
		// Get the row TR nodes for the selected rows
		nodes(): DataTableAPI<Node>;
		/// Delete the selected rows from the DataTable
		remove(): DataTableAPI<Row>;
	}

	export interface DataTable extends DataTableAPI<any> {
	}

	export interface Static
	{
		/// Provide a common method for plug-ins to check the version of DataTables being used,
		/// in order to ensure compatibility.
		versionCheck(version: string) : boolean;

		/// Check if a TABLE node is a DataTable table already or not.
		isDataTable(table: Node) : boolean;

		/// Get all DataTable tables that have been initialised.
		tables(visible? : boolean) : Node[];
	}

	export interface RowParams
	{
		/// Select TR elements that meet the current filter criterion ("applied") or all TR elements (i.e. no filter).
		search?: string;

		/// Order of the TR elements in the processed array.
		/// Can be either 'current', whereby the current sorting of the table is used, or
		/// 'original' whereby the original order the data was read into the table is used.
		order?: string;

		/// Limit the selection to the currently displayed page
		/// ("current") or not ("all"). If 'current' is given, then order is assumed to be
		/// 'current' and filter is 'applied', regardless of what they might be given as.
		page?: string;
	}

	export interface Options
	{
		// Features
		autoWidth?: boolean;
		deferRender?: boolean;
		info?: boolean;
		jQueryUI?: boolean;
		lengthChange?: boolean;
		ordering?: boolean;
		paging?: boolean;
		processing?: boolean;
		scrollX?: boolean;
		scrollY?: boolean;
		searching?: boolean;
		serverSide?: boolean;
		stateSave?: boolean;

		// Data
		ajax?: {
			(URL: string): void;
			(ajaxData: Object): void;
			(data: any, callback: (resultData) => void, settings: Settings): void;
		};
		data?: any[];

		// Callbacks
		createdRow?: RowCreatedCallback;
		drawCallback?: DrawCallback;
		footerCallback?: FooterCallback;
		formatNumber?: FormatNumber;
		headerCallback?: HeaderCallback;
		infoCallback?: InfoCallback;
		initComplete?: InitComplete;
		preDrawCallback?: PreDrawCallback;
		rowCallback?: RowCallback;
		stateLoadCallback?: StateLoadCallback;
		stateLoadParams?: StateLoadParams;

		// Options
		deferLoading?: boolean;
		destroy?: boolean;
		displayStart?: number;
		dom?: string;
		lengthMenu?: Array<number>;
		orderCellsTop?: boolean;
		orderClasses?: boolean;
		order?: Array<Array<number|string>>;
		orderFixed?: Array<Array<number|string>>;
		orderMulti?: boolean;
		pageLength?: number;
		pagingType?: string;
		renderer?: Object;
		retrieve?: boolean;
		scrollCollapse?: boolean;
		search?: {
			(caseInsensitive: boolean, regex: RegExp, smart: boolean): void;
			search?: string;
		}
		//search?: { search: Object };
		stateDuration?: number;
		stripeClasses?: Array<string>;
		tabIndex?: number;
		columns?: ColumnOptions[];
		columnDefs?: ColumnDef[];
		language?: LanguageOptions;
	}

	export interface LanguageOptions
	{
		aria? : AriaOptions;
		decimal?: string;
		emptyTable?: string;
		info?: string;
		infoEmpty?: string;
		infoFiltered?: string;
		infoPostFix?: string;
		lengthMenu?: string;
		paginate?: PaginateOptions;
		loadingRecords?: string;
		processing?: string;
		search?: string;
		thousands?: string;searchPlaceholder?: string;
		url?: string;
		zeroRecords?: string;
	}

	export interface state {
		time: Number;
		start: Number;
		length: Number;
		order: Array<Array<any>>;
		search: Search;
		columns: Array<columnState>;
	}

	export interface Search {
		search: String;
		regex: boolean;
		smart: boolean;
		caseInsensitive: boolean;
	}

	export interface columnState {
		visible: boolean;
		search: Search;
	}

	export interface AriaOptions
	{
		sortAscending?: string;
		sortDescending?: string;
	}

	export interface PaginateOptions
	{
		first?: string;
		last?: string;
		next?: string;
		previous?: string;
	}

	export interface ColumnOptions
	{
		cellType?: string;
		className?: string;
		contentPadding?: string;		
		createdCell?: CreatedCell;
		data?: any;
		defaultContent?: string;
		name?: string;
		orderable?: boolean;
		orderData?: any;
		orderDataType?: string;
		render?: any;
		searchable?: boolean;
		title?: string;
		type?: string;
		visible?: boolean;
		width?: string;
	}

	export interface ColumnDef extends ColumnOptions
	{
		targets: any;
	}
	export interface Index {
		row: Number;
		column: Number;
		columnVisible: Number
	}

	export interface Settings
	{
		oFeatures : Features;
		oScroll: ScrollingSettings;
		oLanguage : { fnInfoCallback : InfoCallback; };
		oBrowser : { bScrollOversize : boolean; };
		aanFeatures: Node[][];
		aoData: Row[];
		aiDisplay: number[];
		aiDisplayMaster: number[];
		aoColumns: Column[];
		aoHeader: any[];
		aoFooter: any[];
		asDataSearch: string[];
		oPreviousSearch: any;
		aoPreSearchCols: any[];
		aaSorting: any[][];
		aaSortingFixed: any[][];
		asStripeClasses: string[];
		asDestroyStripes: string[];
		sDestroyWidth: number;
		aoRowCallback: RowCallback[];
		aoHeaderCallback: HeaderCallback[];
		aoFooterCallback: FooterCallback[];
		aoDrawCallback: DrawCallback[];
		aoRowCreatedCallback: RowCreatedCallback[];
		aoPreDrawCallback: PreDrawCallback[];
		aoInitComplete: InitComplete[];
		aoStateSaveParams: StateSaveParams[];
		aoStateLoadParams: StateLoadParams[];
		aoStateLoaded: StateLoaded[];
		sTableId: string;
		nTable: Node;
		nTHead: Node;
		nTFoot: Node;
		nTBody: Node;
		nTableWrapper: Node;
		bDeferLoading: boolean;
		bInitialized: boolean;
		aoOpenRows: any[];
		sDom: string;
		sPaginationType: string;
		iCookieDuration: number;
		sCookiePrefix: string;
		fnCookieCallback: CookieCallback;
		aoStateSave: StateSaveCallback[];
		aoStateLoad: StateLoadCallback[];
		oLoadedState: any;
		sAjaxSource: string;
		sAjaxDataProp: string;
		bAjaxDataGet: boolean;
		jqXHR: any;
		fnServerData: any;
		aoServerParams: any[];
		sServerMethod: string;
		fnFormatNumber: FormatNumber;
		aLengthMenu: any[];
		iDraw: number;
		bDrawing: boolean;
		iDrawError: number;
		_iDisplayLength: number;
		_iDisplayStart: number;
		_iDisplayEnd: number;
		_iRecordsTotal: number;
		_iRecordsDisplay: number;
		bJUI: boolean;
		oClasses: any;
		bFiltered: boolean;
		bSorted: boolean;
		bSortCellsTop: boolean;
		oInit: any;
		aoDestroyCallback: any[];
		fnRecordsTotal: () => number;
		fnRecordsDisplay: () => number;
		fnDisplayEnd: () => number;
		oInstance : any;
		sInstance: string;
		iTabIndex: number;
		nScrollHead: Node;
		nScrollFoot: Node;
	}

	export interface Features
	{
		bAutoWidth: boolean;
		bDeferRender: boolean;
		bFilter: boolean;
		bInfo: boolean;
		bLengthChange: boolean;
		bPaginate: boolean;
		bProcessing: boolean;
		bServerSide: boolean;
		bSort: boolean;
		bSortClasses: boolean;
		bStateSave: boolean;
	}

	export interface ScrollingSettings
	{
		bAutoCss : boolean;
		bCollapse: boolean;
		bInfinite: boolean;
		iBarWidth: number;
		iLoadGap: number;
		sX: string;
		sY: string;
	}

	export interface Row
	{
		nTr: Node;
		_aData: any;
		_aSortData: any[];
		_anHidden: Node[];
		_sRowStripe: string;
	}

	export interface Column
	{
		aDataSort: any;
		asSorting: string[];
		bSearchable : boolean;
		bSortable : boolean;
		bVisible : boolean;
		_bAutoType : boolean;
		fnCreatedCell: CreatedCell;
		fnGetData: (data: any, specific: string) => any;
		fnSetData: (data: any, value: any) => void;
		mData: any;
		mRender: any;
		nTh: Node;
		nIf: Node;
		sClass: string;
		sContentPadding: string;
		sDefaultContent: string;
		sName: string;
		sSortDataType: string;
		sSortingClass: string;
		sSortingClassJUI: string;
		sTitle: string;
		sType: string;
		sWidth: string;
		sWidthOrig: string;
	}

	export interface Cell {
	}

	export interface Child {
	}

	export interface CookieCallback
	{
		(name: string, data: any, expires: string, path: string, cookie: string) : void;
	}

	export interface RowCreatedCallback
	{
		(row: Node, data: any[], dataIndex: number) : void;
	}

	export interface DrawCallback
	{
		(settings: Settings) : void;
	}

	export interface FooterCallback
	{
		(foot: Element, data: any[], start:number, end:number, display: number[]) : void;
	}

	export interface FormatNumber
	{
		(toFormat: number) : string;
	}

	export interface HeaderCallback
	{
		(head: Element, data: any[], start:number, end:number, display: number[]) : void;
	}

	export interface InfoCallback
	{
		(settings: Settings, start: number, end: number, max:number, total: number, pre: string) : string;
	}

	export interface InitComplete
	{
		(settings: Settings, json: any) : void;
	}

	export interface PreDrawCallback
	{
		(settings: Settings) : boolean;
	}

	export interface RowCallback
	{
		(row : Settings, data: any[], displayIndex: number, displayIndexFull: number) : void;
	}

	export interface StateLoadCallback
	{
		(settings: Settings) : any;
	}

	export interface StateLoadParams
	{
		(settings: Settings, data: any) : void;
	}

	export interface StateLoaded
	{
		(settings: Settings, data: any) : void;
	}

	export interface StateSaveCallback
	{
		(settings: any, data:any) : void;
	}

	export interface StateSaveParams
	{
		(settings: any, data:any) : void;
	}

	export interface CreatedCell
	{
		(nTd: Node, cellData: any, rowData: any, row: number, col: number) : void;
	}
}
