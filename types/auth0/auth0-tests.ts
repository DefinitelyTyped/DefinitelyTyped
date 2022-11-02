/// <reference types="node" />

import * as auth0 from 'auth0';
import idToken = require('auth0/src/auth/idToken');

const management = new auth0.ManagementClient({
    token: '{YOUR_API_V2_TOKEN}',
    domain: '{YOUR_ACCOUNT}.auth0.com',
});

const uManagement = new auth0.ManagementClient<{ aTest: string }, { uTest: string }>({
    token: '{YOUR_API_V2_TOKEN}',
    domain: '{YOUR_ACCOUNT}.auth0.com',
});

const auth = new auth0.AuthenticationClient({
    domain: '{YOUR_ACCOUNT}.auth0.com',
    clientId: '{OPTIONAL_CLIENT_ID}',
    clientSecret: '{OPTIONAL_CLIENT_SECRET}',
});

// Using a callback.
management.getUsers((err: Error, users: auth0.User[]) => {
    if (err) {
        // Handle error.
    }
    console.log(users);
});

// Using a Promise.
management
    .getUsers()
    .then(users => {
        console.log(users);
    })
    .catch(err => {
        // Handle the error.
    });

// Search users without paging - callback style
management.getUsers({ search_engine: 'v3', q: 'name:"jane"', per_page: 25 }, (err: Error, users: auth0.User[]) => {
    if (err) {
        // Handle error
    }
    console.log(users);
});

// Search users without paging - promise style
management
    .getUsers({ search_engine: 'v3', q: 'name:"jane"', per_page: 25 })
    .then(users => {
        console.log(users);
    })
    .catch(err => {
        // Handle the error
    });

// Search users with paging - callback style
management.getUsers(
    { search_engine: 'v3', q: 'name:"jane"', per_page: 25, include_totals: true },
    (err: Error, userPage: auth0.UserPage) => {
        if (err) {
            // Handle error
        }
        console.log(userPage.total);
    },
);

// Search users with paging - promise style
management
    .getUsers({ search_engine: 'v3', q: 'name:"jane"', per_page: 25, include_totals: true })
    .then((users: auth0.UserPage) => {
        console.log(users.total);
    })
    .catch(err => {
        // Handle the error
    });

// Using a callback.
management.getUser({ id: 'user_id' }, (err: Error, user: auth0.User) => {
    if (err) {
        // Handle error.
    }
    console.log(user);
});

// Using a Promise.
management
    .getUser({ id: 'user_id' })
    .then(user => {
        console.log(user);
    })
    .catch(err => {
        // Handle the error.
    });

// Using a callback.
management.deleteUser({ id: 'user_id' }, (err: Error) => {
    if (err) {
        // Handle error.
    }
    console.log('deleted');
});

// Using a Promise.
management
    .deleteUser({ id: 'user_id' })
    .then(() => {
        console.log('deleted');
    })
    .catch(err => {
        // Handle the error.
    });

management
    .createUser({
        connection: 'My-Connection',
        email: 'hi@me.co',
    })
    .then(user => {
        console.log(user);
    })
    .catch(err => {
        // Handle the error.
    });

// Link users
management
    .createUser({ connection: 'email', email: 'hi@me.co', user_id: 'my_id' })
    .catch(err => console.error('Cannot create E-mail user', err))
    .then(emailUser => {
        if (!emailUser) return;
        management
            .createUser({ connection: 'sms', phone_number: '+1234567890' })
            .catch(err => console.error('Cannot create SMS user', err))
            .then(smsUser => {
                if (!smsUser) return;
                const userId = emailUser.user_id;
                const params = { user_id: smsUser.user_id, provider: 'sms' };
                management
                    .linkUsers(userId, params)
                    .catch(err => console.error('Cannot link E-mail and SMS users', err))
                    .then(linkedUsers => console.log(linkedUsers));
            });
    });

// Fetch a user's organizations
management.users.getUserOrganizations({ id: 'my_id' }).then((organizations: auth0.Organization[]) => {
    console.log(organizations);
});

// Fetch a user's organizations using cb style
management.users.getUserOrganizations({ id: 'my_id' }, (err, orgs) => {
    if (err) {
        throw err;
    }

    console.log(orgs);
});

auth.requestChangePasswordEmail({
    client_id: 'client_id',
    connection: 'My-Connection',
    email: 'hi@me.co',
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        // Handle the error.
    });

auth.oauth.authorizationCodeGrant({
    code: '{CODE}',
    redirect_uri: '{REDIRECT_URI}',
});

// Revoke a refresh token using a callback
auth.tokens.revokeRefreshToken(
    {
        token: '{REFRESH_TOKEN}',
        client_id: '{OPTIONAL_CLIENT_ID}',
        client_secret: '{OPTIONAL_CLIENT_SECRET}',
    },
    (err: Error) => {
        if (err) {
            // Handle error.
        }
        console.log('Successful');
    },
);

// Revoke a refresh token using a promise
auth.tokens
    .revokeRefreshToken({
        token: '{REFRESH_TOKEN}',
        client_id: '{OPTIONAL_CLIENT_ID}',
        client_secret: '{OPTIONAL_CLIENT_SECRET}',
    })
    .then(() => {
        console.log('Successful');
    })
    .catch(err => {
        // Handle the error.
    });

// Password Grant
auth.passwordGrant({ username: 'username', password: 'password' }).then((response: auth0.TokenResponse) => {
    console.log(response);
});
auth.passwordGrant({ username: 'username', password: 'password' }, (err, response: auth0.TokenResponse) => {
    console.log(response);
});
auth.passwordGrant({ username: 'username', password: 'password' }, { forwardedFor: '12.34.56.78' }).then(
    (response: auth0.TokenResponse) => {
        console.log(response);
    },
);
auth.passwordGrant(
    { username: 'username', password: 'password' },
    { forwardedFor: '12.34.56.78' },
    (err, response: auth0.TokenResponse) => {
        console.log(response);
    },
);

// SMS/Email OTP Login
auth.requestEmailCode({ email: 'hi@me.co', authParams: {} }).then((response: any) => {
    console.log(response);
});
auth.requestEmailCode({ email: 'hi@me.co', authParams: {} }, (response: any) => {
    console.log(response);
});

auth.requestSMSCode({ phone_number: '+1234567890' }, (response: any) => {
    console.log(response);
});
auth.requestSMSCode({ phone_number: '+1234567890' }).then((response: any) => {
    console.log(response);
});

