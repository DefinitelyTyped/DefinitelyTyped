// Test file for GoJS.d.ts
// This is taken from http://gojs.net/latest/samples/basic.html

/*  Copyright (C) 1998 - 2013 by Northwoods Software Corporation. */

/// <reference path="goJS.d.ts" />

function init() {
  var $ = go.GraphObject.make;  // for conciseness in defining templates

  var myDiagram =
    $(go.Diagram, "myDiagram",  // create a Diagram for the DIV HTML element
      {
        // position the graph in the middle of the diagram
        initialContentAlignment: go.Spot.Center,

        // allow double-click in background to create a new node
        "clickCreatingTool.archetypeNodeData": { text: "Node", color: "white" },

        // allow Ctrl-G to call groupSelection()
        "commandHandler.archetypeGroupData": { text: "Group", isGroup: true, color: "blue" }
      });

  // Define the appearance and behavior for Nodes:

  // First, define the shared context menu for all Nodes, Links, and Groups.

  // To simplify this code we define a function for creating a context menu button:
  function makeButton(text: string, action, visiblePredicate?) {
    if (visiblePredicate === undefined) visiblePredicate = function() { return true; };
    return $("ContextMenuButton",
      $(go.TextBlock, text),
      { click: action },
      new go.Binding("visible", "", visiblePredicate).ofObject());
  }

  // a context menu is an Adornment with a bunch of buttons in them
  var partContextMenu =
    $(go.Adornment, "Vertical",
      makeButton("Properties",
        function(e, obj) {  // the OBJ is this Button
          var contextmenu = obj.part;  // the Button is in the context menu Adornment
          var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu adorns
          // now can do something with PART, or with its data, or with the Adornment (the context menu)
          if (part instanceof go.Link) alert(linkInfo(part.data));
          else if (part instanceof go.Group) alert(groupInfo(contextmenu));
          else alert(nodeInfo(part.data));
        }),
      makeButton("Cut",
        function(e, obj) { e.diagram.commandHandler.cutSelection(); },
        function(o) { return o.diagram.commandHandler.canCutSelection(); }),
      makeButton("Copy",
        function(e, obj) { e.diagram.commandHandler.copySelection(); },
        function(o) { return o.diagram.commandHandler.canCopySelection(); }),
      makeButton("Paste",
        function(e, obj) { e.diagram.commandHandler.pasteSelection(e.diagram.lastInput.documentPoint); },
        function(o) { return o.diagram.commandHandler.canPasteSelection(); }),
      makeButton("Delete",
        function(e, obj) { e.diagram.commandHandler.deleteSelection(); },
        function(o) { return o.diagram.commandHandler.canDeleteSelection(); }),
      makeButton("Undo",
        function(e, obj) { e.diagram.commandHandler.undo(); },
        function(o) { return o.diagram.commandHandler.canUndo(); }),
      makeButton("Redo",
        function(e, obj) { e.diagram.commandHandler.redo(); },
        function(o) { return o.diagram.commandHandler.canRedo(); }),
      makeButton("Group",
        function(e, obj) { e.diagram.commandHandler.groupSelection(); },
        function(o) { return o.diagram.commandHandler.canGroupSelection(); }),
      makeButton("Ungroup",
        function(e, obj) { e.diagram.commandHandler.ungroupSelection(); },
        function(o) { return o.diagram.commandHandler.canUngroupSelection(); })
      );

  function nodeInfo(d) {  // Tooltip info for a node data object
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
          fill: "white",
          portId: "", cursor: "pointer",  // the Shape is the port, not the whole Node
          // allow all kinds of links from and to this port
          fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
          toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true
        },
        new go.Binding("fill", "color")),
      $(go.TextBlock,
        {
          margin: 4,  // make some extra space for the shape around the text
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

  function linkInfo(d) {  // Tooltip info for a link data object
    return "Link:\nfrom " + d.from + " to " + d.to;
  }

  // The link shape and arrowhead have their stroke brush data bound to the "color" property
  myDiagram.linkTemplate =
    $(go.Link,
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

  function groupInfo(adornment) {  // takes the tooltip, not a group node data object
    var g = adornment.adornedPart;  // get the Group that the tooltip adorns
    var mems = g.memberParts.count;
    var links = 0;
    var it = g.memberParts;
    while (it.next()) {
      if (it.value instanceof go.Link) links++;
    }
    return "Group " + g.data.key + ": " + g.data.text + "\n" + mems + " members including " + links + " links";
  }

  // Groups consist of a title in the color given by the group node data
  // above a translucent gray rectangle surrounding the member parts
  myDiagram.groupTemplate =
    $(go.Group, "Vertical",
      {
        selectionObjectName: "PANEL",  // selection handle goes around shape, not label
        ungroupable: true  // enable Ctrl-Shift-G to ungroup a selected Group
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

  function diagramInfo(model) {  // Tooltip info for the diagram's model
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
        function(e, obj) { e.diagram.commandHandler.pasteSelection(e.diagram.lastInput.documentPoint); },
        function(o) { return o.diagram.commandHandler.canPasteSelection(); }),
      makeButton("Undo",
        function(e, obj) { e.diagram.commandHandler.undo(); },
        function(o) { return o.diagram.commandHandler.canUndo(); }),
      makeButton("Redo",
        function(e, obj) { e.diagram.commandHandler.redo(); },
        function(o) { return o.diagram.commandHandler.canRedo(); })
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

  // now enable undo/redo, only after setting the Diagram.model
  myDiagram.model.undoManager.isEnabled = true;
}
