
/// <reference types="jquery" />

var nodes = document.getElementsByClassName(".test-container");
var node = document.getElementById("#test-container");
var $nodes = $(".selector");

eqjs.query(node);
eqjs.query(node, () => { });
eqjs.query(nodes);
eqjs.query($nodes);

var nodesCount: number = eqjs.nodesLength;

eqjs.refreshNodes();

eqjs.nodeWrites();
eqjs.nodeWrites(node);
eqjs.nodeWrites(nodes);
eqjs.nodeWrites($nodes);

var sortMap = eqjs.sortObj("small: 380, medium: 490, large: 600");
var sortFirstKey = sortMap[0].key;
var sortFirstValue = sortMap[0].value;

var nodesMap = eqjs.nodes;

var ele: HTMLElement = nodesMap[1];
