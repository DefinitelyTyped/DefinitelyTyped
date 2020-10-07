import { h, render, Component, FunctionalComponent } from 'preact';
import register = require('preact-custom-element');

const Foo: FunctionalComponent<any> = props => {
    return <div></div>;
};

register(Foo, 'my-foo');
