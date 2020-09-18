import { h, render, Component, FunctionalComponent } from 'preact';
import register from 'preact-custom-element';

const Foo: FunctionalComponent<any> = props => {
    return <div></div>;
};

register(Foo, 'my-foo');
