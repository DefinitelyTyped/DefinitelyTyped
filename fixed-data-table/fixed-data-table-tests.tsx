/// <reference path="./fixed-data-table.d.ts"" />
/// <reference path="../react/react.d.ts"/>

import * as React from "react";
import {Table, Cell, Column, CellProps} from "fixed-data-table";

// create your Table
class MyTable1 extends React.Component<{}, {}> {
    render(): React.ReactElement<any> {
        return (
            <Table
                rowsCount={100}
                rowHeight={50}
                width={1000}
                height={500}>
                // add columns
            </Table>
        );
    }
}

// create your Columns
class MyTable2 extends React.Component<{}, {}> {
    render(): React.ReactElement<any> {
        return (
            <Table
                rowsCount={100}
                rowHeight={50}
                width={1000}
                height={500}>
                    <Column
                        cell={<Cell>Basic content</Cell>}
                        width={200}
                    />
            </Table>
        );
    }
}

// provide Custom Data
interface MyTable3State {
    myTableData: [{name: string}];
}

class MyTable3 extends React.Component<{}, MyTable3State> {

      constructor(props: {}) {
        super(props);

        this.state = {
            myTableData: [
                {name: "Rylan"},
                {name: "Amelia"},
                {name: "Estevan"},
                {name: "Florence"},
                {name: "Tressa"},
            ]
        };
    }

    render(): React.ReactElement<any> {
        return (
            <Table
                rowsCount={this.state.myTableData.length}
                rowHeight={50}
                headerHeight={50}
                width={1000}
                height={500}>
                <Column
                    header={<Cell>Name</Cell>}
                    cell={(props: CellProps) => (
                            <Cell {...props}>
                                {this.state.myTableData[props.rowIndex].name}
                            </Cell>
                        )}
          width={200}
        />
            </Table>
        );
    }
}

// Create Reusable Cells
interface RowData {
    [field: string]: string;
}

interface MyCellProps extends CellProps {
    rowIndex?: number;
    field: string;
    data: RowData[];
}

class MyTextCell extends React.Component<MyCellProps, {}> {
    render(): React.ReactElement<any> {
        const {rowIndex, field, data} = this.props;

        return (
                <Cell {...this.props}>
                    {data[rowIndex][field]}
                </Cell>
            );
    }
}

class MyLinkCell extends React.Component<MyCellProps, {}> {
    render(): React.ReactElement<any> {
        const {rowIndex, field, data} = this.props;
        const link: string = data[rowIndex][field];

        return (
            <Cell {...this.props}>
                <a href={link}>{link}</a>
            </Cell>
        );
    }
}

interface MyTable4State {
    tableData: RowData[];
}

class MyTable4 extends React.Component<{}, MyTable4State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            tableData: [
                {name: "Rylan", email: "Angelita_Weimann42@gmail.com"},
                {name: "Amelia", email: "Dexter.Trantow57@hotmail.com"},
                {name: "Estevan", email: "Aimee7@hotmail.com"},
                {name: "Florence", email: "Jarrod.Bernier13@yahoo.com"},
                {name: "Tressa", email: "Yadira1@hotmail.com"}
            ]
        };
    }

    render(): React.ReactElement<any> {
        return (
            <Table
                rowsCount={this.state.tableData.length}
                rowHeight={50}
                headerHeight={50}
                width={1000}
                height={500}>
                {
                    ["name", "email"].map(field =>
                        <Column
                            key={field}
                            header={<Cell>{field}</Cell>}
                            cell={
                                <MyTextCell
                                    data={this.state.tableData}
                                    field={field}
                                />
                            }
                            width={200}/>
                     )
                }
            </Table>
        );
    }
}