auth.verifyEmailCode({ email: 'hi@me.co', otp: 'password' }).then((response: any) => {
    console.log(response);
});
auth.verifyEmailCode({ email: 'hi@me.co', otp: 'password' }, (response: any) => {
    console.log(response);
});

auth.verifySMSCode({ username: '+1234567890', password: 'password' }).then((response: any) => {
    console.log(response);
});
auth.verifySMSCode({ username: '+1234567890', password: 'password' }, (response: any) => {
    console.log(response);
});

auth.verifySMSCode({ username: '+1234567890', otp: 'password' }).then((response: any) => {
    console.log(response);
});
auth.verifySMSCode({ username: '+1234567890', otp: 'password' }, (response: any) => {
    console.log(response);
});

// Get management client access token
management
    .getAccessToken()
    .then(token => console.log(token))
    .catch(err => console.log('Error: ' + err));

// Update a user
management.updateUser({ id: 'user_id' }, { email: 'hi@me.co' });

// Update a user using callback
management.updateUser({ id: 'user_id' }, { email: 'hi@me.co' }, (err: Error, users: auth0.User) => {});

// Update user metadata
management.updateUserMetadata({ id: 'user_id' }, { key: 'value' });

uManagement.updateAppMetadata({ id: 'user_id' }, { aTest: 'test' });

// Update user metadata with JSON object
management.updateUserMetadata(
    { id: 'user_id' },
    {
        key: 'value',
        numKey: 123,
        objKey: {
            foo: 'bar',
            another: 'value',
        },
    },
);
uManagement.updateUserMetadata({ id: 'user_id' }, { uTest: 'value' });

// Update user metadata using callback
management.updateUserMetadata({ id: 'user_id' }, { key: 'value' }, (err: Error, users: auth0.User) => {});

// Update app metadata
management.updateAppMetadata({ id: 'user_id' }, { key: 'value' });

// Update app metadata using callback
management.updateAppMetadata({ id: 'user_id' }, { key: 'value' }, (err: Error, users: auth0.User) => {});

management.getUsersByEmail('email@address.com', (err, users) => {
    console.log(users);
});

management.getUsersByEmail('email@address.com').then(users => {
    console.log(users);
});

management.getUserLogs({ id: 'user_id' }).then(roles => console.log(roles));
management.getUserLogs({ id: 'user_id' }, (err, data) => console.log(data));
management.getUserLogs({ id: 'user_id', per_page: 3 }).then(roles => console.log(roles));
management.getUserLogs({ id: 'user_id', per_page: 3 }, (err, data) => console.log(data));
management.getUserLogs({ id: 'user_id', include_totals: true }).then(rolePage => console.log(rolePage));
management.getUserLogs({ id: 'user_id', include_totals: true }, (err, data) => console.log(data));

management.getUserRoles({ id: 'user_id' }).then(roles => console.log(roles));
management.getUserRoles({ id: 'user_id' }, (err, data) => console.log(data));
management.getUserRoles({ id: 'user_id', per_page: 3 }).then(roles => console.log(roles));
management.getUserRoles({ id: 'user_id', per_page: 3 }, (err, data) => console.log(data));
management.getUserRoles({ id: 'user_id', include_totals: true }).then(rolePage => console.log(rolePage));
management.getUserRoles({ id: 'user_id', include_totals: true }, (err, data) => console.log(data));

management
    .removeRolesFromUser({ id: 'user_id' }, { roles: ['role_id'] })
    .then(() => console.log('It worked'))
    .catch(err => console.log('Something went wrong ' + err));
management.removeRolesFromUser({ id: 'user_id' }, { roles: ['role_id'] }, err => {
    if (err) {
        console.error('Something went wrong ' + err);
    } else {
        console.log('It worked');
    }
});

management
    .assignRolestoUser({ id: 'user_id' }, { roles: ['role_id'] })
    .then(() => console.log('It worked'))
    .catch(err => console.log('Something went wrong ' + err));
management.assignRolestoUser({ id: 'user_id' }, { roles: ['role_id'] }, err => {
    if (err) {
        console.error('Something went wrong ' + err);
    } else {
        console.log('It worked');
    }
});

management.getUserPermissions({ id: 'user_id' }).then(permissions => console.log(permissions));
management.getUserPermissions({ id: 'user_id' }, (err, data) => console.log(data));
management.getUserPermissions({ id: 'user_id', per_page: 3 }).then(permissions => console.log(permissions));
management.getUserPermissions({ id: 'user_id', per_page: 3 }, (err, data) => console.log(data));
management
    .getUserPermissions({ id: 'user_id', include_totals: true })
    .then(permissionPage => console.log(permissionPage));
management.getUserPermissions({ id: 'user_id', include_totals: true }, (err, data) => console.log(data));

management
    .removePermissionsFromUser(
        { id: 'user_id' },
        {
            permissions: [{ permission_name: 'god:mode', resource_server_identifier: 'https://my.api.com' }],
        },
    )
    .then(() => console.log('It worked'))
    .catch(err => console.log('Something went wrong ' + err));
management.removePermissionsFromUser(
    { id: 'user_id' },
    {
        permissions: [{ permission_name: 'god:mode', resource_server_identifier: 'https://my.api.com' }],
    },
    err => {
        if (err) {
            console.error('Something went wrong ' + err);
        } else {
            console.log('It worked');
        }
    },
);

management
    .assignPermissionsToUser(
        { id: 'user_id' },
        {
            permissions: [{ permission_name: 'god:mode', resource_server_identifier: 'https://my.api.com' }],
        },
    )
    .then(() => console.log('It worked'))
    .catch(err => console.log('Something went wrong ' + err));
management.assignPermissionsToUser(
    { id: 'user_id' },
    {
        permissions: [{ permission_name: 'god:mode', resource_server_identifier: 'https://my.api.com' }],
    },
    err => {
        if (err) {
            console.error('Something went wrong ' + err);
        } else {
            console.log('It worked');
        }
    },
);

// Using different client settings.
const retryableManagementClient = new auth0.ManagementClient({
    clientId: '',
    clientSecret: '',
    domain: 'xxx.auth0.com',
    retry: {
        enabled: true,
    },
});

management.createPasswordChangeTicket(
    {
        connection_id: 'con_id',
        email: 'test@me.co',
        new_password: 'password',
        result_url: 'https://www.google.com/',
        ttl_sec: 86400,
        mark_email_as_verified: true,
        includeEmailInRedirect: true,
    },
    (err: Error, data) => {
        console.log(data.ticket);
    },
);

