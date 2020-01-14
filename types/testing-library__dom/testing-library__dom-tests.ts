import { queries, screen, isInaccessible } from '@testing-library/dom';

const { getByText, queryByText, findByText, getAllByText, queryAllByText, findAllByText, queryByRole, findByRole } = queries;

async function testQueries() {
    // element queries
    const element = document.createElement('div');
    getByText(element, 'foo');
    queryByText(element, 'foo');
    await findByText(element, 'foo');
    await findByText(element, 'foo', undefined, { timeout: 10 });
    getAllByText(element, 'bar');
    queryAllByText(element, 'bar');
    await findAllByText(element, 'bar');
    await findAllByText(element, 'bar', undefined, { timeout: 10 });

    // screen queries
    screen.getByText('foo');
    screen.queryByText('foo');
    await screen.findByText('foo');
    await screen.findByText('foo', undefined, { timeout: 10 });
    screen.getAllByText('bar');
    screen.queryAllByText('bar');
    await screen.findAllByText('bar');
    await screen.findAllByText('bar', undefined, { timeout: 10 });
}

async function testByRole() {
    const element = document.createElement('button');
    element.setAttribute('aria-hidden', 'true');

    console.assert(queryByRole(element, 'button') === null);
    console.assert(queryByRole(element, 'button', { hidden: true }) !== null);

    console.assert(screen.queryByRole('button') === null);
    console.assert(screen.queryByRole('button', { hidden: true }) !== null);

    console.assert(await findByRole(element, 'button', undefined, { timeout: 10 }) === null);
    console.assert(await findByRole(element, 'button', { hidden: true }, { timeout: 10 }) !== null);
}

function testA11yHelper() {
    const element = document.createElement('svg');
    console.assert(!isInaccessible(element));
}
