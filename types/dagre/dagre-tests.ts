interface ZIndex {
    z: number;
}

type Graph<T> = dagre.graphlib.Graph<T>;
const Graph = dagre.graphlib.Graph;

let gDagre: Graph<ZIndex> = new Graph<ZIndex>({ compound: true, multigraph: false });
gDagre = gDagre.setGraph({});
gDagre = gDagre.setGraph({});
gDagre = gDagre.setDefaultEdgeLabel(() => ({}));
gDagre = gDagre.setDefaultNodeLabel(() => ({}));
gDagre = gDagre.setNode('a', {});
gDagre = gDagre.setEdge('b', 'c');
gDagre = gDagre.setEdge('c', 'd', { class: 'class' });
gDagre = gDagre.setEdge({ v: '', w: '' });
gDagre = gDagre.setEdge({ v: '', w: '', name: '' }, '');
gDagre = gDagre.setEdge({ v: '', w: '', name: '' }, { '': 0 });

dagre.layout(gDagre);

gDagre.edge({ v: 'b', w: 'c' });
gDagre.hasEdge({ v: 'b', w: 'c' });
gDagre.inEdges('c');
gDagre.outEdges('c');

gDagre.setParent('a', 'b');
gDagre.children('b');
gDagre.hasNode('d');
gDagre.neighbors('c');
gDagre.node({});
gDagre.parent('a');
gDagre.predecessors('d');
gDagre.successors('b');

gDagre = gDagre.removeNode('a');
gDagre = gDagre.removeEdge('c', 'd').removeNode('d');

dagre.graphlib.json.read(dagre.graphlib.json.write(gDagre));

dagre.graphlib.alg.components(gDagre);
dagre.graphlib.alg.dijkstra(gDagre, 'a', edge => 5);
dagre.graphlib.alg.dijkstraAll(gDagre);
dagre.graphlib.alg.findCycles(gDagre);
dagre.graphlib.alg.floydWarchall(gDagre);
dagre.graphlib.alg.isAcyclic(gDagre);
dagre.graphlib.alg.postorder(gDagre, 'a');
dagre.graphlib.alg.preorder(gDagre, ['b', 'c']);
dagre.graphlib.alg.tarjam(gDagre);
dagre.graphlib.alg.topsort(gDagre);

const primGraph: Graph<ZIndex> = dagre.graphlib.alg.prim(gDagre);

const node: dagre.Node = { x: 0, y: 0, width: 0, height: 0 };
// Test optional properties of base Node:
node.class = '';
node.label = '';
node.padding = 0;
node.paddingX = 0;
node.paddingY = 0;
node.rx = 0;
node.ry = 0;
node.shape = '';
