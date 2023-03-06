import { Buf } from './buf';
import { Repository } from './repository';
import { WorktreeAddOptions } from './worktree-add-options';
import { WorktreePruneOptions } from './worktree-prune-options';

export namespace Worktree {
    const enum PRUNE {
        VALID = 1,
        LOCKED = 2,
        WORKING_TREE = 4,
    }
}

export class Worktree {
    /**
     * @param repo - Repository to create working tree for
     * @param name - Name of the working tree
     * @param path - Path to create working tree at
     * @param opts - Options to modify default behavior. May be NULL
     */
    static add(repo: Repository, name: string, path: string, opts?: WorktreeAddOptions): Promise<Worktree>;

    /**
     * @param repo - the repo to use when listing working trees
     */
    static list(repo: Repository): Promise<string[]>;

    /**
     * @param repo - The repository containing worktrees
     * @param name - Name of the working tree to look up
     */
    static lookup(repo: Repository, name: string): Promise<Worktree>;

    /**
     * @param repo - Repository to look up worktree for
     */
    static openFromRepository(repo: Repository): Promise<Worktree>;

    /**
     * @param reason - Buffer to store reason in. If NULL no reason is stored.
     * @returns - 0 when the working tree not locked, a value greater than zero if it is locked, less than zero if there was an error
     */
    isLocked(reason?: Buf): number;

    isPrunable(opts: WorktreePruneOptions): number;

    /**
     * @param reason - Reason why the working tree is being locked
     * @returns - 0 on success, non-zero otherwise
     */
    lock(reason: string): number;

    name(): string;
    path(): string;

    /**
     * @param opts - Specifies which checks to override. See isPrunable. May be NULL
     * @returns - 0 or an error code
     */
    prune(opts?: WorktreePruneOptions): number;

    /**
     * @returns - 0 on success, 1 if worktree was not locked, error-code
     */
    unlock(): number;

    /**
     * @returns - 0 when worktree is valid, error-code otherwise
     */
    validate(): number;
}
