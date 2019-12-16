import { queries, screen, isInaccessible } from '@testing-library/dom';

const { getByText, queryByText, findByText, getAllByText, queryAllByText, findAllByText, queryByRole } = queries;

async function testQueries() {
    // element queries
    const element = document.createElement('div');
    getByText(element, 'foo');
    queryByText(element, 'foo');
    await findByText(element, 'foo');
    getAllByText(element, 'bar');
    queryAllByText(element, 'bar');
    await findAllByText(element, 'bar');

    // screen queries
    screen.getByText('foo');
    screen.queryByText('foo');
    await screen.findByText('foo');
    screen.getAllByText('bar');
    screen.queryAllByText('bar');
    await screen.findAllByText('bar');
}

function testByRole() {
    const element = document.createElement('button');
    element.setAttribute('aria-hidden', 'true');

    console.assert(queryByRole(element, 'button') === null);
    console.assert(queryByRole(element, 'button', { hidden: true }) !== null);

    console.assert(screen.queryByRole('button') === null);
    console.assert(screen.queryByRole('button', { hidden: true }) !== null);
}

function testA11yHelper() {
    const element = document.createElement('svg');
    console.assert(!isInaccessible(element));
}
