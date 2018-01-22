import TreeModel = require("tree-model");

var tree = new TreeModel({}),
    root = tree.parse({ name: 'a', children: [{ name: 'b' }, { name: 'c' }] });

root.isRoot();
root.hasChildren();

let nodeB = root.first((node) => node.name === 'b');
let nodeC = root.first((node) => node.name === 'c');
type Node = typeof nodeB;

root.addChild(nodeC);
root.addChildAtIndex(nodeC, 0);

nodeB.setIndex(0);
let arrPath: Array<Node> = nodeB.getPath();
let nodeIndex: number = nodeB.getIndex();

let opt = { strategy: <'post'|'pre'>'post' };
let visitorFn = (tmp) => true;
let ctxObject = {};

// Test Node.walk with different overloads and their return type
{
    {
        let tmp:void = nodeB.walk(opt,visitorFn , ctxObject);
    }
    {
        let tmp:void = nodeB.walk(opt, visitorFn);
    }
    {
        let tmp:void = nodeB.walk(visitorFn, ctxObject);
    }
}

// Test Node.all with different overloads and their return type
{
    {
        let nodeArr: Array<Node> = nodeB.all(opt, visitorFn, ctxObject);
    }
    {
        let nodeArr: Array<Node> = nodeB.all(opt, visitorFn);
    }
    {
        let nodeArr: Array<Node> = nodeB.all(visitorFn, ctxObject);
    }
}

// Test Node.first with different overloads and their return type
{
    {
        let nodeReturned: Node|undefined = nodeB.first(opt, visitorFn, ctxObject);
    }
    {
        let nodeReturned: Node|undefined = nodeB.first(opt, visitorFn);
    }
    {
        let nodeReturned: Node|undefined = nodeB.first(visitorFn, ctxObject);
    }
}

nodeC.drop();
