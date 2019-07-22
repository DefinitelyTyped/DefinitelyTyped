import * as React from 'react';
import Pagination from 'react-js-pagination';

class ReactPagination extends React.Component<{}, {activePage: number}> {
	constructor(props: {}) {
		super(props);
		this.state = {
			activePage: 1
		};
		this.handleChange = this.handleChange.bind(this);
		this.makePageUrl = this.makePageUrl.bind(this);
	}
	handleChange(pageNumber: number) {
		this.setState({
			activePage: pageNumber
		});
	}
	makePageUrl(pageNumber: number) {
		return `#;page=${pageNumber}`;
	}
	render() {
        return (
            <Pagination activePage={this.state.activePage} onChange={this.handleChange}
                totalItemsCount={100} getPageUrl={this.makePageUrl}
            />
        );
    }
}
