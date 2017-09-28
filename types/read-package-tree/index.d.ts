// Type definitions for read-package-tree 5.1
// Project: https://github.com/npm/read-package-tree
// Definitions by: Melvin Groenhoff <https://github.com/mgroenhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function rpt(root: string, cb: (er: Error | null, data: rpt.Node) => void): void;
declare function rpt(root: string, filterWith: (node: rpt.Node, kidName: string) => void | undefined | boolean, cb: (er: Error | null, data: rpt.Node) => void): void;

declare namespace rpt {
    class Node {
        id: number;
        package: any;
        children: Node[];
        parent: Node | null;
        path: string;
        realpath: string;
        error: Error | null;
        isLink: boolean;
        constructor(pkg: any, logical: string, physical: string, er: Error | null, cache: { [physical: string]: Node; }, fromLink?: boolean);
    }

    class Link extends Node {
        isLink: true;
        target: Node;
        constructor(pkg: any, logical: string, physical: string, realpath: string, er: Error | null, cache: { [physical: string]: Node; });
    }
}

export = rpt;
