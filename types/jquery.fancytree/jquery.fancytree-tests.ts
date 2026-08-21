$("#tree").fancytree(
    <Fancytree.FancytreeOptions> {
        source: [
            { title: "Node 1", key: "1" },
            {
                title: "Folder 2",
                key: "2",
                folder: true,
                children: [
                    { title: "Node 2.1", key: "3" },
                    { title: "Node 2.2", key: "4" },
                    {
                        foo: "bar",
                        baz: 17,
                        children: [
                            { title: "Node 1", key: "1" },
                            {
                                title: "Folder 2",
                                key: "2",
                                folder: true,
                                children: [
                                    { title: "Node 2.1", key: "3" },
                                    { title: "Node 2.2", key: "4" },
                                    { title: "NOde 2.3", key: "5", icon: "./icon.svg", checkbox: "radio" },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
        extensions: ["dnd5"],
        dnd5: {
            dragDrag: (node, data) => {},
        },
        click: (ev: JQueryEventObject, node: Fancytree.ClickEventData) => {
            const target: Fancytree.EventTargetType = node.targetType;
            console.log(target);
            return true;
        },
        clickPaging: (event, data) => {
            const target: Fancytree.EventTargetType = data.targetType;
            console.log(target);
            return true;
        },
        modifyChild: (event, data) => {
            console.log(data.operation);
            console.log(data.childNode);
        },
        checkbox: "radio", // boolean or "radio"
        expand: () => {
            console.log("expanded");
        },
        copyFunctionsToData: false,
        disabled: false,
        escapeTitles: true,
        nodata: (event, data) => "No data.",
        tabindex: "0",
        treeId: "myTree",
        toggleEffect: "slideToggle",
        activate: function(event, data) {
            // A node was activated: display its title:
            var node = data.node;
            console.log(node.title);
        },
        beforeSelect: function(event, data) {
            // A node is about to be selected: prevent this for folders:
            if (data.node.isFolder()) {
                return false;
            }
        },
        unselectable: function(event, data) {
            return true;
        },
        unselectableIgnore: false,
        unselectableStatus: function(event, data) {
            return false;
        },
        strings: {
            noData: "custom no data message",
        },
        rtl: true,
    },
);

var $treeWidget: JQuery = $("#tree").fancytree();

// $("#tree").fancytree();

var tree: Fancytree.Fancytree = $("#tree").fancytree("getTree");

// test FancytreeStatic.getTree
var otherTree: Fancytree.Fancytree | null = $.ui.fancytree.getTree("#tree");
alert(tree === otherTree);
var createdTree: Fancytree.Fancytree = $.ui.fancytree.createTree("#tree", {});

var activeNode: Fancytree.FancytreeNode = tree.getRootNode();
var maybeActiveNode: Fancytree.FancytreeNode | null = tree.getActiveNode();
console.log(maybeActiveNode);

// Sort children of active node:
activeNode.sortChildren();

// Set new icon for active node:
activeNode.icon = "./icon.svg";

// Expand all tree nodes
tree.visit(function(node) {
    node.setExpanded(true);
});

// Append a new child node
activeNode.addChildren({
    title: "Document using a custom icon",
    icon: "customdoc1.gif",
});

tree.loadKeyPath("/1/2", function(node, status) {
    if (status === "loaded") {
        console.log("loaded intermiediate node " + node);
    } else if (status === "ok") {
        node.setActive();
    }
});
tree.loadKeyPath("/1/2", {
    callback: function(node, status) {
        console.log(node, status);
    },
    matchKey: function(node, key) {
        return node.key === key;
    },
});

tree.expandAll();
tree.expandAll(false);
tree.expandAll(true);
tree.expandAll(true, { noAnimation: true });

var node = $.ui.fancytree.getNode($("#tree"));
alert($.ui.fancytree.version);
var f = $.ui.fancytree.debounce(50, (a: number) => {
    console.log(a);
}, true);
f(2);
var eventAsString = $.ui.fancytree.eventToString(new Event("click"));
console.log(eventAsString);

var pos = $.ui.fancytree.fixPositionOptions({ my: "left center", at: "left bottom", of: $("#tree") });
console.log(pos);

var opt = $.ui.fancytree.evalOption("checkbox", activeNode, activeNode, tree.options, false);
console.log(opt);

$.ui.fancytree.overrideMethod(tree as any, "debug", function(msg: string) {
    console.log(msg);
});

node = tree.getFirstChild();
if (node) {
    node.setExpanded().done(function() {
        alert("expand animation has finished");
    });
}

var maybeNodeByKey: Fancytree.FancytreeNode | null = tree.getNodeByKey("1");
console.log(maybeNodeByKey);

var maybeFindNode: Fancytree.FancytreeNode | null = tree.findNextNode("Node");
console.log(maybeFindNode);

// Get or set an option
var autoScroll = $("#tree").fancytree("option", "autoScroll");
$("#tree").fancytree("option", "autoCollapse", true);
// Disable the tree
$("#tree").fancytree("disable");
// Get the Fancytree instance for a tree widget
$("#tree").fancytree("enable");
alert("We have " + tree.count() + " nodes.");

// Use the API
if (node) {
    node.setTitle("New title");
}

// add/remove/toggle class
activeNode.addClass("test-class");
activeNode.removeClass("test-class");
activeNode.toggleClass("test-class");
activeNode.toggleClass("test-class", true);

tree.clear();
tree.enable();
tree.enable(false);
tree.selectAll(true);
tree.getOption("autoScroll");
tree.setOption("autoCollapse", true);
tree.debugTime("test");
tree.debugTimeEnd("test");
var prevUpdate: boolean = tree.enableUpdate(false);
tree.enableUpdate(prevUpdate);
var loading: boolean = tree.isLoading();
console.log(loading);
tree.visitRows((n) => {
    return true;
});

// Fancytree.findAll()
var nodes: Fancytree.FancytreeNode[];
nodes = tree.findAll((node) => {
    return true;
});
nodes = tree.findAll("Node");

if (node) {
    node.addChildren({
        title: "New Node",
        key: "15",
        type: "book",
        iconTooltip: "Icon toolip",
        statusNodeType: "loading",
        unselectableIgnore: true,
        unselectableStatus: false,
    }, 0);

    node.appendSibling({ title: "Sibling Node" });
    node.applyCommand("moveDown");
    node.addPagingNode();
    node.getPath();
    node.getSelectedNodes();
    node.hasClass("test-class");
    node.isBelowOf(activeNode);
    node.isPagingNode();
    node.isPartload();
    node.isPartsel();
    node.isRoot();
    node.lazyLoad();
    node.discard();
    node.discardMarkup();
    node.visitSiblings((n) => true);
    node.findRelatedNode("down");
    node.triggerModify("data");
    node.triggerModifyChild("add", node);
    node.toString();
    node.error("x");
}

tree.addPagingNode();
tree.applyCommand("moveDown", node || activeNode);
tree.findFirst("Node");
tree.findRelatedNode(activeNode, "down");
tree.error("x");
tree.toString();

// `source` accepts every format documented in the implementation source:
// object[] | object | string | $.Promise | function (see PR #74972).

// Inline node data: array of nodes ...
const sourceFromArray: Fancytree.FancytreeOptions = {
    source: [{ title: "Node 1", key: "1" }],
};

// ... or a single object carrying a `children` array.
const sourceFromObject: Fancytree.FancytreeOptions = {
    source: { title: "Root", key: "1", children: [{ title: "Child", key: "2" }] },
};

// A URL string is loaded via Ajax.
const sourceFromUrl: Fancytree.FancytreeOptions = {
    source: "/api/tree",
};

// Ajax options object (the `source.url` branch).
const sourceFromAjax: Fancytree.FancytreeOptions = {
    source: { url: "/api/tree", cache: false },
};

// A promise resolving to node data.
const sourceFromPromise: Fancytree.FancytreeOptions = {
    source: $.getJSON("/api/tree"),
};

// A function returning node data ...
const sourceFromFunction: Fancytree.FancytreeOptions = {
    source: () => [{ title: "Node 1", key: "1" }],
};

// ... or returning a promise (e.g. for deferred loading).
const sourceFromFunctionPromise: Fancytree.FancytreeOptions = {
    source: () => $.getJSON("/api/tree"),
};

// `icon` option/NodeData also accepts a callback.
const iconCallback: Fancytree.FancytreeOptions = {
    icon: (event, data) => (data.node.isFolder() ? false : { text: "folder", addClass: "material-icons" }),
};
activeNode.addChildren({ title: "Static icon", icon: "my-icon" });
activeNode.addChildren({ title: "Object icon", icon: { text: "description", addClass: "material-icons" } });

// Node-level documented properties.
const nodeSelected: boolean = activeNode.selected;
const nodeType: string = activeNode.type;
const nodeIconTooltip: string = activeNode.iconTooltip;
const nodeIcon: boolean | Fancytree.GlyphIcon = activeNode.icon;
console.log(nodeSelected, nodeType, nodeIconTooltip, nodeIcon);

// replaceWith accepts inline data, `$.ajax` options, or a promise — but not a URL string.
if (node) {
    node.replaceWith({ url: "/api/page", cache: false });
    node.replaceWith([{ title: "More" }]);
    // @ts-expect-error -- plain URL strings are not supported
    node.replaceWith("/api/page");
}

// FancytreeStatic.setSpanIcon
$.ui.fancytree.setSpanIcon(activeNode.span, "fancytree-icon", "my-glyph");
$.ui.fancytree.setSpanIcon($(activeNode.span), "fancytree-icon", { text: "folder", addClass: "material-icons" });

// Legacy (jQuery UI based) `dnd` extension.
const dndOptions: Fancytree.FancytreeOptions = {
    extensions: ["dnd"],
    dnd: {
        autoExpandMS: 400,
        preventVoidMoves: true,
        preventRecursiveMoves: true,
        focusOnClick: false,
        dragStart: (sourceNode, data) => {
            console.log(sourceNode.title, data.otherNode, data.hitMode, data.ui.helper, data.draggable);
            return true;
        },
        initHelper: (sourceNode, data) => {
            data.ui.helper.addClass("my-drag-helper");
        },
        dragEnter: (targetNode, data) => {
            console.log(targetNode.key, data.otherNode?.key);
            return ["over", "before"];
        },
        dragOver: (targetNode, data) => {
            data.dropMarker?.toggleClass("is-active", true);
            return data.otherNode !== null;
        },
        dragDrop: (targetNode, data) => {
            if (data.hitMode === "over") {
                data.otherNode?.moveTo(targetNode); // mode is optional; defaults to "child"
            }
        },
        dragStop: (sourceNode, data) => {
            console.log(sourceNode, data.tree);
        },
    },
};
console.log(iconCallback, dndOptions);

// `glyph` extension options.
const glyphOptions: Fancytree.FancytreeOptions = {
    extensions: ["glyph"],
    glyph: {
        preset: "awesome4",
        map: {
            _addClass: "fa",
            expanderClosed: "fa fa-caret-right",
            expanderOpen: "fa fa-caret-down",
            loading: { html: "<span class='fa fa-spinner fa-pulse' />" },
            checkbox: (glyphNode, span, type) => (glyphNode.isSelected() ? { text: "check_box" } : "fa-square-o"),
        },
    },
};
const loadingGlyph: Fancytree.GlyphMapEntry = glyphOptions.glyph!.map!.loading;
console.log(glyphOptions, loadingGlyph);
