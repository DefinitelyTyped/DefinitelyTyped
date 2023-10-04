// utils.d.ts

import core, { Plugin, same } from "@bbob/core";

// $ExpectType boolean
same(1, {});

// $ExpectType boolean
same(true, true);

// $ExpectType boolean
same(null, null);

// $ExpectType boolean
same([1, 2, 3], [1, 2, 3, 4]);

// $ExpectType boolean
same({ foo: true, bar: 'test' }, { foo: true, bar: 'test', ext: true });

// index.d.ts

const stringify = (val: any) => JSON.stringify(val);

const process = (plugins: Plugin | Plugin[], input: string) => core(plugins).process(input, { render: stringify });

// $ExpectType ProcessResponse
const response = process([], '[style size="15px"]Large Text[/style]');

// $ExpectType string
response.html

// $ExpectType Tree
response.tree

const testPlugin: () => Plugin = () => (tree) => tree.walk(node => {
    return node
});

// $ExpectType Plugin
testPlugin();

// $ExpectType (cb: (val: TagNode) => TagNode) => Tree
response.tree.walk
