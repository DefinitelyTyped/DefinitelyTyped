export as namespace tabulatorLib;
// TypeScript Version: 2.2

export = Tabulator;

/*~ Write your module's methods and properties in this class */
declare class Tabulator {
    constructor();
    // myMethod(opts: Tabulator.chartType): number;
    defaultShowAttribute: string;
    toMatrix(datum: object): object;
    toHtmlTable(matrix: object): any;
}
