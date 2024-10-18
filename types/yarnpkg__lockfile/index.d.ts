export interface Dependency {
    [packageName: string]: string;
}

export interface FirstLevelDependency {
    version: string;
    resolved?: string | undefined;
    dependencies?: Dependency | undefined;
}

export interface LockFileObject {
    [packageName: string]: FirstLevelDependency;
}

export function parse(
    file: string,
    fileLoc?: string,
): {
    type: "success" | "merge" | "conflict";
    object: LockFileObject;
};

export function stringify(
    json: any,
    noHeader?: boolean,
    enableVersions?: boolean,
): string;
