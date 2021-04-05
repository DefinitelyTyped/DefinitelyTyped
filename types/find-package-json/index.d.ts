// Type definitions for find-package-json 1.2
// Project: https://github.com/3rd-Eden/find-package-json#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

/// <reference types="node"/>

export = find;

/**
 * Find package.json files.
 *
 * @param root The root directory we should start searching in.
 * @returns Iterator interface.
 */
declare function find(root?: string | NodeModule): finder.FinderIterator;

declare namespace finder {
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

    interface PackageWithPath extends Package {
        /**
         * Path to the found `package.json` file.
         */
        __path: string;
    }

    interface Package {
        [k: string]: any;
        name?: string;
        version?: string;
        files?: string[];
        bin?: { [k: string]: string };
        man?: string[];
        keywords?: string[];
        author?: Person;
        maintainers?: Person[];
        contributors?: Person[];
        bundleDependencies?: { [name: string]: string };
        dependencies?: { [name: string]: string };
        devDependencies?: { [name: string]: string };
        optionalDependencies?: { [name: string]: string };
        description?: string;
        engines?: { [type: string]: string };
        license?: string;
        repository?: { type: string; url: string };
        bugs?: { url: string; email?: string } | { url?: string; email: string };
        homepage?: string;
        scripts?: { [k: string]: string };
        readme?: string;
    }

    interface Person {
        name?: string;
        email?: string;
        url?: string;
    }
}
