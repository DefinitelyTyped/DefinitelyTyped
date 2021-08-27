// Type definitions for backlog-js 0.9.0
// Project: https://github.com/nulab/backlog-js
// Definitions by: Yuichi Watanabe <https://github.com/vvatanabe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

declare class Request {
    private configure;
    constructor(configure: {
        host: string;
        apiKey?: string | undefined;
        accessToken?: string | undefined;
        timeout?: number | undefined;
    });
    get<T>(path: string, params?: any): Promise<T>;
    post<T>(path: string, params?: any): Promise<T>;
    put<T>(path: string, params: any): Promise<T>;
    patch<T>(path: string, params: any): Promise<T>;
    delete<T>(path: string, params?: any): Promise<T>;
    request(options: {
        method: string;
        path: string;
        params?: Params | FormData | undefined;
    }): Promise<Response>;
    checkStatus(response: Response): Promise<Response>;
    parseJSON<T>(response: Response): Promise<T>;
    private toFormData(params);
    private toQueryString(params);
    webAppBaseURL: string;
    restBaseURL: string;
}

type Params = {
    [index: string]: number | string | number[] | string[];
};

export class Backlog extends Request {
  constructor(configure: {
    host: string;
    apiKey?: string | undefined;
    accessToken?: string | undefined;
    timeout?: number | undefined;
  });
  getSpace(): Promise<any>;
  getSpaceActivities(params: Option.Space.GetActivitiesParams): Promise<any>;
  getSpaceNotification(): Promise<any>;
  putSpaceNotification(params: Option.Space.PutSpaceNotificationParams): Promise<any>;
  getSpaceDiskUsage(): Promise<any>;
  getSpaceIcon(): Promise<Entity.File.FileData>;
  postSpaceAttachment(form: FormData): Promise<Response>;
  getUsers(): Promise<any>;
  getUser(userId: number): Promise<any>;
  postUser(params: Option.User.PostUserParams): Promise<any>;
  patchUser(userId: number, params: Option.User.PatchUserParams): Promise<any>;
  deleteUser(userId: number): Promise<any>;
  getMyself(): Promise<any>;
  getUserActivities(userId: number, params: Option.User.GetUserActivitiesParams): Promise<any>;
  getUserStars(userId: number, params: Option.User.GetUserStarsParams): Promise<any>;
  getUserStarsCount(userId: number, params: Option.User.GetUserStarsCountParams): Promise<any>;
  getRecentlyViewedIssues(params: Option.User.GetRecentlyViewedParams): Promise<any>;
  getRecentlyViewedProjects(params: Option.User.GetRecentlyViewedParams): Promise<any>;
  getRecentlyViewedWikis(params: Option.User.GetRecentlyViewedParams): Promise<any>;
  getUserIcon(userId: number): Promise<Entity.File.FileData>;
  getGroups(params: Option.Group.GetGroupsParams): Promise<any>;
  postGroups(params: Option.Group.PostGroupsParams): Promise<any>;
  getGroup(groupId: number): Promise<any>;
  patchGroup(groupId: number, params: Option.Group.PatchGroupParams): Promise<any>;
  deleteGroup(groupId: number): Promise<any>;
  getStatuses(): Promise<any>;
  getResolutions(): Promise<any>;
  getPriorities(): Promise<any>;
  postProject(params: Option.Project.PostProjectParams): Promise<any>;
  getProjects(params?: Option.Project.GetProjectsParams): Promise<any>;
  getProject(projectIdOrKey: string): Promise<any>;
  patchProject(projectIdOrKey: string, params: Option.Project.PatchProjectParams): Promise<any>;
  deleteProject(projectIdOrKey: string): Promise<any>;
  getProjectActivities(projectIdOrKey: string, params: Option.Space.GetActivitiesParams): Promise<any>;
  getProjectUsers(projectIdOrKey: string): Promise<any>;
  deleteProjectUsers(projectIdOrKey: string, params: Option.Project.DeleteProjectUsersParams): Promise<any>;
  postProjectAdministrators(projectIdOrKey: string, params: Option.Project.PostProjectAdministrators): Promise<any>;
  getProjectAdministrators(projectIdOrKey: string): Promise<any>;
  deleteProjectAdministrators(projectIdOrKey: string, params: Option.Project.DeleteProjectAdministrators): Promise<any>;
  getIssueTypes(projectIdOrKey: string): Promise<any>;
  postIssueType(projectIdOrKey: string, params: Option.Project.PostIssueTypeParams): Promise<any>;
  patchIssueType(projectIdOrKey: string, id: number, params: Option.Project.PatchIssueTypeParams): Promise<any>;
  deleteIssueType(projectIdOrKey: string, id: number, params: Option.Project.DeleteIssueTypeParams): Promise<any>;
  getCategories(projectIdOrKey: string): Promise<any>;
  postCategories(projectIdOrKey: string, params: Option.Project.PostCategoriesParams): Promise<any>;
  patchCategories(projectIdOrKey: string, id: number, params: Option.Project.PatchCategoriesParams): Promise<any>;
  deleteCategories(projectIdOrKey: string, id: number): Promise<any>;
  getVersions(projectIdOrKey: string): Promise<any>;
  postVersions(projectIdOrKey: string, params: Option.Project.PostVersionsParams): Promise<any>;
  patchVersions(projectIdOrKey: string, id: number, params: Option.Project.PatchVersionsParams): Promise<any>;
  deleteVersions(projectIdOrKey: string, id: number): Promise<any>;
  getCustomFields(projectIdOrKey: string): Promise<any>;
  postCustomField(projectIdOrKey: string, params: Option.Project.PostCustomFieldParams | Option.Project.PostCustomFieldWithNumericParams | Option.Project.PostCustomFieldWithDateParams | Option.Project.PostCustomFieldWithListParams): Promise<any>;
  patchCustomField(projectIdOrKey: string, id: number, params: Option.Project.PatchCustomFieldParams | Option.Project.PatchCustomFieldWithNumericParams | Option.Project.PatchCustomFieldWithDateParams | Option.Project.PatchCustomFieldWithListParams): Promise<any>;
  deleteCustomField(projectIdOrKey: string, id: number): Promise<any>;
  postCustomFieldItem(projectIdOrKey: string, id: number, params: Option.Project.PostCustomFieldItemParams): Promise<any>;
  patchCustomFieldItem(projectIdOrKey: string, id: number, itemId: number, params: Option.Project.PatchCustomFieldItemParams): Promise<any>;
  deleteCustomFieldItem(projectIdOrKey: string, id: number, params: Option.Project.PostCustomFieldItemParams): Promise<any>;
  getSharedFiles(projectIdOrKey: string, path: string, params: Option.Project.GetSharedFilesParams): Promise<any>;
  getProjectsDiskUsage(projectIdOrKey: string): Promise<any>;
  getWebhooks(projectIdOrKey: string): Promise<any>;
  postWebhook(projectIdOrKey: string, params: Option.Project.PostWebhookParams): Promise<any>;
  getWebhook(projectIdOrKey: string, webhookId: string): Promise<any>;
  patchWebhook(projectIdOrKey: string, webhookId: string, params: Option.Project.PatchWebhookParams): Promise<any>;
  deleteWebhook(projectIdOrKey: string, webhookId: string): Promise<any>;
  postIssue(params: Option.Issue.PostIssueParams): Promise<any>;
  patchIssue(issueIdOrKey: string, params: Option.Issue.PatchIssueParams): Promise<any>;
  getIssues(params?: Option.Issue.GetIssuesParams): Promise<any>;
  getIssue(issueIdOrKey: string): Promise<any>;
  getIssuesCount(params?: Option.Issue.GetIssuesParams): Promise<any>;
  deleteIssuesCount(issueIdOrKey: string): Promise<any>;
  getIssueComments(issueIdOrKey: string, params: Option.Issue.GetIssueCommentsParams): Promise<any>;
  postIssueComments(issueIdOrKey: string, params: Option.Issue.PostIssueCommentsParams): Promise<any>;
  getIssueCommentsCount(issueIdOrKey: string): Promise<any>;
  getIssueComment(issueIdOrKey: string, commentId: number): Promise<any>;
  patchIssueComment(issueIdOrKey: string, commentId: number, params: Option.Issue.PatchIssueCommentParams): Promise<any>;
  getIssueCommentNotifications(issueIdOrKey: string, commentId: number): Promise<any>;
  postIssueCommentNotifications(issueIdOrKey: string, commentId: number, prams: Option.Issue.IssueCommentNotifications): Promise<any>;
  getIssueAttachments(issueIdOrKey: string): Promise<any>;
  deleteIssueAttachment(issueIdOrKey: string, attachmentId: string): Promise<any>;
  getIssueSharedFiles(issueIdOrKey: string): Promise<any>;
  linkIssueSharedFiles(issueIdOrKey: string, params: Option.Issue.LinkIssueSharedFilesParams): Promise<any>;
  unlinkIssueSharedFile(issueIdOrKey: string, id: number): Promise<any>;
  getWikis(projectIdOrKey: number): Promise<any>;
  getWikisCount(projectIdOrKey: number): Promise<any>;
  getWikisTags(projectIdOrKey: number): Promise<any>;
  postWiki(params: Option.Wiki.PostWikiParams): Promise<any>;
  getWiki(wikiId: number): Promise<any>;
  patchWiki(wikiId: number, params: Option.Wiki.PatchWikiParams): Promise<any>;
  deleteWiki(wikiId: number, mailNotify: boolean): Promise<any>;
  getWikisAttachments(wikiId: number): Promise<any>;
  postWikisAttachments(wikiId: number, attachmentId: number[]): Promise<any>;
  deleteWikisAttachments(wikiId: number, attachmentId: number): Promise<any>;
  getWikisSharedFiles(wikiId: number): Promise<any>;
  linkWikisSharedFiles(wikiId: number, fileId: number[]): Promise<any>;
  unlinkWikisSharedFiles(wikiId: number, id: number): Promise<any>;
  getWikisHistory(wikiId: number, params: Option.Wiki.GetWikisHistoryParams): Promise<any>;
  getWikisStars(wikiId: number): Promise<any>;
  postStar(params: Option.Project.PostStarParams): Promise<any>;
  getNotifications(params: Option.Notification.GetNotificationsParams): Promise<any>;
  getNotificationsCount(params: Option.Notification.GetNotificationsCountParams): Promise<any>;
  resetNotificationsMarkAsRead(): Promise<any>;
  markAsReadNotification(id: number): Promise<any>;
  getGitRepositories(projectIdOrKey: string): Promise<any>;
  getGitRepository(projectIdOrKey: string, repoIdOrName: string): Promise<any>;
  getPullRequests(projectIdOrKey: string, repoIdOrName: string, params: Option.PullRequest.GetPullRequestsParams): Promise<any>;
  getPullRequestsCount(projectIdOrKey: string, repoIdOrName: string, params: Option.PullRequest.GetPullRequestsParams): Promise<any>;
  postPullRequest(projectIdOrKey: string, repoIdOrName: string, params: Option.PullRequest.PostPullRequestParams): Promise<any>;
  getPullRequest(projectIdOrKey: string, repoIdOrName: string, number: number): Promise<any>;
  patchPullRequest(projectIdOrKey: string, repoIdOrName: string, number: number, params: Option.PullRequest.PatchPullRequestParams): Promise<any>;
  getPullRequestComments(projectIdOrKey: string, repoIdOrName: string, number: number, params: Option.PullRequest.GetPullRequestCommentsParams): Promise<any>;
  postPullRequestComments(projectIdOrKey: string, repoIdOrName: string, number: number, params: Option.PullRequest.PostPullRequestCommentsParams): Promise<any>;
  getPullRequestCommentsCount(projectIdOrKey: string, repoIdOrName: string, number: number): Promise<any>;
  patchPullRequestComments(projectIdOrKey: string, repoIdOrName: string, number: number, commentId: number, params: Option.PullRequest.PatchPullRequestCommentsParams): Promise<any>;
  getPullRequestAttachments(projectIdOrKey: string, repoIdOrName: string, number: number): Promise<any>;
  deletePullRequestAttachment(projectIdOrKey: string, repoIdOrName: string, number: number, attachmentId: number): Promise<any>;
  getProjectIcon(projectIdOrKey: string): Promise<Entity.File.FileData>;
  getSharedFile(projectIdOrKey: string, sharedFileId: number): Promise<Entity.File.FileData>;
  getIssueAttachment(issueIdOrKey: string, attachmentId: number): Promise<Entity.File.FileData>;
  getWikiAttachment(wikiId: number, attachmentId: number): Promise<Entity.File.FileData>;
  getPullRequestAttachment(projectIdOrKey: string, repoIdOrName: string, number: number, attachmentId: number): Promise<Entity.File.FileData>;
  private download(path);
  private upload(path, params);
  private parseFileData(response);
}

