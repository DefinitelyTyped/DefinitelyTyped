import * as React from "react";
import * as ReactDOM from "react-dom";
import { TableFilter } from "react-table-filter";

interface TestTableFilterProps extends TablefilterProps {}

class TestApp extends React.Component {
    onFilterUpdate = (index: number, last: number, event: Event) => {
        console.log("selected tab: " + index.toString());
        console.log("last tab: " + last.toString());
    }

    render() {
        return React.createElement(TableFilter, {onFilterUpdate: this.onFilterUpdate});
    }
}

ReactDOM.render(React.createElement(TestApp, {}), document.getElementById("test-app"));