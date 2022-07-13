import { GitProject } from "./git-project";

export interface GitRepository {
    id: string;
    name: string;
    url: string;
    project: GitProject;
    defaultBranch: string;
    remoteUrl: string;
}