// Link users
management.linkUsers('primaryId', { user_id: 'secondaryId' }).then((result: any) => console.log(result));

// Link users with callback
management.linkUsers('primaryId', { user_id: 'secondaryId' }, (err: Error, result: any) => {});

// Get all clients (with promise)
management
    .getClients()
    .then((clients: auth0.Client[]) => {
        console.log(clients);
    })
    .catch(err => {
        // Handle the error
    });

// Get all clients (with callback)
management.getClients((err: Error, clients: auth0.Client[]) => {});

// Get all clients with params (with promise)
management
    .getClients({ fields: ['name', 'client_metadata'], include_fields: true })
    .then((clients: auth0.Client[]) => {
        console.log(clients);
    })
    .catch(err => {
        // Handle the error
    });

// Connections
// Get all Connections with promise
management
    .getConnections()
    .then((connections: auth0.Connection[]) => {
        console.log(connections);
    })
    .catch(err => {
        // error handler
    });

// Get all Connections with callback
management.getConnections((err: Error, connections: auth0.Connection[]) => {});

// Get all Connections with promise and pagination
management
    .getConnections({ per_page: 25, page: 0 })
    .then((connections: auth0.Connection[]) => {
        console.log(connections);
    })
    .catch(err => {
        // error handler
    });

// Rules
// Get all Rules with promise
management
    .getRules()
    .then((rules: auth0.Rule[]) => {
        console.log(rules);
    })
    .catch(err => {
        // error handler
    });

// Get all Rules with callback
management.getRules((err: Error, rule: auth0.Rule[]) => {});

// Get all Rules with promise and pagination
management
    .getRules({ per_page: 25, page: 0 })
    .then((rules: auth0.Rule[]) => {
        console.log(rules);
    })
    .catch(err => {
        // error handler
    });

// Resource Servers
// Get all Resource Servers with promise
management
    .getResourceServers()
    .then((resourceServers: auth0.ResourceServer[]) => {
        console.log(resourceServers);
    })
    .catch(err => {
        // error handler
    });

// Get all Resource Servers with callback
management.getResourceServers((err: Error, resourceServers: auth0.ResourceServer[]) => {});

// Get all Resource Servers with promise and pagination
management
    .getRules({ per_page: 25, page: 0 })
    .then((resourceServers: auth0.ResourceServer[]) => {
        console.log(resourceServers);
    })
    .catch(err => {
        // error handler
    });

// Get all clients with params (with callback)
management.getClients(
    { fields: ['name', 'client_metadata'], include_fields: true },
    (err: Error, clients: auth0.Client[]) => {},
);

// Get all client grants
management.getClientGrants();

// Get all client grants (with callback)
management.getClientGrants((err: Error, data: auth0.ClientGrant[]) => console.log(data));

// Get all client data with params
management.getClientGrants({ per_page: 1 }).then((data: auth0.ClientGrant[]) => console.log(data));
management.getClientGrants({ per_page: 12 }, (err: Error, data: auth0.ClientGrant[]) => console.log(data));

management.getClientGrants({ page: 12 }).then((data: auth0.ClientGrant[]) => console.log(data));
management.getClientGrants({ page: 12 }, (err: Error, data) => console.log(data));

management.getClientGrants({ audience: 'audience' }).then((data: auth0.ClientGrant[]) => console.log(data));
management.getClientGrants({ audience: 'audience' }, (err: Error, data: auth0.ClientGrant[]) => console.log(data));

management.getClientGrants({ client_id: 'client_id' }).then((data: auth0.ClientGrant[]) => console.log(data));
management.getClientGrants({ client_id: 'client_id' }, (err: Error, data: auth0.ClientGrant[]) => console.log(data));

management.getClientGrants({ include_totals: true }).then((data: auth0.ClientGrantPage) => console.log(data));
management.getClientGrants({ include_totals: true }, (err: Error, data: auth0.ClientGrantPage) => console.log(data));

// Jobs
management
    .getJob({
        id: 'job_id',
    })
    .then(job => console.log((job as auth0.ExportUsersJob).fields));

// job.type can be used as a discriminator for automatic type assertion (no casting needed)
management
    .getJob({
        id: 'job_id',
    })
    .then(job => {
        if (job.type === 'users_export') {
            console.log(job.fields);
        }
    });

management.getJob(
    {
        id: 'job_id',
    },
    (err, data) => console.log((data as auth0.ExportUsersJob).fields),
);

management
    .getJob({
        id: 'job_id',
    })
    .then(job => console.log((job as auth0.ImportUsersJob).send_completion_email));

management.getJob(
    {
        id: 'job_id',
    },
    (err, data) => console.log((data as auth0.ImportUsersJob).send_completion_email),
);

management
    .getJob({
        id: 'job_id',
    })
    .then(job => console.log((job as auth0.VerificationEmailJob).id));

management.getJob(
    {
        id: 'job_id',
    },
    (err, data) => console.log((data as auth0.VerificationEmailJob).id),
);

management
    .importUsers({
        users: 'some file data',
        connection_id: 'con_id',
        upsert: true,
    })
    .then(results => console.log(results));

management
    .importUsersJob({
        users: 'some file data',
        connection_id: 'con_id',
        upsert: true,
    })
    .then(results => console.log(results));

management.importUsers(
    {
        users: 'some file data',
        connection_id: 'con_id',
        upsert: true,
    },
    (err, data) => console.log(data),
);

management.importUsersJob(
    {
        users: 'some file data',
        connection_id: 'con_id',
        upsert: true,
    },
    (err, data) => console.log(data),
);

management.importUsers(
    {
        users_json: 'some json data',
        connection_id: 'con_id',
        send_completion_email: false,
    },
    (err, data) => console.log(data),
);

management
    .exportUsers({
        connection_id: 'con_id',
        fields: [{ name: 'email', export_as: 'email_address' }],
        format: 'json',
        limit: 500,
    })
    .then(results => console.log(results));

management.exportUsers(
    {
        connection_id: 'con_id',
        fields: [{ name: 'email', export_as: 'email_address' }],
        format: 'json',
        limit: 500,
    },
    (err, data) => console.log(data),
);

management
    .sendEmailVerification({
        client_id: 'client_id',
        user_id: 'user_id',
    })
    .then(results => console.log(results));

management.sendEmailVerification(
    {
        client_id: 'client_id',
        user_id: 'user_id',
    },
    (err, data) => console.log(data),
);

