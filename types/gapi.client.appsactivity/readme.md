# TypeScript typings for G Suite Activity API v1
Provides a historical view of activity.
For detailed description please check [documentation](https://developers.google.com/google-apps/activity/).

## Installing

Install typings for G Suite Activity API:
```
npm install @types/gapi.client.appsactivity@v1 --save-dev
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
gapi.client.load('appsactivity', 'v1', () => {
    // now we can use gapi.client.appsactivity
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View the activity history of your Google apps
        'https://www.googleapis.com/auth/activity',
    
        // View and manage the files in your Google Drive
        'https://www.googleapis.com/auth/drive',
    
        // View and manage metadata of files in your Google Drive
        'https://www.googleapis.com/auth/drive.metadata',
    
        // View metadata for files in your Google Drive
        'https://www.googleapis.com/auth/drive.metadata.readonly',
    
        // View the files in your Google Drive
        'https://www.googleapis.com/auth/drive.readonly',
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

After that you can use G Suite Activity API resources:

```typescript 
    
/* 
Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.  
*/
await gapi.client.activities.list({  });
```