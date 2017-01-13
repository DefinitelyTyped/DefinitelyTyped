namespace DagreTests {
  const gDagre = new dagre.graphlib.Graph();
  gDagre.setGraph({})
    .setDefaultEdgeLabel(function(){ return ; })
    .setNode("a", {})
    .setEdge("b", "c")
    .setEdge("c", "d", {class: "class"});

  dagre.layout(gDagre);
}
