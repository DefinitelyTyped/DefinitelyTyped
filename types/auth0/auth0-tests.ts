import * as auth0 from 'auth0';

const management = new auth0.ManagementClient({
  token: '{YOUR_API_V2_TOKEN}',
  domain: '{YOUR_ACCOUNT}.auth0.com'
});

const uManagement = new auth0.ManagementClient<{aTest: string},{uTest: string}>({
    token: '{YOUR_API_V2_TOKEN}',
    domain: '{YOUR_ACCOUNT}.auth0.com'
});

const auth = new auth0.AuthenticationClient({
  domain: '{YOUR_ACCOUNT}.auth0.com',
  clientId: '{OPTIONAL_CLIENT_ID}',
  clientSecret: '{OPTIONAL_CLIENT_SECRET}'
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
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    // Handle the error.
  });

// Search users without paging - callback style
management.getUsers({search_engine: 'v3', q: 'name:"jane"', per_page: 25}, (err: Error, users: auth0.User[]) => {
    if (err) {
        // Handle error
    }
    console.log(users);
});

// Search users without paging - promise style
management.getUsers({search_engine: 'v3', q: 'name:"jane"', per_page: 25})
    .then((users) => {
        console.log(users);
    })
    .catch((err) => {
        // Handle the error
    });

// Search users with paging - callback style
management.getUsers({search_engine: 'v3', q: 'name:"jane"', per_page: 25, include_totals: true}, (err: Error, userPage: auth0.UserPage) => {
    if (err) {
        // Handle error
    }
    console.log(userPage.total);
});

// Search users with paging - promise style
management.getUsers({search_engine: 'v3', q: 'name:"jane"', per_page: 25, include_totals: true})
    .then((users: auth0.UserPage) => {
        console.log(users.total);
    })
    .catch((err) => {
        // Handle the error
    });

// Using a callback.
management.getUser({id: 'user_id'},(err: Error, user: auth0.User) => {
  if (err) {
    // Handle error.
  }
  console.log(user);
});

// Using a Promise.
management
  .getUser({id: 'user_id'})
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    // Handle the error.
  });

// Using a callback.
management.deleteUser({id: 'user_id'},(err: Error) => {
  if (err) {
    // Handle error.
  }
  console.log('deleted');
});

// Using a Promise.
management
  .deleteUser({id: 'user_id'})
  .then(() => {
    console.log('deleted');
  })
  .catch((err) => {
    // Handle the error.
  });

management
  .createUser({
    connection: 'My-Connection',
    email: 'hi@me.co',
  }).then((user) => {
    console.log(user);
  }).catch((err) => {
    // Handle the error.
  });

// Link users
management
  .createUser({ connection: 'email', email: 'hi@me.co', user_id: "my_id" })
  .catch(err => console.error('Cannot create E-mail user', err))
  .then((emailUser) => {
    if (!emailUser) return;
    management
      .createUser({ connection: 'sms', phone_number: '+1234567890' })
      .catch(err => console.error('Cannot create SMS user', err))
      .then((smsUser) => {
        if (!smsUser) return;
        const userId = emailUser.user_id;
        const params = { user_id: smsUser.user_id, provider: 'sms' };
        management.linkUsers(userId, params)
          .catch(err => console.error('Cannot link E-mail and SMS users', err))
          .then((linkedUsers) => console.log(linkedUsers))
      })
  });

auth
  .requestChangePasswordEmail({
    connection: 'My-Connection',
    email: 'hi@me.co',
  }).then((response) => {
    console.log(response);
  }).catch((err) => {
    // Handle the error.
  });

auth
  .oauth.authorizationCodeGrant({
    code: '{CODE}',
    redirect_uri: '{REDIRECT_URI}'
  });

// Update a user
management
  .updateUser({id: "user_id"}, {"email": "hi@me.co"});

// Update a user using callback
management
  .updateUser({id: "user_id"}, {"email": "hi@me.co"}, (err: Error, users: auth0.User) => {});

