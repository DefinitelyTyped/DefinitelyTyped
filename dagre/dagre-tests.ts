/// <reference path="dagre.d.ts"/>
module DagreTests {
  var gDagre = new dagre.graphlib.Graph();
  gDagre.setGraph({});
  gDagre.setDefaultEdgeLabel(function(){
    return ;
  });

  gDagre.setNode("a", {});
  gDagre.setEdge("b", "c");

  dagre.layout(gDagre);
}
