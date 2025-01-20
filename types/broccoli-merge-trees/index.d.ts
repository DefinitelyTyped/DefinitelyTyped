import { InputNode } from "broccoli-node-api";
import Plugin = require("broccoli-plugin");

export = broccoliMergeTrees;

/**
 * @param inputNodes An array of nodes, whose contents will be merged
 * @param options A hash of options
 */
declare function broccoliMergeTrees(
    inputNodes: InputNode[],
    options?: broccoliMergeTrees.Options,
): broccoliMergeTrees.MergeTrees;

declare namespace broccoliMergeTrees {
    class MergeTrees extends Plugin {
        constructor(inputNodes: InputNode[], options?: Options);

        build(): void | never;
    }

    interface Options {
        /**
         * A descriptive annotation. Useful for debugging, to tell multiple instances of the same plugin apart.
         */
        annotation?: string;

        /**
         * A string representing the destination path that merged files will be copied to.
         */
        destDir?: string;

        /**
         * By default, broccoli-merge-trees throws an error when a file exists in multiple nodes.
         * If you pass `{ overwrite: true }`, the output will contain the version of the file
         * as it exists in the last input node that contains it.
         */
        overwrite?: boolean;
    }
}
