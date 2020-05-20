# TypeScript typings for Google Cloud DNS API v1
Configures and serves authoritative DNS records.
For detailed description please check [documentation](https://developers.google.com/cloud-dns).

## Installing

Install typings for Google Cloud DNS API:
```
npm install @types/gapi.client.dns@v1 --save-dev
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
gapi.client.load('dns', 'v1', () => {
    // now we can use gapi.client.dns
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
    
        // View your DNS records hosted by Google Cloud DNS
        'https://www.googleapis.com/auth/ndev.clouddns.readonly',
    
        // View and manage your DNS records hosted by Google Cloud DNS
        'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
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

After that you can use Google Cloud DNS API resources:

```typescript 
    
/* 
Atomically update the ResourceRecordSet collection.  
*/
await gapi.client.changes.create({ managedZone: "managedZone", project: "project",  }); 
    
/* 
Fetch the representation of an existing Change.  
*/
await gapi.client.changes.get({ changeId: "changeId", managedZone: "managedZone", project: "project",  }); 
    
/* 
Enumerate Changes to a ResourceRecordSet collection.  
*/
await gapi.client.changes.list({ managedZone: "managedZone", project: "project",  }); 
    
/* 
Create a new ManagedZone.  
*/
await gapi.client.managedZones.create({ project: "project",  }); 
    
/* 
Delete a previously created ManagedZone.  
*/
await gapi.client.managedZones.delete({ managedZone: "managedZone", project: "project",  }); 
    
/* 
Fetch the representation of an existing ManagedZone.  
*/
await gapi.client.managedZones.get({ managedZone: "managedZone", project: "project",  }); 
    
/* 
Enumerate ManagedZones that have been created but not yet deleted.  
*/
await gapi.client.managedZones.list({ project: "project",  }); 
    
/* 
Fetch the representation of an existing Project.  
*/
await gapi.client.projects.get({ project: "project",  }); 
    
/* 
Enumerate ResourceRecordSets that have been created but not yet deleted.  
*/
await gapi.client.resourceRecordSets.list({ managedZone: "managedZone", project: "project",  });
```