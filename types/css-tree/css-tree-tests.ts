import * as csstree from 'css-tree';

const ast = csstree.parse('.a { color: red; }');
ast; // $ExpectType CssNode

csstree.parse('.a { color: red; }', {}); // $ExpectType CssNode
csstree.parse('.a { color: red; }', {context: 'selector', positions: true}); // $ExpectType CssNode

csstree.walk(ast, (node, item, list) => {
    node; // $ExpectType CssNode
    item; // $ExpectType ListItem<CssNode>
    list; // $ExpectType List<CssNode>
});

csstree.walk(ast, {});

csstree.walk(ast, {
    enter(node, item, list) {
        this.root; // $ExpectType CssNode
        this.stylesheet; // $ExpectType StyleSheet | null
        node; // $ExpectType ClassSelector
        item; // $ExpectType ListItem<CssNode>
        list; // $ExpectType List<CssNode>
        this.atrule; // $ExpectType Atrule | null
    },
    leave(node, item, list) {
        this.root; // $ExpectType CssNode
        this.stylesheet; // $ExpectType StyleSheet | null
        node; // $ExpectType ClassSelector
        item; // $ExpectType ListItem<CssNode>
        list; // $ExpectType List<CssNode>
        this.atrule; // $ExpectType Atrule | null
    },
    visit: 'ClassSelector',
    reverse: false,
});

csstree.find(ast, (node, item, list) => {
    node; // $ExpectType CssNode
    item; // $ExpectType ListItem<CssNode>
    list; // $ExpectType List<CssNode>
    return true;
});

csstree.findLast(ast, (node, item, list) => {
    node; // $ExpectType CssNode
    item; // $ExpectType ListItem<CssNode>
    list; // $ExpectType List<CssNode>
    return true;
});

csstree.findAll(ast, (node, item, list) => {
    node; // $ExpectType CssNode
    item; // $ExpectType ListItem<CssNode>
    list; // $ExpectType List<CssNode>
    return true;
});

csstree.generate(ast); // $ExpectType string

csstree.generate(ast, {}); // $ExpectType string

csstree.generate(ast, {
    sourceMap: true,
    decorator: handlers => ({
        children(node, delimiter) {
            node; // $ExpectType CssNode
            delimiter; // $ExpectType ((node: CssNode) => void) | undefined
            handlers.children.call(handlers, node, delimiter);
        },
        node(node) {
            node; // $ExpectType CssNode
            handlers.node.call(node);
        },
        chunk(chunk) {
            chunk; // $ExpectType string
            handlers.chunk.call(chunk);
        },
        result() {
            return handlers.result.call(handlers);
        }
    }),
});

const property = csstree.property('*-vendor-property');
// @ts-expect-error
property.name = 'test';

const keyword = csstree.keyword('-vendor-keyword');
// @ts-expect-error
keyword.name = 'test';

csstree.clone(ast); // $ExpectType CssNode

const fromPlain = csstree.fromPlainObject({
    type: 'SelectorList',
    children: []
});
fromPlain; // $ExpectType CssNode

const toPlain = csstree.toPlainObject({
    type: 'SelectorList',
    children: new csstree.List<csstree.CssNode>(),
});
toPlain; // $ExpectType CssNodePlain

interface Test {
    a: string;
}

const list = new csstree.List<Test>();

const anItem = list.createItem({a: 'c'});
anItem; // $ExpectType ListItem<Test>

