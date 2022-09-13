import * as React from 'react';
import InfiniteScroll = require('react-infinite-scroller');

class Test1 extends React.Component {
    render() {
        return (
            <InfiniteScroll
                loadMore={(page) => {}}
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
                loadMore={(page) => {}}
                element='section'
                hasMore
                initialLoad={false}
                isReverse
                pageStart={2}
                threshold={500}
                useCapture
                useWindow={false}
            >
                <div>Test 2</div>
            </InfiniteScroll>
        );
    }
}

class Test3 extends React.Component {
    inputRef = React.createRef<HTMLDivElement>();

    render() {
        return (
            <div ref={this.inputRef}>
                <InfiniteScroll
                  loadMore={(page) => {}}
                  getScrollParent={() => this.inputRef.current}
                >
                    <div>Test 3</div>
                </InfiniteScroll>
            </div>
        );
    }
}

const Test4Component = ({}) => <div></div>;
class Test4 extends React.Component {
    inputRef = React.createRef<HTMLDivElement>();

    render() {
        return (
            <div ref={this.inputRef}>
                <InfiniteScroll
                  element={<Test4Component />}
                  loadMore={(page) => {}}
                >
                    <span>Test 4</span>
                </InfiniteScroll>
            </div>
        );
    }
}

class InfiniteScrollOverride extends InfiniteScroll {
    getParentElement(el: HTMLElement) {
        if (document.getElementById("scroll-header")) {
            return document.getElementById("scroll-header");
        }
        return super.getParentElement(el);
    }

    render() {
        return super.render();
    }
}
