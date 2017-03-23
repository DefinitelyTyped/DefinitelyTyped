import * as React from "react";
import ReactPaginate = require("react-paginate");

class Test extends React.Component<{}, {}> {

    public onClick: Function;

    render() {
        return (
            <ReactPaginate
                pageCount={1}
                pageRangeDisplayed={10}
                marginPagesDisplayed={2}
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'break-me'}
                breakClassName={'break-class'}
                onPageChange={this.onClick}
                initialPage={2}
                forcePage={3}
                disableInitialCallback={false}
                containerClassName={'container'}
                pageClassName={'page-li'}
                pageLinkClassName={'page-a'}
                activeClassName={'active'}
                previousClassName={'previous-li'}
                nextClassName={'next-li'}
                previousLinkClassName={'previous-a'}
                nextLinkClassName={'next-a'}
                disabledClassName={'disabled'}
                hrefBuilder={this.onClick}
            />
        );
    }
}
