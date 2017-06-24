import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

class Test1 extends React.Component {
    public render() {
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
    public render() {
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
