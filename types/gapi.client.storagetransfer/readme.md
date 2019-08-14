# TypeScript typings for Google Storage Transfer API v1
Transfers data from external data sources to a Google Cloud Storage bucket or between Google Cloud Storage buckets.
For detailed description please check [documentation](https://cloud.google.com/storage/transfer).

## Installing

Install typings for Google Storage Transfer API:
```
npm install @types/gapi.client.storagetransfer@v1 --save-dev
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
gapi.client.load('storagetransfer', 'v1', () => {
    // now we can use gapi.client.storagetransfer
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

After that you can use Google Storage Transfer API resources:

```typescript 
    
/* 
Returns the Google service account that is used by Storage Transfer
Service to access buckets in the project where transfers
run or in other projects. Each Google service account is associated
with one Google Cloud Platform Console project. Users
should add this service account to the Google Cloud Storage bucket
ACLs to grant access to Storage Transfer Service. This service
account is created and owned by Storage Transfer Service and can
only be used by Storage Transfer Service.  
*/
await gapi.client.googleServiceAccounts.get({ projectId: "projectId",  }); 
    
/* 
Creates a transfer job that runs periodically.  
*/
await gapi.client.transferJobs.create({  }); 
    
/* 
Gets a transfer job.  
*/
await gapi.client.transferJobs.get({ jobName: "jobName",  }); 
    
/* 
Lists transfer jobs.  
*/
await gapi.client.transferJobs.list({  }); 
    
/* 
Updates a transfer job. Updating a job's transfer spec does not affect
transfer operations that are running already. Updating the scheduling
of a job is not allowed.  
*/
await gapi.client.transferJobs.patch({ jobName: "jobName",  }); 
    
/* 
Cancels a transfer. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.  
*/
await gapi.client.transferOperations.cancel({ name: "name",  }); 
    
/* 
This method is not supported and the server returns `UNIMPLEMENTED`.  
*/
await gapi.client.transferOperations.delete({ name: "name",  }); 
    
/* 
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.  
*/
await gapi.client.transferOperations.get({ name: "name",  }); 
    
/* 
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.  
*/
await gapi.client.transferOperations.list({ name: "name",  }); 
    
/* 
Pauses a transfer operation.  
*/
await gapi.client.transferOperations.pause({ name: "name",  }); 
    
/* 
Resumes a transfer operation that is paused.  
*/
await gapi.client.transferOperations.resume({ name: "name",  });
```