import * as auth0 from 'auth0';

const management = new auth0.ManagementClient({
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
  .createUser({ connection: 'email', email: 'hi@me.co' })
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


// Update a user
management
  .updateUser({id: "user_id"}, {"email": "hi@me.co"});

// Update a user using callback
management
  .updateUser({id: "user_id"}, {"email": "hi@me.co"}, (err: Error, users: auth0.User) => {});


// Update user metadata
management
  .updateUserMetadata({id: "user_id"}, {"key": "value"});

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

// Using different client settings.

const retryableManagementClient = new auth0.ManagementClient({
  clientId: '',
  clientSecret: '',
  domain: 'xxx.auth0.com',
  retry: {
    enabled : true
  }
});

management.createPasswordChangeTicket({
  connection_id: 'con_id',
  email: 'test@me.co',
  new_password: 'password',
  result_url: 'https://www.google.com/',
  ttl_sec: 86400,
}, (err: Error, data) => {
  console.log(data.ticket);
});

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

// Get all cients with params (with callback)
management.getClients({fields:['name','client_metadata'], include_fields:true}, (err:Error, clients:auth0.Client[]) => {});
