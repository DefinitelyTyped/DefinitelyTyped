# TypeScript typings for Google Mirror API v1
Interacts with Glass users via the timeline.
For detailed description please check [documentation](https://developers.google.com/glass).

## Installing

Install typings for Google Mirror API:
```
npm install @types/gapi.client.mirror@v1 --save-dev
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
gapi.client.load('mirror', 'v1', () => {
    // now we can use gapi.client.mirror
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your location
        'https://www.googleapis.com/auth/glass.location',
    
        // View and manage your Glass timeline
        'https://www.googleapis.com/auth/glass.timeline',
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

After that you can use Google Mirror API resources:

```typescript 
    
/* 
Inserts a new account for a user  
*/
await gapi.client.accounts.insert({ accountName: "accountName", accountType: "accountType", userToken: "userToken",  }); 
    
/* 
Deletes a contact.  
*/
await gapi.client.contacts.delete({ id: "id",  }); 
    
/* 
Gets a single contact by ID.  
*/
await gapi.client.contacts.get({ id: "id",  }); 
    
/* 
Inserts a new contact.  
*/
await gapi.client.contacts.insert({  }); 
    
/* 
Retrieves a list of contacts for the authenticated user.  
*/
await gapi.client.contacts.list({  }); 
    
/* 
Updates a contact in place. This method supports patch semantics.  
*/
await gapi.client.contacts.patch({ id: "id",  }); 
    
/* 
Updates a contact in place.  
*/
await gapi.client.contacts.update({ id: "id",  }); 
    
/* 
Gets a single location by ID.  
*/
await gapi.client.locations.get({ id: "id",  }); 
    
/* 
Retrieves a list of locations for the user.  
*/
await gapi.client.locations.list({  }); 
    
/* 
Gets a single setting by ID.  
*/
await gapi.client.settings.get({ id: "id",  }); 
    
/* 
Deletes a subscription.  
*/
await gapi.client.subscriptions.delete({ id: "id",  }); 
    
/* 
Creates a new subscription.  
*/
await gapi.client.subscriptions.insert({  }); 
    
/* 
Retrieves a list of subscriptions for the authenticated user and service.  
*/
await gapi.client.subscriptions.list({  }); 
    
/* 
Updates an existing subscription in place.  
*/
await gapi.client.subscriptions.update({ id: "id",  }); 
    
/* 
Deletes a timeline item.  
*/
await gapi.client.timeline.delete({ id: "id",  }); 
    
/* 
Gets a single timeline item by ID.  
*/
await gapi.client.timeline.get({ id: "id",  }); 
    
/* 
Inserts a new item into the timeline.  
*/
await gapi.client.timeline.insert({  }); 
    
/* 
Retrieves a list of timeline items for the authenticated user.  
*/
await gapi.client.timeline.list({  }); 
    
/* 
Updates a timeline item in place. This method supports patch semantics.  
*/
await gapi.client.timeline.patch({ id: "id",  }); 
    
/* 
Updates a timeline item in place.  
*/
await gapi.client.timeline.update({ id: "id",  });
```