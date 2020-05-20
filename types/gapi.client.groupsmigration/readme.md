# TypeScript typings for Groups Migration API v1
Groups Migration Api.
For detailed description please check [documentation](https://developers.google.com/google-apps/groups-migration/).

## Installing

Install typings for Groups Migration API:
```
npm install @types/gapi.client.groupsmigration@v1 --save-dev
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
gapi.client.load('groupsmigration', 'v1', () => {
    // now we can use gapi.client.groupsmigration
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage messages in groups on your domain
        'https://www.googleapis.com/auth/apps.groups.migration',
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

After that you can use Groups Migration API resources:

```typescript 
    
/* 
Inserts a new mail into the archive of the Google group.  
*/
await gapi.client.archive.insert({ groupId: "groupId",  });
```