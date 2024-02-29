/// <reference types="node" />

export = madge;

/**
 * Creates a MadgeInstance for a given path.
 *
 * @param path A single file or directory, or an array of files/directories to read. A predefined tree can also be passed in as an object.
 * @param config The configuration to use (optional).
 * @returns A Promise resolved with the MadgeInstance object.
 */
declare function madge(path: madge.MadgePath, config?: madge.MadgeConfig): Promise<madge.MadgeInstance>;

declare namespace madge {
    /**
     * A created Madge instance.
     */
    interface MadgeInstance {
        /**
         * Return the module dependency graph as an object.
         *
         * @returns An object with all dependencies.
         */
        obj: () => MadgeModuleDependencyGraph;

        /**
         * Return produced warnings.
         *
         * @returns An object of warnings.
         */
        warnings: () => MadgeWarnings;

        /**
         * Return the modules that have circular dependencies.
         *
         * @returns An array of all modules that have circular dependencies.
         */
        circular: () => string[][];

        /**
         * Return circular dependency graph.
         *
         * @returns An object with only circular dependencies.
         */
        circularGraph: () => MadgeModuleDependencyGraph;

        /**
         * Return a list of modules that depends on a given module.
         *
         * @param id The ID of the module.
         * @returns An array of all modules that depend on the given module.
         */
        depends: (id: string) => string[];

        /**
         * Return a list of modules that no one is depending on.
         *
         * @returns An array of all modules that no one is depending on.
         */
        orphans: () => string[];

        /**
         * Return a list of modules that have no dependencies.
         *
         * @returns An array of all modules that have no dependencies.
         */
        leaves: () => string[];

        /**
         * Return the module dependency graph as DOT output.
         *
         * @param circularOnly Only include circular dependencies.
         * @returns A Promise resolved with a DOT string representation of the module dependency graph
         */
        dot: (circularOnly?: boolean) => Promise<string>;

        /**
         * Write dependency graph to image.
         *
         * @param imagePath The output path of the image.
         * @param circularOnly Only include circular dependencies.
         * @returns A Promise resolved with a full path to the written image.
         */
        image: (imagePath: string, circularOnly?: boolean) => Promise<string>;

        /**
         * Return Buffer with XML SVG representation of the dependency graph.
         *
         * @returns A Promise resolved with the XML SVG representation of the dependency graph as a Buffer.
         */
        svg: () => Promise<Buffer>;
    }

    interface MadgeModuleDependencyGraph {
        [id: string]: string[];
    }

    interface MadgeWarnings {
        skipped: string[];
    }

    /**
     * The path of a single file or directory, or an array of files/directories to read. A predefined tree can also be passed in as an object.
     */
    type MadgePath = string | string[] | object;

    /**
     * The configuration options for creating a Madge instance.
     */
    interface MadgeConfig {
        /**
         * Base directory to use instead of the default.
         *
         * @default undefined
         */
        baseDir?: string;

        /**
         * If shallow NPM modules should be included.
         *
         * @default false
         */
        includeNpm?: boolean;

        /**
         * Valid file extensions used to find files in directories.
         *
         * @default ['js']
         */
        fileExtensions?: string[];

        /**
         * An array of RegExp for excluding modules.
         *
         * @default undefined
         */
        excludeRegExp?: RegExp[];

        /**
         * RequireJS config for resolving aliased modules.
         *
         * @default undefined
         */
        requireConfig?: string;

        /**
         * Webpack config for resolving aliased modules.
         *
         * @default undefined
         */
        webpackConfig?: string;

        /**
         * TypeScript config for resolving aliased modules - Either a path to a tsconfig file or an object containing the config.
         *
         * @default undefined
         */
        tsConfig?: string | object;

        /**
         * Layout to use in the graph.
         *
         * @default 'dot'
         */
        layout?: string;

        /**
         * Sets the [direction](https://graphviz.gitlab.io/_pages/doc/info/attrs.html#d:rankdir) of the graph layout.
         *
         * @default 'LR'
         */
        rankdir?: "TB" | "LR" | "BT" | "RL";

        /**
         * Font name to use in the graph.
         *
         * @default 'Arial'
         */
        fontName?: string;

        /**
         * Font size to use in the graph.
         *
         * @default '14px'
         */
        fontSize?: string;

        /**
         * Background color for the graph.
         *
         * @default '#000000'
         */
        backgroundColor?: string;

        /**
         * A string specifying the [shape](https://graphviz.gitlab.io/_pages/doc/info/attrs.html#k:shape) of a node in the graph.
         *
         * @default 'box'
         */
        nodeShape?: string;

        /**
         * A string specifying the [style](https://graphviz.gitlab.io/_pages/doc/info/attrs.html#k:style) of a node in the graph.
         *
         * @default 'rounded'
         */
        nodeStyle?: string;

        /**
         * Default node color to use in the graph.
         *
         * @default '#c6c5fe'
         */
        nodeColor?: string;

        /**
         * Color to use for nodes with no dependencies.
         *
         * @default '#cfffac'
         */
        noDependencyColor?: string;

        /**
         * Color to use for circular dependencies.
         *
         * @default '#ff6c60'
         */
        cyclicNodeColor?: string;

        /**
         * Edge color to use in the graph.
         *
         * @default '#757575'
         */
        edgeColor?: string;

        /**
         * Custom Graphviz [options](https://graphviz.gitlab.io/_pages/doc/info/attrs.html).
         *
         * @default undefined
         */
        graphVizOptions?: object;

        /**
         * Custom Graphviz path.
         *
         * @default undefined
         */
        graphVizPath?: string;

        /**
         * Custom `detective` options for [dependency-tree](https://github.com/dependents/node-dependency-tree) and [precinct](https://github.com/dependents/node-precinct#usage).
         *
         * @default undefined
         */
        detectiveOptions?: object;

        /**
         * Function called with a dependency filepath (exclude a subtree by returning false).
         *
         * @default undefined
         */
        dependencyFilter?: (id: string) => boolean;
    }
}
