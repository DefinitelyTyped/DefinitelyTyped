// Type definitions for SlickGrid 2.1.0
// Project: https://github.com/mleibman/SlickGrid
// Definitions by: Josh Baldwin <https://github.com/jbaldwin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/*
SlickGrid-2.1.d.ts may be freely distributed under the MIT license.

Copyright (c) 2013 Josh Baldwin https://github.com/jbaldwin/SlickGrid.d.ts

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

/// <reference types="jquery" />

interface DOMEvent extends Event {}

declare namespace Slick {

	/**
	* slick.core.js
	**/

	/**
	* An event object for passing data to event handlers and letting them control propagation.
	* <p>This is pretty much identical to how W3C and jQuery implement events.</p>
	* @class EventData
	* @constructor
	**/
	export class EventData {

		constructor();

		/***
		* Stops event from propagating up the DOM tree.
		* @method stopPropagation
		*/
		public stopPropagation(): void;

		/***
		* Returns whether stopPropagation was called on this event object.
		* @method isPropagationStopped
		* @return {Boolean}
		*/
		public isPropagationStopped(): boolean;

		/***
		* Prevents the rest of the handlers from being executed.
		* @method stopImmediatePropagation
		*/
		public stopImmediatePropagation(): void;

		/***
		* Returns whether stopImmediatePropagation was called on this event object.\
		* @method isImmediatePropagationStopped
		* @return {Boolean}
		*/
		public isImmediatePropagationStopped(): boolean;
	}

	/***
	* A simple publisher-subscriber implementation.
	* @class Event
	* @constructor
	*/
	export class Event<T> {

		constructor();

		/***
		* Adds an event handler to be called when the event is fired.
		* <p>Event handler will receive two arguments - an <code>EventData</code> and the <code>data</code>
		* object the event was fired with.<p>
		* @method subscribe
		* @param fn {Function} Event handler.
		*/
		public subscribe(fn: (e: EventData, data: T) => void): void;
		public subscribe(fn: (e: DOMEvent, data: T) => void): void;

		/***
		* Removes an event handler added with <code>subscribe(fn)</code>.
		* @method unsubscribe
		* @param fn {Function} Event handler to be removed.
		*/
		public unsubscribe(fn: (e: EventData, data: T) => void): void;
		public unsubscribe(fn: (e: DOMEvent, data: T) => void): void;

		/***
		* Fires an event notifying all subscribers.
		* @method notify
		* @param args {Object} Additional data object to be passed to all handlers.
		* @param e {EventData}
		*      Optional.
		*      An <code>EventData</code> object to be passed to all handlers.
		*      For DOM events, an existing W3C/jQuery event object can be passed in.
		* @param scope {Object}
		*      Optional.
		*      The scope ("this") within which the handler will be executed.
		*      If not specified, the scope will be set to the <code>Event</code> instance.
		* @return Last run callback result.
		* @note slick.core.Event.notify shows this method as returning a value, type is unknown.
		*/
		public notify(args?: T, e?: EventData, scope?: any): any;
		public notify(args?: T, e?: DOMEvent, scope?: any): any;

	}

	// todo: is this private? there are no comments in the code
	export class EventHandler <T = any> {
		constructor();

		public subscribe(event: Event<T>, handler: (e: EventData, data: T) => void): EventHandler;
		public unsubscribe(event: Event<T>, handler: (e: EventData, data: T) => void): EventHandler;
		public unsubscribeAll(): EventHandler;
	}

	/***
	* A structure containing a range of cells.
	* @class Range
	**/
	export class Range {

		/**
		* A structure containing a range of cells.
		* @constructor
		* @param fromRow {Integer} Starting row.
		* @param fromCell {Integer} Starting cell.
		* @param toRow {Integer} Optional. Ending row. Defaults to <code>fromRow</code>.
		* @param toCell {Integer} Optional. Ending cell. Defaults to <code>fromCell</code>.
		**/
		constructor(fromRow: number, fromCell: number, toRow?: number, toCell?: number);

		/***
		* @property fromRow
		* @type {Integer}
		*/
		public fromRow: number;

		/***
		* @property fromCell
		* @type {Integer}
		*/
		public fromCell: number;

		/***
		* @property toRow
		* @type {Integer}
		*/
		public toRow: number;

		/***
		* @property toCell
		* @type {Integer}
		*/
		public toCell: number;

		/***
		* Returns whether a range represents a single row.
		* @method isSingleRow
		* @return {Boolean}
		*/
		public isSingleRow(): boolean;

		/***
		* Returns whether a range represents a single cell.
		* @method isSingleCell
		* @return {Boolean}
		*/
		public isSingleCell(): boolean;

		/***
		* Returns whether a range contains a given cell.
		* @method contains
		* @param row {Integer}
		* @param cell {Integer}
		* @return {Boolean}
		*/
		public contains(row: number, cell: number): boolean;

		/***
		* Returns a readable representation of a range.
		* @method toString
		* @return {String}
		*/
		public toString(): string;

	}

	/***
	* A base class that all special / non-data rows (like Group and GroupTotals) derive from.
	* @class NonDataItem
	* @constructor
	*/
	export class NonDataRow {

	}

	/***
	* Information about a group of rows.
	* @class Group
	* @extends Slick.NonDataItem
	* @constructor
	*/
	export class Group<T extends SlickData> extends NonDataRow {

		constructor();

		/**
		* Grouping level, starting with 0.
		* @property level
		* @type {Number}
		*/
		public level: number;

		/***
		* Number of rows in the group.
		* @property count
		* @type {Integer}
		*/
		public count: number;

		/***
		* Grouping value.
		* @property value
		* @type {Object}
		*/
		public value: any;

		/***
		* Formatted display value of the group.
		* @property title
		* @type {String}
		*/
		public title: string;

		/***
		* Whether a group is collapsed.
		* @property collapsed
		* @type {Boolean}
		*/
		public collapsed: boolean;

		/***
		* GroupTotals, if any.
		* @property totals
		* @type {GroupTotals}
		*/
		public totals: GroupTotals<T>;

		/**
		* Rows that are part of the group.
		* @property rows
		* @type {Array}
		*/
		public rows: T[];

		/**
		* Sub-groups that are part of the group.
		* @property groups
		* @type {Array}
		*/
		public groups: Group<T>[];

		/**
		* A unique key used to identify the group.  This key can be used in calls to DataView
		* collapseGroup() or expandGroup().
		* @property groupingKey
		* @type {Object}
		*/
		public groupingKey: any;

		/***
		* Compares two Group instances.
		* @method equals
		* @return {Boolean}
		* @param group {Group} Group instance to compare to.
		* todo: this is on the prototype (NonDataRow()) instance, not Group, maybe doesn't matter?
		*/
		public equals(group: Group<T>): boolean;
	}

