import * as React from 'react';
import Infinite = require('react-infinite');

class Test1 extends React.Component {
    render() {
        return (
            <Infinite containerHeight={200} elementHeight={40}>
                <div className="one"/>
                <div className="two"/>
                <div className="three"/>
            </Infinite>
        );
    }
}

class Test2 extends React.Component {
    render() {
        return (
            <Infinite containerHeight={200} elementHeight={[111, 252, 143]}>
                <div className="111-px"/>
                <div className="252-px"/>
                <div className="143-px"/>
            </Infinite>
        );
    }
}

class Test3 extends React.Component {
    render() {
        return (
            <Infinite containerHeight={200} elementHeight={[111, 252, 143]}
                      useWindowAsScrollContainer>
                <div className="111-px"/>
                <div className="252-px"/>
                <div className="143-px"/>
            </Infinite>
        );
    }
}

class Test4 extends React.Component {
    render() {
        return (
            <Infinite containerHeight={200} elementHeight={[111, 252, 143]}
                    displayBottomUpwards>
                <div className="third-latest-chat"/>
                <div className="second-latest-chat"/>
                <div className="latest-chat-message"/>
            </Infinite>
        );
    }
}

var ListItem = React.createClass<{key: number; num: number;}, {}>({
    render: function() {
        return <div className="infinite-list-item">
        List Item {this.props.num}
        </div>;
    }
});

var InfiniteList = React.createClass({
    getInitialState: function() {
        return {
            elements: this.buildElements(0, 20),
            isInfiniteLoading: false
        }
    },

    buildElements: function(start: number, end: number) {
        var elements = [] as React.ReactElement<any>[];
        for (var i = start; i < end; i++) {
            elements.push(<ListItem key={i} num={i}/>)
        }
        return elements;
    },

    handleInfiniteLoad: function() {
        var that = this;
        this.setState({
            isInfiniteLoading: true
        });
        setTimeout(function() {
            var elemLength = that.state.elements.length,
                newElements = that.buildElements(elemLength, elemLength + 1000);
            that.setState({
                isInfiniteLoading: false,
                elements: that.state.elements.concat(newElements)
            });
        }, 2500);
    },

    elementInfiniteLoad: function() {
        return <div className="infinite-list-item">
            Loading...
        </div>;
    },

    render: function() {
        return <Infinite elementHeight={40}
                         containerHeight={250}
                         infiniteLoadBeginEdgeOffset={200}
                         onInfiniteLoad={this.handleInfiniteLoad}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}
                         >
            {this.state.elements}
        </Infinite>;
    }
});
