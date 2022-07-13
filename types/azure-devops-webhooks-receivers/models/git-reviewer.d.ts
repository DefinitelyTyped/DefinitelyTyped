import { GitUser } from './git-user';

export interface GitReviewer extends GitUser {
    reviewerUrl: string;
    vote: number;
    isContainer: boolean;
}