	/***
	* Information about group totals.
	* An instance of GroupTotals will be created for each totals row and passed to the aggregators
	* so that they can store arbitrary data in it.  That data can later be accessed by group totals
	* formatters during the display.
	* @class GroupTotals
	* @extends Slick.NonDataItem
	* @constructor
	*/
	export class GroupTotals<T> extends NonDataRow {

		constructor();

		/***
		* Parent Group.
		* @param group
		* @type {Group}
		*/
		public group: Group<T>;

	}

	/***
	* A locking helper to track the active edit controller and ensure that only a single controller
	* can be active at a time.  This prevents a whole class of state and validation synchronization
	* issues.  An edit controller (such as SlickGrid) can query if an active edit is in progress
	* and attempt a commit or cancel before proceeding.
	* @class EditorLock
	* @constructor
	*/
	export class EditorLock<T extends Slick.SlickData> {

		constructor();

		/***
		* Returns true if a specified edit controller is active (has the edit lock).
		* If the parameter is not specified, returns true if any edit controller is active.
		* @method isActive
		* @param editController {EditController}
		* @return {Boolean}
		*/
		public isActive(editController: Editors.Editor<T>): boolean;

		/***
		* Sets the specified edit controller as the active edit controller (acquire edit lock).
		* If another edit controller is already active, and exception will be thrown.
		* @method activate
		* @param editController {EditController} edit controller acquiring the lock
		*/
		public activate(editController: Editors.Editor<T>): void;

		/***
		* Unsets the specified edit controller as the active edit controller (release edit lock).
		* If the specified edit controller is not the active one, an exception will be thrown.
		* @method deactivate
		* @param editController {EditController} edit controller releasing the lock
		*/
		public deactivate(editController: Editors.Editor<T>): void;

		/***
		* Attempts to commit the current edit by calling "commitCurrentEdit" method on the active edit
		* controller and returns whether the commit attempt was successful (commit may fail due to validation
		* errors, etc.).  Edit controller's "commitCurrentEdit" must return true if the commit has succeeded
		* and false otherwise.  If no edit controller is active, returns true.
		* @method commitCurrentEdit
		* @return {Boolean}
		*/
		public commitCurrentEdit(): boolean;

		/***
		* Attempts to cancel the current edit by calling "cancelCurrentEdit" method on the active edit
		* controller and returns whether the edit was successfully cancelled.  If no edit controller is
		* active, returns true.
		* @method cancelCurrentEdit
		* @return {Boolean}
		*/
		public cancelCurrentEdit(): boolean;
	}

	/**
	* A global singleton editor lock.
	* @class GlobalEditorLock
	* @static
	* @constructor
	**/
	export var GlobalEditorLock: EditorLock<Slick.SlickData>;

	/**
	* slick.grid.js
	**/

	/**
	* Options which you can apply to the columns objects.
	**/
	export interface Column<T extends Slick.SlickData> {

		/**
		* This accepts a function of the form function(cellNode, row, dataContext, colDef) and is used to post-process the cell's DOM node / nodes
		* @param cellNode
		* @param row
		* @param dataContext
		* @param colDef
		* @return
		**/
		asyncPostRender?: (cellNode:any, row:any, dataContext:any, colDef:any) => void;

		/**
		* Used by the the slick.rowMoveManager.js plugin for moving rows. Has no effect without the plugin installed.
		**/
		behavior?: any;

		/**
		* In the "Add New" row, determines whether clicking cells in this column can trigger row addition. If true, clicking on the cell in this column in the "Add New" row will not trigger row addition.
		**/
		cannotTriggerInsert?: boolean;

		/**
		* Accepts a string as a class name, applies that class to every row cell in the column.
		**/
		cssClass?: string;

		/**
		* When set to true, the first user click on the header will do a descending sort. When set to false, the first user click on the header will do an ascending sort.
		**/
		defaultSortAsc?: boolean;

		/**
		* The editor for cell edits {TextEditor, IntegerEditor, DateEditor...} See slick.editors.js
		**/
		editor?: any; // typeof Editors.Editor<T>;

		/**
		* The property name in the data object to pull content from. (This is assumed to be on the root of the data object.)
		**/
		field?: string;

		/**
		* When set to false, clicking on a cell in this column will not select the row for that cell. The cells in this column will also be skipped during tab navigation.
		**/
		focusable?: boolean;

		/**
		* This accepts a function of the form function(row, cell, value, columnDef, dataContext) and returns a formatted version of the data in each cell of this column. For example, setting formatter to function(r, c, v, cd, dc) { return "Hello!"; } would overwrite every value in the column with "Hello!" See defaultFormatter in slick.grid.js for an example formatter.
		* @param row
		* @param cell
		* @param value
		* @param columnDef
		* @param dataContext
		* @return
		**/
		formatter?: Formatter<T>;

		/**
		* Accepts a string as a class name, applies that class to the cell for the column header.
		**/
		headerCssClass?: string;

		/**
		* A unique identifier for the column within the grid.
		**/
		id?: string;

		/**
		* Set the maximum allowable width of this column, in pixels.
		**/
		maxWidth?: number;

		/**
		*  Set the minimum allowable width of this column, in pixels.
		**/
		minWidth?: number;

		/**
		* The text to display on the column heading.
		**/
		name?: string;

		/**
		* If set to true, whenever this column is resized, the entire table view will rerender.
		**/
		rerenderOnResize?: boolean;

		/**
		* If false, column can no longer be resized.
		**/
		resizable?: boolean;

		/**
		* If false, when a row is selected, the CSS class for selected cells ("selected" by default) is not applied to the cell in this column.
		**/
		selectable?: boolean;

		/**
		* If true, the column will be sortable by clicking on the header.
		**/
		sortable?: boolean;

		/**
		* If set to a non-empty string, a tooltip will appear on hover containing the string.
		**/
		toolTip?: string;

		/**
		* Width of the column in pixels. (May often be overridden by things like minWidth, maxWidth, forceFitColumns, etc.)
		**/
		width?: number;
	}

	export interface EditorFactory {
		getEditor<T>(column: Column<T>): Editors.Editor<T>;
	}

	export interface FormatterFactory<T extends SlickData> {
		getFormatter(column: Column<T>): Formatter<any>;
	}

	export interface GridOptions<T extends SlickData> {

		/**
		* Makes cell editors load asynchronously after a small delay. This greatly increases keyboard navigation speed.
		**/
		asyncEditorLoading?: boolean;

		/**
		* Delay after which cell editor is loaded. Ignored unless asyncEditorLoading is true.
		**/
		asyncEditorLoadDelay?: number;

		/**
		*
		**/
		asyncPostRenderDelay?: number;

		/**
		* Cell will not automatically go into edit mode when selected.
		**/
		autoEdit?: boolean;

