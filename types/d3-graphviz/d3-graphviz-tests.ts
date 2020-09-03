import { select, BaseType } from 'd3-selection';
import * as d3Graphviz from 'd3-graphviz';

let graphviz: d3Graphviz.Graphviz<BaseType, any, BaseType, any>;

// Can get a graphviz render using extension method on d3-select
graphviz = select('test').graphviz();

// Can use graphviz method as selector
graphviz = d3Graphviz.graphviz('test');

// Can get the options
const options: d3Graphviz.GraphvizOptions = d3Graphviz.graphviz('').options();

// Can set the options
graphviz = graphviz.options(options);

// Can use selectWithoutDataPropagation
const selected = select('this').selectWithoutDataPropagation('that');
