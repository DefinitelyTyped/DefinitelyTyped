# TypeScript typings for Google Compute Engine Instance Groups API v1beta2
The Resource View API allows users to create and manage logical sets of Google Compute Engine instances.
For detailed description please check [documentation](https://developers.google.com/compute/).

## Installing

Install typings for Google Compute Engine Instance Groups API:
```
npm install @types/gapi.client.resourceviews@v1beta2 --save-dev
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
gapi.client.load('resourceviews', 'v1beta2', () => {
    // now we can use gapi.client.resourceviews
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
    
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // View your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute.readonly',
    
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

After that you can use Google Compute Engine Instance Groups API resources:

```typescript 
    
/* 
Retrieves the specified zone-specific operation resource.  
*/
await gapi.client.zoneOperations.get({ operation: "operation", project: "project", zone: "zone",  }); 
    
/* 
Retrieves the list of operation resources contained within the specified zone.  
*/
await gapi.client.zoneOperations.list({ project: "project", zone: "zone",  }); 
    
/* 
Add resources to the view.  
*/
await gapi.client.zoneViews.addResources({ project: "project", resourceView: "resourceView", zone: "zone",  }); 
    
/* 
Delete a resource view.  
*/
await gapi.client.zoneViews.delete({ project: "project", resourceView: "resourceView", zone: "zone",  }); 
    
/* 
Get the information of a zonal resource view.  
*/
await gapi.client.zoneViews.get({ project: "project", resourceView: "resourceView", zone: "zone",  }); 
    
/* 
Get the service information of a resource view or a resource.  
*/
await gapi.client.zoneViews.getService({ project: "project", resourceView: "resourceView", zone: "zone",  }); 
    
/* 
Create a resource view.  
*/
await gapi.client.zoneViews.insert({ project: "project", zone: "zone",  }); 
    
/* 
List resource views.  
*/
await gapi.client.zoneViews.list({ project: "project", zone: "zone",  }); 
    
/* 
List the resources of the resource view.  
*/
await gapi.client.zoneViews.listResources({ project: "project", resourceView: "resourceView", zone: "zone",  }); 
    
/* 
Remove resources from the view.  
*/
await gapi.client.zoneViews.removeResources({ project: "project", resourceView: "resourceView", zone: "zone",  }); 
    
/* 
Update the service information of a resource view or a resource.  
*/
await gapi.client.zoneViews.setService({ project: "project", resourceView: "resourceView", zone: "zone",  });
```