list.fromArray([{a: 'b'}]);
list.toArray(); // $ExpectType Test[]
list.size; // $ExpectType number
list.isEmpty; // $ExpectType boolean
list.first; // $ExpectType Test | null
list.last; // $ExpectType Test | null
list.forEach(function(item, node, list) {
    this.b; // $ExpectType string
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
}, {b: 'c'});
list.forEach(function(item, node, list) {
    this; // $ExpectType List<Test>
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
});
list.forEachRight(function(item, node, list) {
    this.b; // $ExpectType string
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
}, {b: 'c'});
list.forEachRight(function(item, node, list) {
    this; // $ExpectType List<Test>
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
});
list.nextUntil(anItem, function(item, node, list) {
    this.b; // $ExpectType string
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
    return true;
}, {b: 'c'});
list.nextUntil(anItem, function(item, node, list) {
    this; // $ExpectType List<Test>
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
    return true;
});
list.prevUntil(anItem, function(item, node, list) {
    this.b; // $ExpectType string
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
    return true;
}, {b: 'c'});
list.prevUntil(anItem, function(item, node, list) {
    this; // $ExpectType List<Test>
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
    return true;
});
list.some(function(item, node, list) {
    this.b; // $ExpectType string
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
    return true;
}, {b: 'c'});
list.some(function(item, node, list) {
    this; // $ExpectType List<Test>
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
    return true;
});
list.reduce(function(accum, node) {
    this; // $ExpectType List<Test>
    accum; // $ExpectType number
    node; // $ExpectType Test
    return accum;
}, 0); // $ExpectType 0
list.reduceRight(function(accum, node) {
    this; // $ExpectType List<Test>
    accum; // $ExpectType number
    node; // $ExpectType Test
    return accum;
}, 0); // $ExpectType 0
const map1 = list.map(function(item, node, list) {
    this.b; // $ExpectType string
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
    return { c: 'd' };
}, {b: 'c'});
map1; // $ExpectType List<{ c: string; }>
const map2 = list.map(function(item, node, list) {
    this; // $ExpectType List<Test>
    item; // $ExpectType Test
    node; // $ExpectType ListItem<Test>
    list; // $ExpectType List<Test>
    return { c: 'd' };
});
map2; // $ExpectType List<{ c: string; }>

const list2 = new csstree.List<Test | null>();

const filter1 = list2.filter(function(item, node, list): item is Test {
    this.b; // $ExpectType string
    item; // $ExpectType Test | null
    node; // $ExpectType ListItem<Test | null>
    list; // $ExpectType List<Test | null>
    return !!item;
}, {b: 'c'});
filter1; // $ExpectType List<Test>
const filter2 = list2.filter(function(item, node, list): item is Test {
    this; // $ExpectType List<Test | null>
    item; // $ExpectType Test | null
    node; // $ExpectType ListItem<Test | null>
    list; // $ExpectType List<Test | null>
    return !!item;
});
filter2; // $ExpectType List<Test>
const filter3 = list2.filter(function(item, node, list) {
    this.b; // $ExpectType string
    item; // $ExpectType Test | null
    node; // $ExpectType ListItem<Test | null>
    list; // $ExpectType List<Test | null>
    return true;
}, {b: 'c'});
filter3; // $ExpectType List<Test | null>
const filter4 = list2.filter(function(item, node, list) {
    this; // $ExpectType List<Test | null>
    item; // $ExpectType Test | null
    node; // $ExpectType ListItem<Test | null>
    list; // $ExpectType List<Test | null>
    return true;
});
filter4; // $ExpectType List<Test | null>

list.clear();
list.copy(); // $ExpectType List<Test>
list.prepend(anItem); // $ExpectType List<Test>
list.prependData({a: 'b'}); // $ExpectType List<Test>
list.append(anItem); // $ExpectType List<Test>
list.appendData({a: 'b'}); // $ExpectType List<Test>
list.insert(anItem, anItem); // $ExpectType List<Test>
list.insertData({a: 'b'}, anItem); // $ExpectType List<Test>
list.remove(anItem); // $ExpectType ListItem<Test>
list.push({a: 'b'}); // $ExpectType void
list.pop(); // $ExpectType ListItem<Test> | undefined
list.unshift({a: 'b'}); // $ExpectType void
list.shift(); // $ExpectType ListItem<Test> | undefined
list.prependList(list); // $ExpectType List<Test>
list.appendList(list); // $ExpectType List<Test>
list.insertList(list, anItem); // $ExpectType List<Test>
list.replace(anItem, list); // $ExpectType List<Test>
list.replace(anItem, anItem); // $ExpectType List<Test>

