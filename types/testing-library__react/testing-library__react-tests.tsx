import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as pure from '@testing-library/react/pure';

async function testRender() {
    const page = render(<div />);

    // single queries
    page.getByText('foo');
    page.queryByText('foo');
    await page.findByText('foo');

    // multiple queries
    page.getAllByText('bar');
    page.queryAllByText('bar');
    await page.findAllByText('bar');

    // helpers
    const { container, rerender, debug } = page;
}

async function testPureRender() {
    const page = pure.render(<div />);

    // single queries
    page.getByText('foo');
    page.queryByText('foo');
    await page.findByText('foo');

    // multiple queries
    page.getAllByText('bar');
    page.queryAllByText('bar');
    await page.findAllByText('bar');

    // helpers
    const { container, rerender, debug } = page;
}

async function testRenderOptions() {
    const container = document.createElement('div');
    const options = { container };
    render(<div />, options);
}

async function testFireEvent() {
    const { container } = render(<button />);
    fireEvent.click(container);
}

async function testDebug() {
    const { debug, getAllByTestId } = render(
        <>
            <h2 data-testid="testid">Hello World</h2>
            <h2 data-testid="testid">Hello World</h2>
        </>,
    );
    debug(getAllByTestId('testid'));
}
