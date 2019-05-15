import MUIDataTable, { MUIDataTableOptions, MUIDataTableTextLabels } from 'mui-datatables';
import * as React from 'react';

interface Props extends MUIDataTableOptions {
    data: any;
    title: string;
    textLabels?: MUIDataTableTextLabels;
}

const MuiCustomTable: React.FC<Props> = (props) => {
    const data: string[][] = props.data.map((asset: any) => Object.values(asset));
    const columns = props.data
                        .map((entry: any) => Object.keys(entry))
                        .flat()
                        .map((title: string) => title.toUpperCase())
                        .filter((element: string, index: number, array: string[]) => array.indexOf(element) === index);
    const TableOptions: MUIDataTableOptions = {
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
        customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
            return (
                <span>
                    Custom Selected Toolbar:{' '}
                    {`${selectedRows.data.length} - ${JSON.stringify(displayData[0])}`}
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

    return (<MUIDataTable title={props.title} data={data} columns={columns} options={TableOptions}/>);
};

const TableFruits = [
    {id: 1, name: "Apple", amount: 1},
    {id: 2, name: "Pear", amount: 2},
    {id: 3, name: "Strawberry", amount: 5},
    {id: 4, name: "Banana", amount: 7},
    {id: 5, name: "Orange", amount: 9},
];

<MuiCustomTable title="Awesome Table" data={TableFruits}/>;
