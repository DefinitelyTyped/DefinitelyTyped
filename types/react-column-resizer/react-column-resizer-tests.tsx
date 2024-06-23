import * as React from "react";
import ColumnResizer from "react-column-resizer";

class TableComponent extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <ColumnResizer className="columnResizer" minWidth={0} />
                            <td>2</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td />
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

<TableComponent />;
