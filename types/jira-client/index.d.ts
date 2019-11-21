// Type definitions for jira-client 6.13
// Project: http://github.com/jira-node/node-jira-client
// Definitions by: Anatoliy Ostapenko <https://github.com/KOPTE3>
//                 Orta Therox <https://github.com/orta>
//                 Robert Kesterson <https://github.com/rkesters>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { CoreOptions, RequestResponse } from "request";
import { ReadStream } from "fs";

declare class JiraApi {
    private protocol: string;
    private host: string;
    private port: string | null;
    private apiVersion: string;
    private base: string;
    private intermediatePath?: string;
    private strictSSL: boolean;
    private webhookVersion: string;
    private greenhopperVersion: string;

    constructor(options: JiraApi.JiraApiOptions);

    findIssue(
        issueNumber: string,
        expand?: string,
        fields?: string,
        properties?: string,
        fieldsByKeys?: boolean
    ): Promise<JiraApi.JsonResponse>;

    getUnresolvedIssueCount(version: string): Promise<number>;

    getProject(project: string): Promise<JiraApi.JsonResponse>;

    createProject(project: string): Promise<JiraApi.JsonResponse>;

    findRapidView(projectName: string): Promise<JiraApi.JsonResponse[]>;

    getLastSprintForRapidView(rapidViewId: string): Promise<JiraApi.JsonResponse>;

    getSprintIssues(rapidViewId: string, sprintId: string): Promise<JiraApi.JsonResponse>;

    listSprints(rapidViewId: string): Promise<JiraApi.JsonResponse>;

    addIssueToSprint(issueId: string, sprintId: string): Promise<JiraApi.JsonResponse>;

    issueLink(link: JiraApi.LinkObject): Promise<JiraApi.JsonResponse>;

    getRemoteLinks(issueNumber: string): Promise<JiraApi.JsonResponse>;

    createRemoteLink(issueNumber: string, remoteLink: JiraApi.LinkObject): Promise<JiraApi.JsonResponse>;

    getVersions(project: string): Promise<JiraApi.JsonResponse>;

    createVersion(version: string): Promise<JiraApi.JsonResponse>;

    updateVersion(version: string): Promise<JiraApi.JsonResponse>;

    deleteVersion(
        versionId: string,
        moveFixIssuesToId: string,
        moveAffectedIssuesToId: string
    ): Promise<JiraApi.JsonResponse>;

    searchJira(searchString: string, optional?: JiraApi.SearchQuery): Promise<JiraApi.JsonResponse>;

    createUser(user: JiraApi.UserObject): Promise<JiraApi.JsonResponse>;

    searchUsers(options: JiraApi.SearchUserOptions): Promise<JiraApi.JsonResponse>;

