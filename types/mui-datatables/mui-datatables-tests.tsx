import MUIDataTable, { MUIDataTableColumn, MUIDataTableOptions, MUIDataTableTextLabels } from 'mui-datatables';
import * as React from 'react';

interface Props extends MUIDataTableOptions {
    data: any;
    title: string;
    textLabels?: MUIDataTableTextLabels;
    options?: MUIDataTableOptions;
}

const MuiCustomTable: React.FC<Props> = props => {
    const data: string[][] = props.data.map((asset: any) => Object.values(asset));
    const columns: MUIDataTableColumn[] = [
        {
            name: 'id',
            label: 'id',
        },
        {
            name: 'name',
            label: 'Name',
            options: {
                filterType: 'custom',
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
        },
    ];

    const TableOptions: MUIDataTableOptions = {
        fixedHeader: true,
        fixedSelectColumn: false,
        filterType: 'checkbox',
        responsive: 'standard',
        selectableRows: 'none',
        elevation: 0,
        rowsPerPageOptions: [5, 10, 20, 25, 50, 100],
        downloadOptions: {
            filename: 'filename.csv',
            separator: ',',
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
                    console.log('rowsPerPage', tableState.rowsPerPage);
                    break;
                case 'changePage':
                    console.log('page', tableState.page);
                    break;
                case 'sort':
                    console.log(
                        'sortOrder',
                        tableState.sortOrder,
                        tableState.sortOrder.name,
                        tableState.sortOrder.direction,
                    );
                    break;
                case 'search ':
                    console.log('searchText', tableState.searchText);
                    console.log('searchText', tableState.searchProps);
                    break;
                case 'filterChange':
                    console.log('filterChange ', tableState.filterList);
                    break;
                default:
                    console.warn('action not handled.');
            }
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

    return <MUIDataTable title={props.title} data={data} columns={columns} options={TableOptions} />;
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
