# Typescript typings for Admin Data Transfer API
Transfers user data from one user to another.
For detailed description please check [documentation](https://developers.google.com/admin-sdk/data-transfer/).

## Installing

Install typings for Admin Data Transfer API:
```
npm install @types/gapi.client.admin-datatransfer_v1 --save-dev
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
gapi.client.load('admin', 'datatransfer_v1', () => {
    // now we can use gapi.client.admin
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage data transfers between users in your organization
        'https://www.googleapis.com/auth/admin.datatransfer',
    
        // View data transfers between users in your organization
        'https://www.googleapis.com/auth/admin.datatransfer.readonly',
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

After that you can use Admin Data Transfer API resources:

```typescript 
    
/* 
Retrieves information about an application for the given application ID.  
*/
await gapi.client.applications.get({ applicationId: "applicationId",  }); 
    
/* 
Lists the applications available for data transfer for a customer.  
*/
await gapi.client.applications.list({  }); 
    
/* 
Retrieves a data transfer request by its resource ID.  
*/
await gapi.client.transfers.get({ dataTransferId: "dataTransferId",  }); 
    
/* 
Inserts a data transfer request.  
*/
await gapi.client.transfers.insert({  }); 
    
/* 
Lists the transfers for a customer by source user, destination user, or status.  
*/
await gapi.client.transfers.list({  });
```