switch (ast.type) {
    case 'AnPlusB':
        ast.a; // $ExpectType string | null
        ast.b; // $ExpectType string | null
        break;

    case 'Atrule':
        ast.name; // $ExpectType string
        ast.prelude; // $ExpectType AtrulePrelude | Raw | null
        ast.block; // $ExpectType Block | null
        break;

    case 'AtrulePrelude':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'AttributeSelector':
        ast.name; // $ExpectType Identifier
        ast.matcher; // $ExpectType string | null
        ast.value; // $ExpectType Identifier | StringNode | null
        ast.flags; // $ExpectType string | null
        break;

    case 'Block':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'Brackets':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'CDC':
        break;

    case 'CDO':
        break;

    case 'ClassSelector':
        ast.name; // $ExpectType string
        break;

    case 'Combinator':
        ast.name; // $ExpectType string
        break;

    case 'Comment':
        ast.value; // $ExpectType string
        break;

    case 'Declaration':
        ast.important; // $ExpectType string | boolean
        ast.property; // $ExpectType string
        ast.value; // $ExpectType Raw | Value
        break;

    case 'DeclarationList':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'Dimension':
        ast.value; // $ExpectType string
        ast.unit; // $ExpectType string
        break;

    case 'Function':
        ast.name; // $ExpectType string
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'Hash':
        ast.value; // $ExpectType string
        break;

    case 'IdSelector':
        ast.name; // $ExpectType string
        break;

    case 'Identifier':
        ast.name; // $ExpectType string
        break;

    case 'MediaFeature':
        ast.name; // $ExpectType string
        ast.value; // $ExpectType Dimension | Identifier | NumberNode | Ratio | null
        break;

    case 'MediaQuery':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'MediaQueryList':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'Nth':
        ast.nth; // $ExpectType AnPlusB | Identifier
        ast.selector; // $ExpectType SelectorList | null
        break;

    case 'Number':
        ast.value; // $ExpectType string
        break;

    case 'Operator':
        ast.value; // $ExpectType string
        break;

    case 'Parentheses':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'Percentage':
        ast.value; // $ExpectType string
        break;

    case 'PseudoClassSelector':
        ast.name; // $ExpectType string
        ast.children; // $ExpectType List<CssNode> | null
        break;

    case 'PseudoElementSelector':
        ast.name; // $ExpectType string
        ast.children; // $ExpectType List<CssNode> | null
        break;

    case 'Ratio':
        ast.left; // $ExpectType string
        ast.right; // $ExpectType string
        break;

    case 'Raw':
        ast.value; // $ExpectType string
        break;

    case 'Rule':
        ast.prelude; // $ExpectType Raw | SelectorList
        ast.block; // $ExpectType Block
        break;

    case 'Selector':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'SelectorList':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'String':
        ast.value; // $ExpectType string
        break;

    case 'StyleSheet':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'TypeSelector':
        ast.name; // $ExpectType string
        break;

    case 'UnicodeRange':
        ast.value; // $ExpectType string
        break;

    case 'Url':
        ast.value; // $ExpectType Raw | StringNode
        break;

    case 'Value':
        ast.children; // $ExpectType List<CssNode>
        break;

    case 'WhiteSpace':
        ast.value; // $ExpectType string
        break;

    default:
        ast; // $ExpectType never
}

switch (toPlain.type) {
    case 'AnPlusB':
        toPlain.a; // $ExpectType string | null
        toPlain.b; // $ExpectType string | null
        break;

    case 'Atrule':
        toPlain.name; // $ExpectType string
        toPlain.prelude; // $ExpectType Raw | AtrulePreludePlain | null
        toPlain.block; // $ExpectType BlockPlain | null
        break;

    case 'AtrulePrelude':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'AttributeSelector':
        toPlain.name; // $ExpectType Identifier
        toPlain.matcher; // $ExpectType string | null
        toPlain.value; // $ExpectType Identifier | StringNode | null
        toPlain.flags; // $ExpectType string | null
        break;

    case 'Block':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'Brackets':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'CDC':
        break;

    case 'CDO':
        break;

    case 'ClassSelector':
        toPlain.name; // $ExpectType string
        break;

    case 'Combinator':
        toPlain.name; // $ExpectType string
        break;

    case 'Comment':
        toPlain.value; // $ExpectType string
        break;

    case 'Declaration':
        toPlain.important; // $ExpectType string | boolean
        toPlain.property; // $ExpectType string
        toPlain.value; // $ExpectType Raw | ValuePlain
        break;

    case 'DeclarationList':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'Dimension':
        toPlain.value; // $ExpectType string
        toPlain.unit; // $ExpectType string
        break;

    case 'Function':
        toPlain.name; // $ExpectType string
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'Hash':
        toPlain.value; // $ExpectType string
        break;

    case 'IdSelector':
        toPlain.name; // $ExpectType string
        break;

    case 'Identifier':
        toPlain.name; // $ExpectType string
        break;

    case 'MediaFeature':
        toPlain.name; // $ExpectType string
        toPlain.value; // $ExpectType Dimension | Identifier | NumberNode | Ratio | null
        break;

    case 'MediaQuery':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'MediaQueryList':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'Nth':
        toPlain.nth; // $ExpectType AnPlusB | Identifier
        toPlain.selector; // $ExpectType SelectorListPlain | null
        break;

    case 'Number':
        toPlain.value; // $ExpectType string
        break;

    case 'Operator':
        toPlain.value; // $ExpectType string
        break;

    case 'Parentheses':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'Percentage':
        toPlain.value; // $ExpectType string
        break;

    case 'PseudoClassSelector':
        toPlain.name; // $ExpectType string
        toPlain.children; // $ExpectType CssNodePlain[] | null
        break;

    case 'PseudoElementSelector':
        toPlain.name; // $ExpectType string
        toPlain.children; // $ExpectType CssNodePlain[] | null
        break;

    case 'Ratio':
        toPlain.left; // $ExpectType string
        toPlain.right; // $ExpectType string
        break;

    case 'Raw':
        toPlain.value; // $ExpectType string
        break;

    case 'Rule':
        toPlain.prelude; // $ExpectType Raw | SelectorListPlain
        toPlain.block; // $ExpectType BlockPlain
        break;

    case 'Selector':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'SelectorList':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'String':
        toPlain.value; // $ExpectType string
        break;

    case 'StyleSheet':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'TypeSelector':
        toPlain.name; // $ExpectType string
        break;

    case 'UnicodeRange':
        toPlain.value; // $ExpectType string
        break;

    case 'Url':
        toPlain.value; // $ExpectType Raw | StringNode
        break;

    case 'Value':
        toPlain.children; // $ExpectType CssNodePlain[]
        break;

    case 'WhiteSpace':
        toPlain.value; // $ExpectType string
        break;

    default:
        toPlain; // $ExpectType never
}

