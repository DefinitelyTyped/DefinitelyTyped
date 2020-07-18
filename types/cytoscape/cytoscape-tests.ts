'use strict';

// TODO: document all aliases as aliases, not as duplicates!

const assert = (tag: boolean) => {};
const aliases = (...obj: Array<{}>) => {};

// definitions
function oneOf<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A | B | C | D | E;
function oneOf<A, B, C, D>(a: A, b: B, c: C, d: D): A | B | C | D;
function oneOf<A, B, C>(a: A, b: B, c: C): A | B | C;
function oneOf<A, B>(a: A, b: B): A | B;
function oneOf<T>(...array: T[]): T {
  return array[0];
}

import cytoscape = require('cytoscape');
const parentCSS = {
  'padding-top': '10px',
  'padding-left': '10px',
  'padding-bottom': '10px',
  'padding-right': '10px',
  'text-valign': 'top' as 'top',
  'text-halign': 'center' as 'center',
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
      opacity: 1,
      width: 'mapData(weight, 40, 80, 20, 60)',
      'transition-property': "opacity",
      'transition-duration': 500,
      'transition-delay': 500
    }
  },
  {
    selector: '$node > node',
    css: parentCSS
  },
  {
    selector: 'edge',
    css: {
      'target-arrow-shape': 'triangle',
      'curve-style': 'taxi',
      'source-endpoint': 'outside-to-node',
      'target-endpoint': 'outside-to-node'
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
  },
  {
    selector: 'node.lesstext',
    style: {
      label: 'data(name)',
      'text-wrap': 'ellipsis',
      'text-max-width': '200',
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

  // initial viewport state:
  zoom: 1,
  pan: { x: 0, y: 0 },

  // interaction options:
  minZoom: 1e-50,
  maxZoom: 1e50,
  zoomingEnabled: true,
  userZoomingEnabled: true,
  panningEnabled: true,
  userPanningEnabled: true,
  selectionType: 'single',
  touchTapThreshold: 8,
  desktopTapThreshold: 4,
  autolock: false,
  autoungrabify: false,

  // rendering options:
  headless: false,
  styleEnabled: true,
  hideEdgesOnViewport: false,
  hideLabelsOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.2,
  wheelSensitivity: 1,
  pixelRatio: 'auto',

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
cy.off('zoom');
// events(cy); - TODO

cy.add({ data: { id: 'g', someOtherKey: 'value' }, position: {x: 200, y: 150} });
cy.add([
  { data: { id: 'h' }, position: {x: 250, y: 100} }
]);
const nodesBeforeDelete = cy.nodes();
const edgesBeforeDelete = cy.edges();

const removed = cy.remove('#g #h');
cy.add(removed);
const diffNodes = nodesBeforeDelete.diff(cy.nodes());
const diffEdges = edgesBeforeDelete.diff(cy.edges());
assert(diffNodes.left.size() === 0 && diffNodes.right.size() === 0 && diffNodes.both.size() === cy.nodes().size());
assert(nodesBeforeDelete.same(cy.nodes()));
assert(edgesBeforeDelete.same(cy.edges()));

const gh = cy.collection().add(cy.$id('g')).union(cy.getElementById('h'));
const gh2 = cy.$('#g #h');
const gh3 = cy.nodes('#g #h');
assert(gh2.same(gh));
assert(gh3.same(gh));
assert(gh.same(removed));

assert(cy.container() === null); // headless mode!

cy.center();
cy.center(gh);
aliases(cy.center, cy.centre);

cy.fit(cy.$('#a #b #h'));

const {x1, y1, x2, y2, w, h} = cy.extent();

aliases(cy.resize, cy.invalidateDimensions);

cy.animate({
  fit: {
    padding: 10,
    eles: cy.nodes()
  },
  duration: 500
});

cy.animate({
  center: {eles: cy.nodes()[0]},
  duration: 500
});

const anim = cy.animation({
  zoom: {
    level: 1,
    position: {x: 0, y: 0}
  },
  pan: {x: 100, y: 100},
  duration: 100,
  easing: 'ease'
});
cy.stop(true, true);
anim.play();
assert(anim.playing());
anim.progress(anim.progress() + 50);
anim.time(anim.time() - 50);
anim.stop();

aliases(cy.layout, cy.createLayout, cy.makeLayout);

// Preconfigured data for layouts (as it could be passed)
const boundingBox = oneOf({x1: 0, x2: 100, y1: 0, y2: 100}, {x1: 0, w: 100, y1: 0, h: 100});
const positions = oneOf({a: {x: 100, y: 100}}, (node: cytoscape.NodeCollection): cytoscape.Position => ({x: 100, y: 100}));

// TODO: uncomment after we have the way to add layout options properties from extensions
// const layouts = [
//   cy.layout({
//     name: 'null',
//     ready: () => {},
//     stop: () => {}
//   }),
//   cy.layout({
//     name: 'random',
//     fit: true,
//     padding: 30,
//     boundingBox,
//     animate: false,
//     animationDuration: 500,
//     animationEasing: 'ease-in',
//     animateFilter: (node, i) => true,
//     transform: (node, position) => position
//   }),
//   cy.layout({
//     name: 'preset',
//     positions,
//     zoom: 1,
//     pan: {x: 100, y: 100},
//     fit: false,
//     padding: 30,
//     animate: false,
//     animationDuration: 500,
//     animationEasing: 'ease-out',
//     animateFilter: (node, i) => true,
//     transform: (node, position) => position
//   }),
//   cy.layout({
//     name: 'grid',
//     fit: true,
//     padding: 30,
//     boundingBox,
//     avoidOverlap: true,
//     avoidOverlapPadding: 10,
//     nodeDimensionsIncludeLabels: false,
//     spacingFactor: oneOf(1, undefined),
//     condense: false,
//     rows: oneOf(10, undefined),
//     cols: oneOf(10, undefined),
//     position: (node) => ({ row: 1, col: 1 }),
//     sort: (a, b) => 1,
//     animate: false,
//     animationDuration: 500,
//     animationEasing: 'ease-in-out',
//     animateFilter: (node, i) => true,
//     transform: (node, position) => position
//   }),
//   cy.layout({
//     name: 'circle',
//     fit: true,
//     padding: 30,
//     boundingBox,
//     avoidOverlap: true,
//     nodeDimensionsIncludeLabels: false,
//     spacingFactor: oneOf(1, undefined),
//     radius: oneOf(1, undefined),
//     startAngle: 3 / 2 * Math.PI,
//     sweep: oneOf(6, undefined),
//     clockwise: true,
//     sort: (a, b) => 1,
//     animate: false,
//     animationDuration: 500,
//     animationEasing: 'ease-in-sine',
//     animateFilter: (node, i) => true,
//     transform: (node, position) => position
//   }),
//   cy.layout({
//     name: 'concentric',
//     fit: true,
//     padding: 30,
//     startAngle: 3 / 2 * Math.PI,
//     sweep: oneOf(6, undefined),
//     clockwise: true,
//     equidistant: false,
//     minNodeSpacing: 10,
//     boundingBox,
//     avoidOverlap: true,
//     nodeDimensionsIncludeLabels: false,
//     height: oneOf(500, undefined),
//     width: oneOf(500, undefined),
//     spacingFactor: oneOf(1, undefined),
//     concentric: (node) => 1,
//     levelWidth: (nodes) => 1,
//     animate: false,
//     animationDuration: 500,
//     animationEasing: 'ease-out-sine',
//     animateFilter: (node, i) => true,
//     transform: (node, position) => position
//   }),
//   cy.layout({
//     name: 'breadthfirst',
//     fit: true,
//     directed: false,
//     padding: 30,
//     circle: false,
//     spacingFactor: 1.75,
//     boundingBox,
//     avoidOverlap: true,
//     nodeDimensionsIncludeLabels: false,
//     maximalAdjustments: 0,
//     animate: false,
//     animationDuration: 500,
//     animationEasing: 'ease-in-out-sine',
//     animateFilter: (node, i) => true,
//     transform: (node, position) => position
//   }),
//   cy.layout({
//     name: 'cose',
//     ready: () => {},
//     stop: () => {},
//     animate: oneOf(true, false, 'end'),
//     animationEasing: oneOf('ease-in-quad', undefined),
//     animationDuration: oneOf(500, undefined),
//     animateFilter: function ( node, i ){ return true; },
//     animationThreshold: 250,
//     refresh: 20,
//     fit: true,
//     padding: 30,
//     boundingBox: undefined,
//     nodeDimensionsIncludeLabels: false,
//     randomize: false,
//     componentSpacing: 40,
//     nodeRepulsion: (node) => 2048,
//     nodeOverlap: 4,
//     idealEdgeLength: (edge) => 32,
//     edgeElasticity: (edge) => 32,
//     nestingFactor: 1.2,
//     gravity: 1,
//     numIter: 1000,
//     initialTemp: 1000,
//     coolingFactor: 0.99,
//     minTemp: 1.0,
//     weaver: false
//   })
// ];
// const lay = layouts[0];
// aliases(lay.run, lay.start);
// events(lay);
// layouts.map(layout => {
//   layout.run();
//   layout.stop();
// });

cy.style(cy.style());
cy.style([cy.style()]);

// $ExpectType string
cy.png({
  output: oneOf('base64uri', 'base64', undefined),
  bg: oneOf('#ffffff', undefined),
  full: true,
  scale: 2,
  maxWidth: 100,
  maxHeight: 100
});
// $ExpectType Blob
cy.png({
  output: 'blob',
  bg: oneOf('#ffffff', undefined),
  full: true,
  scale: 2,
  maxWidth: 100,
  maxHeight: 100
});

aliases(cy.jpg, cy.jpeg);
// $ExpectType string
cy.jpg({
  output: oneOf('base64uri', 'base64', undefined),
  bg: oneOf('#ffffff', undefined),
  full: true,
  scale: 2,
  maxWidth: 100,
  maxHeight: 100,
  quality: 0.5
});
// $ExpectType Blob
cy.jpg({
  output: 'blob',
  bg: oneOf('#ffffff', undefined),
  full: true,
  scale: 2,
  maxWidth: 100,
  maxHeight: 100,
  quality: 0.5
});

cy.json(cy.json());

// Types possible to call methods
const ele = oneOf(cy.nodes()[0], cy.edges()[0]);
const eles = cy.elements();
const node = cy.nodes()[0];
const nodes = cy.nodes();
const edge = cy.edges()[0];
const edges = cy.edges();

assert(ele.cy() === cy);
eles.remove();
assert(eles.removed());
assert(!eles.inside());
eles.restore();

([ele, eles, node, nodes, edge, edges] as [
  cytoscape.SingularElementReturnValue,
  cytoscape.CollectionReturnValue,
  cytoscape.NodeSingular,
  cytoscape.NodeCollection,
  cytoscape.EdgeSingular,
  cytoscape.EdgeCollection
]).forEach((elemType) => {
  aliases(elemType.clone, elemType.copy);
  // events(elemType); - TODO
  aliases(elemType.removeData, elemType.removeAttr);
});
([ele, node, edge] as [
  cytoscape.SingularElementReturnValue,
  cytoscape.NodeSingular,
  cytoscape.EdgeSingular
]).forEach((elemType) => {
  aliases(elemType.data, elemType.attr);
});
// TODO: tests for data flow

const loops = oneOf(true, false);
node.degree(loops); node.indegree(loops); node.outdegree(loops);
nodes.totalDegree(loops); nodes.minDegree(loops); nodes.maxDegree(loops);
nodes.minIndegree(loops); nodes.maxIndegree(loops); nodes.minOutdegree(loops); nodes.maxOutdegree(loops);

// tslint:disable-next-line:ban-types
const getsetPos = <T extends Function>(func: T): T => {
  func('x', func('x'));
  func(func());
  func({x: 100, y: 100});
  return func;
};

aliases(node.modelPosition, node.point, node.position);
getsetPos(node.position);

nodes.shift('x', 100);
nodes.shift({x: -100, y: 0});

aliases(nodes.modelPositions, nodes.positions, nodes.points);
nodes.positions((node, i) => Object.assign(node.position(), {x: node.position('x') + i}));

aliases(node.renderedPosition, node.renderedPoint);
getsetPos(node.renderedPoint);

// TODO: tests for compound nodes (relativePosition, in particular)

const sizes: number[] = [
  ele.width(), ele.outerWidth(), ele.renderedWidth(), ele.renderedOuterWidth(),
  ele.height(), ele.outerHeight(), ele.renderedHeight(), ele.renderedOuterHeight()
];

aliases(eles.boundingBox, eles.boundingbox);
aliases(eles.renderedBoundingBox, eles.renderedBoundingbox);

const flags: boolean[] = [
  node.grabbed(), node.grabbable(), node.locked(), ele.active(),
];
nodes.lock(); node.lock();
nodes.unlock(); node.unlock();

const edgePoints: cytoscape.Position[] = [
  ...edge.controlPoints(), ...edge.segmentPoints(), edge.sourceEndpoint(), edge.targetEndpoint(), edge.midpoint()
];

aliases(eles.layout, eles.createLayout, eles.makeLayout);
const layout = eles.layout({name: 'random'}).run();

layout.on('layoutstop', () => {
  cy.fit();
});
layout.on('layoutstop', {}, (obj) => {
  console.log(obj);
});

eles.select();
assert(ele.selected()); // as we selected all, and this too
aliases(eles.unselect, eles.deselect);
eles.selectify();
assert(ele.selectable());
eles.unselectify();

eles.addClass('test');
eles.toggleClass('test', oneOf(true, false, undefined));
eles.removeClass('test');
eles.classes(['lesstext']);
eles.classes(oneOf('test', undefined));
eles.flashClass('test flash', oneOf(1000, undefined));
assert(ele.hasClass('test'));

eles.style('background-color', 'green');
Object.keys(eles.style()).map(key => eles.style(key));
eles.style(eles.style());
aliases(eles.style, eles.css);
aliases(ele.renderedCss, ele.renderedStyle);

nodes.forEach((child) => {
  child.animate({
    position: node.position(),
    duration: 300,
    complete: () => {
      console.log(child.id());
    }
  });
});

// position is not required for an animation
nodes.forEach((child) => {
  child.animate({
    style: {
      backgroundColor: '#f185dc',
      width: '30px',
      height: '30px'
    },
    duration: 300
  });
});

nodes.animate({
  renderedPosition: node.position()
}, {
  style: { backgroundColor: 'red' },
  duration: 1000,
  queue: true,
  complete: () => console.log('end'),
  step: () => console.log('step'),
  easing: 'ease-in-out-quint'
});

eles.anySame(nodes);
aliases(eles.contains, eles.has);
aliases(eles.allAreNeighbors, eles.allAreNeighbours);
eles.is('#g');
eles.allAre('#g');
eles.some((el, i, els) => true);
eles.every((el, i, els) => true);

aliases(eles.forEach, eles.each);
const selected: cytoscape.SingularElementArgument[] = [eles.eq(0), eles.first(), eles.last()];
const collSel = cy.collection(selected);
const selectedNodes: cytoscape.NodeSingular[] = [nodes.eq(0), nodes.first(), nodes.last()];
const collNodes = cy.collection(selectedNodes);
const selectedEdges: cytoscape.EdgeSingular[] = [edges.eq(0), edges.first(), edges.last()];
eles.slice(0, -1);
eles.toArray();

aliases(eles.getElementById, eles.$id);
aliases(eles.union, eles.add, eles.or, eles.u, eles['+'], eles['|']);
aliases(eles.difference, eles.not, eles.subtract, eles.relativeComplement, eles['\\'], eles['!'], eles['-']);
aliases(eles.absoluteComplement, eles.abscomp, eles.complement);
aliases(eles.intersection, eles.intersect, eles.and, eles.n, eles['&'], eles['.']);
aliases(eles.symmetricDifference, eles.symdiff, eles.xor, eles['^'], eles['(+)'], eles['(-)']);
cy.collection([nodes[0]]).union(nodes[1]).union(eles.$id('g'));
eles.difference(collNodes).abscomp().intersection(collSel).symdiff(collNodes);
const diff = collSel.diff(collNodes);
cy.collection().merge(diff.left).merge(diff.right).merge(diff.both).unmerge(collSel).filter((ele, i, eles) => true);

nodes.map(n => n.degree(false));
edges.map(e => e.source());
eles.map(e => e.id());
eles.map(e => e.isNode() ? e.degree(false) : e.source());
eles.map(e => e.isEdge() ? e.source() : e.degree(false));

eles.sort((a, b) => a.id.length - b.id.length).map((ele, i, eles) => [i, ele]);
eles.reduce<any[]>((prev, ele, i, eles) => [...prev, [ele, i]], []).concat(['finish']);

const min = eles.min((ele, i, eles) => ele.isNode() ? ele.degree(false) : ele.source().degree(false));
min.ele.scratch('min', min.value).scratch('min').value;
const max = eles.max((ele, i, eles) => ele.isEdge() ? ele.source().degree(false) : ele.degree(false));
max.ele.scratch('max', max.value);

nodes.min(n => n.degree(false));
nodes.max(n => n.degree(false));
edges.max(n => n.source().id().length);
edges.max(n => n.source().id().length);

// directly from the doc: http://js.cytoscape.org/#eles.stop
cy.nodes().animate({
  style: { 'background-color': 'cyan' }
}, {
  duration: 5000,
  complete: () => {
    console.log('Animation complete');
  }
}).delay(100);

setTimeout(() => {
  console.log('Stopping nodes animation');
  cy.nodes().stop();
}, 2500);

// directly from the doc: http://js.cytoscape.org/#eles.breadthFirstSearch
const bfs = cy.elements().bfs({
  roots: '#e',
  visit: (v, e, u, i, depth) => {
    console.log('visit ' + v.id());

    // example of finding desired node
    if (v.data('weight') > 70) {
      return true;
    }

    // example of exiting search early
    if (v.data('weight') < 0) {
      return false;
    }
  },
  directed: false
});

const path = bfs.path; // path to found node
const found = bfs.found; // found node

// select the path
path.select();

// root || roots are both ok
cy.elements(':grabbable').bfs({ root: '#1' });
cy.elements(':grabbable').dfs({ roots: '#1' });

// TODO: traversing (need to actively check the nodes/edges distinction)
// TODO: algorithms
// Cut
cy.elements().kargerStein();
aliases(eles.hopcroftTarjanBiconnected, eles.hopcroftTarjanBiconnectedComponents);
aliases(eles.hopcroftTarjanBiconnected, eles.htb);
aliases(eles.hopcroftTarjanBiconnected, eles.htbc);
aliases(eles.tarjanStronglyConnected, eles.tarjanStronglyConnectedComponents);
aliases(eles.tarjanStronglyConnected, eles.tsc);
aliases(eles.tarjanStronglyConnected, eles.tscc);
cy.elements().htbc();
cy.elements().tsc();
// TODO: compound nodes (there aren't any in current test case)

// Check eles.boundingBox return type: https://js.cytoscape.org/#eles.boundingBox
const box1 = eles.boundingBox({});
box1.x1;
box1.x2;
box1.y1;
box1.y2;
box1.w;
box1.h;
// Check eles.renderedBoundingBox return type: https://js.cytoscape.org/#eles.renderedBoundingBox
const box2 = eles.renderedBoundingBox({});
box2.x1;
box2.x2;
box2.y1;
box2.y2;
box2.w;
box2.h;
