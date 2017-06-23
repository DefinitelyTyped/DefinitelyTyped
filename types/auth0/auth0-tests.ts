import * as auth0 from 'auth0';

const management = new auth0.ManagementClient({
  token: '{YOUR_API_V2_TOKEN}',
  domain: '{YOUR_ACCOUNT}.auth0.com'
});

const auth = new auth0.AuthenticationClient({
  domain: '{YOUR_ACCOUNT}.auth0.com',
  clientId: '{OPTIONAL_CLIENT_ID}'
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
