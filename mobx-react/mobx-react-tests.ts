/// <reference path="./mobx-react.d.ts"/>
/// <reference path="../react/react-global.d.ts" />

import {observer} from 'mobx-react';

{
    let c1 = observer(React.createClass({
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
    ReactDOM.render(c1Factory({
        test: "hello"
    }), null);
}

@observer
class TestComponent extends React.Component<{ test: string },{}> {
    render() {
        return React.createElement("div");
    }
}

{
    let c2Factory = React.createFactory(TestComponent);
    ReactDOM.render(c2Factory({
        test: "hello" 
    }) , null);
}

{
    var c3 = observer((props: { test: string }) => React.createElement("div"));
    var c3Factory = React.createFactory(c3); //without JSX
    ReactDOM.render(c3Factory({
        test: "hello"
    }), null);
}


class TestComponent2 extends React.Component<{ test: string },{}> {
    render() {
        return React.createElement("div");
    }
}
{
    // Does not work properly in typescript 1.6.2 without cast :'(
    // Argument of type 'typeof TestComponent2 | void' is not assignable to parameter of type 'ComponentClass<{ test: string; }>'.
    // Type 'void' is not assignable to type 'ComponentClass<{ test: string; }>'.
    let c4Factory = React.createFactory(<React.ClassicComponentClass<{test:string}>><any> observer(TestComponent2));
    ReactDOM.render(c4Factory({
        test: "hello" 
    }) , null);
}
