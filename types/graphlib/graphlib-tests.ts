
import * as graphlib from 'graphlib';

function test_graph() {
  var g = new graphlib.Graph({
    compound: true,
    directed: true,
    multigraph: true
  });
  g.setEdge('a', 'b');
  g.setEdge('a', 'b', 1.023, 'test');
  g.setEdge({ v: 'a', w: 'b', name: 'test' }, 1.023);
  g.hasEdge('a', 'b', 'test');
  g.hasEdge({ v: 'a', w: 'b', name: 'test' });
  g.removeEdge('a', 'b', 'test');
  g.removeEdge({ v: 'a', w: 'b', name: 'test' });

  g.edge('a', 'b', 'test');
  g.edge({v: 'a', w: 'b', name: 'test'});
  g.setDefaultNodeLabel({});
  g.setDefaultNodeLabel(() => 42);
  g.setDefaultEdgeLabel({});
  g.setDefaultEdgeLabel(() => 'e42');
  g.setNodes(['a', 'b', 'c'], 42);
  g.setParent('d', 'a');
  g.setParent('d');
  g.parent('d');
  g.children('a');
  g.filterNodes(v => true);
  g.setPath(['a', 'b', 'c'], 42);

  graphlib.json.read(graphlib.json.write(g));

  graphlib.alg.dijkstra(g, 'a', e => g.edge(e));
  graphlib.alg.dijkstraAll(g, e => g.edge(e));
  graphlib.alg.dijkstraAll(g);

  graphlib.alg.findCycles(g);
  graphlib.alg.isAcyclic(g);
  graphlib.alg.prim(g, e => g.edge(e));
  graphlib.alg.tarjan(g);
  graphlib.alg.topsort(g);
  graphlib.alg.preorder(g, g.nodes());
  graphlib.alg.postorder(g, g.nodes());
}
