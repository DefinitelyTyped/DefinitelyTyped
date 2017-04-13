import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

describe('ReactDOM', () => {
    it('render', () => {
        let element = document.createElement('div');
        ReactDOM.render(<div></div>, element);
    });

    it('unmounts', () => {
        let element = document.createElement('div');
        ReactDOM.render(<div></div>, element);
        ReactDOM.unmountComponentAtNode(element);
    });

    it('find dom node', () => {
        let element = document.createElement('div');
        ReactDOM.render(<div></div>, element);
        ReactDOM.findDOMNode(element);
    });
});