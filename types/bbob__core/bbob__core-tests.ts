import core, { Plugin, Plugins } from "@bbob/core";

// index.d.ts

const stringify = (val: any) => JSON.stringify(val);

const process = (plugins: Plugins, input: string) => core(plugins).process(input, { render: stringify });

// $ExpectType ProcessResponse
const response = process([], "[style size=\"15px\"]Large Text[/style]");

// $ExpectType string
response.html;

// $ExpectType Tree
response.tree;

const testPlugin: () => Plugin = () => (tree) =>
    tree.walk(node => {
        return node;
    });

// $ExpectType Plugin
testPlugin();

// $ExpectType (cb: (val: TagNode) => TagNode) => Tree
response.tree.walk;
