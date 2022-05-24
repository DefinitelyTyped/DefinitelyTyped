// Type definitions for find-package-json 1.2
// Project: https://github.com/3rd-Eden/find-package-json#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 fun4wut <https://github.com/fun4wut>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

/// <reference types="node"/>

import _PackageJSON from './package-json';

export = find;

/**
 * Find package.json files.
 *
 * @param root The root directory we should start searching in.
 * @returns Iterator interface.
 */
declare function find(root?: string | NodeModule): find.FinderIterator;

declare namespace find {
    interface FinderIterator extends IterableIterator<PackageWithPath> {
        /**
         * Return the parsed package.json that we find in a parent folder.
         *
         * @returns Value, filename and indication if the iteration is done.
         */
        next(): FindResult;
    }

    type FindResult = FoundPackage | Done;

    interface FoundPackage {
        done: false;
        value: PackageWithPath;
        /**
         * Path to the found `package.json` file.
         */
        filename: string;
    }
    interface Done {
        done: true;
        value: undefined;
        filename: undefined;
    }

    interface PackageWithPath extends _PackageJSON {
        /**
         * Path to the found `package.json` file.
         */
        __path: string;
    }

    type Package = _PackageJSON;
    type PackageJSON = _PackageJSON;
}
