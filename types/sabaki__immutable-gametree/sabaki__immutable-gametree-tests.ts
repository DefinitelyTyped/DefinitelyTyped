import GameTree = require("@sabaki/immutable-gametree");

const genIdString = ((id) => () => "id_" + (id++))(0);

// ==============
// class GameTree
// ==============

// $ExpectType GameTree<number>
const tree: GameTree<number> = new GameTree<number>();

// $ExpectType GameTree<string>
new GameTree({
    getId: genIdString,
});

// $ExpectType () => number
tree.getId;

// $ExpectType (node: NodeObject<number>, data: Partial<Record<Property, string[]>>) => Partial<Record<Property, string[]>> | null
tree.merger;

// $ExpectType NodeObject<number>
tree.root;

// $ExpectType NodeObject<number> | null
tree.get(0);

// $ExpectType Generator<NodeObject<number>, void, any> || Generator<NodeObject<number>, void, unknown>
tree.getSequence(0);

// $ExpectType GameTree<number>
tree.mutate((d) => {
    // $ExpectType Draft<number>
    const draft = d;

    // ===========
    // class Draft
    // ===========

    // $ExpectType NodeObject<number>
    draft.root;

    // $ExpectType NodeObject<number> | null
    draft.get(0);

    // $ExpectType number | null
    draft.appendNode(0, { FF: ["4"] }, {});

    // $ExpectType boolean
    draft.UNSAFE_appendNodeWithId(0, 1, { FF: ["4"] }, {});

    // $ExpectType boolean
    draft.removeNode(0);

    // $ExpectType number | null
    draft.shiftNode(0, "main");

    // $ExpectType boolean
    draft.makeRoot(0);

    // $ExpectType boolean
    draft.addToProperty(0, "FF", "4");

    // $ExpectType boolean
    draft.removeFromProperty(0, "FF", "4");

    // $ExpectType boolean
    draft.updateProperty(0, "FF", ["4"]);

    // $ExpectType boolean
    draft.removeProperty(0, "FF");
});

// $ExpectType NodeObject<number> | null
tree.navigate(0, 1, { 0: 0 });

// $ExpectType Generator<NodeObject<number>, void, any> || Generator<NodeObject<number>, void, unknown>
tree.listNodes();

// $ExpectType Generator<NodeObject<number>, void, any> || Generator<NodeObject<number>, void, unknown>
tree.listNodesHorizontally(0, 1);

// $ExpectType Generator<NodeObject<number>, void, any> || Generator<NodeObject<number>, void, unknown>
tree.listNodesVertically(0, 1, { 0: 0 });

// $ExpectType Generator<NodeObject<number>, void, any> || Generator<NodeObject<number>, void, unknown>
tree.listCurrentNodes({ 0: 0 });

// $ExpectType Generator<NodeObject<number>, void, any> || Generator<NodeObject<number>, void, unknown>
tree.listMainNodes();

// $ExpectType number | null
tree.getLevel(0);

// $ExpectType Generator<NodeObject<number>, void, any> || Generator<NodeObject<number>, void, unknown>
tree.getSection(0);

// $ExpectType number
tree.getCurrentHeight({ 0: 0 });

// $ExpectType number
tree.getHeight();

// $ExpectType string
tree.getHash();

// $ExpectType string
tree.getStructureHash();

// $ExpectType boolean
tree.onCurrentLine(0, { 0: 0 });

// $ExpectType boolean
tree.onMainLine(0);

// $ExpectType NodeObject<number>
tree.toJSON();
