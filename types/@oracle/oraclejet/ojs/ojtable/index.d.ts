/// <reference types='ojs/ojcomponentcore'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojTable<K, D> extends baseComponent<ojTableSettableProperties<K,D>> {
    accessibility: {rowHeader: string};
    as: string;
    columns: Array<{className?: string|null, field?: string|null, footerClassName?: string|null, footerRenderer?: ((context: oj.ojTable.FooterRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, footerStyle?: string|null, footerTemplate?: {componentElement: Element}, headerClassName?: string|null, headerRenderer?: ((context: oj.ojTable.HeaderRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, headerStyle?: string|null, headerTemplate?: {componentElement: Element, data: object}, headerText?: string|null, id?: string|null, renderer?: ((context: oj.ojTable.ColumnsRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, resizable?: 'enabled'|'disabled', sortProperty?: string|null, sortable?: 'auto'|'enabled'|'disabled', style?: string|null, template?: {componentElement: Element, data: object, row: object, index: number, columnIndex: number, key: any, mode: string}, width?: number|null}>|null;
    columnsDefault: {className?: string|null, field?: string|null, footerClassName?: string|null, footerRenderer?: ((context: oj.ojTable.FooterRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, footerStyle?: string|null, footerTemplate?: {componentElement: Element}, headerClassName?: string|null, headerRenderer?: ((context: oj.ojTable.HeaderRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, headerStyle?: string|null, headerTemplate?: {componentElement: Element, data: object}, headerText?: string|null, renderer?: ((context: oj.ojTable.ColumnsRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, resizable?: 'enabled'|'disabled', sortProperty?: string|null, sortable?: 'auto'|'enabled'|'disabled', style?: string|null, template?: {componentElement: Element, data: object, row: object, index: number, columnIndex: number, key: any, mode: string}, width?: number|null};
    currentRow: oj.ojTable.CurrentRow<K> | null;
    data: oj.DataProvider<K, D>;
    display: 'list'|'grid';
    dnd: {drag: {rows: {dataTypes?: string|Array<string>, dragStart?: ((param0: DragEvent, param1: oj.ojTable.DragRowContext<K,D>)=> void), drag?: ((param0: DragEvent)=> void), dragEnd?: ((param0: DragEvent)=> void)}}, drop: {columns: {dataTypes: string|Array<string>, dragEnter?: ((param0: DragEvent, param1: oj.ojTable.DropColumnContext)=> void), dragOver?: ((param0: DragEvent, param1: oj.ojTable.DropColumnContext)=> void), dragLeave?: ((param0: DragEvent, param1: oj.ojTable.DropColumnContext)=> void), drop: ((param0: DragEvent, param1: oj.ojTable.DropColumnContext)=> void)}, rows: {dataTypes: string|Array<string>, dragEnter?: ((param0: DragEvent, param1: oj.ojTable.DropRowContext)=> void), dragOver?: ((param0: DragEvent, param1: oj.ojTable.DropRowContext)=> void), dragLeave?: ((param0: DragEvent, param1: oj.ojTable.DropRowContext)=> void), drop: ((param0: DragEvent, param1: oj.ojTable.DropRowContext)=> void)}}, reorder: {columns: 'enabled'|'disabled'}};
    editMode: 'none'|'rowEdit';
    readonly firstSelectedRow: object;
    horizontalGridVisible: 'auto'|'enabled'|'disabled';
    rowRenderer: ((context: oj.ojTable.RowRendererContext<K,D>) => string | HTMLElement | void) | null;
    scrollPolicy: 'auto'|'loadMoreOnScroll';
    scrollPolicyOptions: {fetchSize: number, maxCount: number};
    scrollPosition: {x?: number, y?: number, columnIndex?: number, rowIndex?: number, columnKey?: any, rowKey?: any, offsetX?: number, offsetY?: number};
    selection: Array<oj.ojTable.RowSelectionStart<K> & oj.ojTable.RowSelectionEnd<K>> | Array<oj.ojTable.ColumnSelectionStart<K> & oj.ojTable.ColumnSelectionEnd<K>>;
    selectionMode: {column: 'single'|'multiple', row: 'single'|'multiple'};
    selectionRequired: boolean;
    verticalGridVisible: 'auto'|'enabled'|'disabled';
    translations: {labelAccSelectionAffordanceBottom?: string, labelAccSelectionAffordanceTop?: string, labelDisableNonContiguousSelection?: string, labelEditRow?: string, labelEnableNonContiguousSelection?: string, labelResize?: string, labelResizePopupSpinner?: string, labelResizePopupSubmit?: string, labelSelectAndEditRow?: string, labelSelectColum?: string, labelSelectRow?: string, labelSort?: string, labelSortAsc?: string, labelSortDsc?: string, msgColumnResizeWidthValidation?: string, msgFetchingData?: string, msgInitializing?: string, msgNoData?: string, msgScrollPolicyMaxCountDetail?: string, msgScrollPolicyMaxCountSummary?: string, msgStatusSortAscending?: string, msgStatusSortDescending?: string};
    onAccessibilityChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onColumnsChanged: (event: CustomEvent)=> any;
    onColumnsDefaultChanged: (event: CustomEvent)=> any;
    onCurrentRowChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onDisplayChanged: (event: CustomEvent)=> any;
    onDndChanged: (event: CustomEvent)=> any;
    onEditModeChanged: (event: CustomEvent)=> any;
    onFirstSelectedRowChanged: (event: CustomEvent)=> any;
    onHorizontalGridVisibleChanged: (event: CustomEvent)=> any;
    onRowRendererChanged: (event: CustomEvent)=> any;
    onScrollPolicyChanged: (event: CustomEvent)=> any;
    onScrollPolicyOptionsChanged: (event: CustomEvent)=> any;
    onScrollPositionChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onSelectionRequiredChanged: (event: CustomEvent)=> any;
    onVerticalGridVisibleChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojTable.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojTable.ojAnimateStart)=> any;
    onOjBeforeCurrentRow: (event: oj.ojTable.ojBeforeCurrentRow<K>)=> any;
    onOjBeforeRowEdit: (event: oj.ojTable.ojBeforeRowEdit)=> any;
    onOjBeforeRowEditEnd: (event: oj.ojTable.ojBeforeRowEditEnd)=> any;
    onOjSort: (event: oj.ojTable.ojSort)=> any;

    addEventListener<T extends keyof ojTableEventMap<K>>(type: T, listener: (this: HTMLElement, ev: ojTableEventMap<K>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): {subId: 'oj-table-cell', rowIndex: number, columnIndex: number, key:string} | {subId: 'oj-table-footer'|'oj-table-header',index: number};
    getDataForVisibleRow(rowIndex: number) : {data: D, index: number, key: K} | null
    refresh(): void;
    refreshRow(rowIdx: number): Promise<boolean>;
  }
  namespace ojTable {
    class ojAnimateEnd extends CustomEvent<{action: 'add'|'remove'|'update', element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: 'add'|'remove'|'update', element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojBeforeCurrentRow<K> extends CustomEvent<{currentRow: oj.ojTable.CurrentRow<K>, previousCurrentRow: oj.ojTable.CurrentRow<K>, [propName: string]: any}> {
      
    }
  
    class ojBeforeRowEdit extends CustomEvent<{rowContext: object, [propName: string]: any}> {
      
    }
  
    class ojBeforeRowEditEnd extends CustomEvent<{rowContext: object, cancelEdit: object, [propName: string]: any}> {
      
    }
  
    class ojSort extends CustomEvent<{header: Element, direction: 'ascending'|'descending', [propName: string]: any}> {
      
    }
  }
  interface ojTableEventMap<K> extends oj.baseComponentEventMap {
    'ojAnimateEnd': oj.ojTable.ojAnimateEnd;
    'ojAnimateStart': oj.ojTable.ojAnimateStart;
    'ojBeforeCurrentRow': oj.ojTable.ojBeforeCurrentRow<K>;
    'ojBeforeRowEdit': oj.ojTable.ojBeforeRowEdit;
    'ojBeforeRowEditEnd': oj.ojTable.ojBeforeRowEditEnd;
    'ojSort': oj.ojTable.ojSort;
    'accessibilityChanged': CustomEvent;
    'asChanged': CustomEvent;
    'columnsChanged': CustomEvent;
    'columnsDefaultChanged': CustomEvent;
    'currentRowChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'displayChanged': CustomEvent;
    'dndChanged': CustomEvent;
    'editModeChanged': CustomEvent;
    'firstSelectedRowChanged': CustomEvent;
    'horizontalGridVisibleChanged': CustomEvent;
    'rowRendererChanged': CustomEvent;
    'scrollPolicyChanged': CustomEvent;
    'scrollPolicyOptionsChanged': CustomEvent;
    'scrollPositionChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'selectionRequiredChanged': CustomEvent;
    'verticalGridVisibleChanged': CustomEvent;
  }
  interface ojTableSettableProperties<K,D> extends baseComponentSettableProperties {
    accessibility: {rowHeader: string};
    as: string;
    columns: Array<{className?: string|null, field?: string|null, footerClassName?: string|null, footerRenderer?: ((context: oj.ojTable.FooterRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, footerStyle?: string|null, footerTemplate?: {componentElement: Element}, headerClassName?: string|null, headerRenderer?: ((context: oj.ojTable.HeaderRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, headerStyle?: string|null, headerTemplate?: {componentElement: Element, data: object}, headerText?: string|null, id?: string|null, renderer?: ((context: oj.ojTable.ColumnsRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, resizable?: 'enabled'|'disabled', sortProperty?: string|null, sortable?: 'auto'|'enabled'|'disabled', style?: string|null, template?: {componentElement: Element, data: object, row: object, index: number, columnIndex: number, key: any, mode: string}, width?: number|null}>|null;
    columnsDefault: {className?: string|null, field?: string|null, footerClassName?: string|null, footerRenderer?: ((context: oj.ojTable.FooterRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, footerStyle?: string|null, footerTemplate?: {componentElement: Element}, headerClassName?: string|null, headerRenderer?: ((context: oj.ojTable.HeaderRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, headerStyle?: string|null, headerTemplate?: {componentElement: Element, data: object}, headerText?: string|null, renderer?: ((context: oj.ojTable.ColumnsRendererContext<K,D>) => {insert: HTMLElement | string} | void) | null, resizable?: 'enabled'|'disabled', sortProperty?: string|null, sortable?: 'auto'|'enabled'|'disabled', style?: string|null, template?: {componentElement: Element, data: object, row: object, index: number, columnIndex: number, key: any, mode: string}, width?: number|null};
    currentRow: oj.ojTable.CurrentRow<K> | null;
    data: oj.DataProvider<K, D>|null;
    display: 'list'|'grid';
    dnd: {drag: {rows: {dataTypes?: string|Array<string>, dragStart?: ((param0: DragEvent, param1: oj.ojTable.DragRowContext<K,D>)=> void), drag?: ((param0: DragEvent)=> void), dragEnd?: ((param0: DragEvent)=> void)}}, drop: {columns: {dataTypes: string|Array<string>, dragEnter?: ((param0: DragEvent, param1: oj.ojTable.DropColumnContext)=> void), dragOver?: ((param0: DragEvent, param1: oj.ojTable.DropColumnContext)=> void), dragLeave?: ((param0: DragEvent, param1: oj.ojTable.DropColumnContext)=> void), drop: ((param0: DragEvent, param1: oj.ojTable.DropColumnContext)=> void)}, rows: {dataTypes: string|Array<string>, dragEnter?: ((param0: DragEvent, param1: oj.ojTable.DropRowContext)=> void), dragOver?: ((param0: DragEvent, param1: oj.ojTable.DropRowContext)=> void), dragLeave?: ((param0: DragEvent, param1: oj.ojTable.DropRowContext)=> void), drop: ((param0: DragEvent, param1: oj.ojTable.DropRowContext)=> void)}}, reorder: {columns: 'enabled'|'disabled'}};
    editMode: 'none'|'rowEdit';
    readonly firstSelectedRow: object;
    horizontalGridVisible: 'auto'|'enabled'|'disabled';
    rowRenderer: ((context: oj.ojTable.RowRendererContext<K,D>) => string | HTMLElement | void) | null;
    scrollPolicy: 'auto'|'loadMoreOnScroll';
    scrollPolicyOptions: {fetchSize: number, maxCount: number};
    scrollPosition: {x?: number, y?: number, columnIndex?: number, rowIndex?: number, columnKey?: any, rowKey?: any, offsetX?: number, offsetY?: number};
    selection: Array<oj.ojTable.RowSelectionStart<K> & oj.ojTable.RowSelectionEnd<K>> | Array<oj.ojTable.ColumnSelectionStart<K> & oj.ojTable.ColumnSelectionEnd<K>>;
    selectionMode: {column: 'single'|'multiple', row: 'single'|'multiple'};
    selectionRequired: boolean;
    verticalGridVisible: 'auto'|'enabled'|'disabled';
    translations: {labelAccSelectionAffordanceBottom?: string, labelAccSelectionAffordanceTop?: string, labelDisableNonContiguousSelection?: string, labelEditRow?: string, labelEnableNonContiguousSelection?: string, labelResize?: string, labelResizePopupSpinner?: string, labelResizePopupSubmit?: string, labelSelectAndEditRow?: string, labelSelectColum?: string, labelSelectRow?: string, labelSort?: string, labelSortAsc?: string, labelSortDsc?: string, msgColumnResizeWidthValidation?: string, msgFetchingData?: string, msgInitializing?: string, msgNoData?: string, msgScrollPolicyMaxCountDetail?: string, msgScrollPolicyMaxCountSummary?: string, msgStatusSortAscending?: string, msgStatusSortDescending?: string}; 
  }
  namespace ojTable {
    type ColumnSelectionEnd<K> = {endIndex:{column:number},endKey?:{column:K}}|{endIndex?:{column:number}, endKey:{column:K}};
    }
  namespace ojTable {
    type ColumnSelectionStart<K> = {startIndex:{column:number}, startKey?:{column:K}}|{startIndex?:{column:number}, startKey:{column:K}};
    }
  namespace ojTable {
    type ColumnsRendererContext<K,D> =
    {
      cellContext: {datasource: oj.DataProvider<K, D>|null, mode: 'edit'|'navigation', status: oj.ojTable.ContextStatus<K>}, columnIndex: number, componentElement: Element, data: D, parentElement: Element, row: {[name: string]: any}
    }
  }
  namespace ojTable {
    type ContextStatus<K> =
    {
      rowIndex: number, rowKey: K, currentRow: oj.ojTable.CurrentRow<K>
    }
  }
  namespace ojTable {
    type CurrentRow<K> = {rowIndex: number, rowKey?: K}|{rowIndex?: number, rowKey: K};
    }
  namespace ojTable {
    type DragRowContext<K,D> =
    {
      rows: Array<{data: D, index: number, key: K}>
    }
  }
  namespace ojTable {
    type DropColumnContext =
    {
      columnIndex: number
    }
  }
  namespace ojTable {
    type DropRowContext =
    {
      rowIndex: number
    }
  }
  namespace ojTable {
    type FooterRendererContext<K,D> =
    {
      columnIndex: number, componentElement: Element, footerContext: {datasource: oj.DataProvider<K, D>|null}, parentElement: Element
    }
  }
  namespace ojTable {
    type HeaderRendererContext<K,D> =
    {
      columnIndex: number, columnHeaderDefaultRenderer: ((param0: object, param1: ((param0: object)=>void))=> void), columnHeaderSortableIconRenderer: ((param0: object, param1: ((param0: Object)=>void))=> void), componentElement: Element, data: string, headerContext: {datasource: oj.DataProvider<K, D>|null}, parentElement: Element
    }
  }
  namespace ojTable {
    type RowRendererContext<K,D> =
    {
      componentElement: Element, data: {[name: string]: any}, parentElement: Element, rowContext: {datasource: oj.DataProvider<K, D>|null, mode: 'edit'|'navigation', status: oj.ojTable.ContextStatus<K>}
    }
  }
  namespace ojTable {
    type RowSelectionEnd<K> = {endIndex: {row: number}, endKey?: {row: K}}|{endIndex?:{row: number}, endKey:{row: K}};
    }
  namespace ojTable {
    type RowSelectionStart<K> = {startIndex: {row: number}, startKey?:{row: K}}|{startIndex?: {row: number}, startKey:{row: K}};
    }

}
