import { Graph } from "graphlib";
import { read, readMany, write } from 'graphlib-dot';

// Module tests
const graph: Graph = read('digraph {node 1}');

const graphs: Graph[] = readMany('digraph { node1 }');

const dotStr: string = write(graph);
