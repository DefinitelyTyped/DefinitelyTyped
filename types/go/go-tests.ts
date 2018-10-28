// Test file for goJS.d.ts
// This is taken and adapted from http://gojs.net/latest/samples/basic.html

/* Copyright (C) 1998-2016 by Northwoods Software Corporation. */

import go = require("go");

class CustomLink extends go.Link {
    constructor() {
        super();
        this.routing = go.Link.Orthogonal;
    }

    hasCurviness(): boolean {
        if (isNaN(this.curviness)) return true;
        return super.hasCurviness();
    }
 
    computeCurviness(): number {
        if (isNaN(this.curviness)) {
            var links = this.fromNode.findLinksTo(this.toNode);
            if (links.count < 2) return 0;
            var i = 0;
            while (links.next()) { if (links.value === this) break; i++; }
            return 10 * (i - (links.count - 1) / 2);
        }
        return super.computeCurviness();
    }
}

class CustomTreeLayout extends go.TreeLayout {
    constructor() {
        super();
        this.extraProp = 3;
    }

    extraProp: number;

    // override various methods

    cloneProtected(copy: CustomTreeLayout): void {
        super.cloneProtected(copy);
        copy.extraProp = this.extraProp;
    }

    createNetwork(): CustomTreeNetwork {
        return new CustomTreeNetwork();
    }

    assignTreeVertexValues(v: CustomTreeVertex): void {
        super.assignTreeVertexValues(v);
        v.someProp = Math.random() * 100;
    }

    commitNodes(): void {
        super.commitNodes();
        // ...
    }

    commitLinks(): void {
        super.commitLinks();
        this.network.edges.each(e => { e.link.path.strokeWidth = (<CustomTreeEdge>(e)).anotherProp; });
    }
}

class CustomTreeNetwork extends go.TreeNetwork {
    createVertex(): CustomTreeVertex {
        return new CustomTreeVertex();
    }

    createEdge(): CustomTreeEdge {
        return new CustomTreeEdge();
    }
}

class CustomTreeVertex extends go.TreeVertex {
    someProp: number = 17;
}

class CustomTreeEdge extends go.TreeEdge {
    anotherProp: number = 1;
}


