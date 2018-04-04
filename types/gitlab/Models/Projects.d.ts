import { Runners } from './Runners';
import { Pipelines } from './Pipelines';
import { ProjectBuilds } from './ProjectBuilds';
import { ProjectMergeRequests } from './ProjectMergeRequests';
import { ProjectKeys } from './ProjectDeployKeys';
import { ProjectMilestones } from './ProjectMilestones';
import { ProjectRepository } from './ProjectRepository';
import { ProjectLabels } from './ProjectLabels';
import { ProjectIssues } from './ProjectIssues';
import { ProjectHooks } from './ProjectHooks';
import { ProjectMembers } from './ProjectMembers';
import { BaseModel, DefParams, TId } from '../BaseModel';
import { ProjectServices } from './ProjectServices';

type ProjectsCb = (projects: any[]) => any;

export class Projects extends BaseModel {

    readonly members: ProjectMembers;
    readonly hooks: ProjectHooks;
    readonly issues: ProjectIssues;
    readonly labels: ProjectLabels;
    readonly repository: ProjectRepository;
    readonly milestones: ProjectMilestones;
    readonly deploy_keys: ProjectKeys;
    readonly merge_requests: ProjectMergeRequests;
    readonly services: ProjectServices;
    readonly builds: ProjectBuilds;
    readonly pipelines: Pipelines;
    readonly runners: Runners;


    all(fn?: ProjectsCb): any;
    all(params?: DefParams, fn?: ProjectsCb): any;
    allAdmin(fn?: Function): any;
    allAdmin(params?: DefParams, fn?: Function): any;
    show(projectId: TId, fn?: Function): any;
    create(params: object, fn?: Function): any;
    create_for_user(params: object, fn?: Function): any;
    edit(projectId: TId, params: object, fn?: Function): any;
    addMember(params?: object, fn?: Function): any;
    editMember(params?: object, fn?: Function): any;
    listMembers(params?: object, fn?: Function): any;
    listCommits(params?: object, fn?: Function): any;
    listTags(params?: object, fn?: Function): any;
    remove(projectId: TId, fn?: Function): any;
    fork(params?: object, fn?: Function): any;
    share(params?: object, fn?: Function): any;
    search(projectName: string, fn?: Function): any;
    search(projectName: string, params?: object, fn?: Function): any;
    listTriggers(projectId: TId, fn?: Function): any;
    showTrigger(projectId: TId, token: string, fn?: Function): any;
    createTrigger(params?: object, fn?: Function): any;
    removeTrigger(projectId: TId, token: string, fn?: Function): any;
}
