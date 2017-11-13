// A example tree structure

let data: BootstrapTreeViewNodeData[] = [
  {
    text: "Parent 1",
    nodes: [
      {
        text: "Child 1",
        nodes: [
          {
            text: "Grandchild 1"
          },
          {
            text: "Node 1",
            icon: "glyphicon glyphicon-stop",
            selectedIcon: "glyphicon glyphicon-stop",
            color: "#000000",
            backColor: "#FFFFFF",
            href: "#node-1",
            selectable: true,
            state: {
              checked: true,
              disabled: true,
              expanded: true,
              selected: true
            },
            tags: ['available']
          }
        ]
      },
      {
        text: "Child 2"
      }
    ]
  },
  {
    text: "Parent 2"
  },
  {
    text: "Parent 3"
  },
  {
    text: "Parent 4"
  },
  {
    text: "Parent 5"
  }
];

// Example for treeview init with options

$('#tree').treeview({
  data,
  levels: 5,
  backColor: 'green'
});

// Treeview functions.

let nodeId = 5;

let node: BootstrapTreeViewNodeData = data[0];

$('#tree').treeview('checkAll', { silent: true });
$('#tree').treeview('checkNode', [ nodeId, { silent: true } ]);
$('#tree').treeview('clearSearch');
$('#tree').treeview('collapseAll', { silent: true });
$('#tree').treeview('collapseNode', [ nodeId, { silent: true, ignoreChildren: false } ]);
$('#tree').treeview('disableAll', { silent: true });
$('#tree').treeview('disableNode', [ nodeId, { silent: true } ]);
$('#tree').treeview('enableAll', { silent: true });
$('#tree').treeview('enableNode', [ nodeId, { silent: true } ]);
$('#tree').treeview('expandAll', { levels: 2, silent: true });
$('#tree').treeview('expandNode', [ nodeId, { levels: 2, silent: true } ]);
$('#tree').treeview('getCollapsed', nodeId);
$('#tree').treeview('getDisabled', nodeId);
$('#tree').treeview('getEnabled', nodeId);
$('#tree').treeview('getExpanded', nodeId);
$('#tree').treeview('getExpanded', nodeId);
$('#tree').treeview('getParent', node);
$('#tree').treeview('getSelected', nodeId);
$('#tree').treeview('getSiblings', node);
$('#tree').treeview('getUnselected', nodeId);
$('#tree').treeview('remove');
$('#tree').treeview('revealNode', [ nodeId, { silent: true } ]);
$('#tree').treeview('search', [ 'Parent', {
  ignoreCase: true,     // case insensitive
  exactMatch: false,    // like or equals
  revealResults: true,  // reveal matching nodes
}]);
$('#tree').treeview('selectNode', [ nodeId, { silent: true } ]);
$('#tree').treeview('toggleNodeChecked', [ nodeId, { silent: true } ]);
$('#tree').treeview('toggleNodeDisabled', [ nodeId, { silent: true } ]);
$('#tree').treeview('toggleNodeExpanded', [ nodeId, { silent: true } ]);
$('#tree').treeview('toggleNodeSelected', [ nodeId, { silent: true } ]);
$('#tree').treeview('uncheckAll', { silent: true });
$('#tree').treeview('uncheckNode', [ nodeId, { silent: true } ]);
$('#tree').treeview('unselectNode', [ nodeId, { silent: true } ]);

// Test events
$('#tree').treeview({
    onNodeSelected: (event: any, data: BootstrapTreeViewNodeData) => void {
    // Event handler
    }
});
