import cytoscape = require('cytoscape');

import dagre = require('cytoscape-dagre');
cytoscape.use(dagre);

const dagreLayout: dagre.DagreLayoutOptions = {
    name: 'dagre',
    fit: true,
    nodeDimensionsIncludeLabels: true,
    nodeSep: 50,
    edgeSep: 10,
    rankSep: 50,
    rankDir: 'TB',
    ranker: 'network-simplex',
    minLen: edge => 1,
    edgeWeight: edge => 1,
    animate: true,
    animateFilter: (node, i) => true,
    transform: (node, pos) => {
        return { x: pos.x + 5, y: pos.y - 5 };
    },
};

const cy = cytoscape({
    container: document.getElementById('cy'),
    layout: dagreLayout,
    elements: [
        { data: { id: 'A' } },
        { data: { id: 'B' } },
        { data: { id: 'C' } },
        { data: { source: 'A', target: 'B' } },
        { data: { source: 'A', target: 'C' } },
    ],
});
