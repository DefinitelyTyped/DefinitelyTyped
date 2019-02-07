import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableOptions } from 'mui-datatables';
import * as React from 'react';

const dataSimple: string[][] = [
    ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
    ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
    ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX']
];

const columnWithOptions: MUIDataTableColumnDef[] = [
    {
        name: 'Name',
        options: {
            display: 'true',
            filter: true,
            sort: true,
            sortDirection: 'asc',
            download: true,
        }
    }
];

const options: MUIDataTableOptions = {
    filterType: 'checkbox',
    responsive: 'scroll',
    selectableRows: false,
    elevation: 0,
    rowsPerPageOptions: [5, 10, 20, 25, 50, 100],
    downloadOptions: {
        filename: 'filename.csv',
        separator: ','
    },
    sortFilterList: false,
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
        }
    }
};

class MuiDataTable extends React.Component {
    render() {
        return (
            <MUIDataTable
                title='MUI Data Table'
                data={dataSimple}
                columns={columnWithOptions}
                options={options}
            />
        );
    }
}

<MuiDataTable/>;
