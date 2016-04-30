// Type definitions for Gijgo v0.6.2
// Project: http://gijgo.com
// Definitions by: Atanas Atanasov <https://github.com/atatanasov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface GridPager {
    limit: number;
    sizes: Array<number>;
    leftControls?: any;
    rightControls?: any;
}

interface GridColumn {
    align?: string;
    cssClass?: string;
    decimalDigits?: number;
    editor?: any;
    events?: any;
    field?: string;
    format?: string;
    headerCssClass?: string;
    hidden?: boolean;
    icon?: string;
    minWidth?: number;
    priority?: number;
    sortable?: boolean;
    stopPropagation?: boolean;
    title?: any;
    tmpl?: string;
    tooltip?: string;
    type?: string;
    width?: number;
}

interface GridDefaultParams {
    direction?: string;
    limit?: string;
    page?: string;
    sortBy?: string;
}

interface GridMapping {
    dataField?: string;
    totalRecordsField?: string;
}

interface GridSettings<Entity> {
    //Configuration options
    autoGenerateColumns?: boolean;
    autoLoad?: boolean;
    columns?: Array<GridColumn>;
    dataSource?: any;
    defaultColumnSettings?: GridColumn;
    defaultParams?: GridDefaultParams;
    detailTemplate?: string;
    fontSize?: string;
    mapping?: string;
    minWidth?: number;
    notFoundText?: string;
    pager?: GridPager;
    primaryKey?: string;
    resizableColumns?: boolean;
    resizeCheckInterval?: number;
    responsive?: boolean;
    selectionMethod?: string;
    selectionType?: string;
    showHiddenColumnsAsDetails?: boolean;
    title?: string;
    toolbarTemplate?: string;
    uiLibrary?: string;
    width?: number;
    params?: any;

    //Events
    beforeEmptyRowInsert(e: any, $row: JQuery);
    cellDataBound(e: any, $wrapper: JQuery, id: string, column: GridColumn, record: Entity);
    cellDataChanged(e: any, $cell: JQuery, column: GridColumn, record: Entity, oldValue: any, newValue: any);
    columnHide(e: any, column: GridColumn);
    columnShow(e: any, column: GridColumn);
    dataBinding(e: any, records: Array<Entity>);
    dataBound(e: any, records: Array<Entity>, totalRecords: number);
    destroying(e: any);
    detailCollapse(e: any, detailWrapper: JQuery, record: Entity);
    detailExpand(e: any, detailWrapper: JQuery, record: Entity);
    initialized(e: any);
    pageChanging(e: any, newPage: number);
    pageSizeChange(e: any, newPage: number);
    resize(e: any, newWidth: number, oldWidth: number);
    rowDataBound(e: any, $row: JQuery, id: string, record: Entity);
    rowRemoving(e: any, $row: JQuery, id: string, record: Entity);
    rowSelect(e: any, $row: JQuery, id: string, record: Entity);
    rowUnselect(e: any, $row: JQuery, id: string, record: Entity);
}

interface Grid<Entity, Params> extends JQuery {
    addRow(record: Entity): Grid<Entity, Params>;
    clear(showNotFoundText?: boolean): Grid<Entity, Params>;
    count(): number;
    destroy(keepTableTag?: boolean, keepWrapperTag?: boolean): void; 
    //get(position: number): Entity; //TODO: rename to getByPosition to avoid conflicts with jquery.get
    getAll(): Array<Entity>;
    getById(id: string): Entity;
    getChanges(): Array<Entity>;
    getSelected(): string;
    getSelections(): Array<string>;
    hideColumn(field: string): Grid<Entity, Params>;
    makeResponsive(): void;
    reload(params?: Params): Grid<Entity, Params>;
    removeRow(id: string): Grid<Entity, Params>;
    render(response: any): Grid<Entity, Params>;
    selectAll(): Grid<Entity, Params>;   
    setSelected(id: string): Grid<Entity, Params>;
    showColumn(field: string): Grid<Entity, Params>;
    title(text: any): any;
    unSelectAll(): Grid<Entity, Params>;
    updateRow(id: string, record: Entity): Grid<Entity, Params>;
}

interface JQuery {
    grid(settings: GridSettings<any>): Grid<any, any>;
    grid<Entity>(settings: GridSettings<Entity>): Grid<Entity, any>;
    grid<Entity, Params>(settings: GridSettings<Entity>): Grid<Entity, Params>;
}
