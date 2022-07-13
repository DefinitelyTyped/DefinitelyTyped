import { GitCommit } from './git-commit';
import { GitRefUpdate } from './git-ref-update';
import { GitRepository } from './git-repository';
import { GitUser } from './git-user';
import { GitPushLinks } from './git-push-links';
import { BaseResource } from './base-resource';

export interface GitPushResource extends BaseResource {
    commits: GitCommit[];
    refUpdates: GitRefUpdate[];
    repository: GitRepository;
    pushedBy: GitUser;
    pushId: number;
    date: string;
    url: string;
    _links: GitPushLinks;
}
