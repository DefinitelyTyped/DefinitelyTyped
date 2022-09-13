import cytoscape = require('cytoscape');
import cxtmenu = require('cytoscape-cxtmenu');

cytoscape.use(cxtmenu);

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

const nodeMenu = cy.cxtmenu({
    selector: 'node',
    menuRadius: 10,
    commands: [
        {
            fillColor: 'rgba(255, 200, 250, 1)',
            content: 'A',
            contentStyle: { borderRadius: '10px', border: '1px solid black', backgroundColor: 'lime' },
            select: element => console.log(`Definitely Node ${element.id()}`),
            enabled: true,
        },
        {
            fillColor: 'lime',
            content: 'B',
            contentStyle: {
                borderRadius: '10px',
                border: '1px solid black',
                backgroundColor: 'rgb(255, 200, 250)',
            },
            enabled: false,
        },
    ],
    fillColor: 'yellow',
    activeFillColor: 'rgba(255, 255, 255, 0.1)',
    activePadding: 25,
    indicatorSize: 0,
    separatorWidth: 5,
    spotlightPadding: 6,
    adaptativeNodeSpotlightRadius: true,
    itemColor: 'black',
});

console.log(nodeMenu);

cy.cxtmenu({
    selector: 'edge',
    commands: [
        {
            content: 'A',
            select: element => console.log(`Definitely Edge ${element.id()}`),
            enabled: false,
        },
        {
            content: 'B',
            select: element => console.log(`Definitely Edge ${element.id()}`),
        },
    ],
    itemTextShadowColor: 'black',
    minSpotlightRadius: 15,
    maxSpotlightRadius: 45,
    zIndex: 5000,
    atMouse: true,
    outsideMenuCancel: 5,
});
