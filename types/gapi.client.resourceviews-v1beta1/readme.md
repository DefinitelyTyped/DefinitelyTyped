# Typescript typings for Resource Views API
The Resource View API allows users to create and manage logical sets of Google Compute Engine instances.
For detailed description please check [documentation](https://developers.google.com/compute/).

## Installing

Install typings for Resource Views API:
```
npm install @types/gapi.client.resourceviews-v1beta1 --save-dev
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
gapi.client.load('resourceviews', 'v1beta1', () => {
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

After that you can use Resource Views API resources:

```typescript 
    
/* 
Add resources to the view.  
*/
await gapi.client.regionViews.addresources({ projectName: "projectName", region: "region", resourceViewName: "resourceViewName",  }); 
    
/* 
Delete a resource view.  
*/
await gapi.client.regionViews.delete({ projectName: "projectName", region: "region", resourceViewName: "resourceViewName",  }); 
    
/* 
Get the information of a resource view.  
*/
await gapi.client.regionViews.get({ projectName: "projectName", region: "region", resourceViewName: "resourceViewName",  }); 
    
/* 
Create a resource view.  
*/
await gapi.client.regionViews.insert({ projectName: "projectName", region: "region",  }); 
    
/* 
List resource views.  
*/
await gapi.client.regionViews.list({ projectName: "projectName", region: "region",  }); 
    
/* 
List the resources in the view.  
*/
await gapi.client.regionViews.listresources({ projectName: "projectName", region: "region", resourceViewName: "resourceViewName",  }); 
    
/* 
Remove resources from the view.  
*/
await gapi.client.regionViews.removeresources({ projectName: "projectName", region: "region", resourceViewName: "resourceViewName",  }); 
    
/* 
Add resources to the view.  
*/
await gapi.client.zoneViews.addresources({ projectName: "projectName", resourceViewName: "resourceViewName", zone: "zone",  }); 
    
/* 
Delete a resource view.  
*/
await gapi.client.zoneViews.delete({ projectName: "projectName", resourceViewName: "resourceViewName", zone: "zone",  }); 
    
/* 
Get the information of a zonal resource view.  
*/
await gapi.client.zoneViews.get({ projectName: "projectName", resourceViewName: "resourceViewName", zone: "zone",  }); 
    
/* 
Create a resource view.  
*/
await gapi.client.zoneViews.insert({ projectName: "projectName", zone: "zone",  }); 
    
/* 
List resource views.  
*/
await gapi.client.zoneViews.list({ projectName: "projectName", zone: "zone",  }); 
    
/* 
List the resources of the resource view.  
*/
await gapi.client.zoneViews.listresources({ projectName: "projectName", resourceViewName: "resourceViewName", zone: "zone",  }); 
    
/* 
Remove resources from the view.  
*/
await gapi.client.zoneViews.removeresources({ projectName: "projectName", resourceViewName: "resourceViewName", zone: "zone",  });
```