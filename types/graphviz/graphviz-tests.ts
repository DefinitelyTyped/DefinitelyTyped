import graphviz = require("graphviz");

// Create digraph G
const g: graphviz.Graph = graphviz.digraph("G");

// Add node (ID: Hello)
const n1: graphviz.Node = g.addNode("Hello", { color: "blue" });
n1.set("style", "filled");

// @ts-expect-error
const getAttributeError: graphviz.PossibleValue = n1.get("foo");

const attribute: graphviz.PossibleValue | undefined = n1.get("foo");

// Add node (ID: World)
g.addNode("World");

// @ts-expect-error
const getNodeError: graphviz.Node = g.getNode("Hello");

const g_h: graphviz.Node | undefined = g.getNode("Hello");
g_h?.set("shape", "star");

// Add edge between the two nodes
const e: graphviz.Edge = g.addEdge(n1, "World");
e.set("color", "red");

// Add subgraph.
const subgraph1: graphviz.Graph = g.addCluster("subgraph1");

// @ts-expect-error
const getSubgraphError: graphviz.Graph = g.getCluster("subgraph2");

const subgraph2: graphviz.Graph | undefined = g.getCluster("subgraph2");

// Print the dot script
console.log(g.to_dot());

// Set GraphViz path (if not in your path)
g.setGraphVizPath("/usr/local/bin");

// Generate a PNG output
g.output("png", "test01.png");

g.output({ type: "pdf", use: "circo" }, "test02.pdf");
