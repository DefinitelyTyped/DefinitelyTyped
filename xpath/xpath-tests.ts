/// <reference path="xpath.d.ts" />

import xpath = require('xpath');

// A string of xml
var xml: string;
// an xpath query
var xpathText: string;
// a DOM
var doc: Document;
// xpath returns lists of Nodes that do not implement the NodeList interface;
// they are merely arrays.
var nodes: Array<Node>;
var node: Node;
var stringResult: string;
var booleanResult: boolean;
var numberResult: number;
var expression: xpath.XPathExpression;
var namespaceResolver: xpath.XPathNSResolver;
var xpathResult: xpath.XPathResult;
var length: number;

xml = '<some>xml</some>';
xpathText = '//this/is/an/xpath/query';
doc = new DOMParser().parseFromString(xml, 'text/xml');
nodes = xpath.select(xpathText, doc);
node = xpath.select(xpathText, doc, true);
nodes = xpath.select(xpathText, doc, false);

node = xpath.select1(xpathText, doc);

stringResult = xpath.select(xpathText, doc).toString();

node = xpath.select(xpathText, doc)[0];

var selectFn = xpath.useNamespaces({
  'prefix': 'http://namespaceuri.com/nsfile'
});
nodes = selectFn(xpathText, doc);
node = selectFn(xpathText, doc, true);
nodes = selectFn(xpathText, doc, false);

namespaceResolver = {
  lookupNamespaceURI: function(prefix) {
    return 'http://namespace.domain'
  }
};
expression = xpath.createExpression(xpathText, namespaceResolver);
xpathResult = expression.evaluate(doc, xpath.XPathResult.ANY_TYPE, null);
xpathResult = expression.evaluate(doc, xpath.XPathResult.ANY_TYPE, xpathResult);
xpathResult = expression.evaluate(doc, xpath.XPathResult.ANY_TYPE);
booleanResult = xpathResult.booleanValue;
numberResult = xpathResult.numberValue;
stringResult = xpathResult.stringValue;
node = xpathResult.singleNodeValue;
node = xpathResult.iterateNext();
node = xpathResult.snapshotItem(10);
length = xpathResult.snapshotLength;

var arrayOfNumbers: Array<Number> = [
  xpath.XPathResult.ANY_TYPE,
  xpath.XPathResult.NUMBER_TYPE,
  xpath.XPathResult.STRING_TYPE,
  xpath.XPathResult.BOOLEAN_TYPE,
  xpath.XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
  xpath.XPathResult.ORDERED_NODE_ITERATOR_TYPE,
  xpath.XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
  xpath.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  xpath.XPathResult.ANY_UNORDERED_NODE_TYPE,
  xpath.XPathResult.FIRST_ORDERED_NODE_TYPE
];

namespaceResolver = xpath.createNSResolver(node);
namespaceResolver = xpath.createNSResolver(doc);