		/**
		*
		**/
		autoHeight?: boolean;

		/**
		* A CSS class to apply to flashing cells via flashCell().
		**/
		cellFlashingCssClass?: string;

		/**
		* A CSS class to apply to cells highlighted via setHighlightedCells().
		**/
		cellHighlightCssClass?: string;

		/**
		*
		**/
		dataItemColumnValueExtractor?: (item: any, columnDef: any) => any;

		/**
		*
		**/
		defaultColumnWidth?: number;

		/**
		*
		**/
		defaultFormatter?: Formatter<T>;

		/**
		*
		**/
		editable?: boolean;

		/**
		* Not listed as a default under options in slick.grid.js
		**/
		editCommandHandler?: any; // queueAndExecuteCommand

		/**
		* A factory object responsible to creating an editor for a given cell. Must implement getEditor(column).
		**/
		editorFactory?: EditorFactory;

		/**
		* A Slick.EditorLock instance to use for controlling concurrent data edits.
		**/
		editorLock?: EditorLock<T>;

		/**
		* If true, a blank row will be displayed at the bottom - typing values in that row will add a new one. Must subscribe to onAddNewRow to save values.
		**/
		enableAddRow?: boolean;

		/**
		* If true, async post rendering will occur and asyncPostRender delegates on columns will be called.
		**/
		enableAsyncPostRender?: boolean;

		/**
		* *WARNING*: Not contained in SlickGrid 2.1, may be deprecated
		**/
		enableCellRangeSelection?: any;

		/**
		* Appears to enable cell virtualisation for optimised speed with large datasets
		**/
		enableCellNavigation?: boolean;

		/**
		*
		**/
		enableColumnReorder?: boolean;

		/**
		* *WARNING*: Not contained in SlickGrid 2.1, may be deprecated
		**/
		enableRowReordering?: any;

		/**
		*
		**/
		enableTextSelectionOnCells?: boolean;

		/**
		* @see Example: Explicit Initialization
		**/
		explicitInitialization?: boolean;

		/**
		* Force column sizes to fit into the container (preventing horizontal scrolling). Effectively sets column width to be 1/Number of Columns which on small containers may not be desirable
		**/
		forceFitColumns?: boolean;

		/**
		*
		**/
		forceSyncScrolling?: boolean;

		/**
		* A factory object responsible to creating a formatter for a given cell. Must implement getFormatter(column).
		**/
		formatterFactory?: FormatterFactory<T>;

		/**
		* Will expand the table row divs to the full width of the container, table cell divs will remain aligned to the left
		**/
		fullWidthRows?: boolean;

		/**
		*
		**/
		headerRowHeight?: number;

		/**
		*
		**/
		leaveSpaceForNewRows?: boolean;

		/**
		* @see Example: Multi-Column Sort
		**/
		multiColumnSort?: boolean;

		/**
		*
		**/
		multiSelect?: boolean;

		/**
		*
		**/
		rowHeight?: number;

		/**
		*
		**/
		selectedCellCssClass?: string;

		/**
		*
		**/
		showHeaderRow?: boolean;

		/**
		* If true, the column being resized will change its width as the mouse is dragging the resize handle. If false, the column will resize after mouse drag ends.
		**/
		syncColumnCellResize?: boolean;

		/**
		*
		**/
		topPanelHeight?: number;


        addNewRowCssClass?: string;
        alwaysAllowHorizontalScroll?: boolean;
        alwaysShowVerticalScroll?: boolean;
        asyncPostRenderCleanupDelay?: number;
        createFooterRow?: boolean;
        createPreHeaderPanel?: boolean;
        doPaging?: boolean;
        editorCellNavOnLRKeys?: boolean;
        emulatePagingWhenScrolling?: boolean;
        enableAsyncPostRenderCleanup?: boolean;
        footerRowHeight?: number;
        frozenBottom?: boolean;
        frozenColumn?: number;
        frozenRow?: number;
        minRowBuffer?: number;
        numberedMultiColumnSort?: boolean;
        preHeaderPanelHeight?: number;
        preserveCopiedSelectionOnPaste?: boolean;
        showCellSelection?: boolean;
        showFooterRow?: boolean;
        showPreHeaderPanel?: boolean;
        showTopPanel?: boolean;
        sortColNumberInSeparateSpan?: boolean;
        suppressActiveCellChangeOnEdit?: boolean;
        tristateMultiColumnSort?: boolean;
        viewportClass?: string;
	}

	export interface DataProvider<T extends SlickData> {
		/**
		 * Returns the number of data items in the set.
		 */
		getLength(): number;

		/**
		 * Returns the item at a given index.
		 * @param index
		 */
		getItem(index: number): T;

		/**
		 * Returns the metadata for the item at a given index (optional).
		 * @param index
		 */
		getItemMetadata?(index: number): RowMetadata<T>;
	}

	export interface SlickData {
		// todo ? might be able to leave as empty
	}

	export interface RowMetadata<T> {
		/**
		 * One or more (space-separated) CSS classes to be added to the entire row.
		 */
		cssClasses?: string;

		/**
		 * Whether or not any cells in the row can be set as "active".
		 */
		focusable?: boolean;

		/**
		 * Whether or not a row or any cells in it can be selected.
		 */
		selectable?: boolean;

		/**
		 * Metadata related to individual columns
		 */
		columns?: {
			/**
			 * Metadata indexed by column id
			 */
			[index: string]: ColumnMetadata<T>;
			/**
			 * Metadata indexed by column index
			 */
			[index: number]: ColumnMetadata<T>;
		};
	}

	export interface ColumnMetadata<T extends SlickData> {
		/**
		 * Whether or not a cell can be set as "active".
		 */
		focusable?: boolean;

		/**
		 * Whether or not a cell can be selected.
		 */
		selectable?: boolean;

		/**
		 * A custom cell formatter.
		 */
		formatter?: Formatter<T>;

		/**
		 * A custom cell editor.
		 */
		editor?: any;		

		/**
		 * Number of columns this cell will span. Can also contain "*" to indicate that the cell should span the rest of the row.
		 */
		colspan?: number|string;
	}

	/**
	* Selecting cells in SlickGrid is handled by a selection model.
	* Selection models are controllers responsible for handling user interactions and notifying subscribers of the changes in the selection. Selection is represented as an array of Slick.Range objects.
	* You can get the current selection model from the grid by calling getSelectionModel() and set a different one using setSelectionModel(selectionModel). By default, no selection model is set.
	* The grid also provides two helper methods to simplify development - getSelectedRows() and setSelectedRows(rowsArray), as well as an onSelectedRowsChanged event.
	* SlickGrid includes two pre-made selection models - Slick.CellSelectionModel and Slick.RowSelectionModel, but you can easily write a custom one.
	**/
	export class SelectionModel<T extends SlickData, E> {
		/**
		* An initializer function that will be called with an instance of the grid whenever a selection model is registered with setSelectionModel. The selection model can use this to initialize its state and subscribe to grid events.
		**/
		init(grid: Grid<T>): void;

