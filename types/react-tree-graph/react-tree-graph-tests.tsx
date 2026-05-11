import * as React from "react";
import { AnimatedTree, Data, Tree } from "react-tree-graph";

const missingTreeProps = () => (
    // @ts-expect-error
    <Tree />
);

const missingAnimatedTreeProps = () => (
    // @ts-expect-error
    <AnimatedTree />
);

// @ts-expect-error
const invalidData: Data = [];
// @ts-expect-error
const invalidData2: Data = {};
// @ts-expect-error
const invalidData3: Data = { name: 123, children: [] };

const data: Data = { name: "sample name", children: [] };
const data2: Data = { name: "sample name", children: [data] };

const basicTree = () => <Tree data={data} width={100} height={100} />;

const basicAnimatedTree = () => <AnimatedTree data={data} width={100} height={100} />;

const complexTree = () => (
    <Tree
        data={data}
        width={100}
        height={100}
        nodeShape="circle"
        direction="ltr"
        getChildren={(node) => node.children}
        labelProp="name"
        keyProp="id"
        margins={{ top: 5, bottom: 5, right: 2, left: 2 }}
        pathProps={{
            onFocus: (event, sourceNodeId, targetNodeId) => {
                // $ExpectType string
                sourceNodeId;
                // $ExpectType string
                targetNodeId;
            },
        }}
        textProps={{ color: "red" }}
        gProps={{ autoFocus: true }}
        nodeProps={{ disabled: true }}
    />
);

const animatedTree = () => (
    <AnimatedTree
        data={data}
        width={100}
        height={100}
        duration={5000}
        easing={(t) => t * 2}
        steps={500}
    />
);

const complexAnimatedTree = () => (
    <AnimatedTree
        data={data}
        width={100}
        height={100}
        duration={5000}
        easing={(t) => t * 2}
        steps={500}
        nodeShape="circle"
        direction="ltr"
        getChildren={(node) => node.children}
        textProps={{ color: "red" }}
        gProps={{
            autoFocus: true,
            onClick: (event, nodeId) => {
                // $ExpectType string
                nodeId;
            },
        }}
        nodeProps={{ disabled: true }}
    />
);
