import * as ESTree from "estree";
import walk = require("esprima-walk");

var program: ESTree.Program
var string: string
var node: ESTree.Node

walk(program, _node => {
    string = node.type
    node = _node
})

walk.walk(program, _node => {
    string = node.type
    node = _node
})

walk.walkAddParent(program, _node => {
    node = _node
    node = _node.parent
    string = node.type
})

