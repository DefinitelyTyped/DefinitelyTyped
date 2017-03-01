// Type definitions for github
// Project: https://github.com/mikedeboer/node-github
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Client;

declare class Client {
    authorization: Authorization;
    events: Events;
    gists: Gists;
    gitdata: GitData;
    gitignore: GitIgnore;
    issues: Issues;
    markdown: Markdown;
    misc: Misc;
    orgs: Orgs;
    pullRequests: PullRequests;
    releases: Releases;
    repos: Repos;
    search: Search;
    statues: Statues;
    users: User;

    constructor(options: Options);

    authenticate(...args: any[]): any;
    getFirstPage(...args: any[]): any;
    getLastPage(...args: any[]): any;
    getNextPage(...args: any[]): any;
    getPreviousPage(...args: any[]): any;
    hasFirstPage(...args: any[]): any;
    hasLastPage(...args: any[]): any;
    hasNextPage(...args: any[]): any;
    hasPreviousPage(...args: any[]): any;
    httpSend(...args: any[]): any;
    setupRoutes(...args: any[]): any;
}
declare namespace Client { }

interface Options {
    version?: string;
    debug?: boolean;
    protocol?: string;
    host?: string;
    pathPrefix?: string;
    timeout?: number;
    headers?: { [name: string]: any; };
    followRedirects?: boolean;
    Promise?: typeof Promise;
}

interface Authorization {
    create(msg: AuthorizationCreateMessage, callback: Function): void;
    delete: Function;
    get: Function;
    getAll: Function;
    update: Function;
}

interface AuthorizationCreateMessage {
    headers?: { [name: string]: string; };
    scopes?: string[];
    note?: string;
    note_url?: string;
    client_id?: string;
    client_secret?: string;
    fingerprint?: string;
}

interface Events {
    get(...args: any[]): any;
    getFromOrg(...args: any[]): any;
    getFromRepo(...args: any[]): any;
    getFromRepoIssues(...args: any[]): any;
    getFromRepoNetwork(...args: any[]): any;
    getFromUser(...args: any[]): any;
    getFromUserOrg(...args: any[]): any;
    getFromUserPublic(...args: any[]): any;
    getReceived(...args: any[]): any;
    getReceivedPublic(...args: any[]): any;
}

interface Gists {
    checkStar(...args: any[]): any;
    create(...args: any[]): any;
    createComment(...args: any[]): any;
    delete(...args: any[]): any;
    deleteComment(...args: any[]): any;
    deleteStar(...args: any[]): any;
    edit(...args: any[]): any;
    editComment(...args: any[]): any;
    fork(...args: any[]): any;
    get(...args: any[]): any;
    getAll(...args: any[]): any;
    getComment(...args: any[]): any;
    getComments(...args: any[]): any;
    getFromUser(...args: any[]): any;
    public(...args: any[]): any;
    star(...args: any[]): any;
    starred(...args: any[]): any;
}

interface GitData {
    createBlob(...args: any[]): any;
    createCommit(...args: any[]): any;
    createReference(...args: any[]): any;
    createTag(...args: any[]): any;
    createTree(...args: any[]): any;
    deleteReference(...args: any[]): any;
    getAllReferences(...args: any[]): any;
    getBlob(...args: any[]): any;
    getCommit(...args: any[]): any;
    getReference(...args: any[]): any;
    getTag(...args: any[]): any;
    getTree(...args: any[]): any;
    updateReference(...args: any[]): any;
}

interface GitIgnore {
    template(...args: any[]): any;
    templates(...args: any[]): any;
}

interface Issues {
    create(...args: any[]): any;
    createComment(...args: any[]): any;
    createLabel(...args: any[]): any;
    createMilestone(...args: any[]): any;
    deleteComment(...args: any[]): any;
    deleteLabel(...args: any[]): any;
    deleteMilestone(...args: any[]): any;
    edit(...args: any[]): any;
    editComment(...args: any[]): any;
    getAll(...args: any[]): any;
    getAllMilestones(...args: any[]): any;
    getComment(...args: any[]): any;
    getComments(...args: any[]): any;
    getEvent(...args: any[]): any;
    getEvents(...args: any[]): any;
    getIssueLabels(...args: any[]): any;
    getLabel(...args: any[]): any;
    getLabels(...args: any[]): any;
    getMilestone(...args: any[]): any;
    getRepoEvents(...args: any[]): any;
    getRepoIssue(...args: any[]): any;
    repoComments(...args: any[]): any;
    repoIssues(...args: any[]): any;
    updateLabel(...args: any[]): any;
    updateMilestone(...args: any[]): any;
}

interface Markdown {
    render(...args: any[]): any;
}

interface Misc {
    emojis(...args: any[]): any;
    meta(...args: any[]): any;
    rateLimit(...args: any[]): any;
}

interface Orgs {
    addTeamMember(...args: any[]): any;
    addTeamRepo(...args: any[]): any;
    concealMembership(...args: any[]): any;
    createTeam(...args: any[]): any;
    deleteTeam(...args: any[]): any;
    deleteTeamMember(...args: any[]): any;
    deleteTeamRepo(...args: any[]): any;
    get(...args: any[]): any;
    getFromUser(...args: any[]): any;
    getMember(...args: any[]): any;
    getMembers(...args: any[]): any;
    getPublicMember(...args: any[]): any;
    getPublicMembers(...args: any[]): any;
    getTeam(...args: any[]): any;
    getTeamMember(...args: any[]): any;
    getTeamMembers(...args: any[]): any;
    getTeamRepo(...args: any[]): any;
    getTeamRepos(...args: any[]): any;
    getTeams(...args: any[]): any;
    publicizeMembership(...args: any[]): any;
    removeMember(...args: any[]): any;
    update(...args: any[]): any;
    updateTeam(...args: any[]): any;
}

