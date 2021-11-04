import graphviz = require("graphviz");

// Create digraph G
const g: graphviz.Graph = graphviz.digraph("G");

// Add node (ID: Hello)
const n1: graphviz.Node = g.addNode("Hello", { color: "blue" });
n1.set("style", "filled");

// Add node (ID: World)
g.addNode("World");

const g_h: graphviz.Node = g.getNode("Hello");
g_h.set("shape", "star");

// Add edge between the two nodes
const e: graphviz.Edge = g.addEdge(n1, "World");
e.set("color", "red");

// Print the dot script
console.log(g.to_dot());

// Set GraphViz path (if not in your path)
g.setGraphVizPath("/usr/local/bin");

// Generate a PNG output
g.output("png", "test01.png");

g.output({ type: "pdf", use: "circo" }, "test02.pdf");
