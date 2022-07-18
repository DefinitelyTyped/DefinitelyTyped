import cytoscape = require('cytoscape');
import navigator = require('cytoscape-navigator');

cytoscape.use(navigator);

const cy = cytoscape({
    container: document.getElementById('cy'),
    layout: { name: 'breadthfirst' },
    elements: [
        { data: { id: 'A' } },
        { data: { id: 'B' } },
    ],
});

cy.navigator().destroy();

// $ExpectType NavigatorInstance
cy.navigator({
    container: "#navigator",
    viewLiveFramerate: 60,
    dblClickDelay: 400,
    removeCustomContainer: false,
    rerenderDelay: 1000
});
