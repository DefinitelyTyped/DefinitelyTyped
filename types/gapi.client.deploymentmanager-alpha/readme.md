# Typescript typings for Google Cloud Deployment Manager Alpha API
The Deployment Manager API allows users to declaratively configure, deploy and run complex solutions on the Google Cloud Platform.
For detailed description please check [documentation](https://cloud.google.com/deployment-manager/).

## Installing

Install typings for Google Cloud Deployment Manager Alpha API:
```
npm install @types/gapi.client.deploymentmanager-alpha --save-dev
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
gapi.client.load('deploymentmanager', 'alpha', () => {
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

After that you can use Google Cloud Deployment Manager Alpha API resources:

```typescript 
    
/* 
Deletes a composite type.  
*/
await gapi.client.compositeTypes.delete({ compositeType: "compositeType", project: "project",  }); 
    
/* 
Gets information about a specific composite type.  
*/
await gapi.client.compositeTypes.get({ compositeType: "compositeType", project: "project",  }); 
    
/* 
Creates a composite type.  
*/
await gapi.client.compositeTypes.insert({ project: "project",  }); 
    
/* 
Lists all composite types for Deployment Manager.  
*/
await gapi.client.compositeTypes.list({ project: "project",  }); 
    
/* 
Updates a composite type. This method supports patch semantics.  
*/
await gapi.client.compositeTypes.patch({ compositeType: "compositeType", project: "project",  }); 
    
/* 
Updates a composite type.  
*/
await gapi.client.compositeTypes.update({ compositeType: "compositeType", project: "project",  }); 
    
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
Deletes a type provider.  
*/
await gapi.client.typeProviders.delete({ project: "project", typeProvider: "typeProvider",  }); 
    
/* 
Gets information about a specific type provider.  
*/
await gapi.client.typeProviders.get({ project: "project", typeProvider: "typeProvider",  }); 
    
/* 
Gets a type info for a type provided by a TypeProvider.  
*/
await gapi.client.typeProviders.getType({ project: "project", type: "type", typeProvider: "typeProvider",  }); 
    
/* 
Creates a type provider.  
*/
await gapi.client.typeProviders.insert({ project: "project",  }); 
    
/* 
Lists all resource type providers for Deployment Manager.  
*/
await gapi.client.typeProviders.list({ project: "project",  }); 
    
/* 
Lists all the type info for a TypeProvider.  
*/
await gapi.client.typeProviders.listTypes({ project: "project", typeProvider: "typeProvider",  }); 
    
/* 
Updates a type provider. This method supports patch semantics.  
*/
await gapi.client.typeProviders.patch({ project: "project", typeProvider: "typeProvider",  }); 
    
/* 
Updates a type provider.  
*/
await gapi.client.typeProviders.update({ project: "project", typeProvider: "typeProvider",  }); 
    
/* 
Deletes a type and all of the resources in the type.  
*/
await gapi.client.types.delete({ project: "project", type: "type",  }); 
    
/* 
Gets information about a specific type.  
*/
await gapi.client.types.get({ project: "project", type: "type",  }); 
    
/* 
Creates a type.  
*/
await gapi.client.types.insert({ project: "project",  }); 
    
/* 
Lists all resource types for Deployment Manager.  
*/
await gapi.client.types.list({ project: "project",  }); 
    
/* 
Updates a type. This method supports patch semantics.  
*/
await gapi.client.types.patch({ project: "project", type: "type",  }); 
    
/* 
Updates a type.  
*/
await gapi.client.types.update({ project: "project", type: "type",  });
```