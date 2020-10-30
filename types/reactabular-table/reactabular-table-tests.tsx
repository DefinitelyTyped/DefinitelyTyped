import * as React from "react";
import * as Table from "reactabular-table";

export interface Props {
    columns: Table.Column[];
    rows: any[];
}

class ReactabularTableTestComponent extends React.Component<Props> {
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

    render() {
        return <div>
            <Table.Provider
                columns={this.props.columns}
                renderers={this.renderers}
            >
                <Table.Header />
                <Table.Body
                    rows={this.props.rows}
                    rowKey="id"
                />
            </Table.Provider>
        </div>;
    }
}
export default ReactabularTableTestComponent;
