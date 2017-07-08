

var treeNode: AngularUITree.ITreeNode = {
    id: 0,
    nodes: [],
    title: "test"
};

var treeNode2: AngularUITree.ITreeNode = {
    id: "0",
    nodes: [treeNode],
    title: "test2"
};

// fake jquery node here so that we can pull a pretend
// angular scope element out of it
var dummyJQueryNode: ng.IAugmentedJQuery;
var fakeScope: (ng.IScope | AngularUITree.IParentTreeNodeScope) = dummyJQueryNode.scope();

(<AngularUITree.ITreeNodeScope> fakeScope).node = treeNode;

var treeNodeScope: AngularUITree.ITreeNodeScope = <AngularUITree.ITreeNodeScope> fakeScope;

(<AngularUITree.IParentTreeNodeScope> fakeScope).isParent = (nodeScope: AngularUITree.ITreeNodeScope) => {
    return true;
};

var parentTreeNodeScope: AngularUITree.IParentTreeNodeScope = <AngularUITree.IParentTreeNodeScope> fakeScope;

var eventSourceInfo: AngularUITree.IEventSourceInfo = {
    cloneModel: {},
    nodeScope: treeNodeScope,
    index: 0,
    nodesScope: parentTreeNodeScope
};

var position: AngularUITree.IPosition = {
    dirAx: 0,
    dirX: 0,
    dirY: 0,
    distAxX: 0,
    distAxY: 0,
    distX: 0,
    distY: 0,
    lastDirX: 0,
    lastDirY: 0,
    lastX: 0,
    lastY: 0,
    moving: true,
    nowX: 0,
    nowY: 0,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0

};

var eventInfo: AngularUITree.IEventInfo = {
    source: eventSourceInfo,
    dest: {
        index: 0,
        nodesScope: parentTreeNodeScope
    },
    elements: {},
    pos: position
};

var acceptCallback: AngularUITree.IAcceptCallback = (source: AngularUITree.ITreeNodeScope,
                                                     destination: AngularUITree.ITreeNodeScope,
                                                     destinationIndex: number) => {
    return false;
};

var droppedCallback: AngularUITree.IDroppedCallback = (eventInfo: AngularUITree.IEventInfo) => {
    return;
};

var callbacks: AngularUITree.ICallbacks = {
    accept: acceptCallback,
    dragStart: droppedCallback,
    dropped: droppedCallback
};