		/**
		* A destructor function that will be called whenever a selection model is unregistered from the grid by a call to setSelectionModel with another selection model or whenever a grid with this selection model is destroyed. The selection model can use this destructor to unsubscribe from grid events and release all resources (remove DOM nodes, event listeners, etc.).
		**/
		destroy(): void;

		onSelectedRangesChanged: Slick.Event<E>;
	}

	export class Grid<T extends SlickData> {

		/**
		* Create an instance of the grid.
		* @param container Container node to create the grid in. This can be a DOM Element, a jQuery node, or a jQuery selector.
		* @param data Databinding source. This can either be a regular JavaScript array or a custom object exposing getItem(index) and getLength() functions.
		* @param columns An array of column definition objects. See Column Options for a list of options that can be included on each column definition object.
		* @param options Additional options.  See Grid Options for a list of options that can be included.
		**/
		constructor(
			container: string|HTMLElement|JQuery,
			data: T[]|DataProvider<T>,
			columns: Column<T>[],
			options: GridOptions<T>);

		// #region Core

		/**
		* Initializes the grid. Called after plugins are registered. Normally, this is called by the constructor, so you don't need to call it. However, in certain cases you may need to delay the initialization until some other process has finished. In that case, set the explicitInitialization option to true and call the grid.init() manually.
		**/
		public init(): void;

		/**
		* todo: no docs
		**/
		public destroy(): void;

		/**
		* Returns an array of every data object, unless you're using DataView in which case it returns a DataView object.
		* @return
		**/
		public getData(): any;
		//public getData(): T[];
		// Issue: typescript limitation, cannot differentiate calls by return type only, so need to cast to DataView or T[].
		//public getData(): DataView;

		/**
		* Returns the databinding item at a given position.
		* @param index Item index.
		* @return
		**/
		public getDataItem(index: number): T;

		/**
		* Sets a new source for databinding and removes all rendered rows. Note that this doesn't render the new rows - you can follow it with a call to render() to do that.
		* @param newData New databinding source using a regular JavaScript array..
		* @param scrollToTop If true, the grid will reset the vertical scroll position to the top of the grid.
		**/
		public setData(newData: T[], scrollToTop: boolean): void;

		/**
		* Sets a new source for databinding and removes all rendered rows. Note that this doesn't render the new rows - you can follow it with a call to render() to do that.
		* @param newData New databinding source using a custom object exposing getItem(index) and getLength() functions.
		* @param scrollToTop If true, the grid will reset the vertical scroll position to the top of the grid.
		**/
		public setData(newData: DataProvider<T>, scrollToTop: boolean): void;

		/**
		* Returns the size of the databinding source.
		* @return
		**/
		public getDataLength(): number;

		/**
		* Returns an object containing all of the Grid options set on the grid. See a list of Grid Options here.
		* @return
		**/
		public getOptions(): GridOptions<any>;

		/**
		* Returns an array of row indices corresponding to the currently selected rows.
		* @return
		**/
		public getSelectedRows(): number[];

		/**
		* Returns the current SelectionModel. See here for more information about SelectionModels.
		* @return
		**/
		public getSelectionModel(): SelectionModel<any, any>;

		/**
		* Extends grid options with a given hash. If an there is an active edit, the grid will attempt to commit the changes and only continue if the attempt succeeds.
		* @options An object with configuration options.
		**/
		public setOptions(options: GridOptions<T>): void;

		/**
		* Accepts an array of row indices and applies the current selectedCellCssClass to the cells in the row, respecting whether cells have been flagged as selectable.
		* @param rowsArray An array of row numbers.
		**/
		public setSelectedRows(rowsArray: number[]): void;

		/**
		 * Returns container's HTML node (the element passed into Grid constructor).
		 */
		public getContainerNode(): HTMLElement;

		/**
		* Unregisters a current selection model and registers a new one. See the definition of SelectionModel for more information.
		* @selectionModel A SelectionModel.
		**/
		public setSelectionModel(selectionModel: SelectionModel<T, any>): void;		// todo: don't know the type of the event data type

		// #endregion Core

		// #region Columns

		/**
		* Proportionately resizes all columns to fill available horizontal space. This does not take the cell contents into consideration.
		**/
		public autosizeColumns(): void;

		/**
		* Returns the index of a column with a given id. Since columns can be reordered by the user, this can be used to get the column definition independent of the order:
		* @param id A column id.
		* @return
		**/
		public getColumnIndex(id: string): number;

		/**
		* Returns an array of column definitions, containing the option settings for each individual column.
		* @return
		**/
		public getColumns(): Column<T>[];

		/**
		* Sets grid columns. Column headers will be recreated and all rendered rows will be removed. To rerender the grid (if necessary), call render().
		* @param columnDefinitions An array of column definitions.
		**/
		public setColumns(columnDefinitions: Column<T>[]): void;

		/**
		* Accepts a columnId string and an ascending boolean. Applies a sort glyph in either ascending or descending form to the header of the column. Note that this does not actually sort the column. It only adds the sort glyph to the header.
		* @param columnId
		* @param ascending
		**/
		public setSortColumn(columnId: string, ascending: boolean): void;

		/**
		* Accepts an array of objects in the form [ { columnId: [string], sortAsc: [boolean] }, ... ]. When called, this will apply a sort glyph in either ascending or descending form to the header of each column specified in the array. Note that this does not actually sort the column. It only adds the sort glyph to the header
		* @param cols
		**/
		public setSortColumns(cols: { columnId: string; sortAsc: boolean }[]): void;

		/**
		* todo: no docs or comments available
		* @return
		**/
		public getSortColumns(): { columnId: string; sortAsc: boolean }[];

		/**
		* Updates an existing column definition and a corresponding header DOM element with the new title and tooltip.
		* @param columnId Column id.
		* @param title New column name.
		* @param toolTip New column tooltip.
		**/
		public updateColumnHeader(columnId: string, title?: string, toolTip?: string): void;

		// #endregion Columns

		// #region Cells

		/**
		* Adds an "overlay" of CSS classes to cell DOM elements. SlickGrid can have many such overlays associated with different keys and they are frequently used by plugins. For example, SlickGrid uses this method internally to decorate selected cells with selectedCellCssClass (see options).
		* @param key A unique key you can use in calls to setCellCssStyles and removeCellCssStyles. If a hash with that key has already been set, an exception will be thrown.
		* @param hash A hash of additional cell CSS classes keyed by row number and then by column id. Multiple CSS classes can be specified and separated by space.
		* @example
		* {
		* 	0:    {
		* 		"number_column":    "cell-bold",
		* 		"title_column":     "cell-title cell-highlighted"
		* 	},
		* 	4:    {
		* 		"percent_column":    "cell-highlighted"
		* 	}
		* }
		**/
		public addCellCssStyles(key: string, hash: CellCssStylesHash): void;

