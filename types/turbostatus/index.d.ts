export interface Repository {
    name: string;
    path: string;
}

export interface Description {
    commitsSinceTag: string | false;
    hash: string;
    nearestTag: string | false;
}

export function checkout(folder: string, commit: string): Promise<string>;
export function clone(origin: string, folder: string): Promise<string>;
export function describe(folder: string): Promise<Description>;
export function getBranch(folder: string): Promise<string>;
export function getBranchFast(folder: string): Promise<string>;
export function getLocalCommit(folder: string): Promise<string>;
export function getMergeBase(folder: string): Promise<string>;
export function getOrigin(folder: string): Promise<string>;
export function getRemoteCommit(folder: string): Promise<string>;
export function getRepos(folder: string, wildcard?: string): Promise<Repository[]>;
export function hasUncommited(folder: string): Promise<boolean>;
export function hasUntracked(folder: string): Promise<boolean>;
export function info(repo: Repository, remotes?: boolean): Promise<Repository>;
export function isRepo(folder: string): Promise<boolean>;
export function references(folder: string): Promise<string>;
