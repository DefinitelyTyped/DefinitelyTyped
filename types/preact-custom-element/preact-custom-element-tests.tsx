import { Component, FunctionalComponent, h, render } from "preact";
import register = require("preact-custom-element");

const Foo: FunctionalComponent<any> = props => {
    return <div></div>;
};

register(Foo, "my-foo");

class Bar extends Component {
    static tagName = "my-bar";
    static observedAttributes = [];
    render() {
        return <div>bar</div>;
    }
}
register(Bar);
