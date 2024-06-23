declare function rpt(root: string, cb: (er: Error | null, data: rpt.Node) => void): void;
declare function rpt(
    root: string,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    filterWith: (node: rpt.Node, kidName: string) => void | undefined | boolean,
    cb: (er: Error | null, data: rpt.Node) => void,
): void;

declare namespace rpt {
    class Node {
        id: number;
        name: string;
        package: any;
        children: Node[];
        parent: Node | null;
        path: string;
        realpath: string;
        error: Error | null;
        isLink: boolean;
        constructor(
            pkg: any,
            logical: string,
            physical: string,
            er: Error | null,
            cache: { [physical: string]: Node },
            fromLink?: boolean,
        );
    }

    class Link extends Node {
        isLink: true;
        target: Node;
        constructor(
            pkg: any,
            logical: string,
            physical: string,
            realpath: string,
            er: Error | null,
            cache: { [physical: string]: Node },
        );
    }
}

export = rpt;
