import Drawflow from "drawflow";

const element = new HTMLElement();
new Drawflow(element);

// $ExpectType string | number
new Drawflow(element).addNode("test", 1, 2, 50, 75, "class", null, "html", false);

new Drawflow(element).nodeId;

new Drawflow(element).node_selected;
