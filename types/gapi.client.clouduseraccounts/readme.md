# TypeScript typings for Cloud User Accounts API vm_alpha
Creates and manages users and groups for accessing Google Compute Engine virtual machines.
For detailed description please check [documentation](https://cloud.google.com/compute/docs/access/user-accounts/api/latest/).

## Installing

Install typings for Cloud User Accounts API:
```
npm install @types/gapi.client.clouduseraccounts@vm_alpha --save-dev
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
gapi.client.load('clouduseraccounts', 'vm_alpha', () => {
    // now we can use gapi.client.clouduseraccounts
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
    
        // Manage your Google Cloud User Accounts
        'https://www.googleapis.com/auth/cloud.useraccounts',
    
        // View your Google Cloud User Accounts
        'https://www.googleapis.com/auth/cloud.useraccounts.readonly',
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

After that you can use Cloud User Accounts API resources:

```typescript 
    
/* 
Deletes the specified operation resource.  
*/
await gapi.client.globalAccountsOperations.delete({ operation: "operation", project: "project",  }); 
    
/* 
Retrieves the specified operation resource.  
*/
await gapi.client.globalAccountsOperations.get({ operation: "operation", project: "project",  }); 
    
/* 
Retrieves the list of operation resources contained within the specified project.  
*/
await gapi.client.globalAccountsOperations.list({ project: "project",  }); 
    
/* 
Adds users to the specified group.  
*/
await gapi.client.groups.addMember({ groupName: "groupName", project: "project",  }); 
    
/* 
Deletes the specified Group resource.  
*/
await gapi.client.groups.delete({ groupName: "groupName", project: "project",  }); 
    
/* 
Returns the specified Group resource.  
*/
await gapi.client.groups.get({ groupName: "groupName", project: "project",  }); 
    
/* 
Gets the access control policy for a resource. May be empty if no such policy or resource exists.  
*/
await gapi.client.groups.getIamPolicy({ project: "project", resource: "resource",  }); 
    
/* 
Creates a Group resource in the specified project using the data included in the request.  
*/
await gapi.client.groups.insert({ project: "project",  }); 
    
/* 
Retrieves the list of groups contained within the specified project.  
*/
await gapi.client.groups.list({ project: "project",  }); 
    
/* 
Removes users from the specified group.  
*/
await gapi.client.groups.removeMember({ groupName: "groupName", project: "project",  }); 
    
/* 
Sets the access control policy on the specified resource. Replaces any existing policy.  
*/
await gapi.client.groups.setIamPolicy({ project: "project", resource: "resource",  }); 
    
/* 
Returns permissions that a caller has on the specified resource.  
*/
await gapi.client.groups.testIamPermissions({ project: "project", resource: "resource",  }); 
    
/* 
Returns a list of authorized public keys for a specific user account.  
*/
await gapi.client.linux.getAuthorizedKeysView({ instance: "instance", project: "project", user: "user", zone: "zone",  }); 
    
/* 
Retrieves a list of user accounts for an instance within a specific project.  
*/
await gapi.client.linux.getLinuxAccountViews({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Adds a public key to the specified User resource with the data included in the request.  
*/
await gapi.client.users.addPublicKey({ project: "project", user: "user",  }); 
    
/* 
Deletes the specified User resource.  
*/
await gapi.client.users.delete({ project: "project", user: "user",  }); 
    
/* 
Returns the specified User resource.  
*/
await gapi.client.users.get({ project: "project", user: "user",  }); 
    
/* 
Gets the access control policy for a resource. May be empty if no such policy or resource exists.  
*/
await gapi.client.users.getIamPolicy({ project: "project", resource: "resource",  }); 
    
/* 
Creates a User resource in the specified project using the data included in the request.  
*/
await gapi.client.users.insert({ project: "project",  }); 
    
/* 
Retrieves a list of users contained within the specified project.  
*/
await gapi.client.users.list({ project: "project",  }); 
    
/* 
Removes the specified public key from the user.  
*/
await gapi.client.users.removePublicKey({ fingerprint: "fingerprint", project: "project", user: "user",  }); 
    
/* 
Sets the access control policy on the specified resource. Replaces any existing policy.  
*/
await gapi.client.users.setIamPolicy({ project: "project", resource: "resource",  }); 
    
/* 
Returns permissions that a caller has on the specified resource.  
*/
await gapi.client.users.testIamPermissions({ project: "project", resource: "resource",  });
```