function init() {
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    var myDiagram: go.Diagram =
        $(go.Diagram, "myDiagram",  // create a Diagram for the DIV HTML element
            {
                // position the graph in the middle of the diagram
                initialContentAlignment: go.Spot.Center,

                // allow double-click in background to create a new node
                "clickCreatingTool.archetypeNodeData": { text: "Node", color: "white" },

                // allow Ctrl-G to call groupSelection()
                "commandHandler.archetypeGroupData": { text: "Group", isGroup: true, color: "blue" },

                layout: $(CustomTreeLayout, { angle: 90 }),

                // enable undo & redo
                "undoManager.isEnabled": true
            });

    // Define the appearance and behavior for Nodes:

    // First, define the shared context menu for all Nodes, Links, and Groups.

    // To simplify this code we define a function for creating a context menu button:
    function makeButton(text: string, action: (e: go.InputEvent, obj: go.GraphObject) => void, visiblePredicate?: (obj: go.GraphObject) => boolean) {
        if (visiblePredicate === undefined) visiblePredicate = o => true;
        return $("ContextMenuButton",
                    $(go.TextBlock, text),
                    { click: action },
                    // don't bother with binding GraphObject.visible if there's no predicate
                    visiblePredicate ? new go.Binding("visible", "", visiblePredicate).ofObject() : {});
    }

    // a context menu is an Adornment with a bunch of buttons in them
    var partContextMenu =
        $(go.Adornment, "Vertical",
            makeButton("Properties",
                (e, obj) => {  // the OBJ is this Button
                    var contextmenu = <go.Adornment>obj.part;  // the Button is in the context menu Adornment
                    var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu adorns
                    // now can do something with PART, or with its data, or with the Adornment (the context menu)
                    if (part instanceof go.Link) alert(linkInfo(part.data));
                    else if (part instanceof go.Group) alert(groupInfo(contextmenu));
                    else alert(nodeInfo(part.data));
                }),
            makeButton("Cut",
                       (e, obj) => e.diagram.commandHandler.cutSelection(),
                       o => o.diagram.commandHandler.canCutSelection()),
            makeButton("Copy",
                       (e, obj) => e.diagram.commandHandler.copySelection(),
                       o => o.diagram.commandHandler.canCopySelection()),
            makeButton("Paste",
                       (e, obj) => e.diagram.commandHandler.pasteSelection(e.diagram.lastInput.documentPoint),
                       o => o.diagram.commandHandler.canPasteSelection()),
            makeButton("Delete",
                       (e, obj) => e.diagram.commandHandler.deleteSelection(),
                       o => o.diagram.commandHandler.canDeleteSelection()),
            makeButton("Undo",
                       (e, obj) => e.diagram.commandHandler.undo(),
                       o => o.diagram.commandHandler.canUndo()),
            makeButton("Redo",
                       (e, obj) => e.diagram.commandHandler.redo(),
                       o => o.diagram.commandHandler.canRedo()),
            makeButton("Group",
                       (e, obj) => e.diagram.commandHandler.groupSelection(),
                       o => o.diagram.commandHandler.canGroupSelection()),
            makeButton("Ungroup",
                       (e, obj) => e.diagram.commandHandler.ungroupSelection(),
                       o => o.diagram.commandHandler.canUngroupSelection())
            );

    function nodeInfo(d: any) {  // Tooltip info for a node data object
        var str = "Node " + d.key + ": " + d.text + "\n";
        if (d.group)
            str += "member of " + d.group;
        else
            str += "top-level node";
        return str;
    }

    // These nodes have text surrounded by a rounded rectangle
    // whose fill color is bound to the node data.
    // The user can drag a node by dragging its TextBlock label.
    // Dragging from the Shape will start drawing a new link.
    myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        { locationSpot: go.Spot.Center },
        $(go.Shape, "RoundedRectangle",
            {
                fill: "white", // the default fill, if there is no data-binding
                portId: "", cursor: "pointer",  // the Shape is the port, not the whole Node
                // allow all kinds of links from and to this port
                fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
                toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true
            },
            new go.Binding("fill", "color")),
        $(go.TextBlock,
            {
                font: "bold 14px sans-serif",
                stroke: '#333',
                margin: 6,  // make some extra space for the shape around the text
                isMultiline: false,  // don't allow newlines in text
                editable: true  // allow in-place editing by user
            },
            new go.Binding("text", "text").makeTwoWay()),  // the label shows the node data's text
        { // this tooltip Adornment is shared by all nodes
            toolTip:
            $(go.Adornment, "Auto",
                $(go.Shape, { fill: "#FFFFCC" }),
                $(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling nodeInfo(data)
                    new go.Binding("text", "", nodeInfo))
                ),
            // this context menu Adornment is shared by all nodes
            contextMenu: partContextMenu
        }
    );

    // Define the appearance and behavior for Links:

    function linkInfo(d: any) {  // Tooltip info for a link data object
        return "Link:\nfrom " + d.from + " to " + d.to;
    }

    // The link shape and arrowhead have their stroke brush data bound to the "color" property
    myDiagram.linkTemplate =
    $(CustomLink,
        { relinkableFrom: true, relinkableTo: true },  // allow the user to relink existing links
        $(go.Shape,
            { strokeWidth: 2 },
            new go.Binding("stroke", "color")),
        $(go.Shape,
            { toArrow: "Standard", stroke: null },
            new go.Binding("fill", "color")),
        { // this tooltip Adornment is shared by all links
            toolTip:
            $(go.Adornment, "Auto",
                $(go.Shape, { fill: "#FFFFCC" }),
                $(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                    new go.Binding("text", "", linkInfo))
                ),
            // the same context menu Adornment is shared by all links
            contextMenu: partContextMenu
        }
    );

    // Define the appearance and behavior for Groups:

    function groupInfo(adornment: go.Adornment) {  // takes the tooltip, not a group node data object
        var g = <go.Group>adornment.adornedPart;  // get the Group that the tooltip adorns
        var mems = g.memberParts.count;
        var links = g.memberParts.filter(p => p instanceof go.Link).count;
        return "Group " + g.data.key + ": " + g.data.text + "\n" + mems + " members including " + links + " links";
    }

    // Groups consist of a title in the color given by the group node data
    // above a translucent gray rectangle surrounding the member parts
    myDiagram.groupTemplate =
    $(go.Group, "Vertical",
        {
            selectionObjectName: "PANEL",  // selection handle goes around shape, not label
            ungroupable: true,  // enable Ctrl-Shift-G to ungroup a selected Group
            layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutNodeSized
        },
        $(go.TextBlock,
            {
                font: "bold 12pt sans-serif",
                isMultiline: false,  // don't allow newlines in text
                editable: true  // allow in-place editing by user
            },
            new go.Binding("text", "text").makeTwoWay(),
            new go.Binding("stroke", "color")),
        $(go.Panel, "Auto",
            { name: "PANEL" },
            $(go.Shape, "Rectangle",  // the rectangular shape around the members
                { fill: "rgba(128,128,128,0.2)", stroke: "gray", strokeWidth: 3 }),
            $(go.Placeholder, { padding: 5 })  // represents where the members are
            ),
        { // this tooltip Adornment is shared by all groups
            toolTip:
            $(go.Adornment, "Auto",
                $(go.Shape, { fill: "#FFFFCC" }),
                $(go.TextBlock, { margin: 4 },
                    // bind to tooltip, not to Group.data, to allow access to Group properties
                    new go.Binding("text", "", groupInfo).ofObject())
                ),
            // the same context menu Adornment is shared by all groups
            contextMenu: partContextMenu
        }
    );

    // Define the behavior for the Diagram background:

    function diagramInfo(model: go.GraphLinksModel) {  // Tooltip info for the diagram's model
        return "Model:\n" + model.nodeDataArray.length + " nodes, " + model.linkDataArray.length + " links";
    }

    // provide a tooltip for the background of the Diagram, when not over any Part
    myDiagram.toolTip =
    $(go.Adornment, "Auto",
        $(go.Shape, { fill: "#FFFFCC" }),
        $(go.TextBlock, { margin: 4 },
            new go.Binding("text", "", diagramInfo))
    );

    // provide a context menu for the background of the Diagram, when not over any Part
    myDiagram.contextMenu =
    $(go.Adornment, "Vertical",
        makeButton("Paste",
                   (e, obj) => e.diagram.commandHandler.pasteSelection(e.diagram.lastInput.documentPoint),
                   o => o.diagram.commandHandler.canPasteSelection()),
        makeButton("Undo",
                   (e, obj) => e.diagram.commandHandler.undo(),
                   o => o.diagram.commandHandler.canUndo()),
        makeButton("Redo",
                   (e, obj) => e.diagram.commandHandler.redo(),
                   o => o.diagram.commandHandler.canRedo())
    );

    // Create the Diagram's Model:
    var nodeDataArray = [
        { key: 1, text: "Alpha", color: "lightblue" },
        { key: 2, text: "Beta", color: "orange" },
        { key: 3, text: "Gamma", color: "lightgreen", group: 5 },
        { key: 4, text: "Delta", color: "pink", group: 5 },
        { key: 5, text: "Epsilon", color: "green", isGroup: true }
    ];
    var linkDataArray = [
        { from: 1, to: 2, color: "blue" },
        { from: 2, to: 2 },
        { from: 3, to: 4, color: "green" },
        { from: 3, to: 1, color: "purple" }
    ];
    myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

    var img = myDiagram.makeImageData({
      scale: 0.4, position: new go.Point(-10, -10)
    });
}
