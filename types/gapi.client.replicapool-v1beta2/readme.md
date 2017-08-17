# Typescript typings for Google Compute Engine Instance Group Manager API
[Deprecated. Please use Instance Group Manager in Compute API] Provides groups of homogenous Compute Engine instances.
For detailed description please check [documentation](https://developers.google.com/compute/docs/instance-groups/manager/v1beta2).

## Installing

Install typings for Google Compute Engine Instance Group Manager API:
```
npm install @types/gapi.client.replicapool-v1beta2 --save-dev
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
gapi.client.load('replicapool', 'v1beta2', () => {
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
    
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // View your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute.readonly',
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

After that you can use Google Compute Engine Instance Group Manager API resources:

```typescript 
    
/* 
Removes the specified instances from the managed instance group, and from any target pools of which they were members, without deleting the instances.  
*/
await gapi.client.instanceGroupManagers.abandonInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Deletes the instance group manager and all instances contained within. If you'd like to delete the manager without deleting the instances, you must first abandon the instances to remove them from the group.  
*/
await gapi.client.instanceGroupManagers.delete({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Deletes the specified instances. The instances are deleted, then removed from the instance group and any target pools of which they were a member. The targetSize of the instance group manager is reduced by the number of instances deleted.  
*/
await gapi.client.instanceGroupManagers.deleteInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Returns the specified Instance Group Manager resource.  
*/
await gapi.client.instanceGroupManagers.get({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Creates an instance group manager, as well as the instance group and the specified number of instances.  
*/
await gapi.client.instanceGroupManagers.insert({ project: "project", size: 1, zone: "zone",  }); 
    
/* 
Retrieves the list of Instance Group Manager resources contained within the specified zone.  
*/
await gapi.client.instanceGroupManagers.list({ project: "project", zone: "zone",  }); 
    
/* 
Recreates the specified instances. The instances are deleted, then recreated using the instance group manager's current instance template.  
*/
await gapi.client.instanceGroupManagers.recreateInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Resizes the managed instance group up or down. If resized up, new instances are created using the current instance template. If resized down, instances are removed in the order outlined in Resizing a managed instance group.  
*/
await gapi.client.instanceGroupManagers.resize({ instanceGroupManager: "instanceGroupManager", project: "project", size: 1, zone: "zone",  }); 
    
/* 
Sets the instance template to use when creating new instances in this group. Existing instances are not affected.  
*/
await gapi.client.instanceGroupManagers.setInstanceTemplate({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.  
*/
await gapi.client.instanceGroupManagers.setTargetPools({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Retrieves the specified zone-specific operation resource.  
*/
await gapi.client.zoneOperations.get({ operation: "operation", project: "project", zone: "zone",  }); 
    
/* 
Retrieves the list of operation resources contained within the specified zone.  
*/
await gapi.client.zoneOperations.list({ project: "project", zone: "zone",  });
```