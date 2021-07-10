// Type definitions for find-package-json 1.2
// Project: https://github.com/3rd-Eden/find-package-json#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 fun4wut <https://github.com/fun4wut>
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

    interface PackageWithPath extends Package {
        /**
         * Path to the found `package.json` file.
         */
        __path: string;
    }

    interface Package {
        [k: string]: any;
        name?: string | undefined;
        version?: string | undefined;
        files?: string[] | undefined;
        bin?: { [k: string]: string } | undefined;
        man?: string[] | undefined;
        keywords?: string[] | undefined;
        author?: Person | undefined;
        maintainers?: Person[] | undefined;
        contributors?: Person[] | undefined;
        bundleDependencies?: { [name: string]: string } | undefined;
        dependencies?: { [name: string]: string } | undefined;
        devDependencies?: { [name: string]: string } | undefined;
        optionalDependencies?: { [name: string]: string } | undefined;
        description?: string | undefined;
        engines?: { [type: string]: string } | undefined;
        license?: string | undefined;
        repository?: { type: string; url: string } | undefined;
        bugs?: { url: string; email?: string | undefined } | { url?: string | undefined; email: string } | undefined;
        homepage?: string | undefined;
        scripts?: { [k: string]: string } | undefined;
        readme?: string | undefined;
        main?: string | undefined;
        module?: string | undefined;
        browser?: string | undefined;
        type?: string | undefined;
        types?: string | undefined;
        typings?: string | undefined;
    }

    interface Person {
        name?: string | undefined;
        email?: string | undefined;
        url?: string | undefined;
    }
}