csstree.definitionSyntax.syntaxError; // $ExpectType SyntaxError
const syntax = csstree.definitionSyntax.parse('foo | bar'); // $ExpectType DSNodeGroup
const node = syntax.terms[0]; // $ExpectType DSNode
switch (node.type) {
    case 'AtKeyword':
        node; // $ExpectType DSNodeAtWord
        node.name; // $ExpectType string
        break;
    case 'Comma':
        node; // $ExpectType DSNodeComma
        break;
    case 'Function':
        node; // $ExpectType DSNodeFunction
        node.name; // $ExpectType string
        break;
    case 'Group':
        node; // $ExpectType DSNodeGroup
        node.terms; // $ExpectType DSNode[]
        node.combinator; // $ExpectType DSNodeCombinator
        node.disallowEmpty; // $ExpectType boolean
        node.explicit; // $ExpectType boolean
        break;
    case 'Keyword':
        node; // $ExpectType DSNodeKeyword
        node.name; // $ExpectType string
        break;
    case 'Multiplier':
        node; // $ExpectType DSNodeMultiplier
        node.comma; // $ExpectType boolean
        node.min; // $ExpectType number
        node.max; // $ExpectType number
        node.term; // $ExpectType DSNodeMultiplied
        break;
    case 'Property':
        node; // $ExpectType DSNodeProperty
        node.name; // $ExpectType string
        break;
    case 'String':
        node; // $ExpectType DSNodeString
        node.value; // $ExpectType string
        break;
    case 'Token':
        node; // $ExpectType DSNodeToken
        node.value; // $ExpectType string
        break;
    case 'Type':
        node; // $ExpectType DSNodeType
        node.name; // $ExpectType string
        node.opts; // $ExpectType DSNodeTypeOpts | null
        break;
}

csstree.definitionSyntax.generate(syntax); // $ExpectType string
csstree.definitionSyntax.generate(syntax, { forceBraces: true }); // $ExpectType string
csstree.definitionSyntax.generate(syntax, { compact: true }); // $ExpectType string
csstree.definitionSyntax.generate(syntax, { decorate: (result: string, node) => {
    result; // $ExpectType string
    node; // $ExpectType DSNode
    return result;
}});

csstree.definitionSyntax.walk(syntax, (node) => {
    node; // $ExpectType DSNode
});
csstree.definitionSyntax.walk(syntax, (node) => {
    node; // $ExpectType DSNode
}, undefined);

csstree.parse('.selector { /* comment */ }', {
  onComment(value, loc) {
    value; // $ExpectType string
    loc; // $ExpectType CssLocation
  }
});

csstree.ident.decode('foo'); // $ExpectType string
csstree.ident.encode('foo'); // $ExpectType string
csstree.string.decode('foo'); // $ExpectType string
csstree.string.encode('foo'); // $ExpectType string
csstree.string.encode('foo', true); // $ExpectType string
csstree.url.decode('foo'); // $ExpectType string
csstree.url.encode('foo'); // $ExpectType string
