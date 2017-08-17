# Typescript typings for Google Analytics API
Views and manages your Google Analytics data.
For detailed description please check [documentation](https://developers.google.com/analytics/).

## Installing

Install typings for Google Analytics API:
```
npm install @types/gapi.client.analytics-v2.4 --save-dev
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
gapi.client.load('analytics', 'v2.4', () => {
    // now we can use gapi.client.analytics
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

After that you can use Google Analytics API resources:

```typescript 
    
/* 
Returns Analytics report data for a view (profile).  
*/
await gapi.client.data.get({ end-date: "end-date", ids: "ids", metrics: "metrics", start-date: "start-date",  });
```