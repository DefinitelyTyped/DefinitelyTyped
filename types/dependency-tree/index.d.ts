// Type definitions for dependency-tree 6.1
// Project: https://github.com/mrjoelkemp/node-dependency-tree
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace dependencyTree {
    interface DependencyObj {
        [k: string]: DependencyObj;
    }

    interface Options {
        filename: string;
        directory?: string;
        requireConfig?: string;
        webpackConfig?: string;
        nodeModulesConfig?: any;
        detective?: any;
        visited?: DependencyObj;
        filter?(path: string): boolean;
        nonExistent?: string[];
        isListForm?: boolean;
    }

    function toList(options: Options): string[];
}

declare function dependencyTree(options: dependencyTree.Options): dependencyTree.DependencyObj;

export = dependencyTree;
