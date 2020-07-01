# TypeScript typings for Firebase Rules API v1
Creates and manages rules that determine when a Firebase Rules-enabled service should permit a request.

For detailed description please check [documentation](https://firebase.google.com/docs/storage/security).

## Installing

Install typings for Firebase Rules API:
```
npm install @types/gapi.client.firebaserules@v1 --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('firebaserules', 'v1', () => {
    // now we can use gapi.client.firebaserules
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View and administer all your Firebase data and settings
        'https://www.googleapis.com/auth/firebase',
    
        // View all your Firebase data and settings
        'https://www.googleapis.com/auth/firebase.readonly',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Firebase Rules API resources:

```typescript 
    
/* 
Test `Source` for syntactic and semantic correctness. Issues present, if
any, will be returned to the caller with a description, severity, and
source location.

The test method may be executed with `Source` or a `Ruleset` name.
Passing `Source` is useful for unit testing new rules. Passing a `Ruleset`
name is useful for regression testing an existing rule.

The following is an example of `Source` that permits users to upload images
to a bucket bearing their user id and matching the correct metadata:

_*Example*_

    // Users are allowed to subscribe and unsubscribe to the blog.
    service firebase.storage {
      match /users/{userId}/images/{imageName} {
          allow write: if userId == request.auth.uid
              && (imageName.matches('*.png$')
              || imageName.matches('*.jpg$'))
              && resource.mimeType.matches('^image/')
      }
    }  
*/
await gapi.client.projects.test({ name: "name",  });
```