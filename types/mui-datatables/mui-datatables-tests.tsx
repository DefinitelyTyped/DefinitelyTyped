import MUIDataTable, { MUIDataTableOptions, MUIDataTableTextLabels, MUIDataTableState, MUIDataTableColumn } from 'mui-datatables';
import * as React from 'react';

interface Props extends MUIDataTableOptions {
    data: any;
    title: string;
    textLabels?: MUIDataTableTextLabels;
    options?: MUIDataTableOptions;
}

const MuiCustomTable: React.FC<Props> = (props) => {
    const data: string[][] = props.data.map((asset: any) => Object.values(asset));
    const columns: MUIDataTableColumn[] = [
        {
            name: 'id',
            label: 'id'
        },
        {
            name: 'name',
            label: 'Name',
            options: {
                filterType: 'custom',
                sortDirection: 'none'
            }
        },
        {
            name: 'amount',
            label: 'Amount'
        }
    ];

    const TableOptions: MUIDataTableOptions = {
        fixedHeaderOptions: {
            xAxis: false,
            yAxis: true
        },
        filterType: 'checkbox',
        responsive: 'scrollFullHeight',
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
        onTableChange: (action, tableState: MUIDataTableState) => {
            switch (action) {
                case 'sort':
                    tableState.columns.forEach(c => {
                        if (c.sort && (c.sortDirection === 'asc' || c.sortDirection === 'desc')) {
                            console.log(`${c.sortDirection} sort set on ${c.name}`);
                        }
                    });
            }
        },
        textLabels: {
            body: {
                noMatch: 'Sorry, no matching records found',
                toolTip: 'Sort',
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

    return (<MUIDataTable title={props.title} data={data} columns={columns} options={TableOptions} />);
};

const TableFruits = [
    { id: 1, name: "Apple", amount: 1 },
    { id: 2, name: "Pear", amount: 2 },
    { id: 3, name: "Strawberry", amount: 5 },
    { id: 4, name: "Banana", amount: 7 },
    { id: 5, name: "Orange", amount: 9 },
];

const options: MUIDataTableOptions = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'scrollMaxHeight',
    onDownload: (buildHead, buildBody, columns, data) => {
        if (data) {
            return buildHead(columns) + buildBody(data);
        }
        return false;
    },
};

<MuiCustomTable title="Awesome Table" data={TableFruits} options={options} />;
