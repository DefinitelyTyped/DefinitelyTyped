// Global tests
const graph = graphlibDot.read('digraph {node 1}');

const graphs = graphlibDot.readMany('digraph { node1 }');

const dotStr = graphlibDot.write(graph);
