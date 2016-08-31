import * as d3 from 'd3';

// TODO: complete tests checking selectively that properties are re-exported from
// constituent modules
// full shape tests are contained with the resepective separate d3 module definitions

// Ability to access d3-select related properties

let selection: d3.Selection<HTMLElement, any, null, undefined> = d3.selection();
