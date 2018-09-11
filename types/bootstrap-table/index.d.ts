// Type definitions for Bootstrap Table v1.11.0
// Project: http://bootstrap-table.wenzhixin.net.cn/
// Definitions by: Talat Baig <https://github.com/talatbaig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQuery {
    bootstrapTable(options?: any): JQuery;    
    bootstrapTable(method: string, parameter?: any): JQuery;
}

declare var bootstrapTable: JQueryStatic;
