import MUIDataTable, { MUIDataTableOptions, MUIDataTableTextLabels } from 'mui-datatables';
import * as React from 'react';

interface Props extends MUIDataTableOptions {
    data: any;
    title: string;
    textLabels?: MUIDataTableTextLabels;
}

class MuiCustomTable extends React.Component<Props> {
    private readonly data: string[][] = this.props.data.map((asset: any) => Object.values(asset));
    private readonly columns = this.props.data
                                .map((entry: any) => Object.keys(entry))
                                .flat()
                                .map((title: string) => title.toUpperCase())
                                .filter((element: string, index: number, array: string[]) => array.indexOf(element) === index);
    private readonly TableOptions: MUIDataTableOptions = {
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

    render() {
        return (<MUIDataTable title={this.props.title} data={this.data} columns={this.columns} options={this.TableOptions}/>);
    }
}

const TableFruits = [
    {id: 1, name: "Apple", amount: 1},
    {id: 2, name: "Pear", amount: 2},
    {id: 3, name: "Strawberry", amount: 5},
    {id: 4, name: "Banana", amount: 7},
    {id: 5, name: "Orange", amount: 9},
];

<MuiCustomTable title="Awesome Table" data={TableFruits}/>;