		/**
		* Returns true if you can click on a given cell and make it the active focus.
		* @param row A row index.
		* @param col A column index.
		* @return
		**/
		public canCellBeActive(row: number, col: number): boolean;

		/**
		* Returns true if selecting the row causes this particular cell to have the selectedCellCssClass applied to it. A cell can be selected if it exists and if it isn't on an empty / "Add New" row and if it is not marked as "unselectable" in the column definition.
		* @param row A row index.
		* @param col A column index.
		* @return
		**/
		public canCellBeSelected(row: number, col: number): boolean;

		/**
		* Attempts to switch the active cell into edit mode. Will throw an error if the cell is set to be not editable. Uses the specified editor, otherwise defaults to any default editor for that given cell.
		* @param editor A SlickGrid editor (see examples in slick.editors.js).
		**/
		public editActiveCell(editor: Editors.Editor<T>): void;

		/**
		* Flashes the cell twice by toggling the CSS class 4 times.
		* @param row A row index.
		* @param cell A column index.
		* @param speed (optional) - The milliseconds delay between the toggling calls. Defaults to 100 ms.
		**/
		public flashCell(row: number, cell: number, speed?: number): void;

		/**
		* Returns an object representing the coordinates of the currently active cell:
		* @example
		* 	{
		* 	  row: activeRow,
		* 	  cell: activeCell
		* 	}
		* @return
		**/
		public getActiveCell(): Cell;

		/**
		* Returns the DOM element containing the currently active cell. If no cell is active, null is returned.
		* @return
		**/
		public getActiveCellNode(): HTMLElement;

		/**
		* Returns an object representing information about the active cell's position. All coordinates are absolute and take into consideration the visibility and scrolling position of all ancestors.
		* @return
		**/
		public getActiveCellPosition(): CellPosition;

		/**
		* Accepts a key name, returns the group of CSS styles defined under that name. See setCellCssStyles for more info.
		* @param key A string.
		* @return
		**/
		public getCellCssStyles(key: string): CellCssStylesHash;

		/**
		* Returns the active cell editor. If there is no actively edited cell, null is returned.
		* @return
		**/
		public getCellEditor(): Editors.Editor<any>;

		/**
		* Returns a hash containing row and cell indexes from a standard W3C/jQuery event.
		* @param e A standard W3C/jQuery event.
		* @return
		**/
		public getCellFromEvent(e: DOMEvent): Cell;

		/**
		* Returns a hash containing row and cell indexes. Coordinates are relative to the top left corner of the grid beginning with the first row (not including the column headers).
		* @param x An x coordinate.
		* @param y A y coordinate.
		* @return
		**/
		public getCellFromPoint(x: number, y: number): Cell;

		/**
		* Returns a DOM element containing a cell at a given row and cell.
		* @param row A row index.
		* @param cell A column index.
		* @return
		**/
		public getCellNode(row: number, cell: number): HTMLElement;

		/**
		* Returns an object representing information about a cell's position. All coordinates are absolute and take into consideration the visibility and scrolling position of all ancestors.
		* @param row A row index.
		* @param cell A column index.
		* @return
		**/
		public getCellNodeBox(row: number, cell: number): CellPosition;

		/**
		* Accepts a row integer and a cell integer, scrolling the view to the row where row is its row index, and cell is its cell index. Optionally accepts a forceEdit boolean which, if true, will attempt to initiate the edit dialogue for the field in the specified cell.
		* Unlike setActiveCell, this scrolls the row into the viewport and sets the keyboard focus.
		* @param row A row index.
		* @param cell A column index.
		* @param forceEdit If true, will attempt to initiate the edit dialogue for the field in the specified cell.
		* @return
		**/
		public gotoCell(row: number, cell: number, forceEdit?: boolean): void;

		/**
		* todo: no docs
		* @return
		**/
		public getTopPanel(): HTMLElement;

		/**
		* todo: no docs
		* @param visible
		**/
		public setTopPanelVisibility(visible: boolean): void;

		/**
		* todo: no docs
		* @param visible
		**/
		public setHeaderRowVisibility(visible: boolean): void;

		/**
		* todo: no docs
		* @return
		**/
		public getHeaderRow(): HTMLElement;

		/**
		* todo: no docs, return type is probably wrong -> "return $header && $header[0]"
		* @param columnId
		* @return
		**/
		public getHeaderRowColumn(columnId: string): Column<any>;

		/**
		* todo: no docs
		* @return
		**/
		public getGridPosition(): CellPosition;

		/**
		* Switches the active cell one row down skipping unselectable cells. Returns a boolean saying whether it was able to complete or not.
		* @return
		**/
		public navigateDown(): boolean;

		/**
		* Switches the active cell one cell left skipping unselectable cells. Unline navigatePrev, navigateLeft stops at the first cell of the row. Returns a boolean saying whether it was able to complete or not.
		* @return
		**/
		public navigateLeft(): boolean;

		/**
		* Tabs over active cell to the next selectable cell. Returns a boolean saying whether it was able to complete or not.
		* @return
		**/
		public navigateNext(): boolean;

		/**
		* Tabs over active cell to the previous selectable cell. Returns a boolean saying whether it was able to complete or not.
		* @return
		**/
		public navigatePrev(): boolean;

		/**
		* Switches the active cell one cell right skipping unselectable cells. Unline navigateNext, navigateRight stops at the last cell of the row. Returns a boolean saying whether it was able to complete or not.
		* @return
		**/
		public navigateRight(): boolean;

		/**
		* Switches the active cell one row up skipping unselectable cells. Returns a boolean saying whether it was able to complete or not.
		* @return
		**/
		public navigateUp(): boolean;

		/**
		* Removes an "overlay" of CSS classes from cell DOM elements. See setCellCssStyles for more.
		* @param key A string key.
		**/
		public removeCellCssStyles(key: string): void;

		/**
		* Resets active cell.
		**/
		public resetActiveCell(): void;

		/**
		* Sets an active cell.
		* @param row A row index.
		* @param cell A column index.
		**/
		public setActiveCell(row: number, cell: number): void;

		/**
		* Sets CSS classes to specific grid cells by calling removeCellCssStyles(key) followed by addCellCssStyles(key, hash). key is name for this set of styles so you can reference it later - to modify it or remove it, for example. hash is a per-row-index, per-column-name nested hash of CSS classes to apply.
		* Suppose you have a grid with columns:
		* ["login", "name", "birthday", "age", "likes_icecream", "favorite_cake"]
		* ...and you'd like to highlight the "birthday" and "age" columns for people whose birthday is today, in this case, rows at index 0 and 9. (The first and tenth row in the grid).
		* @param key A string key. Will overwrite any data already associated with this key.
		* @param hash A hash of additional cell CSS classes keyed by row number and then by column id. Multiple CSS classes can be specified and separated by space.
		**/
		public setCellCssStyles(key: string, hash: CellCssStylesHash): void;

