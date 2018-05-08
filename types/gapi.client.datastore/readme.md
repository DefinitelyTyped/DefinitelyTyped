# TypeScript typings for Google Cloud Datastore API v1
Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.

For detailed description please check [documentation](https://cloud.google.com/datastore/).

## Installing

Install typings for Google Cloud Datastore API:
```
npm install @types/gapi.client.datastore@v1 --save-dev
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
gapi.client.load('datastore', 'v1', () => {
    // now we can use gapi.client.datastore
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
    
        // View and manage your Google Cloud Datastore data
        'https://www.googleapis.com/auth/datastore',
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

After that you can use Google Cloud Datastore API resources:

```typescript 
    
/* 
Allocates IDs for the given keys, which is useful for referencing an entity
before it is inserted.  
*/
await gapi.client.projects.allocateIds({ projectId: "projectId",  }); 
    
/* 
Begins a new transaction.  
*/
await gapi.client.projects.beginTransaction({ projectId: "projectId",  }); 
    
/* 
Commits a transaction, optionally creating, deleting or modifying some
entities.  
*/
await gapi.client.projects.commit({ projectId: "projectId",  }); 
    
/* 
Looks up entities by key.  
*/
await gapi.client.projects.lookup({ projectId: "projectId",  }); 
    
/* 
Rolls back a transaction.  
*/
await gapi.client.projects.rollback({ projectId: "projectId",  }); 
    
/* 
Queries for entities.  
*/
await gapi.client.projects.runQuery({ projectId: "projectId",  });
```