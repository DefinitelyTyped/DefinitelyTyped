import { IApiBase } from './ApiBase.d';
import { Labels } from './Models/Labels.d';
import { Users } from './Models/Users.d';
import { Notes } from './Models/Notes.d';
import { Issues } from './Models/Issues.d';
import { Projects } from './Models/Projects.d';
import { Groups } from './Models/Groups.d';

export interface IApiBase {
    url?: string;
    token?: string;
    oauth_token?: string;
    base_url?: string;
    auth?: any;
    [key: string]: any;
}

export class ApiBase {
    constructor(options: IApiBase);
    public readonly client: this;
    public readonly groups: Groups
    public readonly projects: Projects
    public readonly issues: Issues
    public readonly notes: Notes
    public readonly users: Users
    public readonly labels: Labels
    public options: IApiBase;

    public handleOptions(): void;
    public init(): object;
}
