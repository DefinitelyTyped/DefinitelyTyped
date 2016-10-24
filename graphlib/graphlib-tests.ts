/// <reference path="graphlib.d.ts" />

import * as graphlib from 'graphlib';

function test_graph() {
  var g = new graphlib.Graph();
  g.setEdge('a', 'b');
  g.setEdge('a', 'b', 1.023);

  g.edge('a', 'b');
  g.edge({v: 'a', w: 'b'});

  graphlib.json.read(graphlib.json.write(g));

  graphlib.alg.dijkstra(g, 'a', e => g.edge(e));
  graphlib.alg.dijkstraAll(g, e => g.edge(e));
  graphlib.alg.dijkstraAll(g);

  graphlib.alg.findCycles(g);
  graphlib.alg.isAcyclic(g);
  graphlib.alg.prim(g, e => g.edge(e));
  graphlib.alg.tarjan(g);
  graphlib.alg.topsort(g);
}
