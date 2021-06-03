import MUIDataTable, { ExpandButton, MUIDataTableColumn, MUIDataTableOptions, MUIDataTableProps, MUIDataTableState } from 'mui-datatables';
import * as React from 'react';
import { createMuiTheme } from '@material-ui/core';

interface Props extends Omit<MUIDataTableProps, 'columns'> {
    columns?: MUIDataTableColumn[];
}

const MuiCustomTable: React.FC<Props> = props => {
    const data: string[][] = props.data.map((asset: any) => Object.values(asset));
    const tableRef = React.useRef<React.Component<MUIDataTableProps, MUIDataTableState> | null | undefined>();
    const columns: MUIDataTableColumn[] = [
        {
            name: 'id',
            label: 'id',
            options: {
                draggable: true,
                sortThirdClickReset: true,
            },
        },
        {
            name: 'name',
            label: 'Name',
            options: {
                filterType: 'custom',
                sortCompare: order => (val1, val2) => {
                    return (val1.data.length - val2.data.length) * (order === 'asc' ? 1 : -1);
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <input
                            type="text"
                            value={value}
                            name={`${tableMeta.columnData.name}-${tableMeta.rowIndex}`}
                            onChange={event => updateValue(event.target.value)}
                        />
                    );
                },
            },
        },
        {
            name: 'color',
            label: 'Color',
            options: {
                filter: true,
                customFilterListOptions: {
                    render: (value: string) => value.toUpperCase(),
                },
            },
        },
        {
            name: 'amount',
            label: 'Amount',
            options: {
                customHeadLabelRender: (options) => {
                    return <p>Some customize Header - {options.name}</p>;
                },
            },
        },
    ];

    const TableOptions: MUIDataTableOptions = {
        jumpToPage: true,
        fixedHeader: true,
        fixedSelectColumn: false,
        sortOrder: { name: 'amount', direction: 'asc' },
        filterType: 'checkbox',
        responsive: 'standard',
        selectableRows: 'none',
        elevation: 0,
        rowsPerPageOptions: [5, 10, 20, 25, 50, 100],
        downloadOptions: {
            filename: 'filename.csv',
            separator: ',',
        },
        draggableColumns: {
            enabled: true,
        },
        sortFilterList: false,
        customRowRender: (data, dataIndex, rowIndex) => {
            const [id, name, amount] = data;

            return (
                <div>
                    <span>{id}</span>
                    <span>{name}</span>
                    <span>{amount}</span>
                </div>
            );
        },
        customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
            return (
                <span>
                    Custom Selected Toolbar: {`${selectedRows.data.length} - ${JSON.stringify(displayData[0])}`}
                    <button
                        onClick={() => {
                            setSelectedRows([]);
                        }}
                    >
                        Set Selected Row to none
                    </button>
                </span>
            );
        },
        onRowsDelete: (rowsDeleted: {
            lookup: { [dataIndex: number]: boolean };
            data: Array<{ index: number; dataIndex: number }>;
        }) => {
            if (rowsDeleted.data[0].index === rowsDeleted.data[0].dataIndex && rowsDeleted.lookup[0]) {
                console.log(`Data deleted on index ${rowsDeleted.data[0].dataIndex}`);
            }
        },
        onTableChange: (action, tableState) => {
            switch (action) {
                case 'changeRowsPerPage':
                    break;
                case 'changePage':
                    break;
                case 'sort':
                    break;
                case 'search ':
                    break;
                case 'filterChange':
                    break;
                default:
                    console.warn('action not handled.');
            }
        },
        setFilterChipProps: () => {
            return {
                color: 'secondary',
                variant: 'outlined',
            };
        },
        setRowProps: (row, dataIndex, rowIndex) => {
            return {
                className: `row${dataIndex}`,
            };
        },
        textLabels: {
            body: {
                noMatch: 'Sorry, no matching records found',
                toolTip: 'Sort',
                columnHeaderTooltip: column => (column.label ? `Sort on ${column.label}` : `Sort`),
            },
            pagination: {
                next: 'Next Page',
                previous: 'Previous Page',
                rowsPerPage: 'Rows per page:',
                displayRows: 'of',
                jumpToPage: 'Go To',
            },
            toolbar: {
                search: 'Search',
                downloadCsv: 'Download CSV',
                print: 'Print',
                viewColumns: 'View Columns',
                filterTable: 'Filter Table',
            },
            filter: {
                all: 'All',
                title: 'FILTERS',
                reset: 'RESET',
            },
            viewColumns: {
                title: 'Show Columns',
                titleAria: 'Show/Hide Table Columns',
            },
            selectedRows: {
                text: 'rows(s) selected',
                delete: 'Delete',
                deleteAria: 'Delete Selected Rows',
            },
        },
    };

    return <MUIDataTable title={props.title} data={data} columns={columns} options={TableOptions} innerRef={tableRef} />;
};

const TableFruits = [
    { id: 1, name: 'Apple', color: 'Red', amount: 1 },
    { id: 2, name: 'Pear', color: 'Green', amount: 2 },
    { id: 3, name: 'Strawberry', color: 'Red', amount: 5 },
    { id: 4, name: 'Banana', color: 'Yellow', amount: 7 },
    { id: 5, name: 'Orange', color: 'Orange', amount: 9 },
];

const options: MUIDataTableOptions = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
    onDownload: (buildHead, buildBody, columns, data) => {
        if (data) {
            return buildHead(columns) + buildBody(data);
        }
        return false;
    },
};

<MuiCustomTable title="Awesome Table" data={TableFruits} options={options} />;

const Todos = [
    { id: 1, name: 'Buy apples', color: 'Red', amount: 4 },
    { id: 2, name: 'Eat apple', color: 'Green', amount: 1 },
    { id: 3, name: 'Eat some more apple', color: 'Yellow', amount: 3 },
];

const todoOptions: MUIDataTableOptions = {
    textLabels: {
        body: {
            noMatch: <p>You have no apples, go an buy some.</p>,
        },
    },
};

<MuiCustomTable title="Todo Table" data={Todos} options={todoOptions} />;

const customComponents: MUIDataTableProps['components'] = {
    ExpandButton: ({ dataIndex }) => (dataIndex === 1 ? <>expand button</> : null),
    TableFooter: props => <>table footer</>,
};

<MuiCustomTable title="Todo Table" data={Todos} options={todoOptions} components={customComponents} />;

const disabledOptions: MUIDataTableOptions = {
    print: 'true',
    search: false,
    viewColumns: 'disabled',
    filter: true,
};

<MuiCustomTable title="Disabled Buttons" data={Todos} options={disabledOptions} />;

const MuiTheme = createMuiTheme({
    overrides: {
        MUIDataTable: {
            root: {
                fontWeight: 300
            }
        },
        MUIDataTableBody: {
            emptyTitle: {}
        }
    }
});
