# Typescript typings for Genomics API
Upload, process, query, and search Genomics data in the cloud.
For detailed description please check [documentation](https://cloud.google.com/genomics).

## Installing

Install typings for Genomics API:
```
npm install @types/gapi.client.genomics-v1alpha2 --save-dev
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
gapi.client.load('genomics', 'v1alpha2', () => {
    // now we can use gapi.client.genomics
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
    
        // View and manage Genomics data
        'https://www.googleapis.com/auth/genomics',
    
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
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

After that you can use Genomics API resources:

```typescript 
    
/* 
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.  
*/
await gapi.client.operations.get({ name: "name",  }); 
    
/* 
Lists operations that match the specified filter in the request.  
*/
await gapi.client.operations.list({ name: "name",  }); 
    
/* 
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.  
*/
await gapi.client.operations.cancel({ name: "name",  }); 
    
/* 
Retrieves a pipeline based on ID.

Caller must have READ permission to the project.  
*/
await gapi.client.pipelines.get({ pipelineId: "pipelineId",  }); 
    
/* 
Sets status of a given operation. Any new timestamps (as determined by
description) are appended to TimestampEvents. Should only be called by VMs
created by the Pipelines Service and not by end users.  
*/
await gapi.client.pipelines.setOperationStatus({  }); 
    
/* 
Deletes a pipeline based on ID.

Caller must have WRITE permission to the project.  
*/
await gapi.client.pipelines.delete({ pipelineId: "pipelineId",  }); 
    
/* 
Gets controller configuration information. Should only be called
by VMs created by the Pipelines Service and not by end users.  
*/
await gapi.client.pipelines.getControllerConfig({  }); 
    
/* 
Lists pipelines.

Caller must have READ permission to the project.  
*/
await gapi.client.pipelines.list({  }); 
    
/* 
Creates a pipeline that can be run later. Create takes a Pipeline that
has all fields other than `pipelineId` populated, and then returns
the same pipeline with `pipelineId` populated. This id can be used
to run the pipeline.

Caller must have WRITE permission to the project.  
*/
await gapi.client.pipelines.create({  }); 
    
/* 
Runs a pipeline. If `pipelineId` is specified in the request, then
run a saved pipeline. If `ephemeralPipeline` is specified, then run
that pipeline once without saving a copy.

The caller must have READ permission to the project where the pipeline
is stored and WRITE permission to the project where the pipeline will be
run, as VMs will be created and storage will be used.

If a pipeline operation is still running after 6 days, it will be canceled.  
*/
await gapi.client.pipelines.run({  });
```