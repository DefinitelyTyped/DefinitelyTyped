import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

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

async function testRenderOptions() {
    const container = document.createElement('div');
    const options = { container };
    render(<div />, options);
}

async function testFireEvent() {
    const { container } = render(<button />);
    fireEvent.click(container);
}
