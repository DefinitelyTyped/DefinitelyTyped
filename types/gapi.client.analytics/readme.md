# TypeScript typings for Google Analytics API v3

Views and manages your Google Analytics data.
For detailed description please check [documentation](https://developers.google.com/analytics/).

## Installing

Install typings for Google Analytics API:

```
npm install @types/gapi.client.analytics@v3 --save-dev
```

## Usage

You need to initialize Google API client in your code:

```typescript
gapi.load('client', () => {
  // now we can use gapi.client
  // ...
});
```

Then load api client wrapper:

```typescript
gapi.client.load('analytics', 'v3', () => {
  // now we can use gapi.client.analytics
  // ...
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [ 
      // View and manage your Google Analytics data
      'https://www.googleapis.com/auth/analytics',

      // Edit Google Analytics management entities
      'https://www.googleapis.com/auth/analytics.edit',

      // Manage Google Analytics Account users by email address
      'https://www.googleapis.com/auth/analytics.manage.users',

      // View Google Analytics user permissions
      'https://www.googleapis.com/auth/analytics.manage.users.readonly',

      // Create a new Google Analytics account along with its default property and view
      'https://www.googleapis.com/auth/analytics.provision',

      // View your Google Analytics data
      'https://www.googleapis.com/auth/analytics.readonly',

      // Manage Google Analytics user deletion requests
      'https://www.googleapis.com/auth/analytics.user.deletion',
    ],
    immediate = true;
// ...

gapi.auth.authorize(
  { client_id: client_id, scope: scope, immediate: immediate },
  authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
    } else {
        /* handle authorization error */
    }
});
```

After that you can use Google Analytics API resources:

```typescript

/*
Creates an account ticket.
*/
await gapi.client.analytics.provisioning.createAccountTicket({  });

/*
Provision account.
*/
await gapi.client.analytics.provisioning.createAccountTree({  });
```
