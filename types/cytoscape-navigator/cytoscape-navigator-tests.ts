import cytoscape = require('cytoscape');
import navigator = require('cytoscape-navigator');

cytoscape.use(navigator);

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        { data: { id: 'A' } },
        { data: { id: 'B' } },
    ]
});

// $ExpectType Nav
const nav = cy.navigator({
    container: "#navigator",
    viewLiveFramerate: 60,
    dblClickDelay: 400,
    removeCustomContainer: false,
    rerenderDelay: 1000
});

nav.destroy();
