import { GitLink } from './git-link';

export interface GitPushLinks {
    self: GitLink;
    repository: GitLink;
    commits: GitLink;
    pusher: GitLink;
    refs: GitLink;
}