		// #endregion Cells

		// #region Events

		public onScroll: Slick.Event<OnScrollEventArgs<T>>;
		public onSort: Slick.Event<OnSortEventArgs<T>>;
		public onHeaderMouseEnter: Slick.Event<OnHeaderMouseEventArgs<T>>;
		public onHeaderMouseLeave: Slick.Event<OnHeaderMouseEventArgs<T>>;
		public onHeaderContextMenu: Slick.Event<OnHeaderContextMenuEventArgs<T>>;
		public onHeaderClick: Slick.Event<OnHeaderClickEventArgs<T>>;
		public onHeaderCellRendered: Slick.Event<OnHeaderCellRenderedEventArgs<T>>;
		public onBeforeHeaderCellDestroy: Slick.Event<OnBeforeHeaderCellDestroyEventArgs<T>>;
		public onHeaderRowCellRendered: Slick.Event<OnHeaderRowCellRenderedEventArgs<T>>;
		public onBeforeHeaderRowCellDestroy: Slick.Event<OnBeforeHeaderRowCellDestroyEventArgs<T>>;
		public onMouseEnter: Slick.Event<OnMouseEnterEventArgs<T>>;
		public onMouseLeave: Slick.Event<OnMouseLeaveEventArgs<T>>;
		public onClick: Slick.Event<OnClickEventArgs<T>>;
		public onDblClick: Slick.Event<OnDblClickEventArgs<T>>;
		public onContextMenu: Slick.Event<OnContextMenuEventArgs<T>>;
		public onKeyDown: Slick.Event<OnKeyDownEventArgs<T>>;
		public onAddNewRow: Slick.Event<OnAddNewRowEventArgs<T>>;
		public onValidationError: Slick.Event<OnValidationErrorEventArgs<T>>;
		public onColumnsReordered: Slick.Event<OnColumnsReorderedEventArgs<T>>;
		public onColumnsResized: Slick.Event<OnColumnsResizedEventArgs<T>>;
		public onCellChange: Slick.Event<OnCellChangeEventArgs<T>>;
		public onBeforeEditCell: Slick.Event<OnBeforeEditCellEventArgs<T>>;
		public onBeforeCellEditorDestroy: Slick.Event<OnBeforeCellEditorDestroyEventArgs<T>>;
		public onBeforeDestroy: Slick.Event<OnBeforeDestroyEventArgs<T>>;
		public onActiveCellChanged: Slick.Event<OnActiveCellChangedEventArgs<T>>;
		public onActiveCellPositionChanged: Slick.Event<OnActiveCellPositionChangedEventArgs<T>>;
		public onDragInit: Slick.Event<OnDragInitEventArgs<T>>;
		public onDragStart: Slick.Event<OnDragStartEventArgs<T>>;
		public onDrag: Slick.Event<OnDragEventArgs<T>>;
		public onDragEnd: Slick.Event<OnDragEndEventArgs<T>>;
		public onSelectedRowsChanged: Slick.Event<OnSelectedRowsChangedEventArgs<T>>;
		public onCellCssStylesChanged: Slick.Event<OnCellCssStylesChangedEventArgs<T>>;
		public onViewportChanged: Slick.Event<OnViewportChangedEventArgs<T>>;
		// #endregion Events

		// #region Plugins

		public registerPlugin(plugin: Plugin<T>): void;
		public unregisterPlugin(plugin: Plugin<T>): void;

		// #endregion Plugins

		// #region Rendering

		public render(): void;
		public invalidate(): void;
		public invalidateRow(row: number): void;
		public invalidateRows(rows: number[]): void;
		public invalidateAllRows(): void;
		public updateCell(row: number, cell: number): void;
		public updateRow(row: number): void;
		public getViewport(viewportTop?: number, viewportLeft?: number): Viewport;
		public getRenderedRange(viewportTop?: number, viewportLeft?: number): Viewport;
		public resizeCanvas(): void;
		public updateRowCount(): void;
		public scrollRowIntoView(row: number, doPaging: boolean): void;
		public scrollRowToTop(row: number): void;
		public scrollCellIntoView(row: number, cell: number, doPaging: boolean): void;
		public getCanvasNode(): HTMLCanvasElement;
		public focus(): void;

		// #endregion Rendering

		// #region Editors

		public getEditorLock(): EditorLock<any>;
		public getEditController(): { commitCurrentEdit():boolean; cancelCurrentEdit():boolean; };

		// #endregion Editors
	}

	export interface GridEventArgs<T extends SlickData> {
		grid: Grid<T>;
	}

	export interface OnCellCssStylesChangedEventArgs<T extends SlickData> extends GridEventArgs<T> {
		key: string;
		hash: CellCssStylesHash;
	}

	export interface OnSelectedRowsChangedEventArgs<T extends SlickData> extends GridEventArgs<T> {
		rows: number[];
	}

	export interface OnDragEndEventArgs<T extends SlickData> extends GridEventArgs<T> {
		// todo: need to understand $canvas drag event parameter's 'dd' object
		// the documentation is not enlightening
	}

	export interface OnDragEventArgs<T extends SlickData> extends GridEventArgs<T> {
		// todo: need to understand $canvas drag event parameter's 'dd' object
		// the documentation is not enlightening
	}

	export interface OnDragStartEventArgs<T extends SlickData> extends GridEventArgs<T> {
		// todo: need to understand $canvas drag event parameter's 'dd' object
		// the documentation is not enlightening
	}

	export interface OnDragInitEventArgs<T extends SlickData> extends GridEventArgs<T> {
		// todo: need to understand $canvas drag event parameter's 'dd' object
		// the documentation is not enlightening
	}

	export interface OnActiveCellPositionChangedEventArgs<T extends SlickData> extends GridEventArgs<T> {

	}

	export interface OnActiveCellChangedEventArgs<T extends SlickData> extends GridEventArgs<T> {
		row: number;
		cell: number;
	}

	export interface OnBeforeDestroyEventArgs<T extends SlickData> extends GridEventArgs<T> {

	}

	export interface OnBeforeCellEditorDestroyEventArgs<T extends SlickData> extends GridEventArgs<T> {
		editor: Editors.Editor<T>;
	}

	export interface OnBeforeEditCellEventArgs<T extends SlickData> extends GridEventArgs<T> {
		row: number;
		cell: number;
		item: T;
		column: Column<T>;
	}

