// Type definitions for tree-model 1.0.6
// Project: https://github.com/joaonuno/tree-model-js
// Definitions by: Abhas Bhattacharya <https://github.com/bendtherules>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
declare module "tree-model" {
    export = TreeModel;

    class TreeModel {
        constructor(config?: TreeModelMisc.Config);

        private config: TreeModelMisc.Config;

        parse(model: TreeModelMisc.Model): TreeModelMisc.Node;

    }

    namespace TreeModelMisc {

        class Node {
            constructor(config: any, model: TreeModelMisc.Model);

            isRoot(): boolean;
            hasChildren(): boolean;
            addChild(child: Node): Node;
            addChildAtIndex(child: Node, index: number): Node;
            setIndex(index: number): Node;
            getPath(): Array<Node>;
            getIndex(): number;

            walk(options: TreeModelMisc.Options, fn: TreeModelMisc.NodeVisitorFunction, ctx: Object): void;
            walk(options: TreeModelMisc.Options, fn: TreeModelMisc.NodeVisitorFunction): void;
            walk(fn: TreeModelMisc.NodeVisitorFunction, ctx?: Object): void;

            all(options: TreeModelMisc.Options, fn: TreeModelMisc.NodeVisitorFunction, ctx: Object): Array<Node>;
            all(options: TreeModelMisc.Options, fn: TreeModelMisc.NodeVisitorFunction): Array<Node>;
            all(fn: TreeModelMisc.NodeVisitorFunction, ctx?: Object): Array<Node>;

            first(options: TreeModelMisc.Options, fn: TreeModelMisc.NodeVisitorFunction, ctx: Object): Node | undefined;
            first(options: TreeModelMisc.Options, fn: TreeModelMisc.NodeVisitorFunction): Node | undefined;
            first(fn: TreeModelMisc.NodeVisitorFunction, ctx?: Object): Node | undefined;

            drop(): Node;

            [propName: string]: any;
        }

        interface Config {
            /**
             * The name for the children array property. Default is "children".
             */
            childrenPropertyName?: string;
            modelComparatorFn?: ComparatorFunction;
            [propName: string]: any;
        }

        interface Options {
            strategy: StrategyName;
        }

        type StrategyName = "pre" | "post" | "breadth";

        type ComparatorFunction = (left: any, right: any) => boolean;
        type NodeVisitorFunction = (visitingNode: Node) => boolean;

        interface Model {
            /**
             * Children array property name is set from `config.childrenPropertyName`(default: "children")
             *
             * config is passed in `TreeModel` constructor
             */
            children?: Array<Model>;
            [propName: string]: any;
        }
    }
}
