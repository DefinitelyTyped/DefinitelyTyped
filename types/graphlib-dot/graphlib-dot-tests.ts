import { Graph } from "graphlib";
import { read, readMany, write } from 'graphlib-dot';

// Module tests
let graph: Graph = read('digraph {node 1}');

let graphs: Graph[] = readMany('digraph { node1 }');

let dotStr: string = write(graph);

// Global tests
graph = graphlibDot.read('digraph {node 1}');

graphs = graphlibDot.readMany('digraph { node1 }');

dotStr = graphlibDot.write(graph);
