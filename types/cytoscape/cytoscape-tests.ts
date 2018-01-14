'use strict';
import cytoscape = require('cytoscape');

const parentCSS = {
  'padding-top': '10px',
  'padding-left': '10px',
  'padding-bottom': '10px',
  'padding-right': '10px',
  'text-valign': 'top',
  'text-halign': 'center',
  'background-color': '#CCC',
  'font-size': 40,
  'min-zoomed-font-size': 15
};

const showAllStyle: cytoscape.Stylesheet[] = [
  {
    selector: 'node',
    css: {
      content: 'data(id)',
      'text-valign': 'center',
      'text-halign': 'center',
      shape: 'rectangle',
      'min-zoomed-font-size': 20,
      opacity: 1
    }
  },
  {
    selector: '$node > node',
    css: parentCSS
  },
  {
    selector: 'edge',
    css: {
      'target-arrow-shape': 'triangle'
    }
  },
  {
    selector: ':selected',
    css: {
      'background-color': 'black',
      'line-color': 'black',
      'target-arrow-color': 'black',
      'source-arrow-color': 'black'
    }
  }
];

const cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: showAllStyle,

  elements: {
    nodes: [
      { data: { id: 'a', parent: 'b' }, position: { x: 215, y: 85 } },
      { data: { id: 'b' } },
      { data: { id: 'c', parent: 'b' }, position: { x: 300, y: 85 } },
      { data: { id: 'd' }, position: { x: 215, y: 175 } },
      { data: { id: 'e' } },
      { data: { id: 'f', parent: 'e' }, position: { x: 300, y: 175 } }
    ],
    edges: [
      { data: { id: 'ad', source: 'a', target: 'd' } },
      { data: { id: 'eb', source: 'e', target: 'b' } }
    ]
  },

  layout: {
    name: 'preset',
    padding: 5
  }
});

cy.on('zoom', (event) => {
  if (cy.zoom() <= 1) {
    cy.nodes('$node > node').style('opacity', 0);
  }
});
