/// <reference path="angular-ui-tree.d.ts" />

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