interface PullRequests {
    create(...args: any[]): any;
    createComment(...args: any[]): any;
    createCommentReply(...args: any[]): any;
    createFromIssue(...args: any[]): any;
    deleteComment(...args: any[]): any;
    get(...args: any[]): any;
    getAll(...args: any[]): any;
    getComment(...args: any[]): any;
    getComments(...args: any[]): any;
    getCommits(...args: any[]): any;
    getFiles(...args: any[]): any;
    getMerged(...args: any[]): any;
    merge(...args: any[]): any;
    update(...args: any[]): any;
    updateComment(...args: any[]): any;
}

interface Releases {
    createRelease(...args: any[]): any;
    deleteAsset(...args: any[]): any;
    deleteRelease(...args: any[]): any;
    editAsset(...args: any[]): any;
    editRelease(...args: any[]): any;
    getAsset(...args: any[]): any;
    getRelease(...args: any[]): any;
    listAssets(...args: any[]): any;
    listReleases(...args: any[]): any;
}

interface Repos {
    addCollaborator(...args: any[]): any;
    compareCommits(...args: any[]): any;
    create(...args: any[]): any;
    createCommitComment(...args: any[]): any;
    createContent(...args: any[]): any;
    createFile(...args: any[]): any;
    createFromOrg(...args: any[]): any;
    createHook(...args: any[]): any;
    createKey(...args: any[]): any;
    delete(...args: any[]): any;
    deleteCommitComment(...args: any[]): any;
    deleteDownload(...args: any[]): any;
    deleteFile(...args: any[]): any;
    deleteHook(...args: any[]): any;
    deleteKey(...args: any[]): any;
    fork(...args: any[]): any;
    get(...args: any[]): any;
    getAll(...args: any[]): any;
    getAllCommitComments(...args: any[]): any;
    getArchiveLink(...args: any[]): any;
    getBranch(...args: any[]): any;
    getBranches(...args: any[]): any;
    getCollaborator(...args: any[]): any;
    getCollaborators(...args: any[]): any;
    getCommit(...args: any[]): any;
    getCommitComment(...args: any[]): any;
    getCommitComments(...args: any[]): any;
    getCommits(...args: any[]): any;
    getContent(...args: any[]): any;
    getContributors(...args: any[]): any;
    getDownload(...args: any[]): any;
    getDownloads(...args: any[]): any;
    getForks(...args: any[]): any;
    getFromOrg(...args: any[]): any;
    getFromUser(...args: any[]): any;
    getHook(...args: any[]): any;
    getHooks(...args: any[]): any;
    getKey(...args: any[]): any;
    getKeys(...args: any[]): any;
    getLanguages(...args: any[]): any;
    getReadme(...args: any[]): any;
    getStargazers(...args: any[]): any;
    getStarred(...args: any[]): any;
    getStarredFromUser(...args: any[]): any;
    getStarring(...args: any[]): any;
    getStatsCodeFrequency(...args: any[]): any;
    getStatsCommitActivity(...args: any[]): any;
    getStatsContributors(...args: any[]): any;
    getStatsParticipation(...args: any[]): any;
    getStatsPunchCard(...args: any[]): any;
    getTags(...args: any[]): any;
    getTeams(...args: any[]): any;
    getWatched(...args: any[]): any;
    getWatchedFromUser(...args: any[]): any;
    getWatchers(...args: any[]): any;
    getWatching(...args: any[]): any;
    merge(...args: any[]): any;
    one(...args: any[]): any;
    removeCollaborator(...args: any[]): any;
    star(...args: any[]): any;
    testHook(...args: any[]): any;
    unStar(...args: any[]): any;
    unWatch(...args: any[]): any;
    update(...args: any[]): any;
    updateCommitComment(...args: any[]): any;
    updateFile(...args: any[]): any;
    updateHook(...args: any[]): any;
    updateKey(...args: any[]): any;
    watch(...args: any[]): any;
}

interface Search {
    email(...args: any[]): any;
    issues(...args: any[]): any;
    repos(...args: any[]): any;
    users(...args: any[]): any;
}

interface Statues {
    create(...args: any[]): any;
    get(...args: any[]): any;
    getCombined(...args: any[]): any;
}

interface User {
    user(...args: any[]): any;
    addEmails(...args: any[]): any;
    createKey(...args: any[]): any;
    deleteEmails(...args: any[]): any;
    deleteKey(...args: any[]): any;
    followUser(...args: any[]): any;
    get(...args: any[]): any;
    getEmails(...args: any[]): any;
    getFollowers(...args: any[]): any;
    getFollowing(...args: any[]): any;
    getFollowingFromUser(...args: any[]): any;
    getFollowingForUser(...args: any[]): any;
    getFrom(...args: any[]): any;
    getKey(...args: any[]): any;
    getKeys(...args: any[]): any;
    getKeysFromUser(...args: any[]): any;
    getOrgs(...args: any[]): any;
    getTeams(...args: any[]): any;
    unFollowUser(...args: any[]): any;
    update(...args: any[]): any;
    updateKey(...args: any[]): any;
}
