# Typescript typings for Google Play Developer API
Lets Android application developers access their Google Play accounts.
For detailed description please check [documentation](https://developers.google.com/android-publisher).

## Installing

Install typings for Google Play Developer API:
```
npm install @types/gapi.client.androidpublisher-v1 --save-dev
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
gapi.client.load('androidpublisher', 'v1', () => {
    // now we can use gapi.client.androidpublisher
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Play Developer account
        'https://www.googleapis.com/auth/androidpublisher',
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

After that you can use Google Play Developer API resources:

```typescript 
    
/* 
Cancels a user's subscription purchase. The subscription remains valid until its expiration time.  
*/
await gapi.client.purchases.cancel({ packageName: "packageName", subscriptionId: "subscriptionId", token: "token",  }); 
    
/* 
Checks whether a user's subscription purchase is valid and returns its expiry time.  
*/
await gapi.client.purchases.get({ packageName: "packageName", subscriptionId: "subscriptionId", token: "token",  });
```