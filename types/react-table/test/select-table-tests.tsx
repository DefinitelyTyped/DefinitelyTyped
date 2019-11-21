import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ReactTable, { Column } from 'react-table';
import selectTableHOC, {
    SelectTableAdditionalProps,
    SelectInputComponentProps,
    SelectAllInputComponentProps
} from 'react-table/lib/hoc/selectTable';

const SelectTable = selectTableHOC(ReactTable);

const SelectInput: React.StatelessComponent<SelectInputComponentProps> = ({
    onClick,
    id,
    checked,
    row
}) => (
    <input
        type="checkbox"
        onClick={e => onClick(id, e.shiftKey, row)}
        checked={checked}
    />
);

const SelectAllInput: React.StatelessComponent<
    SelectAllInputComponentProps
> = ({ onClick, checked }) => (
    <input type="checkbox" onClick={onClick} checked={checked} />
);

const selectTableAdditionalProps: SelectTableAdditionalProps = {
    isSelected: () => true,
    keyField: 'id',
    selectAll: true,
    selectType: 'checkbox',
    selectWidth: 50,
    toggleAll: () => null,
    toggleSelection: () => null,
    SelectInputComponent: SelectInput,
    SelectAllInputComponent: SelectAllInput
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
        ref={React.createRef()}
    />,
    document.getElementById('root')
);
