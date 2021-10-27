import cytoscape = require('cytoscape');
import popper = require('cytoscape-popper');

cytoscape.use(popper);

const cy = cytoscape({
    container: document.getElementById('cy'),
    layout: { name: 'breadthfirst' },
    elements: [
        { data: { id: 'A' } },
        { data: { id: 'B' } },
        { data: { id: 'C' } },
        { data: { source: 'A', target: 'B' } },
        { data: { source: 'A', target: 'C' } },
    ],
});

cy.nodes().forEach(node => {
    node.popper({
        content: () => {
            const div = document.createElement('div');
            div.innerText = 'DefinitelyTyped tests';
            document.body.appendChild(div);

            return div;
        },
        renderedDimensions: el => {
            return (el as cytoscape.NodeSingular).renderedBoundingBox({});
        },
        popper: {
            strategy: 'fixed',
            placement: 'bottom-end',
            modifiers: [{ enabled: true }],
        },
    });
});

cy.popper({
    content: () => {
        const div = document.createElement('div');
        div.innerText = 'DefinitelyTyped tests';
        document.body.appendChild(div);

        return div;
    },
    renderedPosition: el => {
        return { x: 50, y: 50 };
    },
});

const nodeRef = cy.nodes().first().popperRef();
console.log(nodeRef);

const coreRef = cy.popperRef();
console.log(coreRef);
