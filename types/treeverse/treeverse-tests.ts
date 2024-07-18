import { breadth, depth } from "treeverse";

interface Node {
    id: number;
    nodes: Node[];
}

(async () => {
    const nodeC: Node = { id: 2, nodes: [] };
    const nodeB: Node = { id: 1, nodes: [nodeC] };
    const nodeA: Node = { id: 0, nodes: [nodeB, nodeC] };

    // Simple traversal
    // $ExpectType unknown
    breadth({
        tree: nodeA,
        getChildren: node => node.nodes,
    });

    // Traversal with a value and filter
    // $ExpectType number
    breadth({
        tree: nodeA,
        getChildren: node => node.nodes,
        visit: node => node.id,
        filter: node => node.id !== 1,
    });

    // Traversal with a value that changes `getChildren`
    // $ExpectType number
    breadth({
        tree: nodeA,
        visit: node => node.id + 1,
        getChildren: (node, value) => node.nodes.slice(value),
    });

    // "Promised" traversal 1
    // $ExpectType Promise<number>
    breadth({
        tree: nodeA,
        getChildren: async node => node.nodes,
        visit: async node => node.id,
        filter: node => node.id !== 1,
    });

    // "Promised" traversal 2
    // $ExpectType Promise<number>
    breadth({
        tree: nodeA,
        getChildren: async node => node.nodes,
        visit: node => node.id,
        filter: async node => node.id !== 1,
    });

    // Traversal with empty `leave`
    // $ExpectType void
    depth({
        tree: nodeA,
        leave: () => {},
        getChildren: node => node.nodes,
    });

    // Traversal with `leave`
    // $ExpectType number
    depth({
        tree: nodeA,
        leave: (node: number, children) => node + children.length,
        getChildren: (node, value) => node.nodes.slice(value),
        visit: node => node.id,
    });

    // Promised traversal with `leave`
    // $ExpectType Promise<number>
    depth({
        tree: nodeA,
        leave: async (node: number, children) => node + children.length,
        getChildren: async (node, value) => node.nodes.slice(value),
    });

    // Manually typed
    breadth<number, string | Node, number[]>({
        tree: 10,
        getChildren: (node, value) => [node, typeof value === "string" ? value.length : value.id],
        visit: () => "a",
    });

    // Types "inferred" from usage
    // $ExpectType number[]
    breadth({
        tree: 10 as number | string,
        getChildren: (node, value: number[]) => value.map(v => (typeof v === "string" ? v : v * 2)),
        filter: node => (typeof node === "string" ? node.startsWith("id-") : node % 2 === 0),
    });

    // Types "inferred" from usage (Promise)
    // $ExpectType Promise<number[]>
    breadth({
        tree: 10 as number | string,
        getChildren: async (node, value: number[]) => value.map(v => (typeof v === "string" ? v : v * 2)),
        filter: async node => (typeof node === "string" ? node.startsWith("id-") : node % 2 === 0),
    });

    // -- Errors

    breadth({
        tree: nodeA,
        getChildren: node => node.nodes,
        // @ts-expect-error -- `getChildren` is not a Promise
        visit: async node => node.id.toString(),
    });

    breadth({
        tree: nodeA,
        getChildren: node => node.nodes,
        // @ts-expect-error -- `getChildren` is not a Promise
        filter: async () => true,
    });

    depth({
        tree: nodeA,
        getChildren: node => node.nodes,
        // @ts-expect-error -- `getChildren` is not a Promise
        leave: async node => node.id.toString(),
    });

    depth({
        tree: nodeA,
        leave: (node: number, children) => node + children.length,
        getChildren: (node, value) => node.nodes.slice(value),
        // @ts-expect-error -- Should be a number
        visit: node => node.id.toString(),
    });
})();
