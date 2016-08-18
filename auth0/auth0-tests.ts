/// <reference path="auth0.d.ts" />

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
