import { GitLink } from "./git-link";

export interface GitPullLinks {
    self: GitLink;
    web: GitLink;
    repository: GitLink;
    workItems: GitLink;
    sourceBranch: GitLink;
    targetBranch: GitLink;
    sourceCommit: GitLink;
    targetCommit: GitLink;
    createdBy: GitLink;
}