// Update user metadata
management
  .updateUserMetadata({id: "user_id"}, {"key": "value"});

uManagement.updateAppMetadata({id: "user_id"},{aTest: 'test'});

// Update user metadata with JSON object
management
    .updateUserMetadata({id: "user_id"}, {
      key: "value",
      numKey: 123,
      objKey: {
        foo: "bar",
        another: "value"
      }
    });
uManagement.updateUserMetadata({id: "user_id"}, { uTest: "value"});

// Update user metadata using callback
management
  .updateUserMetadata({id: "user_id"}, {"key": "value"}, (err: Error, users: auth0.User) => {});


// Update app metadata
management
  .updateAppMetadata({id: "user_id"}, {"key": "value"});

// Update app metadata using callback
management
  .updateAppMetadata({id: "user_id"}, {"key": "value"}, (err: Error, users: auth0.User) => {});


management.getUsersByEmail('email@address.com', (err, users) => {
  console.log(users);
});

management.getUsersByEmail('email@address.com').then((users) => {
  console.log(users);
});

management.getUserRoles({id: "user_id"}).then(roles => console.log(roles));
management.getUserRoles({id: "user_id"}, (err, data) => console.log(data));
management.getUserRoles({id: "user_id", per_page: 3}).then(roles => console.log(roles));
management.getUserRoles({id: "user_id", per_page: 3}, (err, data) => console.log(data));
management.getUserRoles({id: "user_id", include_totals: true}).then(rolePage => console.log(rolePage));
management.getUserRoles({id: "user_id", include_totals: true}, (err, data) => console.log(data));

management.removeRolesFromUser({id: "user_id"}, { roles: [ "role_id" ] })
    .then(() => console.log("It worked"))
    .catch(err => console.log("Something went wrong " + err));
management.removeRolesFromUser({id: "user_id"}, { roles: [ "role_id" ] }, err => {
    if (err) {
        console.error("Something went wrong " + err);
    } else {
        console.log("It worked");
    }
});

management.assignRolestoUser({id: "user_id"}, { roles: [ "role_id" ] })
    .then(() => console.log("It worked"))
    .catch(err => console.log("Something went wrong " + err));
management.assignRolestoUser({id: "user_id"}, { roles: [ "role_id" ] }, err => {
    if (err) {
        console.error("Something went wrong " + err);
    } else {
        console.log("It worked");
    }
});

management.getUserPermissions({id: "user_id"}).then(permissions => console.log(permissions));
management.getUserPermissions({id: "user_id"}, (err, data) => console.log(data));
management.getUserPermissions({id: "user_id", per_page: 3}).then(permissions => console.log(permissions));
management.getUserPermissions({id: "user_id", per_page: 3}, (err, data) => console.log(data));
management.getUserPermissions({id: "user_id", include_totals: true}).then(permissionPage => console.log(permissionPage));
management.getUserPermissions({id: "user_id", include_totals: true}, (err, data) => console.log(data));

management.removePermissionsFromUser({id: "user_id"}, {
        permissions: [
            { permission_name: "god:mode", resource_server_identifier: "https://my.api.com" }
        ]
    })
    .then(() => console.log("It worked"))
    .catch(err => console.log("Something went wrong " + err));
management.removePermissionsFromUser({id: "user_id"}, {
    permissions: [
        { permission_name: "god:mode", resource_server_identifier: "https://my.api.com" }
    ]
}, (err) => {
    if (err) {
        console.error("Something went wrong " + err);
    } else {
        console.log("It worked");
    }
});

management.assignPermissionsToUser({id: "user_id"}, {
        permissions: [
            { permission_name: "god:mode", resource_server_identifier: "https://my.api.com" }
        ]
    })
    .then(() => console.log("It worked"))
    .catch(err => console.log("Something went wrong " + err));