// Roles
management.getRoles().then(roles => console.log(roles));
management.getRoles((err, data) => console.log(data));
management.getRoles({ name_filter: 'Admin' }).then(roles => console.log(roles));
management.getRoles({ name_filter: 'Admin' }, (err, data) => console.log(data));
management.getRoles({ per_page: 12 }).then(roles => console.log(roles));
management.getRoles({ per_page: 12 }, (err, data) => console.log(data));
management.getRoles({ include_totals: true }).then(rolePage => console.log(rolePage));
management.getRoles({ include_totals: true }, (err, data) => console.log(data));

management
    .createRole({
        name: 'Admin',
        description: 'I have all the power',
    })
    .then(role => console.log(role));
management.createRole(
    {
        name: 'Admin',
        description: 'I have all the power',
    },
    (err, data) => console.log(data),
);

management.getRole({ id: 'role_id' }).then(role => console.log(role));
management.getRole({ id: 'role_id' }, (err, data) => console.log(data));

management
    .deleteRole({ id: 'role_id' })
    .then(() => console.log('It worked'))
    .catch(err => console.error('Something went wrong ' + err));
management.deleteRole({ id: 'role_id' }, err => {
    if (err) {
        console.error('Something went wrong ' + err);
    } else {
        console.log('It worked');
    }
});

management
    .updateRole(
        { id: 'role_id' },
        {
            name: 'The new name',
        },
    )
    .then(role => console.log(role));
management.updateRole(
    { id: 'role_id' },
    {
        name: 'The new name',
    },
    (err, data) => console.log(data),
);

management.getPermissionsInRole({ id: 'role_id' }).then(permissions => console.log(permissions));
management.getPermissionsInRole({ id: 'role_id' }, (err, data) => console.log(data));
management.getPermissionsInRole({ id: 'role_id', per_page: 8 }).then(permissions => console.log(permissions));
management.getPermissionsInRole({ id: 'role_id', per_page: 8 }, (err, data) => console.log(data));
management.getPermissionsInRole({ id: 'role_id', include_totals: true }).then(permissions => console.log(permissions));
management.getPermissionsInRole({ id: 'role_id', include_totals: true }, (err, data) => console.log(data));

management
    .removePermissionsFromRole(
        { id: 'role_id' },
        {
            permissions: [{ permission_name: 'eat:cake', resource_server_identifier: 'https://my.api.com' }],
        },
    )
    .then(() => console.log('It worked'))
    .catch(err => console.log('Something went wrong ' + err));

management.removePermissionsFromRole(
    { id: 'role_id' },
    {
        permissions: [{ permission_name: 'eat:cake', resource_server_identifier: 'https://my.api.com' }],
    },
    err => {
        if (err) {
            console.error('Something went wrong ' + err);
        } else {
            console.log('It worked');
        }
    },
);

management
    .addPermissionsInRole(
        { id: 'role_id' },
        {
            permissions: [{ permission_name: 'eat:cake', resource_server_identifier: 'https://my.api.com' }],
        },
    )
    .then(() => console.log('It worked'))
    .catch(err => console.log('Something went wrong ' + err));

management.addPermissionsInRole(
    { id: 'role_id' },
    {
        permissions: [{ permission_name: 'eat:cake', resource_server_identifier: 'https://my.api.com' }],
    },
    err => {
        if (err) {
            console.error('Something went wrong ' + err);
        } else {
            console.log('It worked');
        }
    },
);

management.getUsersInRole({ id: 'role_id' }).then(users => console.log(users));
management.getUsersInRole({ id: 'role_id' }, (err, data) => console.log(data));
management.getUsersInRole({ id: 'role_id', per_page: 8 }).then(users => console.log(users));
management.getUsersInRole({ id: 'role_id', per_page: 8 }, (err, data) => console.log(data));
management.getUsersInRole({ id: 'role_id', include_totals: true }).then(userPage => console.log(userPage));
management.getUsersInRole({ id: 'role_id', include_totals: true }, (err, data) => console.log(data));

management.createClient({
    name: 'client',
});

management.createClient({
    name: 'client',
    grant_types: ['implicit'],
    jwt_configuration: {
        lifetime_in_seconds: 300,
        scopes: {},
        alg: 'RS256',
    },
    encryption_key: {
        pub: 'pub',
        cert: 'cert',
        subject: 'subject',
    },
});
management.createEmailTemplate({ name: 'template_name' }).then(data => {
    console.log(data);
});
management.createEmailTemplate({ name: 'template_name' }, err => {
    console.log(err);
});
management.getEmailTemplate({ name: 'template_name' }).then(data => {
    console.log(data);
});
management.getEmailTemplate({ name: 'template_name' }, (err, data) => {
    console.log(data);
});
management.updateEmailTemplate({ name: 'template_name' }, { type: 'type' }).then(data => {
    console.log(data);
});
management.updateEmailTemplate({ name: 'template_name' }, { type: 'type' }, (err, data) => {
    console.log(data);
});

management
    .getUserBlocks({ id: 'user_id' })
    .then(response => {
        response.blocked_for.forEach(blockedFor => console.log(`${blockedFor.identifier}:${blockedFor.ip}`));
    })
    .catch(err => console.log('Error: ' + err));

management.getUserBlocks({ id: 'user_id' }, (err, response) => {
    if (err) {
        console.log('Error: ' + err);
        return;
    }
    response.blocked_for.forEach(blockedFor => console.log(`${blockedFor.identifier}:${blockedFor.ip}`));
});

management
    .getUserBlocksByIdentifier({ identifier: 'email' })
    .then(response => {
        response.blocked_for.forEach(blockedFor => console.log(`${blockedFor.identifier}:${blockedFor.ip}`));
    })
    .catch(err => console.log('Error: ' + err));

management.getUserBlocksByIdentifier({ identifier: 'email' }, (err, response) => {
    if (err) {
        console.log('Error: ' + err);
        return;
    }
    response.blocked_for.forEach(blockedFor => console.log(`${blockedFor.identifier}:${blockedFor.ip}`));
});

management
    .unblockUser({ id: 'user_id' })
    .then(response => console.log(response))
    .catch(err => console.log('Error: ' + err));

management.unblockUser({ id: 'user_id' }, (err, response) => {
    if (err) {
        console.log('Error: ' + err);
        return;
    }
    console.log(response);
});

management
    .unblockUserByIdentifier({ identifier: 'email' })
    .then(response => console.log(response))
    .catch(err => console.log('Error: ' + err));

management.unblockUserByIdentifier({ identifier: 'email' }, (err, response) => {
    if (err) {
        console.log('Error: ' + err);
        return;
    }
    console.log(response);
});

