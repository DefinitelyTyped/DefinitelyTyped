# Typescript typings for Replica Pool API
The Replica Pool API allows users to declaratively provision and manage groups of Google Compute Engine instances based on a common template.
For detailed description please check [documentation](https://developers.google.com/compute/docs/replica-pool/).

## Installing

Install typings for Replica Pool API:
```
npm install @types/gapi.client.replicapool-v1beta1 --save-dev
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
gapi.client.load('replicapool', 'v1beta1', () => {
    // now we can use gapi.client.replicapool
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
    
        // View and manage replica pools
        'https://www.googleapis.com/auth/replicapool',
    
        // View replica pools
        'https://www.googleapis.com/auth/replicapool.readonly',
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

After that you can use Replica Pool API resources:

```typescript 
    
/* 
Deletes a replica pool.  
*/
await gapi.client.pools.delete({ poolName: "poolName", projectName: "projectName", zone: "zone",  }); 
    
/* 
Gets information about a single replica pool.  
*/
await gapi.client.pools.get({ poolName: "poolName", projectName: "projectName", zone: "zone",  }); 
    
/* 
Inserts a new replica pool.  
*/
await gapi.client.pools.insert({ projectName: "projectName", zone: "zone",  }); 
    
/* 
List all replica pools.  
*/
await gapi.client.pools.list({ projectName: "projectName", zone: "zone",  }); 
    
/* 
Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.  
*/
await gapi.client.pools.resize({ poolName: "poolName", projectName: "projectName", zone: "zone",  }); 
    
/* 
Update the template used by the pool.  
*/
await gapi.client.pools.updatetemplate({ poolName: "poolName", projectName: "projectName", zone: "zone",  }); 
    
/* 
Deletes a replica from the pool.  
*/
await gapi.client.replicas.delete({ poolName: "poolName", projectName: "projectName", replicaName: "replicaName", zone: "zone",  }); 
    
/* 
Gets information about a specific replica.  
*/
await gapi.client.replicas.get({ poolName: "poolName", projectName: "projectName", replicaName: "replicaName", zone: "zone",  }); 
    
/* 
Lists all replicas in a pool.  
*/
await gapi.client.replicas.list({ poolName: "poolName", projectName: "projectName", zone: "zone",  }); 
    
/* 
Restarts a replica in a pool.  
*/
await gapi.client.replicas.restart({ poolName: "poolName", projectName: "projectName", replicaName: "replicaName", zone: "zone",  });
```