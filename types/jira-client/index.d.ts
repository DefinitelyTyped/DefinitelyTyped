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
    private intermediatePath?: string;
    private strictSSL: boolean;
    private webhookVersion: string;
    private greenhopperVersion: string;

    constructor(options: JiraApi.JiraApiOptions);

    /**
     * @name findIssue
     * @function
     * Find an issue in jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290709)
     * @param {string} issueNumber - The issue number to search for including the project key
     * @param {string} expand - The resource expansion to return additional fields in the response
     * @param {string} fields - Comma separated list of field ids or keys to retrieve
     * @param {string} properties - Comma separated list of properties to retrieve
     * @param {boolean} fieldsByKeys - False by default, used to retrieve fields by key instead of id
     */
    findIssue(
        issueNumber: string,
        expand?: string,
        fields?: string,
        properties?: string,
        fieldsByKeys?: boolean
    ): Promise<JiraApi.JsonResponse>;

    /**
     * @name downloadAttachment
     * @function
     * Download an attachment
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id288524)
     * @param {object} attachment - the attachment
     */
    downloadAttachment(attachment: object): Promise<JiraApi.JsonResponse>;

    /**
    * @name getUnresolvedIssueCount
    * @function
    * Get the unresolved issue count
    * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id288524)
    * @param {string} version - the version of your product you want to find the unresolved
    * issues of.
    */
    getUnresolvedIssueCount(version: string): Promise<number>;

    /**
    * @name getProject
    * @function
    * Get the Project by project key
    * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id289232)
    * @param {string} project - key for the project
    */
    getProject(project: string): Promise<JiraApi.JsonResponse>;

    /**
    * @name createProject
    * @function
    * Create a new Project
    * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/project-createProject)
    * @param {object} project - with specs
    */
    createProject(project: JiraApi.ProjectObject): Promise<JiraApi.JsonResponse>;

    /** Find the Rapid View for a specified project
    * @name findRapidView
    * @function
    * @param {string} projectName - name for the project
    */
    findRapidView(projectName: string): Promise<JiraApi.JsonResponse[]>;

    /** Get the most recent sprint for a given rapidViewId
    * @name getLastSprintForRapidView
    * @function
    * @param {string} rapidViewId - the id for the rapid view
    */
    getLastSprintForRapidView(rapidViewId: string): Promise<JiraApi.JsonResponse>;


    /** Get the issues for a rapidView / sprint
     * @name getSprintIssues
     * @function
     * @param {string} rapidViewId - the id for the rapid view
     * @param {string} sprintId - the id for the sprint
     */
    getSprintIssues(rapidViewId: string, sprintId: string): Promise<JiraApi.JsonResponse>;

    /** Get a list of Sprints belonging to a Rapid View
    * @name listSprints
    * @function
    * @param {string} rapidViewId - the id for the rapid view
    */
    listSprints(rapidViewId: string): Promise<JiraApi.JsonResponse>;

    /** Add an issue to the project's current sprint
     * @name addIssueToSprint
     * @function
     * @param {string} issueId - the id of the existing issue
     * @param {string} sprintId - the id of the sprint to add it to
     */
    addIssueToSprint(issueId: string, sprintId: string): Promise<JiraApi.JsonResponse>;

    /** Create an issue link between two issues
     * @name issueLink
     * @function
     * @param {object} link - a link object formatted how the Jira API specifies
     */
    issueLink(link: JiraApi.LinkObject): Promise<JiraApi.JsonResponse>;

    /** List all issue link types jira knows about
     * [Jira Doc](https://docs.atlassian.com/software/jira/docs/api/REST/8.5.0/#api/2/issueLinkType-getIssueLinkTypes)
     * @name listIssueLinkTypes
     * @function
     */
    listIssueLinkTypes(): Promise<JiraApi.JsonResponse>;

    /** Retrieves the remote links associated with the given issue.
     * @name getRemoteLinks
     * @function
     * @param {string} issueNumber - the issue number to find remote links for.
     */
    getRemoteLinks(issueNumber: string): Promise<JiraApi.JsonResponse>;

    /**
   * @name createRemoteLink
   * @function
   * Creates a remote link associated with the given issue.
   * @param {string} issueNumber - The issue number to create the remotelink under
   * @param {object} remoteLink - the remotelink object as specified by the Jira API
   */
    createRemoteLink(issueNumber: string, remoteLink: JiraApi.LinkObject): Promise<JiraApi.JsonResponse>;

    /** Get Versions for a project
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id289653)
     * @name getVersions
     * @function
     * @param {string} project - A project key to get versions for
     */
    getVersions(project: string): Promise<JiraApi.JsonResponse>;

    /** Get details of single Version in project
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/version-getVersion)
     * @name getVersion
     * @function
     * @param {string} version - The id of this version
     */
    getVersion(version: string): Promise<JiraApi.JsonResponse>;

    /** Create a version
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id288232)
     * @name createVersion
     * @function
     * @param {object} version - an object of the new version
     */
    createVersion(version: JiraApi.VersionObject): Promise<JiraApi.JsonResponse>;

    /** Update a version
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#d2e510)
     * @name updateVersion
     * @function
     * @param {object} version - an new object of the version to update
     */
    updateVersion(version: JiraApi.VersionObject): Promise<JiraApi.JsonResponse>;

    /** Delete a version
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/version-delete)
     * @name deleteVersion
     * @function
     * @param {string} versionId - the ID of the version to delete
     * @param {string} moveFixIssuesToId - when provided, existing fixVersions will be moved
     *                 to this ID. Otherwise, the deleted version will be removed from all
     *                 issue fixVersions.
     * @param {string} moveAffectedIssuesToId - when provided, existing affectedVersions will
     *                 be moved to this ID. Otherwise, the deleted version will be removed
     *                 from all issue affectedVersions.
     */
    deleteVersion(
        versionId: string,
        moveFixIssuesToId: string,
        moveAffectedIssuesToId: string
    ): Promise<JiraApi.JsonResponse>;

    /** Move version
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/version-moveVersion)
     * @name moveVersion
     * @function
     * @param {string} versionId - the ID of the version to delete
     * @param {string} position - an object of the new position
     */
    moveVersion(versionId: string, position: string): Promise<JiraApi.JsonResponse>;

    /** Pass a search query to Jira
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#d2e4424)
     * @name searchJira
     * @function
     * @param {string} searchString - jira query string in JQL
     * @param {object} optional - object containing any of the following properties
     */ 
    searchJira(searchString: string, optional?: JiraApi.SearchQuery): Promise<JiraApi.JsonResponse>;

    /** Create a Jira user
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/user-createUser)
     * @name createUser
     * @function
     * @param {object} user - Properly Formatted User object
     */ 
    createUser(user: JiraApi.UserObject): Promise<JiraApi.JsonResponse>;

    /** Search user on Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#d2e3756)
     * @name searchUsers
     * @function
     * @param {JiraApi.SearchUserOptions} options
     */
    searchUsers(options: JiraApi.SearchUserOptions): Promise<JiraApi.JsonResponse>;

    /** Get all users in group on Jira
     * @name getUsersInGroup
     * @function
     * @param {string} groupname - A query string used to search users in group
     * @param {integer} [startAt=0] - The index of the first user to return (0-based)
     * @param {integer} [maxResults=50] - The maximum number of users to return (defaults to 50).
     */
    getUsersInGroup(groupname: string, startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse>;

    /** Get issues related to a user
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id296043)
     * @name getUsersIssues
     * @function
     * @param {string} username - username of user to search for
     * @param {boolean} open - determines if only open issues should be returned
     */
    getUsersIssues(username: string, open: boolean): Promise<JiraApi.JsonResponse>;
    
    /** Returns a user.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-user-get)
     * @name getUser
     * @function
     * @param {string} accountId - The accountId of user to search for
     * @param {string} expand - The expand for additional info (groups,applicationRoles)
     */
    getUser(accountId: string, expand: string): Promise<JiraApi.JsonResponse>;

    /** Returns a list of all (active and inactive) users.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-users-search-get)
     * @name getUsers
     * @function
     * @param {integer} [startAt=0] - The index of the first user to return (0-based)
     * @param {integer} [maxResults=50] - The maximum number of users to return (defaults to 50).
     */
    getUsers(startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse[]>;

    /** Add issue to Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290028)
     * @name addNewIssue
     * @function
     * @param {object} issue - Properly Formatted Issue object
     */
    addNewIssue(issue: JiraApi.IssueObject): Promise<JiraApi.JsonResponse>;

    /** Add a user as a watcher on an issue
     * @name addWatcher
     * @function
     * @param {string} issueKey - the key of the existing issue
     * @param {string} username - the jira username to add as a watcher to the issue
     */
    addWatcher(issueKey: string, username: string): Promise<JiraApi.JsonResponse>;

    /** Change an assignee on an issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue-assign)
     * @name assignee
     * @function
     * @param {string} issueKey - the key of the existing issue
     * @param {string} assigneeName - the jira username to add as a new assignee to the issue
     */
    updateAssignee(issueKey: string, assigneeName: string): Promise<JiraApi.JsonResponse>;

    /** Change an assignee on an issue
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-issue-issueIdOrKey-assignee-put)
     * @name updateAssigneeWithId
     * @function
     * @param {string} issueKey - the key of the existing issue
     * @param {string} userId - the jira username to add as a new assignee to the issue
     */
    updateAssigneeWithId(issueKey: string, userId: string): Promise<JiraApi.JsonResponse>;

    /** Delete issue from Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290791)
     * @name deleteIssue
     * @function
     * @param {string} issueId - the Id of the issue to delete
     */
    deleteIssue(issueId: string): Promise<JiraApi.JsonResponse>;

    /** Update issue in Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290878)
     * @name updateIssue
     * @function
     * @param {string} issueId - the Id of the issue to update
     * @param {object} issueUpdate - update Object as specified by the rest api
     * @param {object} query - adds parameters to the query string
     */
    updateIssue(issueId: string, issueUpdate: JiraApi.IssueObject, query?: JiraApi.Query): Promise<JiraApi.JsonResponse>;
    
    /** List Components
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name listComponents
     * @function
     * @param {string} project - key for the project
     */
    listComponents(project: string): Promise<JiraApi.JsonResponse>;

    /** Add component to Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290028)
     * @name addNewComponent
     * @function
     * @param {object} component - Properly Formatted Component
     */
    addNewComponent(component: JiraApi.ComponentObject): Promise<JiraApi.JsonResponse>;

    /** Update Jira component
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/component-updateComponent)
     * @name updateComponent
     * @function
     * @param {string} componentId - the Id of the component to update
     * @param {object} component - Properly Formatted Component
     */
    updateComponent(componentId: string, component: JiraApi.ComponentObject): Promise<JiraApi.JsonResponse>;

    /** Delete component from Jira
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-api-2-component-id-delete)
     * @name deleteComponent
     * @function
     * @param {string} id - The ID of the component.
     * @param {string} moveIssuesTo - The ID of the component to replace the deleted component.
     *                                If this value is null no replacement is made.
     */
    deleteComponent(componentId: string): Promise<JiraApi.JsonResponse>;

    /** Get count of issues assigned to the component.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-component-id-relatedIssueCounts-get)
     * @name relatedIssueCounts
     * @function
     * @param {string} id - Component Id.
     */
    relatedIssueCounts(id: string): Promise<JiraApi.JsonResponse>;

    /** Create custom Jira field
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field-createCustomField)
     * @name createCustomField
     * @function
     * @param {object} field - Properly formatted Field object
     */
    createCustomField(field: JiraApi.FieldObject): Promise<JiraApi.JsonResponse>;
    
    /** List all fields custom and not that jira knows about.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name listFields
     * @function
     */
    listFields(): Promise<JiraApi.FieldObject[]>;
    
    /** Add an option for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-createOption)
     * @name createFieldOption
     * @function
     * @param {string} fieldKey - the key of the select list field
     * @param {object} option - properly formatted Option object
     */
    createFieldOption(fieldKey: string, option: JiraApi.FieldOptionObject): Promise<JiraApi.JsonResponse>;

    /** Returns all options defined for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-getAllOptions)
     * @name listFieldOptions
     * @function
     * @param {string} fieldKey - the key of the select list field
     */
    listFieldOptions(fieldKey: string): Promise<JiraApi.JsonResponse>;

    /** Creates or updates an option for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-putOption)
     * @name upsertFieldOption
     * @function
     * @param {string} fieldKey - the key of the select list field
     * @param {string} optionId - the id of the modified option
     * @param {object} option - properly formatted Option object
     */
    upsertFieldOption(
        fieldKey: string,
        optionId: string,
        option: JiraApi.FieldOptionObject): Promise<JiraApi.JsonResponse>;

    /** Returns an option for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-getOption)
     * @name getFieldOption
     * @function
     * @param {string} fieldKey - the key of the select list field
     * @param {string} optionId - the id of the option
     */
    getFieldOption(fieldKey: string, optionId: string): Promise<JiraApi.JsonResponse>;
    
    /** Deletes an option from a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-delete)
     * @name deleteFieldOption
     * @function
     * @param {string} fieldKey - the key of the select list field
     * @param {string} optionId - the id of the deleted option
     */
    deleteFieldOption(fieldKey: string, optionId: string): Promise<JiraApi.JsonResponse>;

    /**
     * @name getIssueProperty
     * @function
     * Get Property of Issue by Issue and Property Id
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue/{issueIdOrKey}/properties-getProperty)
     * @param {string} issueNumber - The issue number to search for including the project key
     * @param {string} property - The property key to search for
     */
    getIssueProperty(issueNumber: string, property: string): Promise<JiraApi.JsonResponse>;

    /**
     * @name getIssueChangelog
     * @function
     * List all changes for an issue, sorted by date, starting from the latest
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue/{issueIdOrKey}/changelog)
     * @param {string} issueNumber - The issue number to search for including the project key
     * @param {integer} [startAt=0] - optional starting index number
     * @param {integer} [maxResults=50] - optional ending index number
     */
    getIssueChangelog(issueNumber: string, startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse>;
    
    /**
     * @name getIssueWatchers
     * @function
     * List all watchers for an issue
     * [Jira Doc](http://docs.atlassian.com/jira/REST/cloud/#api/2/issue-getIssueWatchers)
     * @param {string} issueNumber - The issue number to search for including the project key
     */
    getIssueWatchers(issueId: string): Promise<JiraApi.JsonResponse[]>;

    /** List all priorities jira knows about
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name listPriorities
     * @function
     */
    listPriorities(): Promise<JiraApi.JsonResponse>;
    
    /** List Transitions for a specific issue that are available to the current user
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name listTransitions
     * @function
     * @param {string} issueId - get transitions available for the issue
     */
    listTransitions(issueId: string): Promise<JiraApi.JsonResponse>;
    
    /** Transition issue in Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name transitionsIssue
     * @function
     * @param {string} issueId - the Id of the issue to delete
     * @param {object} issueTransition - transition object from the jira rest API
     */
    transitionIssue(issueId: string, issueTransition: JiraApi.TransitionObject): Promise<JiraApi.JsonResponse>;

    /** List all Viewable Projects
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id289193)
     * @name listProjects
     * @function
     */
    listProjects(): Promise<JiraApi.JsonResponse>;

    /** Add a comment to an issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#id108798)
     * @name addComment
     * @function
     * @param {string} issueId - Issue to add a comment to
     * @param {string} comment - string containing comment
     */
    addComment(issueId: string, comment: string): Promise<JiraApi.JsonResponse>;

    /** Add a comment to an issue, supports full comment object
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#id108798)
     * @name addCommentAdvanced
     * @function
     * @param {string} issueId - Issue to add a comment to
     * @param {object} comment - The object containing your comment data
     */
    addCommentAdvanced(issueId: string, comment: JiraApi.CommentAdvancedObject): Promise<JiraApi.JsonResponse>;

    /** Update comment for an issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue-updateComment)
     * @name updateComment
     * @function
     * @param {string} issueId - Issue with the comment
     * @param {string} commentId - Comment that is updated
     * @param {string} comment - string containing new comment
     * @param {object} [options={}] - extra options
     */
    updateComment(issueId: string, commentId: string, comment: string, options?: JiraApi.CommentOptions): Promise<JiraApi.JsonResponse>;

    /**
     * @name getComments
     * @function
     * Get Comments by IssueId.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-comment-list-post)
     * @param {string} issueId - this issue this comment is on
     */
    getComments(issueId: string): Promise<JiraApi.JsonResponse>;

    /**
     * @name getComment
     * @function
     * Get Comment by Id.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-comment-list-post)
     * @param {string} issueId - this issue this comment is on
     * @param {number} commentId - the id of the comment
     */
    getComment(issueId: string, commentId: number): Promise<JiraApi.JsonResponse>;

    /**
     * @name deleteComment
     * @function
     * Delete Comments by Id.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-comment-list-post)
     * @param {string} issueId - this issue this comment is on
     * @param {number} commentId - the id of the comment
     */
    deleteComment(issueId: string, commentId: number): Promise<JiraApi.JsonResponse>;

    /** Add a worklog to a project
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id291617)
     * @name addWorklog
     * @function
     * @param {string} issueId - Issue to add a worklog to
     * @param {object} worklog - worklog object from the rest API
     * @param {object} [optional] newEstimate - the new value for the remaining estimate field
     * @param {object} [options={}] - extra options
     */
    addWorklog(
        issueId: string,
        worklog: JiraApi.WorklogObject,
        newEstimate?: JiraApi.EstimateObject,
        options?: JiraApi.WorklogOptions
    ): Promise<JiraApi.JsonResponse>;

    /** Get ids of worklogs modified since
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/worklog-getWorklogsForIds)
     * @name updatedWorklogs
     * @function
     * @param {number} since - a date time in unix timestamp format since when updated worklogs
     * will be returned.
     * @param {string} expand - ptional comma separated list of parameters to expand: properties
     * (provides worklog properties).
     */
    updatedWorklogs(since: number, expand: string): Promise<JiraApi.JsonResponse>;

    /** Delete worklog from issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#d2e1673)
     * @name deleteWorklog
     * @function
     * @param {string} issueId - the Id of the issue to delete
     * @param {string} worklogId - the Id of the worklog in issue to delete
     */
    deleteWorklog(issueId: string, worklogId: string): Promise<JiraApi.JsonResponse>;

    /** Deletes an issue link.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issueLink-linkId-delete)
     * @name deleteIssueLink
     * @function
     * @param {string} linkId - the Id of the issue link to delete
     */
    deleteIssueLink(linkId: string): Promise<JiraApi.JsonResponse>;

    /** Returns worklog details for a list of worklog IDs.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-worklog-list-post)
     * @name getWorklogs
     * @function
     * @param {array} worklogsIDs - a list of worklog IDs.
     * @param {string} expand - expand to include additional information about worklogs
     *
     */
    getWorklogs(worklogsIDs: string[], expand: string): Promise<JiraApi.JsonResponse[]>;

    /** Get worklogs list from a given issue
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-api-3-issue-issueIdOrKey-worklog-get)
     * @name getIssueWorklogs
     * @function
     * @param {string} issueId - the Id of the issue to find worklogs for
     * @param {integer} [startAt=0] - optional starting index number
     * @param {integer} [maxResults=1000] - optional ending index number
     */    
    getIssueWorklogs(issueId: string): Promise<JiraApi.JsonResponse>;

    /** List all Issue Types jira knows about
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id295946)
     * @name listIssueTypes
     * @function
     */
    listIssueTypes(): Promise<JiraApi.JsonResponse>;

    /** Register a webhook
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @name registerWebhook
     * @function
     * @param {object} webhook - properly formatted webhook
     */
    registerWebhook(webhook: JiraApi.WebhookObject): Promise<JiraApi.JsonResponse>;

    /** List all registered webhooks
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @name listWebhooks
     * @function
     */
    listWebhooks(): Promise<JiraApi.JsonResponse>;

    /** Get a webhook by its ID
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @name getWebhook
     * @function
     * @param {string} webhookID - id of webhook to get
     */
    getWebhook(webhookID: string): Promise<JiraApi.JsonResponse>;

    /** Delete a registered webhook
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @name issueLink
     * @function
     * @param {string} webhookID - id of the webhook to delete
     */
    deleteWebhook(webhookID: string): Promise<JiraApi.JsonResponse>;

    /** Describe the currently authenticated user
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id2e865)
     * @name getCurrentUser
     * @function
     */
    getCurrentUser(): Promise<JiraApi.JsonResponse>;

    /** Retrieve the backlog of a certain Rapid View
     * @name getBacklogForRapidView
     * @function
     * @param {string} rapidViewId - rapid view id
     */
    getBacklogForRapidView(rapidViewId: string): Promise<JiraApi.JsonResponse>;

    /** Add attachment to a Issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/issue/{issueIdOrKey}/attachments-addAttachment)
     * @name addAttachmentOnIssue
     * @function
     * @param {string} issueId - issue id
     * @param {object} readStream - readStream object from fs
     */
    addAttachmentOnIssue(issueId: string, readStream: ReadStream): Promise<JiraApi.JsonResponse>;

    /** Notify people related to issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue-notify)
     * @name issueNotify
     * @function
     * @param {string} issueId - issue id
     * @param {object} notificationBody - properly formatted body
     */
    issueNotify(issueId: string, notificationBody: JiraApi.NotificationObject): Promise<JiraApi.JsonResponse>;

    /** Get list of possible statuses
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/status-getStatuses)
     * @name listStatus
     * @function
     */
    listStatus(): Promise<JiraApi.JsonResponse>;

    /** Get a Dev-Status summary by issue ID
     * @name getDevStatusSummary
     * @function
     * @param {string} issueId - id of issue to get
     */
    getDevStatusSummary(issueId: string): Promise<JiraApi.JsonResponse>;

    /** Get a Dev-Status detail by issue ID
     * @name getDevStatusDetail
     * @function
     * @param {string} issueId - id of issue to get
     * @param {string} applicationType - type of application (stash, bitbucket)
     * @param {string} dataType - info to return (repository, pullrequest)
     */
    getDevStatusDetail(issueId: string, applicationType: string, dataType: string): Promise<JiraApi.JsonResponse>;

    /** Get issue
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-getIssue)
     * @name getIssue
     * @function
     * @param {string} issueIdOrKey - Id of issue
     * @param {string} [fields] - [optional] The list of fields to return for each issue.
     * @param {string} [expand] - [optional] A comma-separated list of the parameters to expand.
     */
    getIssue(issueIdOrKey: string, fields?: string, expand?: string): Promise<JiraApi.JsonResponse>;

    /** Move issues to backlog
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/backlog-moveIssuesToBacklog)
     * @name moveToBacklog
     * @function
     * @param {array} issues - id or key of issues to get
     */
    moveToBacklog(issues: string[]): Promise<JiraApi.JsonResponse>;

    /** Get all boards
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getAllBoards)
     * @name getAllBoards
     * @function
     * @param {number} [startAt=0] - The starting index of the returned boards.
     * @param {number} [maxResults=50] - The maximum number of boards to return per page.
     * @param {string} [type] - Filters results to boards of the specified type.
     * @param {string} [name] - Filters results to boards that match the specified name.
     * @param {string} [projectKeyOrId] - Filters results to boards that are relevant to a project.
     */
    getAllBoards(
        startAt?: number,
        maxResults?: number,
        type?: string,
        name?: string,
        projectKeyOrId?: string
    ): Promise<JiraApi.JsonResponse>;

    /** Create Board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-createBoard)
     * @name createBoard
     * @function
     * @param {object} boardBody - Board name, type and filter Id is required.
     */
    createBoard(boardBody: JiraApi.BoardObject): Promise<JiraApi.JsonResponse>;

    /** Get Board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getBoard)
     * @name getBoard
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    getBoard(boardId: string): Promise<JiraApi.JsonResponse>;

    /** Delete Board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-deleteBoard)
     * @name deleteBoard
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    deleteBoard(boardId: string): Promise<JiraApi.JsonResponse>;

    /** Get issues for backlog
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getIssuesForBacklog)
     * @name getIssuesForBacklog
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
     */
    getIssuesForBacklog(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    /** Get Configuration
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getConfiguration)
     * @name getConfiguration
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    getConfiguration(boardId: string): Promise<JiraApi.JsonResponse>;

    /** Get issues for board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getIssuesForBoard)
     * @name getIssuesForBoard
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
     */
    getIssuesForBoard(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        jql?: string,
        validateQuery?: boolean,
        fields?: string
    ): Promise<JiraApi.JsonResponse>;

    /** Get Epics
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/epic-getEpics)
     * @name getEpics
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned epics. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of epics to return per page. Default: 50.
     * @param {string} [done] - Filters results to epics that are either done or not done.
     * Valid values: true, false.
     */
    getEpics(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        done?: "true" | "false"
    ): Promise<JiraApi.JsonResponse>;

    /** Get board issues for epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/epic-getIssuesForEpic)
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/epic-getIssuesWithoutEpic)
     * @name getBoardIssuesForEpic
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} epicId - Id of epic to retrieve, specify 'none' to get issues without an epic.
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
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

    /** Estimate issue for board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-estimateIssueForBoard)
     * @name estimateIssueForBoard
     * @function
     * @param {string} issueIdOrKey - Id of issue
     * @param {number} boardId - The id of the board required to determine which field
     * is used for estimation.
     * @param {string} body - value to set
     */
    estimateIssueForBoard(issueIdOrKey: string, boardId: number, body: string): Promise<JiraApi.JsonResponse>;

    /** Rank Issues
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-rankIssues)
     * @name rankIssues
     * @function
     * @param {string} body - value to set
     */
    rankIssues(body: string): Promise<JiraApi.JsonResponse>;

    /** Get Projects
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/project-getProjects)
     * @name getProjects
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned projects. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of projects to return per page.
     * Default: 50.
     */
    getProjects(boardId: string, startAt?: number, maxResults?: number): Promise<JiraApi.JsonResponse>;

    /** Get Projects Full
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/project-getProjectsFull)
     * @name getProjectsFull
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    getProjectsFull(boardId: string): Promise<JiraApi.JsonResponse>;

    /** Get Board Properties Keys
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-getPropertiesKeys)
     * @name getBoardPropertiesKeys
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    getBoardPropertiesKeys(boardId: string): Promise<JiraApi.JsonResponse>;

    /** Delete Board Property
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-deleteProperty)
     * @name deleteBoardProperty
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} propertyKey - Id of property to delete
     */
    deleteBoardProperty(boardId: string, propertyKey: string): Promise<JiraApi.JsonResponse>;

    /** Set Board Property
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-setProperty)
     * @name setBoardProperty
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} propertyKey - Id of property to delete
     * @param {string} body - value to set, for objects make sure to stringify first
     */
    setBoardProperty(boardId: string, propertyKey: string, body: string): Promise<JiraApi.JsonResponse>;

    /** Get Board Property
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-getProperty)
     * @name getBoardProperty
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} propertyKey - Id of property to retrieve
     */
    getBoardProperty(boardId: string, propertyKey: string): Promise<JiraApi.JsonResponse>;

    /** Get All Sprints
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/sprint-getAllSprints)
     * @name getAllSprints
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned sprints. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of sprints to return per page.
     * Default: 50.
     * @param {string} [state] - Filters results to sprints in specified states.
     * Valid values: future, active, closed.
     */
    getAllSprints(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        state?: "future" | "active" | "closed"
    ): Promise<JiraApi.JsonResponse>;

    /** Get Board issues for sprint
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/sprint-getIssuesForSprint)
     * @name getBoardIssuesForSprint
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} sprintId - Id of sprint to retrieve
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
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

    /** Get All Versions
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/version-getAllVersions)
     * @name getAllVersions
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned versions. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of versions to return per page.
     * Default: 50.
     * @param {string} [released] - Filters results to versions that are either released or
     * unreleased.Valid values: true, false.
     */
    getAllVersions(
        boardId: string,
        startAt?: number,
        maxResults?: number,
        released?: "true" | "false"
    ): Promise<JiraApi.JsonResponse>;

 /** Get Filter
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/filter)
     * @name getFilter
     * @function
     * @param {string} filterId - Id of filter to retrieve
     */
    getFilter(filterId: string): Promise<JiraApi.JsonResponse>;

    /** Get Epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-getEpic)
     * @name getEpic
     * @function
     * @param {string} epicIdOrKey - Id of epic to retrieve
     */
    getEpic(epicIdOrKey: string): Promise<JiraApi.JsonResponse>;

    /** Partially update epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-partiallyUpdateEpic)
     * @name partiallyUpdateEpic
     * @function
     * @param {string} epicIdOrKey - Id of epic to retrieve
     * @param {string} body - value to set, for objects make sure to stringify first
     */
    partiallyUpdateEpic(epicIdOrKey: string, body: string): Promise<JiraApi.JsonResponse>;

    /** Get issues for epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-getIssuesForEpic)
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-getIssuesWithoutEpic)
     * @name getIssuesForEpic
     * @function
     * @param {string} epicId - Id of epic to retrieve, specify 'none' to get issues without an epic.
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
     */
    getIssuesForEpic(epicId: string, startAt?: number, maxResults?: number, jql?: string, validateQuery?: boolean, fields?: string): Promise<JiraApi.JsonResponse>;

    /** Move Issues to Epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-moveIssuesToEpic)
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-removeIssuesFromEpic)
     * @name moveIssuesToEpic
     * @function
     * @param {string} epicIdOrKey - Id of epic to move issue to, or 'none' to remove from epic
     * @param {array} issues - array of issues to move
     */
    moveIssuesToEpic(epicIdOrKey: string, issues: string[]): Promise<JiraApi.JsonResponse>;

    /** Rank Epics
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-rankEpics)
     * @name rankEpics
     * @function
     * @param {string} epicIdOrKey - Id of epic
     * @param {string} body - value to set (stringify first)
     */
    rankEpics(epicIdOrKey: string, body: string): Promise<JiraApi.JsonResponse>;

    /**
     * @name getServerInfo
     * @function
     * Get server info
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-api-2-serverInfo-get)
     */
    getServerInfo(): Promise<JiraApi.JsonResponse>;

    /**
     * @name getIssueCreateMetadata
     * @param {object} optional - object containing any of the following properties
     * Get metadata for creating an issue.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-createmeta-get)
     */
    getIssueCreateMetadata(optional?: JiraApi.CreateIssueMetadataObject): Promise<JiraApi.JsonResponse>;
    
    /** Generic Get Request
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/2/)
     * @name genericGet
     * @function
     * @param {string} endpoint - Rest API endpoint
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
        ca?: string;
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
        projectIds?: string[];
        /**  [optional] Array of project keys to return metadata for */
        projectKeys?: string[];
        /**  [optional] Array of issuetype ids to return metadata for */
        issuetypeIds?: string[];
        /**  [optional] Array of issuetype names to return metadata for*/
        issuetypeNames?: string[];
        /**  [optional] Include additional information about issue metadata. Valid value is 'projects.issuetypes.fields'*/
        expand?: string;
    }

    interface SearchUserOptions {
        /**(DEPRECATED) A query string used to search username, name or e-mail address */
        username: string;
        /** A query string that is matched against user attributes
         * (displayName, and emailAddress) to find relevant users. The string can match the prefix of
         * the attribute's value. For example, query=john matches a user with a displayName of John
         * Smith and a user with an emailAddress of johnson@example.com. Required, unless accountId
         * or property is specified. */
        query: string,
        /** [optional - default = 0] The index of the first user to return (0-based) */
        startAt?: number;
        /** [optional - default = 50] The maximum number of users to return */
        maxResults?: number;
        /** [optional - default = true] If true, then active users are included in the results*/
        includeActive?: boolean;
        /** [optional - default = true] If true, then inactive users are included in the results */
        includeInactive?: boolean;
    }

    interface SearchQuery {
        /** [optional - default = 0] starting index number */
        startAt?: number;
        /** [optional - default = 50] The maximum number of items to
        *  return per page. To manage page size, Jira may return fewer items per
        *  page where a large number of fields are requested.
        */
        maxResults?: number;
        /** [optional] array of string names of desired fields */
        fields?: string[];
        /** [optional] array of string names of desired expand nodes */
        expand?: string[];
    }

    interface UriOptions {
        pathname: string;
        query?: Query;
        intermediatePath?: string;
    }
}
export = JiraApi;
