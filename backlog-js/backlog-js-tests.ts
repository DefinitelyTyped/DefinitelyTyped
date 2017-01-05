import * as backlogjs from 'backlog-js';

const host = 'example.backlog.jp';
const apiKey = 'apiKey';
const clientId = 'clientId';
const clientSecret = 'clientSecret';
const redirectUri = 'redirectUri';
const state = 'state';
const code = 'code';
const refreshToken = 'refreshToken';
const configure = { host, apiKey }
const credentials = { clientId, clientSecret }

const oauth2 = new backlogjs.OAuth2(credentials);
oauth2.getAuthorizationURL({ host, redirectUri, state });
oauth2.getAccessToken({ host, code, redirectUri }).then(data => {}).catch(err => {});
oauth2.refreshAccessToken({ host, refreshToken }).then(data => {}).catch(err => {});

const backlog = new backlogjs.Backlog(configure);
backlog.getSpace().then(data => { }).catch(err => { });
backlog.getSpaceActivities({
  activityTypeId: [
    backlogjs.Option.ActivityType.IssueCreated,
    backlogjs.Option.ActivityType.IssueUpdated
  ],
  minId: 1,
  maxId: 2,
  count: 3,
  order: "asc"
}).then(data => { }).catch(err => { });
backlog.getSpaceDiskUsage().then(data => { }).catch(err => { });
backlog.getSpaceIcon().then(data => { }).catch(err => { });
backlog.postSpaceAttachment(new FormData()).then(data => { }).catch(err => { });
backlog.getUsers().then(data => { }).catch(err => { });
backlog.getUser(1).then(data => { }).catch(err => { });
backlog.postUser({
  userId: 'string',
  password: 'string',
  name: 'string',
  mailAddress: 'string',
  roleType: backlogjs.Option.User.RoleType.Admin
}).then(data => { }).catch(err => { });
backlog.patchUser(1, {
  password: 'string',
  name: 'string',
  mailAddress: 'string',
  roleType: backlogjs.Option.User.RoleType.Admin
}).then(data => { }).catch(err => { });
backlog.deleteUser(1).then(data => { }).catch(err => { });
backlog.getMyself().then(data => { }).catch(err => { });
backlog.getUserActivities(1, {
  activityTypeId: [
    backlogjs.Option.ActivityType.IssueCreated,
    backlogjs.Option.ActivityType.IssueUpdated
  ],
  minId: 1,
  maxId: 2,
  count: 3,
  order: "asc"
}).then(data => { }).catch(err => { });
backlog.getUserStars(1, {
  minId: 1,
  maxId: 2,
  count: 3,
  order: "asc"
}).then(data => { }).catch(err => { });
backlog.getUserStarsCount(1, {
  since: 'YYYY-MM-DD',
  until: 'YYYY-MM-DD'
}).then(data => { }).catch(err => { });
backlog.getRecentlyViewedIssues({
  order: 'asc',
  offset: 1,
  count: 2
}).then(data => { }).catch(err => { });
backlog.getRecentlyViewedProjects({
  order: 'asc',
  offset: 1,
  count: 2
}).then(data => { }).catch(err => { });
backlog.getRecentlyViewedWikis({
  order: 'asc',
  offset: 1,
  count: 2
}).then(data => { }).catch(err => { });
backlog.getUserIcon(1).then(data => {}).catch(err => {});
