import { GitUserInfo } from './git-user-info';

export interface GitCommit {
    commitId: string;
    author: GitUserInfo;
    committer: GitUserInfo;
    comment: string;
    url: string;
}
