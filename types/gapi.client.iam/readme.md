# TypeScript typings for Google Identity and Access Management (IAM) API v1
Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.
For detailed description please check [documentation](https://cloud.google.com/iam/).

## Installing

Install typings for Google Identity and Access Management (IAM) API:
```
npm install @types/gapi.client.iam@v1 --save-dev
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
gapi.client.load('iam', 'v1', () => {
    // now we can use gapi.client.iam
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

After that you can use Google Identity and Access Management (IAM) API resources:

```typescript 
    
/* 
Lists the permissions testable on a resource.
A permission is testable if it can be tested for an identity on a resource.  
*/
await gapi.client.permissions.queryTestablePermissions({  }); 
    
/* 
Gets a Role definition.  
*/
await gapi.client.roles.get({ name: "name",  }); 
    
/* 
Lists the Roles defined on a resource.  
*/
await gapi.client.roles.list({  }); 
    
/* 
Queries roles that can be granted on a particular resource.
A role is grantable if it can be used as the role in a binding for a policy
for that resource.  
*/
await gapi.client.roles.queryGrantableRoles({  });
```