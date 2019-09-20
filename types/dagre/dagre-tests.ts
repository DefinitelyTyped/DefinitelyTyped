const gDagre = new dagre.graphlib.Graph({compound: true, multigraph: false});
gDagre.setGraph({})
  .setDefaultEdgeLabel(() => ({}))
  .setDefaultNodeLabel(() => ({}))
  .setNode("a", {})
  .setEdge("b", "c")
  .setEdge("c", "d", {class: "class"});

dagre.layout(gDagre);

gDagre.edge({v: 'b', w: 'c'});
gDagre.hasEdge({v: 'b', w: 'c'});
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

gDagre.removeEdge('c', 'd').removeNode('d');

dagre.graphlib.json.read(dagre.graphlib.json.write(gDagre));

dagre.graphlib.alg.components(gDagre);
dagre.graphlib.alg.dijkstra(gDagre, 'a', (edge) => 5);
dagre.graphlib.alg.dijkstraAll(gDagre);
dagre.graphlib.alg.findCycles(gDagre);
dagre.graphlib.alg.floydWarchall(gDagre);
dagre.graphlib.alg.isAcyclic(gDagre);
dagre.graphlib.alg.postorder(gDagre, 'a');
dagre.graphlib.alg.preorder(gDagre, ['b', 'c']);
dagre.graphlib.alg.prim(gDagre);
dagre.graphlib.alg.tarjam(gDagre);
dagre.graphlib.alg.topsort(gDagre);
