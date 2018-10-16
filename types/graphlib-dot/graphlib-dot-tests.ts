import { Graph } from "graphlib";
import * as glDot from 'graphlib-dot';

const graph: Graph = glDot.read('digraph {node 1}');

const graphs: Graph[] = glDot.readMany('digraph { node1 }');

const dotStr: string = glDot.write(graph);
