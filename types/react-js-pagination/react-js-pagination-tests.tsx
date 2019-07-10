import * as React from 'react';
import Pagination from 'react-js-pagination';

class ReactPagination extends React.Component<{}, {activePage: number}> {
	constructor(props: {}) {
		super(props);
		this.state = {
			activePage: 1
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(pageNumber: number) {
		this.setState({
			activePage: pageNumber
		});
	}
	render() {
        return (
            <Pagination activePage={this.state.activePage} onChange={this.handleChange}
                totalItemsCount={100}
            />
        );
    }
}