	export interface OnCellChangeEventArgs<T extends SlickData> extends GridEventArgs<T> {
		row: number;
		cell: number;
		item: T;
	}

	export interface OnColumnsResizedEventArgs<T extends SlickData> extends GridEventArgs<T> {

	}

	export interface OnColumnsReorderedEventArgs<T extends SlickData> extends GridEventArgs<T> {

	}

	export interface OnValidationErrorEventArgs<T extends SlickData> extends GridEventArgs<T> {
		editor: Editors.Editor<T>;
		cellNode: HTMLElement;
		validationResults: ValidateResults;
		row: number;
		cell: number;
		column: Column<T>;
	}

	export interface OnAddNewRowEventArgs<T extends SlickData> extends GridEventArgs<T> {
		item: T;
		column: Column<T>;
	}

	export interface OnKeyDownEventArgs<T extends SlickData> extends GridEventArgs<T> {
		row: number;
		cell: number;
	}

	export interface OnContextMenuEventArgs<T extends SlickData> extends GridEventArgs<T> {

	}

	export interface OnDblClickEventArgs<T extends SlickData> extends GridEventArgs<T> {
		row: number;
		cell: number;
	}

	export interface OnClickEventArgs<T extends SlickData> extends GridEventArgs<T> {
		row: number;
		cell: number;
	}

	export interface OnMouseLeaveEventArgs<T extends SlickData> extends GridEventArgs<T> {

	}

	export interface OnMouseEnterEventArgs<T extends SlickData> extends GridEventArgs<T> {

	}

	export interface OnBeforeHeaderRowCellDestroyEventArgs<T extends SlickData> extends GridEventArgs<T> {
		node: HTMLElement; // todo: might be JQuery instance
		column: Column<T>;
	}

	export interface OnHeaderRowCellRenderedEventArgs<T extends SlickData> extends GridEventArgs<T> {
		node: HTMLElement; // todo: might be JQuery instance
		column: Column<T>;
	}

	export interface OnBeforeHeaderCellDestroyEventArgs<T extends SlickData> extends GridEventArgs<T> {
		node: HTMLElement; // todo: might be JQuery instance
		column: Column<T>;
	}

	export interface OnHeaderCellRenderedEventArgs<T extends SlickData> extends GridEventArgs<T> {
		node: HTMLElement;	// todo: might be JQuery instance
		column: Column<T>;
	}

	export interface OnHeaderClickEventArgs<T extends SlickData> extends GridEventArgs<T> {
		column: Column<T>;
	}

	export interface OnHeaderContextMenuEventArgs<T extends SlickData> extends GridEventArgs<T> {
		column: Column<T>;
	}

	export interface OnHeaderMouseEventArgs<T extends SlickData> extends GridEventArgs<T> {
		column: Column<T>;
	}

	export interface OnSortEventArgs<T extends SlickData> extends GridEventArgs<T> {
		multiColumnSort: boolean;

		// Single column returned
		sortCol?: Column<T>;
		sortAsc: boolean;

		// Multiple columns returned
		sortCols?: SortColumn<T>[];
	}

	export interface OnScrollEventArgs<T extends SlickData> extends GridEventArgs<T> {
		scrollLeft: number;
		scrollTop: number;
	}

	export interface OnViewportChangedEventArgs<T extends SlickData> extends GridEventArgs<T> {

	}

	export interface SortColumn<T extends SlickData> {
		sortCol: Column<T>;
		sortAsc: boolean;
	}

	export interface Cell {
		row: number;
		cell: number;
	}

	export interface Position {
		top: number;
		left: number;
	}

	export interface CellPosition extends Position {
		bottom: number;
		height: number;
		right: number;
		visible: boolean;
		width: number;
	}

	export interface CellCssStylesHash {
		[index: number]: {
			[id: string]: string;
		};
	}

	export interface Viewport {
		top: number;
		bottom: number;
		leftPx: number;
		rightPx: number;
	}

	export interface ValidateResults {
		valid: boolean;
		msg: string;
	}

	export namespace Editors {

		export interface EditorOptions<T extends Slick.SlickData> {
			column: Column<T>;
			container: HTMLElement;
			grid: Grid<T>;

			item?: T;
			commitChanges?: () => void;
			cancelChanges?: () => void;
			gridPosition?: CellPosition;
			position?: CellPosition;

		}

		export class Editor<T extends Slick.SlickData> {
			constructor(args: EditorOptions<T>);
			public init(): void;
			public destroy(): void;
			public focus(): void;
			public loadValue(item: T): void;
			public applyValue(item: T, state: string): void;
			public isValueChanged(): boolean;
			public serializeValue(): any;
			public validate(): ValidateResults;
		}

		export class Text<T extends Slick.SlickData> extends Editor<T> {
			constructor(args: EditorOptions<T>);

			public getValue(): string;
			public setValue(val: string): void;
			public serializeValue(): string;
		}

		export class Integer<T extends Slick.SlickData> extends Editor<T> {
			constructor(args: EditorOptions<T>);

			public serializeValue(): number;
		}

		export class Date<T extends Slick.SlickData> extends Editor<T> {
			constructor(args: EditorOptions<T>);

			public show(): void;
			public hide(): void;
			public position(position: Position): void;
			public serializeValue(): string;
		}

		export class YesNoSelect<T extends Slick.SlickData> extends Editor<T> {
			constructor(args: EditorOptions<T>);

			public serializeValue(): boolean;
		}

		export class Checkbox<T extends Slick.SlickData> extends Editor<T> {
			constructor(args: EditorOptions<T>);

			public serializeValue(): boolean;

		}
		export class PercentComplete<T extends Slick.SlickData> extends Editor<T> {
			constructor(args: EditorOptions<T>);

			public serializeValue(): number;
		}

		export class LongText<T extends Slick.SlickData> extends Editor<T> {
			constructor(args: EditorOptions<T>);

			public handleKeyDown(e: DOMEvent): void;
			public save(): void;
			public cancel(): void;
			public hide(): void;
			public show(): void;
			public position(position: Position): void;
			public serializeValue(): string;
		}
	}

	export interface Formatter<T extends SlickData> {
        (row: number, cell: number, value: any, columnDef: Column<T>, dataContext: SlickData): string;
	}

	export module Formatters {
		var PercentComplete: Formatter<Slick.SlickData>;
		var PercentCompleteBar: Formatter<Slick.SlickData>;
		var YesNo: Formatter<Slick.SlickData>;
		var Checkmark: Formatter<Slick.SlickData>;
	}

	export module Data {

		export interface DataViewOptions<T extends Slick.SlickData> {
			groupItemMetadataProvider?: GroupItemMetadataProvider<T>;
			inlineFilters?: boolean;
		}

		/**
		* Item -> Data by index
		* Row -> Data by row
		**/
		export class DataView<T extends Slick.SlickData> implements DataProvider<T> {

