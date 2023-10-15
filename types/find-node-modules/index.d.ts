// Type definitions for find-node-modules 2.1
// Project: https://github.com/callumacrae/find-node-modules
// Definitions by: Artem Klyuev <https://github.com/ArtemKlyuev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace findNodeModules {
    interface Options {
        /**
         * The directory to start the search from
         *
         * @default process.cwd()
         */
        cwd?: string | undefined;
        /**
         * What directory to search for
         *
         * @default 'node_modules'
         */
        searchFor?: string | undefined;
        /**
         * If false, returns absolute paths
         *
         * @default true
         */
        relative?: boolean | undefined;
    }
}

/**
 * Return an array of all parent node_modules directories
 *
 * @example
 * import findNodeModules from 'find-node-modules';
 *
 * findNodeModules();
 * //=> ['node_modules', '../../node_modules']
 *
 * findNodeModules({ cwd: './someDir' });
 * //=> ['../node_modules', '../../../node_modules']
 *
 * findNodeModules('./someDir');
 * //=> ['../node_modules', '../../../node_modules']
 *
 * findNodeModules({ cwd: './someDir', relative: false });
 * //=> ['/path/to/something/node_modules', '/path/node_modules']
 */
declare function findNodeModules(options?: string | findNodeModules.Options): string[];

export = findNodeModules;
