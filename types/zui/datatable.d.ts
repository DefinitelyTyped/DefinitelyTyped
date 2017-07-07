interface Col {
    width?: number,
    text?: string,
    type?: string,
    flex?: boolean,
    colClass?: string,
    sort?: string,
    ignore?: boolean
}
interface Row {
    id?: string,
    checked?: boolean,
    cssClass?: string,
    css?: string,
    data?: Array<any>
}
interface DataTableData {
    rows: Array<Row>,
    cols: Array<Col>
}
interface AfterLoadEvent {
    data: DataTableData;
}
interface SortEvent {
    sorter: {
        index: number,
        sortUp: boolean,
    }
}
interface SizeChangeEvent {
    changes: {
        change: string,
        oldWidth: number,
        newWidth: number,
        colIndex: number,
    }
}
interface ChecksChangeEvent {
    checks: {
        checkedAll: boolean,
        checks: Array<number>
    }
}
interface DataTableOption {
    checkable?: boolean,
    checkByClickRow?: boolean,
    checkedClass?: string,
    storage?: boolean,
    sortable?: boolean,
    fixedHeader?: boolean,
    fixedHeaderOffset?: number,
    fixedLeftWidth?: string,
    fixedRightWidth?: string,
    flexHeadDrag?: boolean,
    scrollPos?: string,
    rowHover?: boolean,
    colHover?: boolean,
    fixCellHeight?: boolean,
    minColWidth?: number,
    minFixedLeftWidth?: number,
    minFixedRightWidth?: number,
    minFlexAreaWidth?: number
    selectable?: boolean | object,

    afterLoad?(event: AfterLoadEvent): void;
    ready?(): void;
    sort?(event: SortEvent): void;
    sizeChanged?(event: SizeChangeEvent): void;
    checksChanged?(event: ChecksChangeEvent): void;
}

interface DataTable {
    checks: { checkedAll: boolean, checks: Array<number> }
}

interface JQuery {
    datatable(option?: DataTableOption): JQuery;
    datatable(command: string, option?: DataTableOption): JQuery;
    datatable(command: string, data: DataTableData): JQuery;
}