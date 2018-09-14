import * as React from "react";
import * as ReactDOM from "react-dom";
import { TableFilter } from "react-table-filter";

interface TestTableFilterProps extends TableFilter {}

class TestApp extends React.Component {
    onFilterUpdate = (filteredArray: string[], currentFilters: any[]) => {
        console.log("Filtered Array: " + filteredArray);
        console.log("Current Filters: " + currentFilters);
    }

    render() {
        return React.createElement(TableFilter, { onFilterUpdate: this.onFilterUpdate, rows: [] });
    }
}

ReactDOM.render(React.createElement(TestApp, {}), document.getElementById("test-app"));
