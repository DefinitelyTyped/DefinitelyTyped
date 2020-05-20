

var dockManagerDiv = document.createElement('div'),
    panelDiv1 = document.createElement('div'),
    panelDiv2 = document.createElement('div'),
    panelDiv3 = document.createElement('div');

document.body.appendChild(dockManagerDiv);

var dockManager = new dockspawn.DockManager(dockManagerDiv);
dockManager.initialize();

var panelContainer1 = new dockspawn.PanelContainer(panelDiv1, dockManager),
    panelContainer2 = new dockspawn.PanelContainer(panelDiv2, dockManager),
    panelContainer3 = new dockspawn.PanelContainer(panelDiv3, dockManager);

var documentNode = dockManager.context.model.documentManagerNode;

var panelNode1 = dockManager.dockLeft(documentNode, panelContainer1, 0.33),
    panelNode2 = dockManager.dockRight(documentNode, panelContainer2, 0.33),
    panelNode3 = dockManager.dockFill(documentNode, panelContainer3);