// Rules configurations
management.setRulesConfig({ key: 'test' }, { value: 'test' }).then(config => console.log(config));
management.setRulesConfig({ key: 'test' }, { value: 'test' }, (err, config) => console.log(config));

management.deleteRulesConfig({ key: 'test' }).then(() => {});
management.deleteRulesConfig({ key: 'test' }, err => {});

management.getRulesConfigs().then(configs => console.log(configs));
management.getRulesConfigs((err, configs) => console.log(configs));

// Custom Domains
management.createCustomDomain({ domain: 'auth0.com', type: 'auth0_managed_certs' }).then(domain => console.log(domain));
management.createCustomDomain({ domain: 'auth0.com', type: 'auth0_managed_certs' }, (err, domain) =>
    console.log(domain),
);

management.getCustomDomains().then(domains => console.log(domains));
management.getCustomDomains((err, domains) => console.log(domains));

management.getCustomDomain({ id: 'cd_0000000000000001' }).then(domain => console.log(domain));
management.getCustomDomain({ id: 'cd_0000000000000001' }, (err, domain) => console.log(domain));

management
    .verifyCustomDomain({ id: 'cd_0000000000000001' })
    .then(domainVerification => console.log(domainVerification));
management.verifyCustomDomain({ id: 'cd_0000000000000001' }, (err, domainVerification) =>
    console.log(domainVerification),
);

management.deleteCustomDomain({ id: 'cd_0000000000000001' }).then(() => console.log('deleted'));
management.deleteCustomDomain({ id: 'cd_0000000000000001' }, err => console.log('deleted'));

// User enrollment
management.getGuardianEnrollment({ id: 'cd_0000000000000001' }).then(enrollment => console.log(enrollment));
management.getGuardianEnrollment({ id: 'cd_0000000000000001' }, (err, enrollment) => console.log(enrollment));

management.getGuardianEnrollments({ id: 'cd_0000000000000001' }).then(enrollments => console.log(enrollments));
management.getGuardianEnrollments({ id: 'cd_0000000000000001' }, (err, enrollments) => console.log(enrollments));

management.deleteGuardianEnrollment({ id: 'cd_0000000000000001' }).then(() => console.log('deleted'));
management.deleteGuardianEnrollment({ id: 'cd_0000000000000001' }, err => console.log('deleted error'));

management
    .createGuardianEnrollmentTicket({ user_id: 'user_id', send_mail: true })
    .then(results => console.log(results));
management.createGuardianEnrollmentTicket({ user_id: 'user_id', send_mail: true }, (err, data) => console.log(data));

// MFA invalidate remember browser
management.invalidateRememberBrowser({ id: 'cd_0000000000000001' }).then(() => console.log('mfa resetter'));
management.invalidateRememberBrowser({ id: 'cd_0000000000000001' }, err => console.log('mfa resetter error'));

// Grants
// $ExpectType Promise<GrantResponse[]>
management.getGrants({ user_id: 'user_id', client_id: 'client_id', audience: 'audience' });
management.getGrants(
    { user_id: 'user_id', client_id: 'client_id', audience: 'audience' },
    (err, grants) =>
        // $ExpectType GrantResponse[]
        grants,
);

// $ExpectType Promise<GrantResponse[]>
management.getGrants({ user_id: 'user_id', client_id: 'client_id', audience: 'audience', page: 2, per_page: 5 });
management.getGrants(
    { user_id: 'user_id', client_id: 'client_id', audience: 'audience', page: 2, per_page: 5 },
    (err, grants) =>
        // $ExpectType GrantResponse[]
        grants,
);

// Logs
management.getLog({ id: 'cd_0000000000000001' }).then(log => console.log(log));
management.getLog({ id: 'cd_0000000000000001' }, log => console.log(log));
management.getLogs().then(logs => console.log(logs));
management
    .getLogs({
        fields: 'audience',
        from: 'cd_0000000000000001',
        include_fields: true,
        include_totals: false,
        page: 0,
        per_page: 12,
        q: '?!?',
        sort: 'audience',
        take: 42,
    })
    .then(logs => console.log(logs));
management.getLogs(logs => console.log(logs));
management.getLogs(
    {
        fields: 'audience',
        from: 'cd_0000000000000001',
        include_fields: true,
        include_totals: false,
        page: 0,
        per_page: 12,
        q: '?!?',
        sort: 'audience',
        take: 42,
    },
    logs => console.log(logs),
);

const authentication = new auth0.AuthenticationClient({
    domain: 'auth0.com',
});

authentication
    .refreshToken({
        refresh_token: '{YOUR_REFRESH_TOKEN}',
        client_id: '{OPTIONAL_CLIENT_ID}',
    })
    .then(tokenResponse => {
        console.log(tokenResponse);
    })
    .catch(err => {
        // Handle the error.
    });

authentication.refreshToken(
    { refresh_token: '{YOUR_REFRESH_TOKEN}', client_id: '{OPTIONAL_CLIENT_ID}' },
    (err, tokenResponse) => {
        if (err) {
            // Handle error.
        }
        console.log(tokenResponse);
    },
);

const oauthAuthenticator = new auth0.OAuthAuthenticator({
    baseUrl: 'baseUrl',
    clientId: '{OPTIONAL_CLIENT_ID}',
    clientSecret: '{OPTIONAL_CLIENT_SECRET}',
});

oauthAuthenticator
    .refreshToken({
        refresh_token: '{YOUR_REFRESH_TOKEN}',
    })
    .then(tokenResponse => {
        console.log(tokenResponse);
    })
    .catch(err => {
        // Handle the error.
    });
oauthAuthenticator.refreshToken({ refresh_token: '{YOUR_REFRESH_TOKEN}' }, (err, tokenResponse) => {
    if (err) {
        // Handle error.
    }
    console.log(tokenResponse);
});

