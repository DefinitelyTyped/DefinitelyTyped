import * as React from 'react';
import * as h from 'react-hyperscript';

class SomeComponent extends React.Component {
    render() {
        return React.createElement('div');
    }
}

const StatelessComponent = () => React.createElement('div');

class MainComponent extends React.Component {
    render() {
        return h('div.example', [
            h('h1#heading', 'This is hyperscript'),
            h('h2', 'creating React.js markup'),
            h(SomeComponent, {foo: 'bar'}, [
                h('li', [
                    h('a', {href: 'http://whatever.com'}, 'One list item')
                ]),
                h('li', 'Another list item')
            ]),
            h(StatelessComponent, {foo: 'bar'}, [
                h('li', [
                    h('a', {href: 'http://whatever.com'}, 'One list item')
                ]),
                h('li', 'Another list item')
            ])
        ]);
    }
}
