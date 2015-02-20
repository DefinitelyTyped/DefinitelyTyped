// Type definitions for jQuery jqgrid Plugin 1.3
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />
interface JQueryJqGridColumn {
    name: string;
    index: string;
    hidden?: boolean;
    sortable?: boolean;
    search?: boolean;
    width?: number;
    formatter?: (cellvalue, options, rowObject) => any;
}

interface IJqGridJsonReader {
    repeatitems: boolean;
    root(obj): any;
    page(obj): any;
    total(obj): number;
    records(obj: {data: any[]}): number;
}

interface JQueryJqGridOptions {
    datatype?: string;
    mtype?: string;
    autoencode?: boolean;
    pager?: string;
    rowNum?: number;
    rowList?: number[];
    colNames?: string[];
    colModel?: JQueryJqGridColumn[];
    sortname?: string;
    sortorder?: string;
    multiselect?: boolean;
    multiboxonly?: boolean;
    forceFit?: boolean;
    height?: number;
    width?: number;
    shrinkToFit?: boolean;
    url?: string;
    jsonReader?: IJqGridJsonReader;
    gridComplete?:()=>void;
}

interface JQueryJqGridStatic {
    (): JQuery;
    (gridName: string): any;
    (gridName: string, propName: string): any;
    (gridName: string, obj: any): any;
    (gridName: string, id, colname): any;
    (options: JQueryJqGridOptions): JQuery;
}

interface JQueryStatic {
    jqGrid?: JQueryJqGridStatic;
}

interface JQuery {
    jqGrid?: JQueryJqGridStatic;

    setGridParam(obj: any);
}