management.assignPermissionsToUser({id: "user_id"}, {
    permissions: [
        { permission_name: "god:mode", resource_server_identifier: "https://my.api.com" }
    ]
}, (err) => {
    if (err) {
        console.error("Something went wrong " + err);
    } else {
        console.log("It worked");
    }
});

// Using different client settings.

const retryableManagementClient = new auth0.ManagementClient({
  clientId: '',
  clientSecret: '',
  domain: 'xxx.auth0.com',
  retry: {
    enabled : true
  }
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
    }
);

// Link users
management.linkUsers('primaryId', { user_id: 'secondaryId' })
  .then((result: any) => console.log(result));

// Link users with callback
management.linkUsers('primaryId', { user_id: 'secondaryId' },
  (err: Error, result: any) => {});

// Get all clients (with promise)
management.getClients()
  .then((clients: auth0.Client[]) => {
    console.log(clients);
  })
  .catch((err) => {
    // Handle the error
  });

//Get all clients (with callback)
management.getClients((err: Error, clients: auth0.Client[]) => {});

// Get all clients with params (with promise)
management.getClients({fields:['name','client_metadata'], include_fields:true})
  .then((clients: auth0.Client[]) => {
    console.log(clients);
  })
  .catch((err) => {
    // Handle the error
  });

// Get all clients with params (with callback)
management.getClients({fields:['name','client_metadata'], include_fields:true}, (err:Error, clients:auth0.Client[]) => {});

// Jobs
management.getJob({
    id: 'job_id'
}).then((job) => console.log((<auth0.ExportUsersJob>job).fields));

// job.type can be used as a discriminator for automatic type assertion (no casting needed)
management.getJob({
    id: 'job_id'
}).then((job) => {
    if (job.type === 'users_export') {
        console.log(job.fields);
    }
});

management.getJob({
    id: 'job_id'
}, (err, data) => console.log((<auth0.ExportUsersJob>data).fields));

management.getJob({
    id: 'job_id'
}).then((job) => console.log((<auth0.ImportUsersJob>job).send_completion_email));

management.getJob({
    id: 'job_id'
}, (err, data) => console.log((<auth0.ImportUsersJob>data).send_completion_email));

management.getJob({
    id: 'job_id'
}).then((job) => console.log((<auth0.VerificationEmailJob>job).id));

management.getJob({
    id: 'job_id'
}, (err, data) => console.log((<auth0.VerificationEmailJob>data).id));

management.importUsers({
    users: "some file data",
    connection_id: 'con_id',
    upsert: true
}).then((results) => console.log(results));

management.importUsers({
    users: "some file data",
    connection_id: 'con_id',
    upsert: true
}, (err, data) => console.log(data));

management.exportUsers({
    connection_id: 'con_id',
    fields: [
        { name: 'email', export_as: 'email_address' }
    ],
    format: "json",
    limit: 500
}).then((results) => console.log(results));

management.exportUsers({
    connection_id: 'con_id',
    fields: [
        { name: 'email', export_as: 'email_address' }
    ],
    format: "json",
    limit: 500
}, (err, data) => console.log(data));

management.sendEmailVerification({
    client_id: 'client_id',
    user_id: 'user_id'
}).then((results) => console.log(results));

management.sendEmailVerification({
    client_id: 'client_id',
    user_id: 'user_id'
}, (err, data) => console.log(data));

// Roles
management.getRoles().then(roles => console.log(roles));
management.getRoles((err, data) => console.log(data));
management.getRoles({name_filter: "Admin"}).then(roles => console.log(roles));
management.getRoles({name_filter: "Admin"}, (err, data) => console.log(data));
management.getRoles({per_page: 12}).then(roles => console.log(roles));
management.getRoles({per_page: 12}, (err, data) => console.log(data));
management.getRoles({include_totals: true}).then(rolePage => console.log(rolePage));
management.getRoles({include_totals: true}, (err, data) => console.log(data));

management.createRole({
    name: "Admin",
    description: "I have all the power"
}).then(role => console.log(role));
management.createRole({
    name: "Admin",
    description: "I have all the power"
}, (err, data) => console.log(data));

