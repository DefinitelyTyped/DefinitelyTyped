import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

describe('ReactDOM', () => {
    it('render', () => {
        let rootElement = document.createElement('div');
        ReactDOM.render(React.createElement('div'), rootElement);
    });

    it('unmounts', () => {
        let rootElement = document.createElement('div');
        ReactDOM.render(React.createElement('div'), rootElement);
        ReactDOM.unmountComponentAtNode(rootElement);
    });

    it('find dom node', () => {
        let rootElement = document.createElement('div');
        ReactDOM.render(React.createElement('div'), rootElement);
        ReactDOM.findDOMNode(rootElement);
    });
});