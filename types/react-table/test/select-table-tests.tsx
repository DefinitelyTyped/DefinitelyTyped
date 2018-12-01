import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ReactTable, { Column } from 'react-table';
import selectTableHOC, {
    SelectTableAdditionalProps
} from 'react-table/lib/hoc/selectTable';

const SelectTable = selectTableHOC(ReactTable);

const selectTableAdditionalProps: SelectTableAdditionalProps = {
    isSelected: () => true,
    keyField: 'id',
    selectAll: true,
    selectType: 'checkbox',
    toggleAll: () => null,
    toggleSelection: () => null
};

const data = [{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }];

const columns: Column[] = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' }
];

ReactDOM.render(
    <SelectTable
        {...selectTableAdditionalProps}
        data={data}
        columns={columns}
    />,
    document.getElementById('root')
);
