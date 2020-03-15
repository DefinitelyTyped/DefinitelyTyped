import * as edgehandles from 'cytoscape-edgehandles';
import * as cytoscape from 'cytoscape';

const cy = cytoscape();
cytoscape.use(edgehandles);

const api = cy.edgehandles();
api.destroy();
