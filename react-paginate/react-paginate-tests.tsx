import * as React from "react";
import ReactPaginate = require("react-paginate");

class Test extends React.Component<{}, {}> {
    public render() {
        return (
            <ReactPaginate
                pageCount={1}
                pageRangeDisplayed={10}
                marginPagesDisplayed={2}
            />
        );
    }
}
