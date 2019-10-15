import { queries, isInaccessible } from '@testing-library/dom';

const { getByText, queryByText, findByText, getAllByText, queryAllByText, findAllByText, queryByRole } = queries;

async function testQueries() {
    const element = document.createElement('div');
    getByText(element, 'foo');
    queryByText(element, 'foo');
    await findByText(element, 'foo');
    getAllByText(element, 'bar');
    queryAllByText(element, 'bar');
    await findAllByText(element, 'bar');
}

function testByRole() {
    const element = document.createElement('button');
    element.setAttribute('aria-hidden', 'true');

    console.assert(queryByRole(element, 'button') === null);
    console.assert(queryByRole(element, 'button', { hidden: true }) !== null);
}

function testA11yHelper() {
    const element = document.createElement('svg');
    console.assert(!isInaccessible(element));
}