    getUsersInGroup(groupname: string, startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse>;

    addNewIssue(issue: JiraApi.IssueObject): Promise<JiraApi.JsonResponse>;

    addWatcher(issueKey: string, username: string): Promise<JiraApi.JsonResponse>;

    getIssueWatchers(issueId: string): Promise<JiraApi.JsonResponse[]>;

    deleteIssue(issueId: string): Promise<JiraApi.JsonResponse>;

    updateIssue(issueId: string, issueUpdate: JiraApi.IssueObject, query?: JiraApi.Query): Promise<JiraApi.JsonResponse>;

    listComponents(project: string): Promise<JiraApi.JsonResponse>;

    addNewComponent(component: JiraApi.ComponentObject): Promise<JiraApi.JsonResponse>;

    deleteComponent(componentId: string): Promise<JiraApi.JsonResponse>;

    createCustomField(field: JiraApi.FieldObject): Promise<JiraApi.JsonResponse>;

    listFields(): Promise<JiraApi.FieldObject[]>;

    createFieldOption(fieldKey: string, option: JiraApi.FieldOptionObject): Promise<JiraApi.JsonResponse>;

    listFieldOptions(fieldKey: string): Promise<JiraApi.JsonResponse>;

    upsertFieldOption(
        fieldKey: string,
        optionId: string,
        option: JiraApi.FieldOptionObject
    ): Promise<JiraApi.JsonResponse>;

    getFieldOption(fieldKey: string, optionId: string): Promise<JiraApi.JsonResponse>;

    deleteFieldOption(fieldKey: string, optionId: string): Promise<JiraApi.JsonResponse>;

    getIssueProperty(issueNumber: string, property: string): Promise<JiraApi.JsonResponse>;

    listPriorities(): Promise<JiraApi.JsonResponse>;

    listTransitions(issueId: string): Promise<JiraApi.JsonResponse>;

    transitionIssue(issueId: string, issueTransition: JiraApi.TransitionObject): Promise<JiraApi.JsonResponse>;

    listProjects(): Promise<JiraApi.JsonResponse>;

    addComment(issueId: string, comment: string): Promise<JiraApi.JsonResponse>;

    updateComment(issueId: string, commentId: string, comment: string, options?: any): Promise<JiraApi.JsonResponse>;

    addWorklog(
        issueId: string,
        worklog: JiraApi.WorklogObject,
        newEstimate?: JiraApi.EstimateObject
    ): Promise<JiraApi.JsonResponse>;

    deleteWorklog(issueId: string, worklogId: string): Promise<JiraApi.JsonResponse>;

    getIssueWorklogs(issueId: string): Promise<JiraApi.JsonResponse>;

    listIssueTypes(): Promise<JiraApi.JsonResponse>;

    registerWebhook(webhook: JiraApi.WebhookObject): Promise<JiraApi.JsonResponse>;

    listWebhooks(): Promise<JiraApi.JsonResponse>;

    getWebhook(webhookID: string): Promise<JiraApi.JsonResponse>;

    deleteWebhook(webhookID: string): Promise<JiraApi.JsonResponse>;

    getCurrentUser(): Promise<JiraApi.JsonResponse>;

    getBacklogForRapidView(rapidViewId: string): Promise<JiraApi.JsonResponse>;

    addAttachmentOnIssue(issueId: string, readStream: ReadStream): Promise<JiraApi.JsonResponse>;

    issueNotify(issueId: string, notificationBody: JiraApi.NotificationObject): Promise<JiraApi.JsonResponse>;

    listStatus(): Promise<JiraApi.JsonResponse>;

    getDevStatusSummary(issueId: string): Promise<JiraApi.JsonResponse>;

    getDevStatusDetail(issueId: string, applicationType: string, dataType: string): Promise<JiraApi.JsonResponse>;

    moveToBacklog(issues: string[]): Promise<JiraApi.JsonResponse>;

    getAllBoards(
        startAt?: number,
        maxResults?: number,
        type?: string,
        name?: string,
        projectKeyOrId?: string
    ): Promise<JiraApi.JsonResponse>;

    createBoard(boardBody: JiraApi.BoardObject): Promise<JiraApi.JsonResponse>;

    getBoard(boardId: string): Promise<JiraApi.JsonResponse>;

    deleteBoard(boardId: string): Promise<JiraApi.JsonResponse>;

    getIssuesForBacklog(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    getConfiguration(boardId: string): Promise<JiraApi.JsonResponse>;

    getIssuesForBoard(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    getEpics(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        done?: "true" | "false"
    ): Promise<JiraApi.JsonResponse>;

    getBoardIssuesForEpic(
        boardId: string,
        epicId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    getProjects(boardId: string, startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse>;

    getProjectsFull(boardId: string): Promise<JiraApi.JsonResponse>;

    getBoardPropertiesKeys(boardId: string): Promise<JiraApi.JsonResponse>;

    deleteBoardProperty(boardId: string, propertyKey: string): Promise<JiraApi.JsonResponse>;

    setBoardProperty(boardId: string, propertyKey: string, body: string): Promise<JiraApi.JsonResponse>;

    getBoardProperty(boardId: string, propertyKey: string): Promise<JiraApi.JsonResponse>;

    getAllSprints(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        state?: "future" | "active" | "closed"
    ): Promise<JiraApi.JsonResponse>;

    getBoardIssuesForSprint(
        boardId: string,
        sprintId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    getAllVersions(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        released?: "true" | "false"
    ): Promise<JiraApi.JsonResponse>;

    private makeRequestHeader(uri: string, options?: JiraApi.UriOptions);

    private makeUri(options: JiraApi.UriOptions): string;

    private makeWebhookUri(options: JiraApi.UriOptions): string;

    private makeSprintQueryUri(options: JiraApi.UriOptions): string;

    private makeDevStatusUri(options: JiraApi.UriOptions): string;

    private makeAgileUri(options: JiraApi.UriOptions): string;

    private doRequest(requestOptions: CoreOptions): Promise<RequestResponse>;
}

declare namespace JiraApi {
    interface JiraApiOptions {
        protocol?: string;
        host: string;
        port?: string;
        username?: string;
        password?: string;
        apiVersion?: string;
        base?: string;
        intermediatePath?: string;
        strictSSL?: boolean;
        request?: any;
        timeout?: number;
        webhookVersion?: string;
        greenhopperVersion?: string;
        bearer?: string;
        oauth?: OAuth;
    }

    interface OAuth {
        consumer_key: string;
        consumer_secret: string;
        access_token: string;
        access_token_secret: string;
        signature_method?: string;
    }

    interface LinkObject {
        [name: string]: any;
    }

    interface Query {
        [name: string]: any;
    }

    interface JsonResponse {
        [name: string]: any;
    }

    interface UserObject {
        [name: string]: any;
    }

    interface IssueObject {
        [name: string]: any;
    }

    interface ComponentObject {
        [name: string]: any;
    }

    interface FieldObject {
        [name: string]: any;
    }

    interface FieldOptionObject {
        [name: string]: any;
    }

    interface TransitionObject {
        [name: string]: any;
    }

    interface WorklogObject {
        [name: string]: any;
    }

    interface EstimateObject {
        [name: string]: any;
    }

    interface WebhookObject {
        [name: string]: any;
    }

    interface NotificationObject {
        [name: string]: any;
    }

    interface BoardObject {
        [name: string]: any;
    }

    interface SearchUserOptions {
        username: string;
        startAt?: number;
        maxResults?: number;
        includeActive?: boolean;
        includeInactive?: boolean;
    }

    interface SearchQuery {
        startAt?: number;
        maxResults?: number;
        fields?: string[];
        expand?: string[];
    }

    interface UriOptions {
        pathname: string;
        query?: Query;
        intermediatePath?: string;
    }
}
 export = JiraApi;
