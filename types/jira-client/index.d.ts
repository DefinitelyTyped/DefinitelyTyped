// Type definitions for jira-client 6.21
// Project: http://github.com/jira-node/node-jira-client
// Definitions by: Anatoliy Ostapenko <https://github.com/KOPTE3>
//                 Orta Therox <https://github.com/orta>
//                 Robert Kesterson <https://github.com/rkesters>
//                 Lemeasle Quentin <https://github.com/Worlor>
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
    private intermediatePath?: string | undefined;
    private strictSSL: boolean;
    private webhookVersion: string;
    private greenhopperVersion: string;

    constructor(options: JiraApi.JiraApiOptions);

    /**
     * Find an issue in jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290709)
     * @param issueNumber - The issue number to search for including the project key
     * @param expand - The resource expansion to return additional fields in the response
     * @param fields - Comma separated list of field ids or keys to retrieve
     * @param properties - Comma separated list of properties to retrieve
     * @param fieldsByKeys - False by default, used to retrieve fields by key instead of id
     */
    findIssue(
        issueNumber: string,
        expand?: string,
        fields?: string,
        properties?: string,
        fieldsByKeys?: boolean
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Download an attachment
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id288524)
     * @param attachment - the attachment
     */
    downloadAttachment(attachment: object): Promise<JiraApi.JsonResponse>;

    /**
     * Get the unresolved issue count
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id288524)
     * @param version - the version of your product you want to find the unresolved
     * issues of.
     */
    getUnresolvedIssueCount(version: string): Promise<number>;

    /**
     * Get the Project by project key
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id289232)
     * @param project - key for the project
     */
    getProject(project: string): Promise<JiraApi.JsonResponse>;

    /**
     * Create a new Project
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/project-createProject)
     * @param project - with specs
     */
    createProject(project: JiraApi.ProjectObject): Promise<JiraApi.JsonResponse>;

    /**
     * Find the Rapid View for a specified project
     * @param projectName - name for the project
     */
    findRapidView(projectName: string): Promise<JiraApi.JsonResponse[]>;

    /**
     * Get the most recent sprint for a given rapidViewId
     * @param rapidViewId - the id for the rapid view
     */
    getLastSprintForRapidView(rapidViewId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get the issues for a rapidView / sprint
     * @param rapidViewId - the id for the rapid view
     * @param sprintId - the id for the sprint
     */
    getSprintIssues(rapidViewId: string, sprintId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get a list of Sprints belonging to a Rapid View
     * @param rapidViewId - the id for the rapid view
     */
    listSprints(rapidViewId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Add an issue to the project's current sprint
     * @param issueId - the id of the existing issue
     * @param sprintId - the id of the sprint to add it to
     */
    addIssueToSprint(issueId: string, sprintId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Create an issue link between two issues
     * @param link - a link object formatted how the Jira API specifies
     */
    issueLink(link: JiraApi.LinkObject): Promise<JiraApi.JsonResponse>;

    /**
     * List all issue link types jira knows about
     * [Jira Doc](https://docs.atlassian.com/software/jira/docs/api/REST/8.5.0/#api/2/issueLinkType-getIssueLinkTypes)
     */
    listIssueLinkTypes(): Promise<JiraApi.JsonResponse>;

    /**
     * Retrieves the remote links associated with the given issue.
     * @param issueNumber - the issue number to find remote links for.
     */
    getRemoteLinks(issueNumber: string): Promise<JiraApi.JsonResponse>;

    /**
     * Creates a remote link associated with the given issue.
     * @param issueNumber - The issue number to create the remotelink under
     * @param remoteLink - the remotelink object as specified by the Jira API
     */
    createRemoteLink(issueNumber: string, remoteLink: JiraApi.LinkObject): Promise<JiraApi.JsonResponse>;

    /**
     * Get Versions for a project
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id289653)
     * @param project - A project key to get versions for
     */
    getVersions(project: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get details of single Version in project
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/version-getVersion)
     * @param version - The id of this version
     */
    getVersion(version: string): Promise<JiraApi.JsonResponse>;

    /**
     * Create a version
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id288232)
     * @param version - an object of the new version
     */
    createVersion(version: JiraApi.VersionObject): Promise<JiraApi.JsonResponse>;

    /**
     * Update a version
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#d2e510)
     * @param version - an new object of the version to update
     */
    updateVersion(version: JiraApi.VersionObject): Promise<JiraApi.JsonResponse>;

    /**
     * Delete a version
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/version-delete)
     * @param versionId - the ID of the version to delete
     * @param moveFixIssuesToId - when provided, existing fixVersions will be moved
     *                 to this ID. Otherwise, the deleted version will be removed from all
     *                 issue fixVersions.
     * @param moveAffectedIssuesToId - when provided, existing affectedVersions will
     *                 be moved to this ID. Otherwise, the deleted version will be removed
     *                 from all issue affectedVersions.
     */
    deleteVersion(
        versionId: string,
        moveFixIssuesToId: string,
        moveAffectedIssuesToId: string
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Move version
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/version-moveVersion)
     * @param versionId - the ID of the version to delete
     * @param position - an object of the new position
     */
    moveVersion(versionId: string, position: string): Promise<JiraApi.JsonResponse>;

    /**
     * Pass a search query to Jira
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#d2e4424)
     * @param searchString - jira query string in JQL
     * @param optional - object containing any of the following properties
     */
    searchJira(searchString: string, optional?: JiraApi.SearchQuery): Promise<JiraApi.JsonResponse>;

    /**
     * Create a Jira user
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/user-createUser)
     * @param user - Properly Formatted User object
     */
    createUser(user: JiraApi.UserObject): Promise<JiraApi.JsonResponse>;

    /**
     * Search user on Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#d2e3756)
     * @param options
     */
    searchUsers(options: JiraApi.SearchUserOptions): Promise<JiraApi.JsonResponse>;

    /**
     * Get all users in group on Jira
     * @param groupname - A query string used to search users in group
     * @param [startAt=0] - The index of the first user to return (0-based)
     * @param [maxResults=50] - The maximum number of users to return (defaults to 50).
     */
    getUsersInGroup(groupname: string, startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse>;

    /**
     * Get issues related to a user
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id296043)
     * @param username - username of user to search for
     * @param open - determines if only open issues should be returned
     */
    getUsersIssues(username: string, open: boolean): Promise<JiraApi.JsonResponse>;

    /**
     * Returns a user.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-user-get)
     * @param accountId - The accountId of user to search for
     * @param expand - The expand for additional info (groups,applicationRoles)
     */
    getUser(accountId: string, expand: string): Promise<JiraApi.JsonResponse>;

    /**
     * Returns a list of all (active and inactive) users.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-users-search-get)
     * @param [startAt=0] - The index of the first user to return (0-based)
     * @param [maxResults=50] - The maximum number of users to return (defaults to 50).
     */
    getUsers(startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse[]>;

    /**
     * Add issue to Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290028)
     * @param issue - Properly Formatted Issue object
     */
    addNewIssue(issue: JiraApi.IssueObject): Promise<JiraApi.JsonResponse>;

    /**
     * Add a user as a watcher on an issue
     * @param issueKey - the key of the existing issue
     * @param username - the jira username to add as a watcher to the issue
     */
    addWatcher(issueKey: string, username: string): Promise<JiraApi.JsonResponse>;

    /**
     * Change an assignee on an issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue-assign)
     * @param issueKey - the key of the existing issue
     * @param assigneeName - the jira username to add as a new assignee to the issue
     */
    updateAssignee(issueKey: string, assigneeName: string): Promise<JiraApi.JsonResponse>;

    /**
     * Change an assignee on an issue
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-issue-issueIdOrKey-assignee-put)
     * @param issueKey - the key of the existing issue
     * @param userId - the jira username to add as a new assignee to the issue
     */
    updateAssigneeWithId(issueKey: string, userId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Delete issue from Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290791)
     * @param issueId - the Id of the issue to delete
     */
    deleteIssue(issueId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Update issue in Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290878)
     * @param issueId - the Id of the issue to update
     * @param issueUpdate - update Object as specified by the rest api
     * @param query - adds parameters to the query string
     */
    updateIssue(issueId: string, issueUpdate: JiraApi.IssueObject, query?: JiraApi.Query): Promise<JiraApi.JsonResponse>;

    /**
     * List Components
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @param project - key for the project
     */
    listComponents(project: string): Promise<JiraApi.JsonResponse>;

    /**
     * Add component to Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290028)
     * @param component - Properly Formatted Component
     */
    addNewComponent(component: JiraApi.ComponentObject): Promise<JiraApi.JsonResponse>;

    /**
     * Update Jira component
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/component-updateComponent)
     * @param componentId - the Id of the component to update
     * @param component - Properly Formatted Component
     */
    updateComponent(componentId: string, component: JiraApi.ComponentObject): Promise<JiraApi.JsonResponse>;

    /**
     * Delete component from Jira
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-api-2-component-id-delete)
     * @param id - The ID of the component.
     * @param moveIssuesTo - The ID of the component to replace the deleted component.
     *                                If this value is null no replacement is made.
     */
    deleteComponent(componentId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get count of issues assigned to the component.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-component-id-relatedIssueCounts-get)
     * @param id - Component Id.
     */
    relatedIssueCounts(id: string): Promise<JiraApi.JsonResponse>;

    /**
     * Create custom Jira field
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field-createCustomField)
     * @param field - Properly formatted Field object
     */
    createCustomField(field: JiraApi.FieldObject): Promise<JiraApi.JsonResponse>;

    /**
     * List all fields custom and not that jira knows about.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     */
    listFields(): Promise<JiraApi.FieldObject[]>;

    /**
     * Add an option for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-createOption)
     * @param fieldKey - the key of the select list field
     * @param option - properly formatted Option object
     */
    createFieldOption(fieldKey: string, option: JiraApi.FieldOptionObject): Promise<JiraApi.JsonResponse>;

    /**
     * Returns all options defined for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-getAllOptions)
     * @param fieldKey - the key of the select list field
     */
    listFieldOptions(fieldKey: string): Promise<JiraApi.JsonResponse>;

    /**
     * Creates or updates an option for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-putOption)
     * @param fieldKey - the key of the select list field
     * @param optionId - the id of the modified option
     * @param option - properly formatted Option object
     */
    upsertFieldOption(
        fieldKey: string,
        optionId: string,
        option: JiraApi.FieldOptionObject): Promise<JiraApi.JsonResponse>;

    /**
     * Returns an option for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-getOption)
     * @param fieldKey - the key of the select list field
     * @param optionId - the id of the option
     */
    getFieldOption(fieldKey: string, optionId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Deletes an option from a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-delete)
     * @param fieldKey - the key of the select list field
     * @param optionId - the id of the deleted option
     */
    deleteFieldOption(fieldKey: string, optionId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get Property of Issue by Issue and Property Id
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue/{issueIdOrKey}/properties-getProperty)
     * @param issueNumber - The issue number to search for including the project key
     * @param property - The property key to search for
     */
    getIssueProperty(issueNumber: string, property: string): Promise<JiraApi.JsonResponse>;

    /**
     * List all changes for an issue, sorted by date, starting from the latest
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue/{issueIdOrKey}/changelog)
     * @param issueNumber - The issue number to search for including the project key
     * @param [startAt=0] - optional starting index number
     * @param [maxResults=50] - optional ending index number
     */
    getIssueChangelog(issueNumber: string, startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse>;

    /**
     * List all watchers for an issue
     * [Jira Doc](http://docs.atlassian.com/jira/REST/cloud/#api/2/issue-getIssueWatchers)
     * @param issueNumber - The issue number to search for including the project key
     */
    getIssueWatchers(issueId: string): Promise<JiraApi.JsonResponse[]>;

    /**
     * List all priorities jira knows about
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     */
    listPriorities(): Promise<JiraApi.JsonResponse>;

    /**
     * List Transitions for a specific issue that are available to the current user
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @param issueId - get transitions available for the issue
     */
    listTransitions(issueId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Transition issue in Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @param issueId - the Id of the issue to delete
     * @param issueTransition - transition object from the jira rest API
     */
    transitionIssue(issueId: string, issueTransition: JiraApi.TransitionObject): Promise<JiraApi.JsonResponse>;

    /**
     * List all Viewable Projects
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id289193)
     */
    listProjects(): Promise<JiraApi.JsonResponse[]>;

    /**
     * Add a comment to an issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#id108798)
     * @param issueId - Issue to add a comment to
     * @param comment - string containing comment
     */
    addComment(issueId: string, comment: string): Promise<JiraApi.JsonResponse>;

    /**
     * Add a comment to an issue, supports full comment object
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#id108798)
     * @param issueId - Issue to add a comment to
     * @param comment - The object containing your comment data
     */
    addCommentAdvanced(issueId: string, comment: JiraApi.CommentAdvancedObject): Promise<JiraApi.JsonResponse>;

    /**
     * Update comment for an issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue-updateComment)
     * @param issueId - Issue with the comment
     * @param commentId - Comment that is updated
     * @param comment - string containing new comment
     * @param [options={}] - extra options
     */
    updateComment(issueId: string, commentId: string, comment: string, options?: JiraApi.CommentOptions): Promise<JiraApi.JsonResponse>;

    /**
     * Get Comments by IssueId.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-comment-list-post)
     * @param issueId - this issue this comment is on
     */
    getComments(issueId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get Comment by Id.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-comment-list-post)
     * @param issueId - this issue this comment is on
     * @param commentId - the id of the comment
     */
    getComment(issueId: string, commentId: number): Promise<JiraApi.JsonResponse>;

    /**
     * Delete Comments by Id.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-comment-list-post)
     * @param issueId - this issue this comment is on
     * @param commentId - the id of the comment
     */
    deleteComment(issueId: string, commentId: number): Promise<JiraApi.JsonResponse>;

    /**
     * Add a worklog to a project
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id291617)
     * @param issueId - Issue to add a worklog to
     * @param worklog - worklog object from the rest API
     * @param [optional] newEstimate - the new value for the remaining estimate field
     * @param [options={}] - extra options
     */
    addWorklog(
        issueId: string,
        worklog: JiraApi.WorklogObject,
        newEstimate?: JiraApi.EstimateObject,
        options?: JiraApi.WorklogOptions
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Get ids of worklogs modified since
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/worklog-getWorklogsForIds)
     * @param since - a date time in unix timestamp format since when updated worklogs
     * will be returned.
     * @param expand - ptional comma separated list of parameters to expand: properties
     * (provides worklog properties).
     */
    updatedWorklogs(since: number, expand: string): Promise<JiraApi.JsonResponse>;

    /**
     * Delete worklog from issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#d2e1673)
     * @param issueId - the Id of the issue to delete
     * @param worklogId - the Id of the worklog in issue to delete
     */
    deleteWorklog(issueId: string, worklogId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Deletes an issue link.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issueLink-linkId-delete)
     * @param linkId - the Id of the issue link to delete
     */
    deleteIssueLink(linkId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Returns worklog details for a list of worklog IDs.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-worklog-list-post)
     * @param worklogsIDs - a list of worklog IDs.
     * @param expand - expand to include additional information about worklogs
     *
     */
    getWorklogs(worklogsIDs: string[], expand: string): Promise<JiraApi.JsonResponse[]>;

    /**
     * Get worklogs list from a given issue
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-api-3-issue-issueIdOrKey-worklog-get)
     * @param issueId - the Id of the issue to find worklogs for
     * @param [startAt=0] - optional starting index number
     * @param [maxResults=1000] - optional ending index number
     */
    getIssueWorklogs(issueId: string): Promise<JiraApi.JsonResponse>;

    /**
     * List all Issue Types jira knows about
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id295946)
     */
    listIssueTypes(): Promise<JiraApi.JsonResponse>;

    /**
     * Register a webhook
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @param webhook - properly formatted webhook
     */
    registerWebhook(webhook: JiraApi.WebhookObject): Promise<JiraApi.JsonResponse>;

    /**
     * List all registered webhooks
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     */
    listWebhooks(): Promise<JiraApi.JsonResponse>;

    /**
     * Get a webhook by its ID
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @param webhookID - id of webhook to get
     */
    getWebhook(webhookID: string): Promise<JiraApi.JsonResponse>;

    /**
     * Delete a registered webhook
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @param webhookID - id of the webhook to delete
     */
    deleteWebhook(webhookID: string): Promise<JiraApi.JsonResponse>;

    /**
     * Describe the currently authenticated user
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id2e865)
     */
    getCurrentUser(): Promise<JiraApi.JsonResponse>;

    /**
     * Retrieve the backlog of a certain Rapid View
     * @param rapidViewId - rapid view id
     */
    getBacklogForRapidView(rapidViewId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Add attachment to a Issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/issue/{issueIdOrKey}/attachments-addAttachment)
     * @param issueId - issue id
     * @param readStream - readStream object from fs
     */
    addAttachmentOnIssue(issueId: string, readStream: ReadStream): Promise<JiraApi.JsonResponse>;

    /**
     * Notify people related to issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue-notify)
     * @param issueId - issue id
     * @param notificationBody - properly formatted body
     */
    issueNotify(issueId: string, notificationBody: JiraApi.NotificationObject): Promise<JiraApi.JsonResponse>;

    /**
     * Get list of possible statuses
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/status-getStatuses)
     */
    listStatus(): Promise<JiraApi.JsonResponse>;

    /**
     * Get a Dev-Status summary by issue ID
     * @param issueId - id of issue to get
     */
    getDevStatusSummary(issueId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get a Dev-Status detail by issue ID
     * @param issueId - id of issue to get
     * @param applicationType - type of application (stash, bitbucket)
     * @param dataType - info to return (repository, pullrequest)
     */
    getDevStatusDetail(issueId: string, applicationType: string, dataType: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get issue
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-getIssue)
     * @param issueIdOrKey - Id of issue
     * @param [fields] - [optional] The list of fields to return for each issue.
     * @param [expand] - [optional] A comma-separated list of the parameters to expand.
     */
    getIssue(issueIdOrKey: string, fields?: string | string[], expand?: string): Promise<JiraApi.JsonResponse>;

    /**
     * Move issues to backlog
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/backlog-moveIssuesToBacklog)
     * @param issues - id or key of issues to get
     */
    moveToBacklog(issues: string[]): Promise<JiraApi.JsonResponse>;

    /**
     * Get all boards
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getAllBoards)
     * @param [startAt=0] - The starting index of the returned boards.
     * @param [maxResults=50] - The maximum number of boards to return per page.
     * @param [type] - Filters results to boards of the specified type.
     * @param [name] - Filters results to boards that match the specified name.
     * @param [projectKeyOrId] - Filters results to boards that are relevant to a project.
     */
    getAllBoards(
        startAt?: number,
        maxResults?: number,
        type?: string,
        name?: string,
        projectKeyOrId?: string
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Create Board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-createBoard)
     * @param boardBody - Board name, type and filter Id is required.
     */
    createBoard(boardBody: JiraApi.BoardObject): Promise<JiraApi.JsonResponse>;

    /**
     * Get Board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getBoard)
     * @param boardId - Id of board to retrieve
     */
    getBoard(boardId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Delete Board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-deleteBoard)
     * @param boardId - Id of board to retrieve
     */
    deleteBoard(boardId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get issues for backlog
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getIssuesForBacklog)
     * @param boardId - Id of board to retrieve
     * @param [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param [jql] - Filters results using a JQL query.
     * @param [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param [fields] - The list of fields to return for each issue.
     */
    getIssuesForBacklog(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Get Configuration
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getConfiguration)
     * @param boardId - Id of board to retrieve
     */
    getConfiguration(boardId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get issues for board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getIssuesForBoard)
     * @param boardId - Id of board to retrieve
     * @param [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param [jql] - Filters results using a JQL query.
     * @param [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param [fields] - The list of fields to return for each issue.
     */
    getIssuesForBoard(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Get Epics
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/epic-getEpics)
     * @param boardId - Id of board to retrieve
     * @param [startAt=0] - The starting index of the returned epics. Base index: 0.
     * @param [maxResults=50] - The maximum number of epics to return per page. Default: 50.
     * @param [done] - Filters results to epics that are either done or not done.
     * Valid values: true, false.
     */
    getEpics(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        done?: "true" | "false"
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Get board issues for epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/epic-getIssuesForEpic)
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/epic-getIssuesWithoutEpic)
     * @param boardId - Id of board to retrieve
     * @param epicId - Id of epic to retrieve, specify 'none' to get issues without an epic.
     * @param [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param [jql] - Filters results using a JQL query.
     * @param [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param [fields] - The list of fields to return for each issue.
     */
    getBoardIssuesForEpic(
        boardId: string,
        epicId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Estimate issue for board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-estimateIssueForBoard)
     * @param issueIdOrKey - Id of issue
     * @param boardId - The id of the board required to determine which field
     * is used for estimation.
     * @param body - value to set
     */
    estimateIssueForBoard(issueIdOrKey: string, boardId: number, body: string): Promise<JiraApi.JsonResponse>;

    /**
     * Rank Issues
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-rankIssues)
     * @param body - value to set
     */
    rankIssues(body: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get Projects
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/project-getProjects)
     * @param boardId - Id of board to retrieve
     * @param [startAt=0] - The starting index of the returned projects. Base index: 0.
     * @param [maxResults=50] - The maximum number of projects to return per page.
     * Default: 50.
     */
    getProjects(boardId: string, startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse>;

    /**
     * Get Projects Full
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/project-getProjectsFull)
     * @param boardId - Id of board to retrieve
     */
    getProjectsFull(boardId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get Board Properties Keys
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-getPropertiesKeys)
     * @param boardId - Id of board to retrieve
     */
    getBoardPropertiesKeys(boardId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Delete Board Property
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-deleteProperty)
     * @param boardId - Id of board to retrieve
     * @param propertyKey - Id of property to delete
     */
    deleteBoardProperty(boardId: string, propertyKey: string): Promise<JiraApi.JsonResponse>;

    /**
     * Set Board Property
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-setProperty)
     * @param boardId - Id of board to retrieve
     * @param propertyKey - Id of property to delete
     * @param body - value to set, for objects make sure to stringify first
     */
    setBoardProperty(boardId: string, propertyKey: string, body: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get Board Property
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-getProperty)
     * @param boardId - Id of board to retrieve
     * @param propertyKey - Id of property to retrieve
     */
    getBoardProperty(boardId: string, propertyKey: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get All Sprints
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/sprint-getAllSprints)
     * @param boardId - Id of board to retrieve
     * @param [startAt=0] - The starting index of the returned sprints. Base index: 0.
     * @param [maxResults=50] - The maximum number of sprints to return per page.
     * Default: 50.
     * @param [state] - Filters results to sprints in specified states.
     * Valid values: future, active, closed.
     */
    getAllSprints(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        state?: "future" | "active" | "closed"
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Get Board issues for sprint
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/sprint-getIssuesForSprint)
     * @param boardId - Id of board to retrieve
     * @param sprintId - Id of sprint to retrieve
     * @param [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param [jql] - Filters results using a JQL query.
     * @param [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param [fields] - The list of fields to return for each issue.
     */
    getBoardIssuesForSprint(
        boardId: string,
        sprintId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Get All Versions
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/version-getAllVersions)
     * @param boardId - Id of board to retrieve
     * @param [startAt=0] - The starting index of the returned versions. Base index: 0.
     * @param [maxResults=50] - The maximum number of versions to return per page.
     * Default: 50.
     * @param [released] - Filters results to versions that are either released or
     * unreleased.Valid values: true, false.
     */
    getAllVersions(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        released?: "true" | "false"
    ): Promise<JiraApi.JsonResponse>;

    /**
     * Get Filter
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/filter)
     * @param filterId - Id of filter to retrieve
     */
    getFilter(filterId: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get Epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-getEpic)
     * @param epicIdOrKey - Id of epic to retrieve
     */
    getEpic(epicIdOrKey: string): Promise<JiraApi.JsonResponse>;

    /**
     * Partially update epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-partiallyUpdateEpic)
     * @param epicIdOrKey - Id of epic to retrieve
     * @param body - value to set, for objects make sure to stringify first
     */
    partiallyUpdateEpic(epicIdOrKey: string, body: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get issues for epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-getIssuesForEpic)
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-getIssuesWithoutEpic)
     * @param epicId - Id of epic to retrieve, specify 'none' to get issues without an epic.
     * @param [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param [jql] - Filters results using a JQL query.
     * @param [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param [fields] - The list of fields to return for each issue.
     */
    getIssuesForEpic(epicId: string, startAt?: number, maxResults?: number, jql?: string, validateQuery?: boolean, fields?: string): Promise<JiraApi.JsonResponse>;

    /**
     * Move Issues to Epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-moveIssuesToEpic)
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-removeIssuesFromEpic)
     * @param epicIdOrKey - Id of epic to move issue to, or 'none' to remove from epic
     * @param issues - array of issues to move
     */
    moveIssuesToEpic(epicIdOrKey: string, issues: string[]): Promise<JiraApi.JsonResponse>;

    /**
     * Rank Epics
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-rankEpics)
     * @param epicIdOrKey - Id of epic
     * @param body - value to set (stringify first)
     */
    rankEpics(epicIdOrKey: string, body: string): Promise<JiraApi.JsonResponse>;

    /**
     * Get server info
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-api-2-serverInfo-get)
     */
    getServerInfo(): Promise<JiraApi.JsonResponse>;

    /**
     * @param optional - object containing any of the following properties
     * Get metadata for creating an issue.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-createmeta-get)
     */
    getIssueCreateMetadata(optional?: JiraApi.CreateIssueMetadataObject): Promise<JiraApi.JsonResponse>;

    /**
     * Generic Get Request
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/2/)
     * @param endpoint - Rest API endpoint
     */
    genericGet(endpoint: string): Promise<JiraApi.JsonResponse>;

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
        protocol?: string | undefined;
        host: string;
        port?: string | undefined;
        username?: string | undefined;
        password?: string | undefined;
        apiVersion?: string | undefined;
        base?: string | undefined;
        intermediatePath?: string | undefined;
        strictSSL?: boolean | undefined;
        request?: any;
        timeout?: number | undefined;
        webhookVersion?: string | undefined;
        greenhopperVersion?: string | undefined;
        bearer?: string | undefined;
        oauth?: OAuth | undefined;
        ca?: string | undefined;
    }

    interface OAuth {
        consumer_key: string;
        consumer_secret: string;
        access_token: string;
        access_token_secret: string;
        signature_method?: string | undefined;
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
        /** Valid values: scrum, kanban */
        type: 'scrum' | 'kanban';
        /** Must be less than 255 characters. */
        name: string;
        /** Id of a filter that the user has permissions to view. */
        filterId: string;
    }

    interface AttachmentObject {
        [name: string]: any;
    }

    interface ProjectObject {
        [name: string]: any;
    }

    interface VersionObject {
        [name: string]: any;
    }

    interface CommentAdvancedObject {
        [name: string]: any;
    }

    interface CommentOptions {
        [name: string]: any;
    }

    interface WorklogOptions {
        [name: string]: any;
    }

    interface CreateIssueMetadataObject {
        /**  [optional] Array of project ids to return metadata for */
        projectIds?: string[] | undefined;
        /**  [optional] Array of project keys to return metadata for */
        projectKeys?: string[] | undefined;
        /**  [optional] Array of issuetype ids to return metadata for */
        issuetypeIds?: string[] | undefined;
        /**  [optional] Array of issuetype names to return metadata for */
        issuetypeNames?: string[] | undefined;
        /**  [optional] Include additional information about issue metadata. Valid value is 'projects.issuetypes.fields' */
        expand?: string | undefined;
    }

    interface SearchUserOptions {
        /** (DEPRECATED) A query string used to search username, name or e-mail address */
        username: string;
        /**
         * A query string that is matched against user attributes
         * (displayName, and emailAddress) to find relevant users. The string can match the prefix of
         * the attribute's value. For example, query=john matches a user with a displayName of John
         * Smith and a user with an emailAddress of johnson@example.com. Required, unless accountId
         * or property is specified.
         */
        query: string;
        /** [optional - default = 0] The index of the first user to return (0-based) */
        startAt?: number | undefined;
        /** [optional - default = 50] The maximum number of users to return */
        maxResults?: number | undefined;
        /** [optional - default = true] If true, then active users are included in the results */
        includeActive?: boolean | undefined;
        /** [optional - default = true] If true, then inactive users are included in the results */
        includeInactive?: boolean | undefined;
    }

    interface SearchQuery {
        /** [optional - default = 0] starting index number */
        startAt?: number | undefined;
        /**
         *  [optional - default = 50] The maximum number of items to
         *  return per page. To manage page size, Jira may return fewer items per
         *  page where a large number of fields are requested.
         */
        maxResults?: number | undefined;
        /** [optional] array of string names of desired fields */
        fields?: string[] | undefined;
        /** [optional] array of string names of desired expand nodes */
        expand?: string[] | undefined;
    }

    interface UriOptions {
        pathname: string;
        query?: Query | undefined;
        intermediatePath?: string | undefined;
    }
}
export = JiraApi;