management.getRole({id: "role_id"}).then(role => console.log(role));
management.getRole({id: "role_id"}, (err, data) => console.log(data));


management.deleteRole({id: "role_id"})
    .then(() => console.log("It worked"))
    .catch(err => console.error("Something went wrong " + err));
management.deleteRole({id: "role_id"}, err => {
    if (err) {
        console.error("Something went wrong " + err);
    } else {
        console.log("It worked");
    }
});

management.updateRole({id: "role_id"}, {
    name: "The new name"
}).then(role => console.log(role));
management.updateRole({id: "role_id"}, {
    name: "The new name"
}, (err, data) => console.log(data));

management.getPermissionsInRole({id: "role_id"}).then(permissions => console.log(permissions));
management.getPermissionsInRole({id: "role_id"}, (err, data) => console.log(data));

management.removePermissionsFromRole({id: "role_id"}, {
        permissions: [
            { permission_name: "eat:cake", resource_server_identifier: "https://my.api.com" }
        ]
    })
    .then(() => console.log("It worked"))
    .catch(err => console.log("Something went wrong " + err));
management.removePermissionsFromRole({id: "role_id"}, {
    permissions: [
        { permission_name: "eat:cake", resource_server_identifier: "https://my.api.com" }
    ]
}, err => {
    if (err) {
        console.error("Something went wrong " + err);
    } else {
        console.log("It worked");
    }
});

management.addPermissionsInRole({id: "role_id"}, {
        permissions: [
            { permission_name: "eat:cake", resource_server_identifier: "https://my.api.com" }
        ]
    })
    .then(() => console.log("It worked"))
    .catch(err => console.log("Something went wrong " + err));
management.addPermissionsInRole({id: "role_id"}, {
    permissions: [
        { permission_name: "eat:cake", resource_server_identifier: "https://my.api.com" }
    ]
}, err => {
    if (err) {
        console.error("Something went wrong " + err);
    } else {
        console.log("It worked");
    }
});

management.getUsersInRole({id: "role_id"}).then(users => console.log(users));
management.getUsersInRole({id: "role_id"}, (err, data) => console.log(data));
management.getUsersInRole({id: "role_id", per_page: 8}).then(users => console.log(users));
management.getUsersInRole({id: "role_id", per_page: 8}, (err, data) => console.log(data));
management.getUsersInRole({id: "role_id", include_totals: true}).then(userPage => console.log(userPage));
management.getUsersInRole({id: "role_id", include_totals: true}, (err, data) => console.log(data));

management.createClient({
    name: 'client'
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
    }
});

management.createEmailTemplate({name: 'template_name'}).then(data => {console.log(data)});
management.createEmailTemplate({name: 'template_name'}, (err) => {console.log(err)});
management.getEmailTemplate({name: 'template_name'}).then(data => {console.log(data)});
management.getEmailTemplate({name: 'template_name'}, (err, data) => {console.log(data)});
management.updateEmailTemplate({name: 'template_name'}, {type:'type'}).then(data => {console.log(data)});
management.updateEmailTemplate({name: 'template_name'}, {type:'type'}, (err, data) => {console.log(data)});

management.getUserBlocks({ id: 'user_id' })
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

management.getUserBlocksByIdentifier({ identifier: 'email' })
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

management.unblockUser({ id: 'user_id' })
    .then(response => console.log(response))
    .catch(err => console.log('Error: ' + err));

management.unblockUser({ id: 'user_id' }, (err, response) => {
    if (err) {
        console.log('Error: ' + err);
        return;
    }
    console.log(response);
});

management.unblockUserByIdentifier({ identifier: 'email' })
    .then(response => console.log(response))
    .catch(err => console.log('Error: ' + err));

management.unblockUserByIdentifier({ identifier: 'email' }, (err, response) => {
    if (err) {
        console.log('Error: ' + err);
        return;
    }
    console.log(response);
});
