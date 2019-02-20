import * as React from "react";
import { Table, Cell, Column, CellProps } from "fixed-data-table";

// create your Table
class MyTable1 extends React.Component {
    render(): React.ReactElement {
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
class MyTable2 extends React.Component {
    render(): React.ReactElement {
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
    myTableData: {name: string}[];
}

class MyTable3 extends React.Component<{}, MyTable3State> {

    state = {
        myTableData: [
            {name: "Rylan"},
            {name: "Amelia"},
            {name: "Estevan"},
            {name: "Florence"},
            {name: "Tressa"},
        ]
    };

    render(): React.ReactElement {
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
    myData: RowData[];
}

class MyTextCell extends React.Component<MyCellProps> {
    render(): React.ReactElement {
        const {rowIndex, field, myData} = this.props;

        return (
                <Cell height={this.props.height}
                      width={this.props.height}
                      columnKey={this.props.columnKey}
                      rowIndex={this.props.rowIndex}
                      className="text-cell">
                    {myData[rowIndex][field]}
                </Cell>
            );
    }
}

class MyLinkCell extends React.Component<MyCellProps> {
    render(): React.ReactElement {
        const {rowIndex, field, myData} = this.props;
        const link: string = myData[rowIndex][field];

        return (
            <Cell width={this.props.width}
                  height={this.props.height}
                  rowIndex={this.props.rowIndex}
                  columnKey={this.props.columnKey}
                  className="link-cell">
                <a href={link}>{link}</a>
            </Cell>
        );
    }
}

interface MyTable4State {
    tableData: RowData[];
}

class MyTable4 extends React.Component<{}, MyTable4State> {

    state = {
        tableData: [
            {name: "Rylan", email: "Angelita_Weimann42@gmail.com"},
            {name: "Amelia", email: "Dexter.Trantow57@hotmail.com"},
            {name: "Estevan", email: "Aimee7@hotmail.com"},
            {name: "Florence", email: "Jarrod.Bernier13@yahoo.com"},
            {name: "Tressa", email: "Yadira1@hotmail.com"}
        ]
    };

    render(): React.ReactElement {
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
                                    myData={this.state.tableData}
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

// Listen for events
class MyTable5 extends React.Component {
    render(): React.ReactElement {
        return (
            <Table
                rowsCount={100}
                rowHeight={50}
                width={1000}
                height={500}
                onScrollStart={(x: number, y: number) => {}}
                onScrollEnd={(x: number, y: number) => {}}
                onContentHeightChange={(newHeight: number) => {}}
                onRowClick={(event: React.SyntheticEvent<Table>, rowIndex: number) => {}}
                onRowDoubleClick={(event: React.SyntheticEvent<Table>, rowIndex: number) => {}}
                onRowMouseDown={(event: React.SyntheticEvent<Table>, rowIndex: number) => {}}
                onRowMouseEnter={(event: React.SyntheticEvent<Table>, rowIndex: number) => {}}
                onRowMouseLeave={(event: React.SyntheticEvent<Table>, rowIndex: number) => {}}
                onColumnResizeEndCallback={(newColumnWidth: number, columnKey: string) => {}}>
                // add columns
            </Table>
        );
    }
}
