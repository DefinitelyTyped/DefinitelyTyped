/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jsdiag.d.ts" />

import Diagram = MindFusion.Diagramming.Diagram;
import DiagramNode = MindFusion.Diagramming.DiagramNode;
import DiagramLink = MindFusion.Diagramming.DiagramLink;
import ShapeNode = MindFusion.Diagramming.ShapeNode;

import Rect = MindFusion.Drawing.Rect;
import LayeredLayout = MindFusion.Graphs.LayeredLayout;

var diagram: Diagram;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = Diagram.create($("#diagram")[0]);
	diagram.setLinkHeadShapeSize(2);

	// pretend we are calling a web service
	$.get("Tutorial1.txt", onResponse);
});

function onResponse(json: string)
{
	if (json)
	{
		var graph = $.parseJSON(json);
		buildDiagram(graph);
	}
}

function buildDiagram(graph: any)
{
	var nodeMap = new Array<any>();

	// load node data
	var nodes = graph.nodes;
	nodes.forEach(function (node: any)
	{
		var diagramNode = diagram.getFactory().createShapeNode(0, 0, 18, 8);
		nodeMap[node.id] = diagramNode;
		diagramNode.setText(node.name);
		diagramNode.setBrush("LightCyan");
	});

	// load link data
	var links = graph.links;
	links.forEach(function (link: any)
	{
		diagram.getFactory().createDiagramLink(
			nodeMap[link.origin],
			nodeMap[link.target]);
	});

	// arrange the graph
	var layout = new LayeredLayout();
	layout.nodeDistance = 10;
	layout.layerDistance = 10;
	diagram.arrange(layout);
}
