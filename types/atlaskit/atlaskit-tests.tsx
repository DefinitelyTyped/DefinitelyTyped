import { createElement, ReactElement } from "react";
import * as React from "react";

import DynamicTable, {
    DynamicTableStateless,
    DynamicTableStatelessProps,
    RowCell
} from "@atlaskit/dynamic-table";

const element = <div>Some Element</div>;
const rowCell: RowCell = {
    key: "some-key",
    content: element
};
const props: DynamicTableStatelessProps = {
    caption: element,
    head: {
        cells: [
            {
                ...rowCell,
                isSortable: true,
                width: 123,
                shouldTruncate: false
            }
        ]
    },
    rows: [
        {
            cells: [rowCell]
        }
    ],
    emptyView: element,
    loadingSpinnerSize: "large",
    isLoading: true,
    isFixedSize: false,
    rowsPerPage: 123,
    onSetPage: page => {},
    onSort: ({ key, item, sortOrder }) => {},
    page: 123,
    sortKey: "some-sort-key",
    sortOrder: "DESC"
};

function testDynamicTableStateless() {
    return <DynamicTableStateless {...props} />;
}

function testDynamicTable() {
    return (
        <DynamicTable
            defaultPage={0}
            defaultSortKey="some-sort-key"
            defaultSortOrder="ASC"
            {...props}
        />
    );
}