async () => {
    const signInUserData: auth0.SignInOptions = {
        username: '{YOUR_USERNAME}',
        otp: '123456',
        audience: 'audience',
    };
    signInUserData.realm = 'email';
    signInUserData.realm = 'sms';

    signInUserData.scope = 'openid profile email';
    const emailUserData: auth0.RequestEmailCodeOrLinkOptions = {
        email: '{YOUR_EMAIL}',
        send: 'code',
    };
    emailUserData.send = 'link';
    const smsUserData: auth0.RequestSMSCodeOptions = {
        client_id: '{YOUR_CLIENT_ID}',
        phone_number: '{YOUR_PHONE_NUMBER}',
    };
    const options: auth0.PasswordlessOptions = {};
    options.forwardedFor = '{YOUR_IP}';

    // $ExpectType SignInToken
    await authentication.passwordless.signIn(signInUserData);
    // $ExpectType SignInToken
    await authentication.passwordless.signIn(signInUserData, options);
    authentication.passwordless.signIn(signInUserData, (err, data) => {
        err; // $ExpectType Error
        data; // $ExpectType SignInToken
    });
    authentication.passwordless.signIn(signInUserData, options, (err, data) => {
        err; // $ExpectType Error
        data; // $ExpectType SignInToken
    });

    await authentication.passwordless.sendEmail(emailUserData);
    await authentication.passwordless.sendEmail(emailUserData, options);
    authentication.passwordless.sendEmail(emailUserData, (err, message) => {
        err; // $ExpectType Error
        message; // $ExpectType string
    });
    authentication.passwordless.sendEmail(emailUserData, options, (err, message) => {
        err; // $ExpectType Error
        message; // $ExpectType string
    });

    await authentication.passwordless.sendSMS(smsUserData);
    await authentication.passwordless.sendSMS(smsUserData, options);
    authentication.passwordless.sendSMS(smsUserData, (err, message) => {
        err; // $ExpectType Error
        message; // $ExpectType string
    });
    authentication.passwordless.sendSMS(smsUserData, options, (err, message) => {
        err; // $ExpectType Error
        message; // $ExpectType string
    });
};

async function signupTest(): Promise<void> {
    const signupResult = await authentication.database.signUp({ email: 'email', password: 'password' });
    signupResult._id; // $ExpectType string
    signupResult.email; // $ExpectType string
    signupResult.email_verified; // $ExpectType boolean

    authentication.database.signUp({ email: 'email', password: 'password' }, (err, data) => {
        err; // $ExpectType Error
        data; // $ExpectType User<AppMetadata, UserMetadata>
    });
}

const decoded = idToken.decode('{YOUR_API_V2_TOKEN}'); // $ExpectType DecodedToken
decoded._raw; // $ExpectType string
decoded.header; // $ExpectType any
decoded.payload; // $ExpectType any
decoded.signature; // $ExpectType string

() => {
    const defaultOptions = {
        issuer: 'issuer',
        audience: ['clientId', 'clientIdAlt'],
        nonce: 'a1b2c3d4e5',
    };
    idToken.validate('{YOUR_API_V2_TOKEN}'); // $ExpectType DecodedToken
    idToken.validate('{YOUR_API_V2_TOKEN}', defaultOptions); // $ExpectType DecodedToken
};

// Token manager
const tokenManager = new auth0.TokensManager({
    baseUrl: 'baseUrl',
    clientId: '{OPTIONAL_CLIENT_ID}',
    clientSecret: '{OPTIONAL_CLIENT_SECRET}',
    headers: '{OPTIONAL_HEADERS}',
});

// Revoke a refresh token using a callback
tokenManager.revokeRefreshToken(
    {
        token: '{REFRESH_TOKEN}',
        client_id: '{OPTIONAL_CLIENT_ID}',
        client_secret: '{OPTIONAL_CLIENT_SECRET}',
    },
    err => {
        if (err) {
            // Handle error.
        }
        console.log('Successful');
    },
);

// Revoke a refresh token using a promise
tokenManager
    .revokeRefreshToken({
        token: '{REFRESH_TOKEN}',
        client_id: '{OPTIONAL_CLIENT_ID}',
        client_secret: '{OPTIONAL_CLIENT_SECRET}',
    })
    .then(() => {
        console.log('Successful');
    })
    .catch(err => {
        // Handle the error.
    });

/**
 * Organizations
 *
 * Get All Organizations using a callback
 */
management.organizations.getAll((err, organizations: auth0.Organization[]) => {
    console.log({ organizations });
});

/**
 * Get All Organizations returning a Promise
 */
management.organizations.getAll().then((organizations: auth0.Organization[]) => {
    console.log({ organizations });
});

/**
 * Get All Organizations with pagination using a callback
 */
management.organizations.getAll({ page: 0, per_page: 5 }, (err, organizations: auth0.Organization[]) => {
    console.log({ organizations });
});

/**
 * Get All Organizations with pagination returning a Promise
 */
management.organizations.getAll({ page: 0, per_page: 5 }).then((organizations: auth0.Organization[]) => {
    console.log({ organizations });
});

/**
 * Get All Organizations with pagination and totals using a callback
 */
management.organizations.getAll({ page: 0, per_page: 5, include_totals: true }, (err, pagedOrganizations) => {
    // $ExpectType OrganizationsPaged
    pagedOrganizations;
});

/**
 * Get All Organizations with pagination and totals returning a Promise
 */
management.organizations.getAll({ page: 0, per_page: 5, include_totals: true }).then(pagedOrganizations => {
    // $ExpectType OrganizationsPaged
    pagedOrganizations;
});

/**
 * Get All Organizations with checkpoint pagination using a callback
 */
management.organizations.getAll({ take: 5, from: '' }, (err, organizations: auth0.Organization[]) => {
    console.log({ organizations });
});

/**
 * Get All Organizations with checkpoint pagination returning a Promise
 */
management.organizations.getAll({ take: 5, from: '' }).then((organizations: auth0.Organization[]) => {
    console.log({ organizations });
});

/**
 * Get an Organization by ID using a callback
 */
management.organizations.getByID({ id: '' }, (err, organization: auth0.Organization) => {
    console.log({ organization });
});

/**
 * Get an Organization by ID returning a Promise
 */
management.organizations.getByID({ id: '' }).then((organization: auth0.Organization) => {
    console.log({ organization });
});

/**
 * Get an Organization by name using a callback
 */
management.organizations.getByName({ name: '' }, (err, organization: auth0.Organization) => {
    console.log({ organization });
});

/**
 * Get an Organization by name returning a Promise
 */
management.organizations.getByName({ name: '' }).then((organization: auth0.Organization) => {
    console.log({ organization });
});

/**
 * Create an Organization using a callback
 */
management.organizations.create({ name: 'test_organization' }, (err, organization: auth0.Organization) => {
    console.log({ organization });
});

/**
 * Create an Organization returning a Promise
 */
management.organizations.create({ name: 'test_organization' }).then((organization: auth0.Organization) => {
    console.log({ organization });
});

/**
 * Update an Organization using a callback
 */
