import { Labels } from './Models/Labels.d';
import { Users } from './Models/Users.d';
import { Notes } from './Models/Notes.d';
import { Issues } from './Models/Issues.d';
import { Projects } from './Models/Projects.d';
import { Groups } from './Models/Groups.d';

export interface IApiBase {
    url?: string;
    token?: string;
    [key: string]: any;
}

export class ApiBase {
    constructor(options: IApiBase);
    public groups: Groups
    public projects: Projects
    public issues: Issues
    public notes: Notes
    public users: Users
    public labels: Labels
    public handleOptions(): void;
    public init(): object;
}
