import treeify, { type Options, type RenderFunction, type SortFunction } from "object-treeify";

const tree = {
    parent: {
        child: "value",
    },
};

// $ExpectType string
treeify(tree);

// $ExpectType string[]
treeify(tree, { joined: false });

const renderFn: RenderFunction = (node) => node;
const sortFn: SortFunction = (firstKey, secondKey) => firstKey.localeCompare(secondKey);
const options: Options = {
    renderFn,
    sortFn,
    breakCircularWith: null,
};

// $ExpectType string | string[]
treeify(tree, options);

// @ts-expect-error for unsupported option
treeify(tree, { unknownOption: true });

// @ts-expect-error for invalid return type
treeify(tree, { sortFn: () => "invalid" });
