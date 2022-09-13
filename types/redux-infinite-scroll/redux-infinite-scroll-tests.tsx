import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InfiniteScoller from "redux-infinite-scroll";

class App extends React.Component {
    state = {
        numOfItems: 40,
        loadingMore: false
    };

    _createData(numOfItems = this.state.numOfItems) {
        const data: JSX.Element[] = [];
        for (let i = 0; i < numOfItems; i++) {
            data.push(
                <div key={i} className="test-item">Item #{i}</div>
            );
        }

        return data;
    }

    _loadMore() {
        console.log('loading More');
        this.setState({ loadingMore: true }, () => {
            // CB emulates an ajax request
            this.setState({
                numOfItems: this.state.numOfItems + 40,
                loadingMore: false
            });
        });
    }

    render() {
        return (
            <InfiniteScoller className="test"
                elementIsScrollable={true}
                loadMore={this._loadMore.bind(this)}
                hasMore={true}
                loadingMore={this.state.loadingMore}
                showLoader={true}
                threshold={50}
                containerHeight={400}
                items={this._createData()}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
