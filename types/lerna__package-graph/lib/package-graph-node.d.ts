import { Package } from '@lerna/package';
import { Result } from 'npm-package-arg';

export class PackageGraphNode {
    constructor(pkg: Package);
    name: string;
    get location(): string;
    get pkg(): Package;
    get prereleaseId(): string;
    get version(): string;
    localDependencies: Map<string, Result>;
    localDependents: Map<string, PackageGraphNode>;
    externalDependencies: Map<string, Result>;
    /**
     * Determine if the Node satisfies a resolved semver range.
     * @see https://github.com/npm/npm-package-arg#result-object
     *
     * @param resolved npm-package-arg Result object
     */
    satisfies(result: Pick<Result, 'gitCommittish' | 'gitRange' | 'fetchSpec'>): boolean;

    /**
     * Returns a string representation of this node (its name)
     */
    toString(): string;
}
