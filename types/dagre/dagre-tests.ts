const gDagre = new dagre.graphlib.Graph();
gDagre.setGraph({})
  .setDefaultEdgeLabel(() => {})
  .setNode("a", {})
  .setEdge("b", "c")
  .setEdge("c", "d", {class: "class"});

dagre.layout(gDagre);
