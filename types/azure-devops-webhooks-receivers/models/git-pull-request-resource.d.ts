import { GitRepository } from "./git-repository";
import { GitUser } from "./git-user";
import { GitMergeCommit } from "./git-merge-commit";
import { GitReviewer } from "./git-reviewer";
import { GitPullLinks } from "./git-pull-links";
import { GitCommit } from "./git-commit";
import { BaseResource } from "./base-resource";

export interface GitPullRequestResource extends BaseResource {
    repository: GitRepository;
    pullRequestId: number;
    status: string;
    createdBy: GitUser;
    creationDate: string;
    title: string;
    description: string;
    sourceRefName: string;
    targetRefName: string;
    mergeStatus: string;
    mergeId: string;
    lastMergeSourceCommit: GitMergeCommit;
    lastMergeTargetCommit: GitMergeCommit;
    lastMergeCommit: GitMergeCommit;
    reviewers: GitReviewer[];
    url: string;
    _links: GitPullLinks;
    commits: GitCommit[];
}