management.organizations.update(
    { id: 'organization_id' },
    { name: 'test_organization' },
    (err, organization: auth0.Organization) => {
        console.log({ organization });
    },
);

/**
 * Update an Organization returning a Promise
 */
management.organizations
    .update({ id: 'organization_id' }, { name: 'test_organization' })
    .then((organization: auth0.Organization) => {
        console.log({ organization });
    });

/**
 * Delete an Organization using a callback
 */
management.organizations.delete({ id: 'organization_id' }, err => {});

/**
 * Delete an Organization returning a Promise
 */
management.organizations.delete({ id: 'organization_id' }).then(() => {});

/**
 * Get an Organization's Enabled Connections using a callback
 */
management.organizations.getEnabledConnections(
    { id: 'organization_id' },
    (err, connections: auth0.OrganizationConnection[]) => {
        console.log({ connections });
    },
);

/**
 * Get an Organization's Enabled Connections returning a Promise
 */
management.organizations
    .getEnabledConnections({ id: 'organization_id' })
    .then((connections: auth0.OrganizationConnection[]) => {
        console.log({ connections });
    });
/**
 * Get an Organization's Enabled Connections with paging using a callback
 */
management.organizations.getEnabledConnections(
    { id: 'organization_id', page: 0, per_page: 5 },
    (err, connections: auth0.OrganizationConnection[]) => {
        console.log({ connections });
    },
);

/**
 * Get an Organization's Enabled Connections with paging returning a Promise
 */
management.organizations
    .getEnabledConnections({ id: 'organization_id', page: 0, per_page: 5 })
    .then((connections: auth0.OrganizationConnection[]) => {
        console.log({ connections });
    });

/**
 * Get an Organization's Enabled Connection using a callback
 */
management.organizations.getEnabledConnection(
    { id: 'organization_id', connection_id: 'connection_id' },
    (err, connection: auth0.OrganizationConnection) => {
        console.log({ connection });
    },
);

/**
 * Get an Organization's Enabled Connection returning a Promise
 */
management.organizations
    .getEnabledConnection({ id: 'organization_id', connection_id: 'connection_id' })
    .then((connection: auth0.OrganizationConnection) => {
        console.log({ connection });
    });

/**
 * Add an Organization's Enabled Connection using a callback
 */
management.organizations.addEnabledConnection(
    { id: 'organization_id' },
    { connection_id: 'connection_id', assign_membership_on_login: true },
    (err, connection: auth0.OrganizationConnection) => {
        console.log({ connection });
    },
);

/**
 * Add an Organization's Enabled Connection returning a Promise
 */
management.organizations
    .addEnabledConnection(
        { id: 'organization_id' },
        { connection_id: 'connection_id', assign_membership_on_login: true },
    )
    .then((connection: auth0.OrganizationConnection) => {
        console.log({ connection });
    });

/**
 * Remove an Organization's Enabled Connection using a callback
 */
management.organizations.removeEnabledConnection({ id: 'organization_id', connection_id: 'connection_id' }, err => {});

/**
 * Remove an Organization's Enabled Connection returning a Promise
 */
management.organizations
    .removeEnabledConnection({ id: 'organization_id', connection_id: 'connection_id' })
    .then(() => {});

/**
 * Update an Organization's Enabled Connection using a callback
 */
management.organizations.updateEnabledConnection(
    { id: 'organization_id', connection_id: 'connection_id' },
    { assign_membership_on_login: true },
    (err, connection: auth0.OrganizationConnection) => {
        console.log({ connection });
    },
);

/**
 * Update an Organization's Enabled Connection returning a Promise
 */
management.organizations
    .updateEnabledConnection(
        { id: 'organization_id', connection_id: 'connection_id' },
        { assign_membership_on_login: true },
    )
    .then((connection: auth0.OrganizationConnection) => {
        console.log({ connection });
    });

/**
 * Get an Organization's Members using a callback
 */
management.organizations.getMembers({ id: 'organization_id' }, (err, members: auth0.OrganizationMember[]) => {
    console.log({ members });
});

/**
 * Get a paged result of an Organization's Members using a callback
 */
management.organizations.getMembers({ id: 'organization_id', include_totals: true }, (err, pagedMembers) => {
    // $ExpectType OrganizationMembersPaged
    pagedMembers;
});

/**
 * Get an Organization's Members returning a Promise
 */
management.organizations.getMembers({ id: 'organization_id' }).then((members: auth0.OrganizationMember[]) => {
    console.log({ members });
});

/**
 * Get a paged result of an Organization's members returning a promise.
 */
management.organizations.getMembers({ id: 'organization_id', include_totals: true }).then(pagedMembers => {
    // $ExpectType OrganizationMembersPaged
    pagedMembers;
});

/**
 * Get an Organization's Members with pagination using a callback
 */
management.organizations.getMembers(
    { id: 'organization_id', page: 1, per_page: 2 },
    (err, members: auth0.OrganizationMember[]) => {
        console.log({ members });
    },
);

/**
 * Get an Organization's Members with pagination returning a Promise
 */
management.organizations
    .getMembers({ id: 'organization_id', page: 1, per_page: 2 })
    .then((members: auth0.OrganizationMember[]) => {
        console.log({ members });
    });

/**
 * Get an Organization's Members with checkpoint pagination using a callback
 */
management.organizations.getMembers(
    { id: 'organization_id', take: 2, from: '' },
    (err, members: auth0.OrganizationMember[]) => {
        console.log({ members });
    },
);

/**
 * Get an Organization's Members with checkpoint pagination returning a Promise
 */
management.organizations
    .getMembers({ id: 'organization_id', take: 2, from: '' })
    .then((members: auth0.OrganizationMember[]) => {
        console.log({ members });
    });

/**
 * Add Organization's Members using a callback
 */
management.organizations.addMembers({ id: 'organization_id' }, { members: ['user_id'] }, err => {});

/**
 * Add Organization's Members returning a Promise
 */
management.organizations.addMembers({ id: 'organization_id' }, { members: ['user_id'] }).then(() => {});

/**
 * Remove Organization's Members using a callback
 */
management.organizations.removeMembers({ id: 'organization_id' }, { members: ['user_id'] }, err => {});

/**
 * Remove Organization's Members returning a Promise
 */
management.organizations.removeMembers({ id: 'organization_id' }, { members: ['user_id'] }).then(() => {});

/**
 * Get Organization Invitations using a callback
 */
management.organizations.getInvitations(
    { id: 'organization_id' },
    (err, invitations: auth0.OrganizationInvitation[]) => {
        console.log(invitations);
    },
);

