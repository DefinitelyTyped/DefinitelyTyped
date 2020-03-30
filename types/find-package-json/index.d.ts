// Type definitions for find-package-json 1.1
// Project: https://github.com/3rd-Eden/find-package-json#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export = finder;

declare function finder(root?: string | NodeModule): finder.FinderIterator;

declare namespace finder {
    interface FinderIterator {
        next(): FindResult;
    }

    type FindResult = FoundPackage | Done;

    interface FoundPackage {
        done: false;
        value: Package;
        filename: string;
    }

    interface Done {
        done: true;
        value: undefined;
        filename: undefined;
    }

    interface Person {
        name?: string;
        email?: string;
        url?: string;
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
}
