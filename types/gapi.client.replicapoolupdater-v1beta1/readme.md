# Typescript typings for Google Compute Engine Instance Group Updater API
[Deprecated. Please use compute.instanceGroupManagers.update method. replicapoolupdater API will be disabled after December 30th, 2016] Updates groups of Compute Engine instances.
For detailed description please check [documentation](https://cloud.google.com/compute/docs/instance-groups/manager/#applying_rolling_updates_using_the_updater_service).

## Installing

Install typings for Google Compute Engine Instance Group Updater API:
```
npm install @types/gapi.client.replicapoolupdater-v1beta1 --save-dev
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
gapi.client.load('replicapoolupdater', 'v1beta1', () => {
    // now we can use gapi.client.replicapoolupdater
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

After that you can use Google Compute Engine Instance Group Updater API resources:

```typescript 
    
/* 
Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED.  
*/
await gapi.client.rollingUpdates.cancel({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
/* 
Returns information about an update.  
*/
await gapi.client.rollingUpdates.get({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
/* 
Inserts and starts a new update.  
*/
await gapi.client.rollingUpdates.insert({ project: "project", zone: "zone",  }); 
    
/* 
Lists recent updates for a given managed instance group, in reverse chronological order and paginated format.  
*/
await gapi.client.rollingUpdates.list({ project: "project", zone: "zone",  }); 
    
/* 
Lists the current status for each instance within a given update.  
*/
await gapi.client.rollingUpdates.listInstanceUpdates({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
/* 
Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED.  
*/
await gapi.client.rollingUpdates.pause({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
/* 
Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT.  
*/
await gapi.client.rollingUpdates.resume({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
/* 
Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK.  
*/
await gapi.client.rollingUpdates.rollback({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
/* 
Retrieves the specified zone-specific operation resource.  
*/
await gapi.client.zoneOperations.get({ operation: "operation", project: "project", zone: "zone",  }); 
    
/* 
Retrieves the list of Operation resources contained within the specified zone.  
*/
await gapi.client.zoneOperations.list({ project: "project", zone: "zone",  });
```