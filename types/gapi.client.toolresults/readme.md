# TypeScript typings for Cloud Tool Results API v1beta3
Reads and publishes results from Firebase Test Lab.
For detailed description please check [documentation](https://firebase.google.com/docs/test-lab/).

## Installing

Install typings for Cloud Tool Results API:
```
npm install @types/gapi.client.toolresults@v1beta3 --save-dev
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
gapi.client.load('toolresults', 'v1beta3', () => {
    // now we can use gapi.client.toolresults
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

After that you can use Cloud Tool Results API resources:

```typescript 
    
/* 
Gets the Tool Results settings for a project.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read from project  
*/
await gapi.client.projects.getSettings({ projectId: "projectId",  }); 
    
/* 
Creates resources for settings which have not yet been set.

Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days.

The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details.

If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created.

May return any canonical error codes, including the following:

- PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage  
*/
await gapi.client.projects.initializeSettings({ projectId: "projectId",  });
```