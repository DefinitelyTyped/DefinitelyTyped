import SnapdragonNode = require("snapdragon-node");

// Constructor with type and value
const node = new SnapdragonNode("text", "hello");

// Constructor with object
const nodeFromObj = new SnapdragonNode({ type: "brace", value: "{" });
const cloned = new SnapdragonNode({ type: "text", value: "test" }, true);

// Properties
const isNode: boolean = node.isNode;
const type: string = node.type;
const val: string = node.value;

// push / unshift
const child = new SnapdragonNode("child", "world");
const len: number = node.push(child);
const len2: number = node.unshift(new SnapdragonNode("first", "!"));

// pop / shift
const popped: SnapdragonNode | undefined = node.pop();
const shifted: SnapdragonNode | undefined = node.shift();

// remove
const removed: SnapdragonNode[] = node.remove(child);

// find
node.push(new SnapdragonNode("inner", "x"));
const found: SnapdragonNode | null = node.find("inner");
const foundN: SnapdragonNode | null = node.find("inner", 2);

// visit
node.visit(n => {
    const t: string = n.type;
});

// clone
const copy: SnapdragonNode = node.clone();

// stringify
const str: string = node.stringify();
const strCustom: string = node.stringify(n => n.value);

// Type checks
const isText: boolean = node.isType("text");
const hasText: boolean = node.hasType("text");
const hasChild: boolean = node.has(new SnapdragonNode("test", ""));
const empty: boolean = node.isEmpty();
const emptyCustom: boolean = node.isEmpty(n => n.value === "");
const inside: boolean = node.isInside("brace");

// Getters
const siblings: SnapdragonNode[] | null = node.siblings;
const idx: number = node.index;
const prev: SnapdragonNode | null = node.prev;
const next: SnapdragonNode | null = node.next;
const first: SnapdragonNode | null = node.first;
const last: SnapdragonNode | null = node.last;
const depth: number = node.depth;
const size: number = node.size;

// Parent
const parent: SnapdragonNode | undefined = node.parent;

// Static isNode
const check: boolean = SnapdragonNode.isNode(node);
if (SnapdragonNode.isNode(node)) {
    const t: string = node.type;
}
