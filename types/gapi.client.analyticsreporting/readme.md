# TypeScript typings for Google Analytics Reporting API v4
Accesses Analytics report data.
For detailed description please check [documentation](https://developers.google.com/analytics/devguides/reporting/core/v4/).

## Installing

Install typings for Google Analytics Reporting API:
```
npm install @types/gapi.client.analyticsreporting@v4 --save-dev
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
gapi.client.load('analyticsreporting', 'v4', () => {
    // now we can use gapi.client.analyticsreporting
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Analytics data
        'https://www.googleapis.com/auth/analytics',
    
        // View your Google Analytics data
        'https://www.googleapis.com/auth/analytics.readonly',
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

After that you can use Google Analytics Reporting API resources:

```typescript 
    
/* 
Returns the Analytics data.  
*/
await gapi.client.reports.batchGet({  });
```