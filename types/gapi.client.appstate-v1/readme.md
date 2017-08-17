# Typescript typings for Google App State API
The Google App State API.
For detailed description please check [documentation](https://developers.google.com/games/services/web/api/states).

## Installing

Install typings for Google App State API:
```
npm install @types/gapi.client.appstate-v1 --save-dev
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
gapi.client.load('appstate', 'v1', () => {
    // now we can use gapi.client.appstate
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data for this application
        'https://www.googleapis.com/auth/appstate',
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

After that you can use Google App State API resources:

```typescript 
    
/* 
Clears (sets to empty) the data for the passed key if and only if the passed version matches the currently stored version. This method results in a conflict error on version mismatch.  
*/
await gapi.client.states.clear({ stateKey: 1,  }); 
    
/* 
Deletes a key and the data associated with it. The key is removed and no longer counts against the key quota. Note that since this method is not safe in the face of concurrent modifications, it should only be used for development and testing purposes. Invoking this method in shipping code can result in data loss and data corruption.  
*/
await gapi.client.states.delete({ stateKey: 1,  }); 
    
/* 
Retrieves the data corresponding to the passed key. If the key does not exist on the server, an HTTP 404 will be returned.  
*/
await gapi.client.states.get({ stateKey: 1,  }); 
    
/* 
Lists all the states keys, and optionally the state data.  
*/
await gapi.client.states.list({  }); 
    
/* 
Update the data associated with the input key if and only if the passed version matches the currently stored version. This method is safe in the face of concurrent writes. Maximum per-key size is 128KB.  
*/
await gapi.client.states.update({ stateKey: 1,  });
```