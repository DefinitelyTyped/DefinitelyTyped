/// <reference path="./fixed-data-table-0.4.7.d.ts"" />
/// <reference path="../react/react.d.ts"/>
/// <reference path="../react/react-dom.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as FixedDataTable from "fixed-data-table";

var rows = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    // .... and more
];

function rowGetter(rowIndex: number) {
    return rows[rowIndex];
}

 var table = <FixedDataTable.Table
                rowHeight={50}
                rowGetter={rowGetter}
                rowsCount={rows.length}
                width={5000}
                height={5000}
                headerHeight={50}>
                <FixedDataTable.Column
                label="Col 1"
                width={3000}
                dataKey={0}
                />
                <FixedDataTable.Column
                label="Col 2"
                width={2000}
                dataKey={1}
                />
            </FixedDataTable.Table>   

ReactDOM.render(table, document.body);
