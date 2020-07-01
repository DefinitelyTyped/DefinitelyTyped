# TypeScript typings for Google Cloud Deployment Manager API v2
Declares, configures, and deploys complex solutions on Google Cloud Platform.
For detailed description please check [documentation](https://cloud.google.com/deployment-manager/).

## Installing

Install typings for Google Cloud Deployment Manager API:
```
npm install @types/gapi.client.deploymentmanager@v2 --save-dev
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
gapi.client.load('deploymentmanager', 'v2', () => {
    // now we can use gapi.client.deploymentmanager
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
    
        // View and manage your Google Cloud Platform management resources and deployment status information
        'https://www.googleapis.com/auth/ndev.cloudman',
    
        // View your Google Cloud Platform management resources and deployment status information
        'https://www.googleapis.com/auth/ndev.cloudman.readonly',
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

After that you can use Google Cloud Deployment Manager API resources:

```typescript 
    
/* 
Cancels and removes the preview currently associated with the deployment.  
*/
await gapi.client.deployments.cancelPreview({ deployment: "deployment", project: "project",  }); 
    
/* 
Deletes a deployment and all of the resources in the deployment.  
*/
await gapi.client.deployments.delete({ deployment: "deployment", project: "project",  }); 
    
/* 
Gets information about a specific deployment.  
*/
await gapi.client.deployments.get({ deployment: "deployment", project: "project",  }); 
    
/* 
Gets the access control policy for a resource. May be empty if no such policy or resource exists.  
*/
await gapi.client.deployments.getIamPolicy({ project: "project", resource: "resource",  }); 
    
/* 
Creates a deployment and all of the resources described by the deployment manifest.  
*/
await gapi.client.deployments.insert({ project: "project",  }); 
    
/* 
Lists all deployments for a given project.  
*/
await gapi.client.deployments.list({ project: "project",  }); 
    
/* 
Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.  
*/
await gapi.client.deployments.patch({ deployment: "deployment", project: "project",  }); 
    
/* 
Sets the access control policy on the specified resource. Replaces any existing policy.  
*/
await gapi.client.deployments.setIamPolicy({ project: "project", resource: "resource",  }); 
    
/* 
Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.  
*/
await gapi.client.deployments.stop({ deployment: "deployment", project: "project",  }); 
    
/* 
Returns permissions that a caller has on the specified resource.  
*/
await gapi.client.deployments.testIamPermissions({ project: "project", resource: "resource",  }); 
    
/* 
Updates a deployment and all of the resources described by the deployment manifest.  
*/
await gapi.client.deployments.update({ deployment: "deployment", project: "project",  }); 
    
/* 
Gets information about a specific manifest.  
*/
await gapi.client.manifests.get({ deployment: "deployment", manifest: "manifest", project: "project",  }); 
    
/* 
Lists all manifests for a given deployment.  
*/
await gapi.client.manifests.list({ deployment: "deployment", project: "project",  }); 
    
/* 
Gets information about a specific operation.  
*/
await gapi.client.operations.get({ operation: "operation", project: "project",  }); 
    
/* 
Lists all operations for a project.  
*/
await gapi.client.operations.list({ project: "project",  }); 
    
/* 
Gets information about a single resource.  
*/
await gapi.client.resources.get({ deployment: "deployment", project: "project", resource: "resource",  }); 
    
/* 
Lists all resources in a given deployment.  
*/
await gapi.client.resources.list({ deployment: "deployment", project: "project",  }); 
    
/* 
Lists all resource types for Deployment Manager.  
*/
await gapi.client.types.list({ project: "project",  });
```