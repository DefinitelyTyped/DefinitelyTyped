import * as React from 'react';
import ReactDataGrid = require('react-data-grid');
import * as ReactDataGridPlugins from 'react-data-grid-addons';
import faker = require('faker');

var Editors = ReactDataGridPlugins.Editors;
var Toolbar = ReactDataGridPlugins.Toolbar;
var AutoCompleteEditor = Editors.AutoComplete;
var DropDownEditor = Editors.DropDownEditor;
var { Selectors } = ReactDataGridPlugins.Data;

class CustomFilterHeaderCell extends React.Component<any, any> {
   constructor(props: any, context: any) {
       super(props, context);

       this.state = {
           filterTerm: ""
       };
   }
   handleChange(e: any) {
       let val = e.target.value;
       this.setState({filterTerm: val});
       this.props.onChange({filterTerm: val, column: this.props.column});
   }
   render() {
       return (
           <div>
               <input type="text" value={this.state.filterTerm} onChange={(e) => this.handleChange(e)} />
           </div>
       );
   }
}

faker.locale = 'en_GB';

function createFakeRowObjectData(index:number):Object {
    return {
        id: 'id_' + index,
        avartar: faker.image.avatar(),
        county: faker.address.county(),
        email: faker.internet.email(),
        title: faker.name.prefix(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        street: faker.address.streetName(),
        zipCode: faker.address.zipCode(),
        date: faker.date.past().toLocaleDateString(),
        bs: faker.company.bs(),
        catchPhrase: faker.company.catchPhrase(),
        companyName: faker.company.companyName(),
        words: faker.lorem.words(),
        sentence: faker.lorem.sentence()
    };
}

function createRows(numberOfRows:number) {
    var rows:Object[] = [];
    for (var i = 0; i < numberOfRows; i++) {
        rows[i] = createFakeRowObjectData(i);
    }
    return rows;
}

var counties = [
    {id: 0, title: 'Bedfordshire'},
    {id: 1, title: 'Berkshire'},
    {id: 2, title: 'Buckinghamshire'},
    {id: 3, title: 'Cambridgeshire'},
    {id: 4, title: 'Cheshire'},
    {id: 5, title: 'Cornwall'},
    {id: 6, title: 'Cumbria, (Cumberland)'},
    {id: 7, title: 'Derbyshire'},
    {id: 8, title: 'Devon'},
    {id: 9, title: 'Dorset'},
    {id: 10, title: 'Durham'},
    {id: 11, title: 'Essex'},
    {id: 12, title: 'Gloucestershire'},
    {id: 13, title: 'Hampshire'},
    {id: 14, title: 'Hertfordshire'},
    {id: 15, title: 'Huntingdonshire'},
    {id: 16, title: 'Kent'},
    {id: 17, title: 'Lancashire'},
    {id: 18, title: 'Leicestershire'},
    {id: 19, title: 'Lincolnshire'},
    {id: 20, title: 'Middlesex'},
    {id: 21, title: 'Norfolk'},
    {id: 22, title: 'Northamptonshire'},
    {id: 23, title: 'Northumberland'},
    {id: 24, title: 'Nottinghamshire'},
    {id: 25, title: 'Northamptonshire'},
    {id: 26, title: 'Oxfordshire'},
    {id: 27, title: 'Northamptonshire'},
    {id: 28, title: 'Rutland'},
    {id: 29, title: 'Shropshire'},
    {id: 30, title: 'Somerset'},
    {id: 31, title: 'Staffordshire'},
    {id: 32, title: 'Suffolk'},
    {id: 33, title: 'Surrey'},
    {id: 34, title: 'Sussex'},
    {id: 35, title: 'Warwickshire'},
    {id: 36, title: 'Westmoreland'},
    {id: 37, title: 'Wiltshire'},
    {id: 38, title: 'Worcestershire'},
    {id: 39, title: 'Yorkshire'}
];

var titles = ['Dr.', 'Mr.', 'Mrs.', 'Miss', 'Ms.'];

var columns:ReactDataGrid.Column[] = [
    {
        key: 'id',
        name: 'ID',
        width: 80,
        resizable: true
    },
    {
        key: 'avartar',
        name: 'Avartar',
        width: 60,
        formatter: ReactDataGridPlugins.Formatters.ImageFormatter,
        resizable: true,
        headerRenderer: <ReactDataGridPlugins.Formatters.ImageFormatter value={faker.image.cats()}/>
    },
    {
        key: 'county',
        name: 'County',
        editor: <AutoCompleteEditor options={counties}/>,
        width: 200,
        resizable: true,
        getRowMetaData: (rowdata: any, column: ReactDataGrid.Column) => {
            return {};
        }
    },
    {
        key: 'title',
        name: 'Title',
        editor: <DropDownEditor options={titles}/>,
        width: 200,
        resizable: true,
        events: {
            onDoubleClick: function () {
                console.log("The user double clicked on title column");
            }
        }
    },
    {
        key: 'firstName',
        name: 'First Name',
        editable: true,
        width: 200,
        resizable: true
    },
    {
        key: 'lastName',
        name: 'Last Name',
        editable: true,
        width: 200,
        resizable: true
    },
    {
        key: 'email',
        name: 'Email',
        editable: true,
        width: 200,
        resizable: true
    },
    {
        key: 'street',
        name: 'Street',
        editable: true,
        width: 200,
        resizable: true
    },
    {
        key: 'zipCode',
        name: 'ZipCode',
        editable: true,
        width: 200,
        resizable: true
    },
    {
        key: 'date',
        name: 'Date',
        editable: true,
        width: 200,
        resizable: true
    },
    {
        key: 'bs',
        name: 'bs',
        editable: true,
        width: 200,
        resizable: true
    },
    {
        key: 'catchPhrase',
        name: 'Catch Phrase',
        editable: true,
        width: 200,
        resizable: true
    },
    {
        key: 'companyName',
        name: 'Company Name',
        editable: true,
        width: 200,
        resizable: true,
        filterable: true,
        filterRenderer: CustomFilterHeaderCell
    },
    {
        key: 'sentence',
        name: 'Sentence',
        editable: true,
        width: 200,
        resizable: true,
        cellClass: 'sentence-class'
    }
];

class Example extends React.Component<any, any> {
    getInitialState() {
        var fakeRows = createRows(2000);
        return {rows: fakeRows};
    }

    getColumns() {
        var clonedColumns = columns.slice();
        clonedColumns[2].events = {
            onClick: function (ev:React.SyntheticEvent<any>, args:{idx:number, rowIdx:number}) {
                var idx = args.idx;
                var rowIdx = args.rowIdx;
                this.refs.grid.openCellEditor(rowIdx, idx);
            }.bind(this)
        };

        return clonedColumns;
    }

    handleGridRowsUpdated(updatedRowData:ReactDataGrid.GridRowsUpdatedEvent) {
        var rows = this.state.rows;

        for (var i = updatedRowData.fromRow; i <= updatedRowData.toRow; i++) {
            var rowToUpdate = rows[i];
            var updatedRow = Object.assign({}, rowToUpdate, updatedRowData.updated);
            rows[i] = updatedRow;
        }

        this.setState({rows: rows});
    }

    onRowExpandToggle = ({ columnGroupName, name, shouldExpand }:ReactDataGrid.OnRowExpandToggle ) => {
        let expandedRows = Object.assign({}, this.state.expandedRows);
        expandedRows[columnGroupName] = Object.assign({}, expandedRows[columnGroupName]);
        expandedRows[columnGroupName][name] = {isExpanded: shouldExpand};
        this.setState({expandedRows: expandedRows});
    }

    onRowClick(rowIdx:number, row: Object) {
        // Do nothing, just test that it accepts an event
    }

    getRows() {
        const rows = Selectors.getRows(this.state);
        console.log(rows);
        return rows;
    }

    handleAddRow(e:any) {
        var newRow = {
            value: e.newRowIndex,
            userStory: '',
            developer: '',
            epic: ''
        };
        var rows = this.state.rows;
        rows.push(newRow);
        this.setState({rows: rows});
    }

    getRowAt(index:number) {
        this.getRows();
        if (index < 0 || index > this.getSize()) {
            return undefined;
        }
        return this.state.rows[index];
    }

    getSize() {
        return this.state.rows.length;
    }

    onRowsSelected(rows: Array<ReactDataGrid.SelectionParams>) {
        var selectedIndexes = this.state.selectedIndexes as Array<number>;

        this.setState({selectedIndexes: selectedIndexes.concat(rows.map(r => r.rowIdx))});
    }
    onRowsDeselected(rows: Array<ReactDataGrid.SelectionParams>) {
        var rowIndexes = rows.map(r => r.rowIdx);
        var selectedIndexes = this.state.selectedIndexes as Array<number>;
        this.setState({selectedIndexes: selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1 )});
    }

    render() {
        let selectedRows = ['id1', 'id2'];
        return (
            <ReactDataGrid
                ref='grid'
                enableCellSelect={true}
                enableDragAndDrop={true}
                columns={this.getColumns()}
                rowGetter={this.getRowAt}
                rowsCount={this.getSize()}
                onGridRowsUpdated={this.handleGridRowsUpdated}
                onRowExpandToggle={this.onRowExpandToggle}
                toolbar={<Toolbar onAddRow={this.handleAddRow}/>}
                enableRowSelect={true}
                rowHeight={50}
                minHeight={600}
                rowScrollTimeout={200}
                rowSelection={{
                    showCheckbox: true,
                    enableShiftSelect: true,
                    onRowsSelected: this.onRowsSelected,
                    onRowsDeselected: this.onRowsDeselected,
                    selectBy: {
                        keys: {rowKey: 'id', values: selectedRows}
                    }
                }}
                onRowClick={this.onRowClick}
            />

        );
    }
}