export class OAuth2 {
  private credentials;
  private timeout;
  constructor(credentials: Option.OAuth2.Credentials, timeout?: number);
  getAuthorizationURL(options: {
    host: string;
    redirectUri?: string | undefined;
    state?: string | undefined;
  }): string;
  getAccessToken(options: {
    host: string;
    code: string;
    redirectUri?: string | undefined;
  }): Promise<Entity.OAuth2.AccessToken>;
  refreshAccessToken(options: {
    host: string;
    refreshToken: string;
  }): Promise<Entity.OAuth2.AccessToken>;
}

import { PassThrough } from 'stream';
export namespace Entity {
  export namespace File {
    export type FileData = NodeFileData | BrowserFileData;
    export interface NodeFileData {
      body: PassThrough;
      url: string;
      filename: string;
    }
    export interface BrowserFileData {
      body: any;
      url: string;
      blob?: (() => Promise<Blob>) | undefined;
    }
  }
  export namespace OAuth2 {
    export interface AccessToken {
      access_token: string;
      token_type: string;
      expires_in: number;
      refresh_token: string;
    }
  }
}


export namespace Option {
  export type Order = "asc" | "desc";
  export enum ActivityType {
    Undefined = -1,
    IssueCreated = 1,
    IssueUpdated = 2,
    IssueCommented = 3,
    IssueDeleted = 4,
    WikiCreated = 5,
    WikiUpdated = 6,
    WikiDeleted = 7,
    FileAdded = 8,
    FileUpdated = 9,
    FileDeleted = 10,
    SvnCommitted = 11,
    GitPushed = 12,
    GitRepositoryCreated = 13,
    IssueMultiUpdated = 14,
    ProjectUserAdded = 15,
    ProjectUserRemoved = 16,
    NotifyAdded = 17,
    PullRequestAdded = 18,
    PullRequestUpdated = 19,
    PullRequestCommented = 20,
    PullRequestMerged = 21,
  }
  export namespace Notification {
    export interface GetNotificationsParams {
      minId?: number | undefined;
      maxId?: number | undefined;
      count?: number | undefined;
      order?: Order | undefined;
    }
    export interface GetNotificationsCountParams {
      alreadyRead: boolean;
      resourceAlreadyRead: boolean;
    }
  }
  export namespace Space {
    export interface GetActivitiesParams {
      activityTypeId?: ActivityType[] | undefined;
      minId?: number | undefined;
      maxId?: number | undefined;
      count?: number | undefined;
      order?: Order | undefined;
    }
    export interface PutSpaceNotificationParams {
      content: string;
    }
  }
  export namespace User {
    export interface PostUserParams {
      userId: string;
      password: string;
      name: string;
      mailAddress: string;
      roleType: RoleType;
    }
    export interface PatchUserParams {
      password?: string | undefined;
      name?: string | undefined;
      mailAddress?: string | undefined;
      roleType?: RoleType | undefined;
    }
    export enum RoleType {
      Admin = 1,
      User = 2,
      Reporter = 3,
      Viewer = 4,
      GuestReporter = 5,
      GuestViewer = 6,
    }
    export interface GetUserActivitiesParams {
      activityTypeId?: ActivityType[] | undefined;
      minId?: number | undefined;
      maxId?: number | undefined;
      count?: number | undefined;
      order?: Order | undefined;
    }
    export interface GetUserStarsParams {
      minId?: number | undefined;
      maxId?: number | undefined;
      count?: number | undefined;
      order?: Order | undefined;
    }
    export interface GetUserStarsCountParams {
      since?: string | undefined;
      until?: string | undefined;
    }
    export interface GetRecentlyViewedParams {
      order?: Order | undefined;
      offset?: number | undefined;
      count?: number | undefined;
    }
  }
  export namespace Group {
    export interface GetGroupsParams {
      order?: Order | undefined;
      offset?: number | undefined;
      count?: number | undefined;
    }
    export interface PostGroupsParams {
      name: string;
      members?: string[] | undefined;
    }
    export interface PatchGroupParams {
      name?: string | undefined;
      members?: string[] | undefined;
    }
  }
  export namespace Project {
    export type TextFormattingRule = "backlog" | "markdown";
    export interface PostProjectParams {
      name: string;
      key: string;
      chartEnabled: boolean;
      projectLeaderCanEditProjectLeader?: boolean | undefined;
      subtaskingEnabled: boolean;
      textFormattingRule: TextFormattingRule;
    }
    export interface PatchProjectParams {
      name?: string | undefined;
      key?: string | undefined;
      chartEnabled?: boolean | undefined;
      subtaskingEnabled?: boolean | undefined;
      projectLeaderCanEditProjectLeader?: boolean | undefined;
      textFormattingRule?: TextFormattingRule | undefined;
      archived?: boolean | undefined;
    }
    export interface GetProjectsParams {
      archived?: boolean | undefined;
      all?: boolean | undefined;
    }
    export interface DeleteProjectUsersParams {
      userId: number;
    }
    export interface PostProjectAdministrators {
      userId: number;
    }
    export interface DeleteProjectAdministrators {
      userId: number;
    }
    export type IssueTypeColor = "#e30000" | "#990000" | "#934981" | "#814fbc" | "#2779ca" | "#007e9a" | "#7ea800" | "#ff9200" | "#ff3265" | "#666665";
    export interface PostIssueTypeParams {
      name: string;
      color: IssueTypeColor;
    }
    export interface PatchIssueTypeParams {
      name?: string | undefined;
      color?: IssueTypeColor | undefined;
    }
    export interface DeleteIssueTypeParams {
      substituteIssueTypeId: number;
    }
    export interface PostCategoriesParams {
      name: string;
    }
    export interface PatchCategoriesParams {
      name: string;
    }
    export interface PostVersionsParams {
      name: string;
      description: string;
      startDate: string;
      releaseDueDate: string;
    }
    export interface PatchVersionsParams {
      name: string;
      description?: string | undefined;
      startDate?: string | undefined;
      releaseDueDate?: string | undefined;
      archived?: boolean | undefined;
    }
    export interface PostCustomFieldParams {
      typeId: FieldType;
      name: string;
      applicableIssueTypes?: number[] | undefined;
      description?: string | undefined;
      required?: boolean | undefined;
    }
    export interface PostCustomFieldWithNumericParams extends PostCustomFieldParams {
      min?: number | undefined;
      max?: number | undefined;
      initialValue?: number | undefined;
      unit?: string | undefined;
    }
    export interface PostCustomFieldWithDateParams extends PostCustomFieldParams {
      min?: string | undefined;
      max?: string | undefined;
      initialValueType?: number | undefined;
      initialDate?: string | undefined;
      initialShift?: number | undefined;
    }
    export interface PostCustomFieldWithListParams extends PostCustomFieldParams {
      items?: string[] | undefined;
      allowInput?: boolean | undefined;
      allowAddItem?: boolean | undefined;
    }
    export interface PatchCustomFieldParams {
      name?: string | undefined;
      applicableIssueTypes?: number[] | undefined;
      description?: string | undefined;
      required?: boolean | undefined;
    }
    export interface PatchCustomFieldWithNumericParams extends PatchCustomFieldParams {
      min?: number | undefined;
      max?: number | undefined;
      initialValue?: number | undefined;
      unit?: string | undefined;
    }
    export interface PatchCustomFieldWithDateParams extends PatchCustomFieldParams {
      min?: string | undefined;
      max?: string | undefined;
      initialValueType?: number | undefined;
      initialDate?: string | undefined;
      initialShift?: number | undefined;
    }
    export interface PatchCustomFieldWithListParams extends PatchCustomFieldParams {
      items?: string[] | undefined;
      allowInput?: boolean | undefined;
      allowAddItem?: boolean | undefined;
    }
    export interface PostCustomFieldItemParams {
      name: string;
    }
    export interface PatchCustomFieldItemParams {
      name: string;
    }
    export interface GetSharedFilesParams {
      order?: Order | undefined;
      offset?: number | undefined;
      count?: number | undefined;
    }
    export interface PostWebhookParams {
      name?: string | undefined;
      description?: string | undefined;
      hookUrl?: string | undefined;
      allEvent?: boolean | undefined;
      activityTypeIds?: number[] | undefined;
    }
    export interface PatchWebhookParams {
      name?: string | undefined;
      description?: string | undefined;
      hookUrl?: string | undefined;
      allEvent?: boolean | undefined;
      activityTypeIds?: number[] | undefined;
    }
    export enum FieldType {
      Text = 1,
      TextArea = 2,
      Numeric = 3,
      Date = 4,
      SingleList = 5,
      MultipleList = 6,
      CheckBox = 7,
      Radio = 8,
    }
    export interface PostStarParams {
      issueId?: number | undefined;
      commentId?: number | undefined;
      wikiId?: number | undefined;
      pullRequestId?: number | undefined;
      pullRequestCommentId?: number | undefined;
    }
  }
  export namespace Issue {
    export interface PostIssueParams {
      projectId: number;
      summary: string;
      priorityId: number;
      issueTypeId: number;
      parentIssueId?: number | undefined;
      description?: string | undefined;
      startDate?: string | undefined;
      dueDate?: string | undefined;
      estimatedHours?: number | undefined;
      actualHours?: number | undefined;
      categoryId?: number[] | undefined;
      versionId?: number[] | undefined;
      milestoneId?: number[] | undefined;
      assigneeId?: number | undefined;
      notifiedUserId?: number[] | undefined;
      attachmentId?: number[] | undefined;
      [customField_: string]: any;
    }
    export interface PatchIssueParams {
      summary?: string | undefined;
      parentIssueId?: number | undefined;
      description?: string | undefined;
      statusId?: number | undefined;
      resolutionId?: number | undefined;
      startDate?: string | undefined;
      dueDate?: string | undefined;
      estimatedHours?: number | undefined;
      actualHours?: number | undefined;
      issueTypeId?: number | undefined;
      categoryId?: number[] | undefined;
      versionId?: number[] | undefined;
      milestoneId?: number[] | undefined;
      priorityId?: number | undefined;
      assigneeId?: number | undefined;
      notifiedUserId?: number[] | undefined;
      attachmentId?: number[] | undefined;
      comment?: string | undefined;
      [customField_: string]: any;
    }
    export interface GetIssuesParams {
      projectId?: number[] | undefined;
      issueTypeId?: number[] | undefined;
      categoryId?: number[] | undefined;
      versionId?: number[] | undefined;
      milestoneId?: number[] | undefined;
      statusId?: number[] | undefined;
      priorityId?: number[] | undefined;
      assigneeId?: number[] | undefined;
      createdUserId?: number[] | undefined;
      resolutionId?: number[] | undefined;
      parentChild?: ParentChildType | undefined;
      attachment?: boolean | undefined;
      sharedFile?: boolean | undefined;
      sort?: SortKey | undefined;
      order?: Order | undefined;
      offset?: number | undefined;
      count?: number | undefined;
      createdSince?: string | undefined;
      createdUntil?: string | undefined;
      updatedSince?: string | undefined;
      updatedUntil?: string | undefined;
      startDateSince?: string | undefined;
      startDateUntil?: string | undefined;
      dueDateSince?: string | undefined;
      dueDateUntil?: string | undefined;
      id?: number[] | undefined;
      parentIssueId?: number[] | undefined;
      keyword: string;
      [customField_: string]: any;
    }
    export enum ParentChildType {
      All = 0,
      NotChild = 1,
      Child = 2,
      NotChildNotParent = 3,
      Parent = 4,
    }
    export type SortKey = "issueType" | "category" | "version" | "milestone" | "summary" | "status" | "priority" | "attachment" | "sharedFile" | "created" | "createdUser" | "updated" | "updatedUser" | "assignee" | "startDate" | "dueDate" | "estimatedHours" | "actualHours" | "childIssue";
    export interface GetIssueCommentsParams {
      minId?: number | undefined;
      maxId?: number | undefined;
      count?: number | undefined;
      order?: Order | undefined;
    }
    export interface PostIssueCommentsParams {
      content: string;
      notifiedUserId?: number[] | undefined;
      attachmentId?: number[] | undefined;
    }
    export interface PatchIssueCommentParams {
      content: string;
    }
    export interface IssueCommentNotifications {
      notifiedUserId: number[];
    }
    export interface LinkIssueSharedFilesParams {
      fileId: number[];
    }
  }
  export namespace PullRequest {
    export interface GetPullRequestsParams {
      statusId?: number[] | undefined;
      assigneeId?: number[] | undefined;
      issueId?: number[] | undefined;
      createdUserId?: number[] | undefined;
      offset?: number | undefined;
      count?: number | undefined;
    }
    export interface PostPullRequestParams {
      summary: string;
      description: string;
      base: string;
      branch: string;
      issueId?: number | undefined;
      assigneeId?: number | undefined;
      notifiedUserId?: number[] | undefined;
      attachmentId?: number[] | undefined;
    }
    export interface PatchPullRequestParams {
      summary?: string | undefined;
      description?: string | undefined;
      issueId?: number | undefined;
      assigneeId?: number | undefined;
      notifiedUserId?: number[] | undefined;
      comment?: string[] | undefined;
    }
    export interface GetPullRequestCommentsParams {
      minId?: number | undefined;
      maxId?: number | undefined;
      count?: number | undefined;
      order?: Order | undefined;
    }
    export interface PostPullRequestCommentsParams {
      content: string;
      notifiedUserId?: number[] | undefined;
    }
    export interface PatchPullRequestCommentsParams {
      content: string;
    }
  }
  export namespace Wiki {
    export interface PostWikiParams {
      projectId: number;
      name: string;
      content: string;
      mailNotify?: boolean | undefined;
    }
    export interface PatchWikiParams {
      name?: string | undefined;
      content?: string | undefined;
      mailNotify?: boolean | undefined;
    }
    export interface GetWikisHistoryParams {
      minId?: number | undefined;
      maxId?: number | undefined;
      count?: number | undefined;
      order?: Order | undefined;
    }
  }
  export namespace OAuth2 {
    export interface Credentials {
      clientId: string;
      clientSecret: string;
    }
  }
}

export namespace Error {
  export class BacklogError extends global.Error {
    private _name;
    private _url;
    private _status;
    private _body;
    private _response;
    constructor(name: BacklogErrorNameType, response: Response, body?: {
      errors: BacklogErrorMessage[];
    });
    name: BacklogErrorNameType;
    url: string;
    status: number;
    body: {
      errors: BacklogErrorMessage[];
    };
    response: Response;
  }
  export class BacklogApiError extends BacklogError {
    constructor(response: Response, body?: {
      errors: BacklogErrorMessage[];
    });
  }
  export class BacklogAuthError extends BacklogError {
    constructor(response: Response, body?: {
      errors: BacklogErrorMessage[];
    });
  }
  export class UnexpectedError extends BacklogError {
    constructor(response: Response);
  }
  export interface BacklogErrorMessage {
    message: string;
    code: number;
    errorInfo: string;
    moreInfo: string;
  }
  export type BacklogErrorNameType = 'BacklogApiError' | 'BacklogAuthError' | 'UnexpectedError';
}
