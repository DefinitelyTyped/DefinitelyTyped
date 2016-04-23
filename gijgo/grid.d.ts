// Type definitions for Gijgo v0.6.2
// Project: http://gijgo.com
// Definitions by: Atanas Atanasov <https://github.com/atatanasov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DataGridPager {
    limit: number;
    sizes: Array<number>
}

interface DataGridColumn {
    title?: any;
    field?: any;
    align?: string;
    type?: string;
    icon?: string;
    tooltip?: string;
    events?: any;
    sortable?: boolean;
    width?: number;
    headerCssClass?: string;
}

interface DataGridSettings<Entity> {
    title?: string;
    dataSource?: any;
    primaryKey?: any;
    selectionType?: string;
    selectionMethod?: string;
    uiLibrary?: string;
    autoLoad?: boolean;
    pager?: DataGridPager;
    params?: any;
    notFoundText?: string;
    minWidth?: number;
    columns?: Array<DataGridColumn>;
    defaultColumnSettings?: DataGridColumn;
}

interface DataGrid<Params, Entity> extends JQuery {
    reload(params?: Params): void;
    getById(id: number): Entity;
    getAll(): Entity[];
    setSelected(id: number, value: any): void;
}

interface JQuery {
    grid<Params, Entity>(settings: DataGridSettings<Entity>): DataGrid<Params, Entity>;
    grid(settings: DataGridSettings<any>): DataGrid<any, any>;
}
