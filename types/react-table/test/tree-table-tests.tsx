import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ReactTable, { Column } from 'react-table';
import treeTableHOC from 'react-table/lib/hoc/treeTable';

const SelectTable = treeTableHOC(ReactTable);

const data = [{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }];

const columns: Column[] = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' }
];

ReactDOM.render(
    <SelectTable data={data} columns={columns} />,
    document.getElementById('root')
);
