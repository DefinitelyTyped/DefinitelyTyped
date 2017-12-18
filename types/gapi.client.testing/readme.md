# TypeScript typings for Google Cloud Testing API v1
Allows developers to run automated tests for their mobile applications on Google infrastructure.
For detailed description please check [documentation](https://developers.google.com/cloud-test-lab/).

## Installing

Install typings for Google Cloud Testing API:
```
npm install @types/gapi.client.testing@v1 --save-dev
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
gapi.client.load('testing', 'v1', () => {
    // now we can use gapi.client.testing
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
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
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

After that you can use Google Cloud Testing API resources:

```typescript 
    
/* 
Get the catalog of supported test environments.

May return any of the following canonical error codes:

- INVALID_ARGUMENT - if the request is malformed
- NOT_FOUND - if the environment type does not exist
- INTERNAL - if an internal error occurred  
*/
await gapi.client.testEnvironmentCatalog.get({ environmentType: "environmentType",  });
```