import parse = require('xml-parser');
declare var assert: { equal<T>(a: T, b: T): void };

var doc: parse.Document = parse(
  '<?xml version="1.0" encoding="utf-8"?>' +
    '<mydoc><child a="1">foo</child><child/></mydoc>');
var declaration: parse.Declaration = doc.declaration;
assert.equal(declaration.attributes['version'], '1.0');
assert.equal(declaration.attributes['encoding'], 'utf-8');
var root: parse.Node = doc.root;
assert.equal(root.name, 'mydoc');
var children: parse.Node[] = root.children;
assert.equal(children.length, 2);
var child1: parse.Node = children[0];
assert.equal(child1.name, 'child');
assert.equal(child1.attributes['a'], '1');
assert.equal(child1.content, 'foo');
