// /**
//  * Typescript definition tests for d3/d3-force module
//  * 
//  * Note: These tests are intended to test the definitions only
//  * in the sense of typing and call signature consistency. They
//  * are not intended as functional tests.
//  */

// import * as d3Select from 'd3-selection';
// import {
//     forceCenter,
//     ForceCenter,
//     forceLink,
//     ForceLink,
//     forceManyBody,
//     ForceManyBody,
//     forceSimulation,
//     Simulation,
//     SimulationLinkDatum,
//     SimulationNodeDatum
// } from 'd3-force';

// import * as d3Drag from 'd3-drag';

// interface SimNode extends SimulationNodeDatum {
//     id: string;
//     group: number;

// }

// interface SimLink extends SimulationLinkDatum<SimNode> {
//     value: number;
// }

// interface Graph {
//     nodes: Array<SimNode>;
//     links: Array<SimLink>;
// }


// let canvas = document.querySelector("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width,
//     height = canvas.height;

// let simulation = forceSimulation<SimNode, SimLink>()
//     .force("link", forceLink().id(function (d) { return d.id; }))
//     .force("charge", forceManyBody())
//     .force("center", forceCenter(width / 2, height / 2));


// let graph: Graph = {
//     nodes: [
//         { "id": "Myriel", "group": 1 },
//         { "id": "Napoleon", "group": 1 },
//         { "id": "Mlle.Baptistine", "group": 1 },
//         { "id": "Mme.Magloire", "group": 1 },
//         { "id": "CountessdeLo", "group": 1 }
//     ],
//     links: [
//         { "source": "Napoleon", "target": "Myriel", "value": 1 },
//         { "source": "Mlle.Baptistine", "target": "Myriel", "value": 8 },
//         { "source": "Mme.Magloire", "target": "Myriel", "value": 10 },
//         { "source": "Mme.Magloire", "target": "Mlle.Baptistine", "value": 6 }
//     ]
// };


// simulation
//     .nodes(graph.nodes)
//     .on("tick", function ticked() {
//         context.clearRect(0, 0, width, height);

//         context.beginPath();
//         graph.links.forEach(drawLink);
//         context.strokeStyle = "#aaa";
//         context.stroke();

//         context.beginPath();
//         graph.nodes.forEach(drawNode);
//         context.fill();
//         context.strokeStyle = "#fff";
//         context.stroke();
//     });

// (<ForceLink<SimNode, SimLink>>simulation.force("link"))
//     .links(graph.links);

// d3Select.select(canvas)
//     .call(d3Drag.drag()
//         .container(canvas)
//         .subject(dragsubject)
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended)
//     );


// function dragsubject() {
//     return simulation.find(d3Select.event.x, d3Select.event.y);
// }


// function dragstarted() {
//     if (!d3Select.event.active) simulation.alphaTarget(0.3).restart()
//     simulation.fix(d3.event.subject);
// }

// function dragged() {
//     simulation.fix(d3.event.subject, d3Select.event.x, d3Select.event.y);
// }

// function dragended() {
//     if (!d3Select.event.active) simulation.alphaTarget(0);
//     simulation.unfix(d3Select.event.subject);
// }

// function drawLink(d: SimLink) {
//     context.moveTo(d.source.x, d.source.y);
//     context.lineTo(d.target.x, d.target.y);
// }

// function drawNode(d: SimLink) {
//     context.moveTo(d.x + 3, d.y);
//     context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
// }