/**
 * Get Organization Invitations returning a Promise
 */
management.organizations
    .getInvitations({ id: 'organization_id' })
    .then((invitations: auth0.OrganizationInvitation[]) => {
        console.log(invitations);
    });

/**
 * Get Organization Invitations with pagination using a callback
 */
management.organizations.getInvitations(
    { id: 'organization_id', per_page: 2, page: 1 },
    (err, invitations: auth0.OrganizationInvitation[]) => {
        console.log(invitations);
    },
);

/**
 * Get Organization Invitations with pagination returning a Promise
 */
management.organizations
    .getInvitations({ id: 'organization_id', per_page: 2, page: 1 })
    .then((invitations: auth0.OrganizationInvitation[]) => {
        console.log(invitations);
    });

/**
 * Get Organization Invitations with pagination and totals using a callback
 */
management.organizations.getInvitations(
    { id: 'organization_id', per_page: 2, page: 1, include_totals: true },
    (err, pagedInvitations: auth0.OrganizationInvitationsPaged) => {
        // $ExpectType OrganizationInvitationsPaged
        pagedInvitations;
    },
);

/**
 * Get Organization Invitations with pagination and totals returning a Promise
 */
management.organizations
    .getInvitations({ id: 'organization_id', per_page: 2, page: 1, include_totals: true })
    .then((pagedInvitations: auth0.OrganizationInvitationsPaged) => {
        // $ExpectType OrganizationInvitationsPaged
        pagedInvitations;
    });

/**
 * Get Organization Invitations with properties using a callback
 */
management.organizations.getInvitations(
    { id: 'organization_id', fields: 'client_id', include_fields: false, sort: '' },
    (err, invitations: auth0.OrganizationInvitation[]) => {
        console.log(invitations);
    },
);

/**
 * Get Organization Invitations with properties returning a Promise
 */
management.organizations
    .getInvitations({ id: 'organization_id', fields: 'client_id', include_fields: false, sort: '' })
    .then((invitations: auth0.OrganizationInvitation[]) => {
        console.log(invitations);
    });

/**
 * Get Organization Invitation using a callback
 */
management.organizations.getInvitation(
    { id: 'organization_id', invitation_id: 'invitation_id', fields: 'client_id', include_fields: false },
    (err, invitation: auth0.OrganizationInvitation) => {
        console.log(invitation);
    },
);

/**
 * Get Organization Invitation returning a Promise
 */
management.organizations
    .getInvitation({
        id: 'organization_id',
        invitation_id: 'invitation_id',
        fields: 'client_id',
        include_fields: false,
    })
    .then((invitation: auth0.OrganizationInvitation) => {
        console.log(invitation);
    });

/**
 * Create an Organization Invitation using a callback
 */
management.organizations.createInvitation(
    { id: 'organization_id' },
    { client_id: 'client_id', invitee: { email: 'invitee_email' }, inviter: { name: 'inviter_name' } },
    (err, invitation: auth0.OrganizationInvitation) => {
        console.log(invitation);
    },
);

/**
 * Create an Organization Invitation returning a Promise
 */
management.organizations
    .createInvitation(
        { id: 'organization_id' },
        { client_id: 'client_id', invitee: { email: 'invitee_email' }, inviter: { name: 'inviter_name' } },
    )
    .then((invitation: auth0.OrganizationInvitation) => {
        console.log(invitation);
    });

/**
 * Delete an Organization Invitation using a callback
 */
management.organizations.deleteInvitation({ id: 'organization_id', invitation_id: 'invitation_id' }, err => {});

/**
 * Delete an Organization Invitation returning a Promise
 */
management.organizations.deleteInvitation({ id: 'organization_id', invitation_id: 'invitation_id' }).then(() => {});

/**
 * Get Organization Member Roles using a callback
 */
management.organizations.getMemberRoles({ id: 'organization_id', user_id: 'user_id' }, (err, roles: auth0.Role[]) => {
    console.log(roles);
});

/**
 * Get a paged result of an Organization Member Roles using a callback
 */
management.organizations.getMemberRoles(
    { id: 'organization_id', user_id: 'user_id', include_totals: true },
    (err, pagedRoles: Omit<auth0.RolePage, 'length'>) => {
        console.log(pagedRoles);
    },
);

/**
 * Get a paged result of an Organization Member Roles returning a Promise
 */
management.organizations
    .getMemberRoles({ id: 'organization_id', user_id: 'user_id', include_totals: true })
    .then((pagedRoles: Omit<auth0.RolePage, 'length'>) => {
        console.log(pagedRoles);
    });

/**
 * Get a paged result of an Organization Member Roles with pagination using a callback
 */
management.organizations.getMemberRoles(
    { id: 'organization_id', user_id: 'user_id', page: 0, per_page: 2 },
    (err, roles: auth0.Role[]) => {
        console.log(roles);
    },
);

/**
 * Organization Member Roles with pagination returning a Promise
 */
management.organizations
    .getMemberRoles({ id: 'organization_id', user_id: 'user_id', page: 0, per_page: 2 })
    .then((roles: auth0.Role[]) => {
        console.log(roles);
    });

/**
 * Add an Organization Member Role using a callback
 */
management.organizations.addMemberRoles(
    { id: 'organization_id', user_id: 'user_id' },
    { roles: ['role_id'] },
    err => {},
);

/**
 * Add an Organization Member Role returning a Promise
 */
management.organizations
    .addMemberRoles({ id: 'organization_id', user_id: 'user_id' }, { roles: ['role_id'] })
    .then(() => {});

/**
 * Remove an Organization Member Role using a callback
 */
management.organizations.removeMemberRoles(
    { id: 'organization_id', user_id: 'user_id' },
    { roles: ['role_id'] },
    err => {},
);

/**
 * Remove an Organization Member Role returning a Promise
 */
management.organizations
    .removeMemberRoles({ id: 'organization_id', user_id: 'user_id' }, { roles: ['role_id'] })
    .then(() => {});

// Device Credentials
management.getDeviceCredentials({ user_id: 'user_id' }).then(deviceCredentials => {
    deviceCredentials; // $ExpectType DeviceCredential[]
});
management.getDeviceCredentials({ user_id: 'user_id' }, (err, deviceCredentials) => {
    deviceCredentials; // $ExpectType DeviceCredential[]
});

management.deleteDeviceCredential({ id: 'id' }).then(() => {});
management.deleteDeviceCredential({ id: 'id' }, err => {});
