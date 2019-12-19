import {
    Auth,
    Account,
    AwsKey,
    createIamKey,
    createIamRole,
    createIamTrustRole,
    createKey,
    createLongTermKey,
    deleteIamRole,
    deleteLongTermKey,
    generateConsoleUrl,
    getAccounts,
    getDurations,
    getIamRoleTypes,
    refreshTokenToAccessToken,
} from 'alks-node';

const auth: Auth = {
    password: 'pass',
    token: 'token',
};

const acct: Account = {
    alksAccount: 'alksAcct',
    alksRole: 'alksRole',
    server: 'server',
    userid: 'userId',
};

const awsKey: AwsKey = {
    accessKey: 'accessKey',
    secretKey: 'secretKey',
    sessionToken: 'sessionToken',
};

createIamKey(acct, auth, 1, {}, () => {});
createIamRole(acct, auth, 'roleName', 'roleType', true, {}, () => {});
createIamTrustRole(acct, auth, 'roleName', 'roleType', 'trustArn', {}, () => {});
createKey(acct, auth, 1, {}, () => {});
createLongTermKey(acct, auth, 'iamUserName', {}, () => {});
deleteIamRole(acct, auth, 'roleName', {}, () => {});
deleteLongTermKey(acct, auth, 'iamUserName', {}, () => {});
generateConsoleUrl(awsKey, {}, () => {});
getAccounts('server', 'userId', auth, {}, () => {});
getDurations(acct, auth, {}, () => {});
getIamRoleTypes('server', 'userId', auth, {}, () => {});
refreshTokenToAccessToken(acct, 'token', {}, () => {});
