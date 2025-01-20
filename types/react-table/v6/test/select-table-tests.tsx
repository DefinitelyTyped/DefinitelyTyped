import * as React from "react";

import ReactTable, { Column } from "react-table";
import selectTableHOC, {
    SelectAllInputComponentProps,
    SelectInputComponentProps,
    SelectTableAdditionalProps,
} from "react-table/lib/hoc/selectTable";

const SelectTable = selectTableHOC(ReactTable);

const SelectInput: React.FunctionComponent<SelectInputComponentProps> = ({
    onClick,
    id,
    checked,
    row,
}) => (
    <input
        type="checkbox"
        onClick={e => onClick(id, e.shiftKey, row)}
        checked={checked}
    />
);

const SelectAllInput: React.FunctionComponent<
    SelectAllInputComponentProps
> = ({ onClick, checked }) => <input type="checkbox" onClick={onClick} checked={checked} />;

const selectTableAdditionalProps: SelectTableAdditionalProps = {
    isSelected: () => true,
    keyField: "id",
    selectAll: true,
    selectType: "checkbox",
    selectWidth: 50,
    toggleAll: () => null,
    toggleSelection: () => null,
    SelectInputComponent: SelectInput,
    SelectAllInputComponent: SelectAllInput,
};

const data = [{ id: 1, name: "Foo" }, { id: 2, name: "Bar" }];

const columns: Column[] = [
    { Header: "ID", accessor: "id" },
    { Header: "Name", accessor: "name" },
];

<SelectTable
    {...selectTableAdditionalProps}
    data={data}
    columns={columns}
    ref={React.createRef()}
/>;
