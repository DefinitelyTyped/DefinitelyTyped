import TreeModel = require("tree-model");

const tree = new TreeModel({});
const root = tree.parse({ name: 'a', children: [{ name: 'b' }, { name: 'c' }] });

root.isRoot();
root.hasChildren();
{
    const tmpNodeB = root.first((node) => node.name === 'b');
    const tmpNodeC = root.first((node) => node.name === 'c');
    if (typeof tmpNodeB !== "undefined" && typeof tmpNodeC !== "undefined") {
        const nodeB = tmpNodeB;
        const nodeC = tmpNodeC;

        type Node = typeof nodeB;

        root.addChild(nodeC);
        root.addChildAtIndex(nodeC, 0);

        nodeB.setIndex(0);
        const arrPath: Node[] = nodeB.getPath();
        const nodeIndex: number = nodeB.getIndex();

        const opt = { strategy: <'post' | 'pre'> 'post' };
        const visitorFn = (tm: Node) => true;
        const ctxObject = {};

        // Test Node.walk with different overloads no return type
        {
            {
                nodeB.walk(opt, visitorFn, ctxObject);
            }
            {
                nodeB.walk(opt, visitorFn);
            }
            {
                nodeB.walk(visitorFn, ctxObject);
            }
        }

        // Test Node.all with different overloads and their return type
        {
            {
                const nodeArr: Node[] = nodeB.all(opt, visitorFn, ctxObject);
            }
            {
                const nodeArr: Node[] = nodeB.all(opt, visitorFn);
            }
            {
                const nodeArr: Node[] = nodeB.all(visitorFn, ctxObject);
            }
        }

        // Test Node.first with different overloads and their return type
        {
            {
                const nodeReturned: Node | undefined = nodeB.first(opt, visitorFn, ctxObject);
            }
            {
                const nodeReturned: Node | undefined = nodeB.first(opt, visitorFn);
            }
            {
                const nodeReturned: Node | undefined = nodeB.first(visitorFn, ctxObject);
            }
        }

        nodeC.drop();
    }
}
