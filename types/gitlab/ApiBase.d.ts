import { ApiBaseOptions } from './ApiBase';
import { Labels } from './Models/Labels';
import { Users } from './Models/Users';
import { Notes } from './Models/Notes';
import { Issues } from './Models/Issues';
import { Projects } from './Models/Projects';
import { Groups } from './Models/Groups';

export interface ApiBaseOptions {
    url?: string;
    token?: string;
    oauth_token?: string;
    base_url?: string;
    auth?: any;
    [key: string]: any;
}

export class ApiBase {
    constructor(options: ApiBaseOptions);
    readonly client: this;
    readonly groups: Groups
    readonly projects: Projects
    readonly issues: Issues
    readonly notes: Notes
    readonly users: Users
    readonly labels: Labels
    options: ApiBaseOptions;

    handleOptions(): void;
    init(): object;
}