			constructor(options?: DataViewOptions<T>);

			public beginUpdate(): void;
			public endUpdate(): void;
			public setPagingOptions(args: PagingOptions): void;
			public getPagingInfo(): PagingOptions;
			public getItems(): T[];
			public setItems(data: T[], objectIdProperty?: string): void;
			public setFilter(filterFn: (item: T, args:any) => boolean): void;	// todo: typeof(args)
			public sort(comparer: Function, ascending: boolean): void;		// todo: typeof(comparer), should be the same callback as Array.sort
			public fastSort(field: string, ascending: boolean): void;
			public fastSort(field: Function, ascending: boolean): void;		// todo: typeof(field), should be the same callback as Array.sort
			public reSort(): void;
			public setGrouping(groupingInfos: GroupingOptions<T> | GroupingOptions<T>[]): void;
			public getGrouping(): GroupingOptions<T>[];

			/**
			* @deprecated
			**/
			public groupBy(valueGetter:any, valueFormatter:any, sortComparer:any): void;

			/**
			* @deprecated
			**/
			public setAggregators(groupAggregators:any, includeCollapsed:any): void;

			/**
			* @param level Optional level to collapse.  If not specified, applies to all levels.
			**/
			public collapseAllGroups(level?: number): void;

			/**
			* @param level Optional level to collapse.  If not specified, applies to all levels.
			**/
			public expandAllGroups(level?: number): void;

			/**
			* @param varArgs Either a Slick.Group's "groupingKey" property, or a
			*     variable argument list of grouping values denoting a unique path to the row.  For
			*     example, calling collapseGroup('high', '10%') will collapse the '10%' subgroup of
			*     the 'high' setGrouping.
			*/
			public collapseGroup(...varArgs: string[]): void;

			/**
			* @param varArgs Either a Slick.Group's "groupingKey" property, or a
			*     variable argument list of grouping values denoting a unique path to the row.  For
			*     example, calling expandGroup('high', '10%') will expand the '10%' subgroup of
			*     the 'high' setGrouping.
			*/
			public expandGroup(...varArgs: string[]): void;
			public getGroups(): Group<T>[];
			public getIdxById(id: string): number;
			public getRowById(id: string): number;
			public getItemById(id: any): T;
			public getItemByIdx(idx: number): T;
			public mapRowsToIds(rowArray: number[]): string[];
			public setRefreshHints(hints: RefreshHints): void;
			public setFilterArgs(args: any): void;
			public refresh(): void;
			public updateItem(id: string, item: T): void;
			public insertItem(insertBefore: number, item: T): void;
			public addItem(item: T): void;
			public deleteItem(id: string): void;
			public syncGridSelection(grid: Grid<T>, preserveHidden: boolean): void;
			public syncGridCellCssStyles(grid: Grid<T>, key: string): void;

			public getLength(): number;
			public getItem(index: number): T;
			public getItemMetadata(index: number): RowMetadata<T>;

			public onRowCountChanged: Slick.Event<OnRowCountChangedEventData>;
			public onRowsChanged: Slick.Event<OnRowsChangedEventData>;
			public onPagingInfoChanged: Slick.Event<OnPagingInfoChangedEventData>;
		}

		export interface GroupingOptions<T> {
			getter?: ((item?: T) => any) | string;
			formatter?: (item?: T) => string;
			comparer?: (a: Group<T>, b: Group<T>) => number;
			predefinedValues?: any[];	// todo
			aggregators?: Aggregators.Aggregator<T>[];
			aggregateEmpty?: boolean;
			aggregateCollapsed?: boolean;
			aggregateChildGroups?: boolean;
			collapsed?: boolean;
			displayTotalsRow?: boolean;
		}

		export interface PagingOptions {
			pageSize?: number;
			pageNum?: number;
			totalRows?: number;
			totalPages?: number;
		}

		export interface RefreshHints {
			isFilterNarrowing?: boolean;
			isFilterExpanding?: boolean;
			isFilterUnchanged?: boolean;
			ignoreDiffsBefore?: boolean;
			ignoreDiffsAfter?: boolean;
		}

		export interface OnRowCountChangedEventData {
			// empty
		}
		export interface OnRowsChangedEventData {
			rows: number[];
		}
		export interface OnPagingInfoChangedEventData extends PagingOptions {

		}

		export module Aggregators {
			export class Aggregator<T extends Slick.SlickData> {
				public field: string;
				public init(): void;
				public accumulate(item: T): void;
				public storeResult(groupTotals: GroupTotals<T>): void;
			}

			export class Avg<T> extends Aggregator<T> {

			}

			export class Min<T> extends Aggregator<T> {

			}

			export class Max<T> extends Aggregator<T> {

			}

			export class Sum<T> extends Aggregator<T> {

			}
		}

		/***
		* Provides item metadata for group (Slick.Group) and totals (Slick.Totals) rows produced by the DataView.
		* This metadata overrides the default behavior and formatting of those rows so that they appear and function
		* correctly when processed by the grid.
		*
		* This class also acts as a grid plugin providing event handlers to expand & collapse groups.
		* If "grid.registerPlugin(...)" is not called, expand & collapse will not work.
		*
		* @class GroupItemMetadataProvider
		* @module Data
		* @namespace Slick.Data
		* @constructor
		* @param options
		*/
		export class GroupItemMetadataProvider<T extends Slick.SlickData> {
			public init(): void;
			public destroy(): void;
			public getGroupRowMetadata(item?: Group<T>): RowMetadata<T>;
			public getTotalsRowMetadata(item?: GroupTotals<T>): RowMetadata<T>;
		}

		export interface GroupItemMetadataProviderOptions {
			groupCssClass?: string;
			groupTitleCssClass?: string;
			totalsCssClass?: string;
			groupFocusable?: boolean;
			totalsFocusable?: boolean;
			toggleCssClass?: string;
			toggleExpandedCssCass?: string;
			toggleCollapsedCssClass?: string;
			enableExpandCollapse?: boolean;
		}

		//export class RemoteModel {
		//	public data: any;

		//	public clear(): any;
		//	public isDataLoaded(): any;
		//	public ensureData(): any;
		//	public reloadData(): any;
		//	public setSort(): any;
		//	public setSearch(): any;

		//	public onDataLoading: Slick.Event<OnDataLoadingEventData>;
		//	public onDataLoaded: Slick.Event<OnDataLoadedEventData>;

		//}

		//export interface OnDataLoadingEventData {

		//}

		//export interface OnDataLoadedEventData {

		//}
	}

	export class Plugin<T extends Slick.SlickData> {

		constructor(options?: PluginOptions);
		public init(grid: Grid<T>): void;
		public destroy(): void;
	}

	export interface PluginOptions {
		// extend your plugin options here
	}

}
