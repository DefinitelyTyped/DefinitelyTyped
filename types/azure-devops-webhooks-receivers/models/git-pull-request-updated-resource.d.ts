import { GitPullRequestResource } from "./git-pull-request-resource";

export interface GitPullRequestUpdatedResource extends GitPullRequestResource {
    closedDate: string;
}