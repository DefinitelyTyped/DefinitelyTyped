# TypeScript typings for Admin Reports API reports_v1
Fetches reports for the administrators of G Suite customers about the usage, collaboration, security, and risk for their users.
For detailed description please check [documentation](https://developers.google.com/admin-sdk/reports/).

## Installing

Install typings for Admin Reports API:
```
npm install @types/gapi.client.admin@reports_v1 --save-dev
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
gapi.client.load('admin', 'reports_v1', () => {
    // now we can use gapi.client.admin
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View audit reports for your G Suite domain
        'https://www.googleapis.com/auth/admin.reports.audit.readonly',
    
        // View usage reports for your G Suite domain
        'https://www.googleapis.com/auth/admin.reports.usage.readonly',
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

After that you can use Admin Reports API resources:

```typescript 
    
/* 
Retrieves a list of activities for a specific customer and application.  
*/
await gapi.client.activities.list({ applicationName: "applicationName", userKey: "userKey",  }); 
    
/* 
Push changes to activities  
*/
await gapi.client.activities.watch({ applicationName: "applicationName", userKey: "userKey",  }); 
    
/* 
Stop watching resources through this channel  
*/
await gapi.client.channels.stop({  }); 
    
/* 
Retrieves a report which is a collection of properties / statistics for a specific customer.  
*/
await gapi.client.customerUsageReports.get({ date: "date",  }); 
    
/* 
Retrieves a report which is a collection of properties / statistics for a set of users.  
*/
await gapi.client.userUsageReport.get({ date: "date", userKey: "userKey",  });
```