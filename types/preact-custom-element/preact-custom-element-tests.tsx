import { Component, FunctionalComponent, h, render } from "preact";
import register = require("preact-custom-element");

const Foo = (props: any) => {
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

class FooBar extends Component {
    static tagName = "my-foo-bar";
    static observedAttributes = [];
    render() {
        return <div>foo bar</div>;
    }
}
register(FooBar, "my-foo-bar", [], { shadow: true, mode: "closed" });
