import * as React from 'react';
import InfiniteScroll = require('react-infinite-scroller');

class Test1 extends React.Component {
    render() {
        return (
            <InfiniteScroll
                loadMore={() => {}}
            >
                <div>Test 1</div>
            </InfiniteScroll>
        );
    }
}

class Test2 extends React.Component {
    render() {
        return (
            <InfiniteScroll
                loadMore={() => {}}
                element='section'
                hasMore
                initialLoad={false}
                isReverse
                pageStart={2}
                threshold={500}
                useCapture
                useWindow={false}
            >
                <div>Test 1</div>
            </InfiniteScroll>
        );
    }
}
