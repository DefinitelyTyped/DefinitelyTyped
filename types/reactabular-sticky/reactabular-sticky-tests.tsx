import * as React from "react";
import * as Sticky from "reactabular-sticky";
import * as Table from "reactabular-table";

export interface Props {
    columns: Table.Column[];
    rows: any[];
}

class ReactabularStickyTestComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    renderers: Table.Renderers = {
        header: {
            cell: undefined,
        },
        body: {
            row: (props: any) => <tr {...props} />,
        },
    };

    private tableHeader: HTMLElement | null;
    private tableBody: HTMLElement | null;

    render() {
        return <div>
            <Table.Provider
                columns={ this.props.columns }
                renderers={this.renderers}
            >
                <Sticky.Header
                    ref={(obj) => this.tableHeader = obj && obj.container}
                    tableBody={this.tableBody}
                />
                <Sticky.Body
                    ref={(obj) => this.tableBody = obj && obj.ref}
                    tableHeader={this.tableHeader}
                    rows={this.props.rows}
                    rowKey="id"
                />
            </Table.Provider>
        </div>;
    }
}
export default ReactabularStickyTestComponent;
