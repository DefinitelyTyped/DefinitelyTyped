import { Runners } from './Runners.d';
import { Pipelines } from './Pipelines.d';
import { ProjectBuilds } from './ProjectBuilds.d';
import { ProjectMergeRequests } from './ProjectMergeRequests.d';
import { ProjectKeys } from './ProjectDeployKeys.d';
import { ProjectMilestones } from './ProjectMilestones.d';
import { ProjectRepository } from './ProjectRepository.d';
import { ProjectLabels } from './ProjectLabels.d';
import { ProjectIssues } from './ProjectIssues.d';
import { ProjectHooks } from './ProjectHooks.d';
import { ProjectMembers } from './ProjectMembers.d';
import { BaseModel, IDefParams, TId} from '../BaseModel.d';
import { ProjectServices } from './ProjectServices.d';

type ProjectsCb = (projects: any[]) => any;

export class Projects extends BaseModel {

    public readonly members: ProjectMembers;
    public readonly hooks : ProjectHooks;
    public readonly issues : ProjectIssues;
    public readonly labels : ProjectLabels;
    public readonly repository: ProjectRepository;
    public readonly milestones: ProjectMilestones;
    public readonly deploy_keys: ProjectKeys;
    public readonly merge_requests: ProjectMergeRequests;
    public readonly services: ProjectServices;
    public readonly builds: ProjectBuilds;
    public readonly pipelines: Pipelines;
    public readonly runners: Runners;


    public all(fn?: ProjectsCb): any;
    public all(params?: IDefParams, fn?: ProjectsCb): any;
    public allAdmin(fn?: Function): any;
    public allAdmin(params?: IDefParams, fn?: Function): any;
    public show(projectId: TId, fn?: Function): any;
    public create(params: object, fn?: Function): any;
    public create_for_user(params: object, fn?: Function): any;
    public edit(projectId: TId, params: object, fn?: Function): any;
    public addMember(params?: object, fn?: Function): any;
    public editMember(params?: object, fn?: Function): any;
    public listMembers(params?: object, fn?: Function): any;
    public listCommits(params?: object, fn?: Function): any;
    public listTags(params?: object, fn?: Function): any;
    public remove(projectId: TId, fn?: Function): any;
    public fork(params?: object, fn?: Function): any;
    public share(params?: object, fn?: Function): any;
    public search(projectName: string, fn?: Function): any;
    public search(projectName: string, params?: object, fn?: Function): any;
    public listTriggers(projectId: TId, fn?: Function): any;
    public showTrigger(projectId: TId, token: string, fn?: Function): any;
    public createTrigger(params?: object, fn?: Function): any;
    public removeTrigger(projectId: TId, token: string, fn?: Function): any;
}
