import { fireEvent, queries, screen, isInaccessible } from '@testing-library/dom';

const { getByText, queryByText, findByText, getAllByText, queryAllByText, findAllByText, queryAllByRole, queryByRole, findByRole } = queries;

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
    screen.debug(screen.getAllByText('bar'));
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

    console.assert(queryAllByRole(document.body, 'progressbar', {queryFallbacks: true}).length === 1);
}

function testA11yHelper() {
    const element = document.createElement('svg');
    console.assert(!isInaccessible(element));
}

function eventTest() {
    fireEvent.popState(window, {
        location: 'http://www.example.com/?page=1',
        state: { page: 1 },
    });

    // HTMLElement
    const element = document.createElement('div');
    fireEvent.click(getByText(element, 'foo'));

    // ChildNode
    const child = document.createElement('div');
    element.appendChild(child);
    if (!element.firstChild) { // Narrow Type
        throw new Error(`Can't find firstChild`);
    }
    fireEvent.click(element.firstChild);
}
