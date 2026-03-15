interface PackageJson {
    name?: string | undefined;
    bin?: string | string[] | { [name: string]: string } | undefined;
    [key: string]: any;
}

/**
 * Normalize a package.json's bin field into a standard object format.
 * Mutates the package object and returns it.
 */
declare function normalize<T extends PackageJson>(pkg: T): T;
export = normalize;
