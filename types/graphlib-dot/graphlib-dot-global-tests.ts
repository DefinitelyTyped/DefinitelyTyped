import { Graph } from "graphlib";

// Global tests
const graph: Graph = graphlibDot.read('digraph {node 1}');

const graphs: Graph[] = graphlibDot.readMany('digraph { node1 }');

const dotStr: string = graphlibDot.write(graph);
