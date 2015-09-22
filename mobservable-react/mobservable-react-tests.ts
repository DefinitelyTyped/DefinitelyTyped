/// <reference path="./mobservable-react.d.ts"/>
/// <reference path="../react/react-global.d.ts" />

import {reactiveComponent} from 'mobservable-react';

{
    let c1 = reactiveComponent(React.createClass({
        getDefaultProps() {
            return {
                test: "hi"
            };
        },

        render: function() {
            return React.createElement("div");
        }
    }));

    let c1Factory = React.createFactory(c1);
    React.render(c1Factory({
        test: "hello"
    }), null);
}

@reactiveComponent
class TestComponent extends React.Component<{ test: string },{}> {
    render() {
        return React.createElement("div");
    }
}

{
    let c2Factory = React.createFactory(TestComponent);
    React.render(c2Factory({
        test: "hello" 
    }) , null);
}

{
    var c3 = reactiveComponent((props: { test: string }) => React.createElement("div"));
    var c3Factory = React.createFactory(c3); //without JSX
    React.render(c3Factory({
        test: "hello"
    }), null);
}


class TestComponent2 extends React.Component<{ test: string },{}> {
    render() {
        return React.createElement("div");
    }
}
{
    let c4Factory = React.createFactory(reactiveComponent(TestComponent2));
    React.render(c4Factory({
        test: "hello" 
    }) , null);
}