import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

describe('ReactDOMServer', () => {
    it('renderToString', () => {
        const content: string = ReactDOMServer.renderToString(<div></div>);
    });

    it('renderToStaticMarkup', () => {
        const content: string = ReactDOMServer.renderToStaticMarkup(<div></div>);
    });
});
