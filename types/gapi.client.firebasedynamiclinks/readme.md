# TypeScript typings for Firebase Dynamic Links API v1
Programmatically creates and manages Firebase Dynamic Links.
For detailed description please check [documentation](https://firebase.google.com/docs/dynamic-links/).

## Installing

Install typings for Firebase Dynamic Links API:
```
npm install @types/gapi.client.firebasedynamiclinks@v1 --save-dev
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
gapi.client.load('firebasedynamiclinks', 'v1', () => {
    // now we can use gapi.client.firebasedynamiclinks
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and administer all your Firebase data and settings
        'https://www.googleapis.com/auth/firebase',
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

After that you can use Firebase Dynamic Links API resources:

```typescript 
    
/* 
Creates a short Dynamic Link given either a valid long Dynamic Link or
details such as Dynamic Link domain, Android and iOS app information.
The created short Dynamic Link will not expire.

Repeated calls with the same long Dynamic Link or Dynamic Link information
will produce the same short Dynamic Link.

The Dynamic Link domain in the request must be owned by requester's
Firebase project.  
*/
await gapi.client.shortLinks.create({  }); 
    
/* 
Fetches analytics stats of a short Dynamic Link for a given
duration. Metrics include number of clicks, redirects, installs,
app first opens, and app reopens.  
*/
await gapi.client.v1.getLinkStats({ dynamicLink: "dynamicLink",  }); 
    
/* 
Get iOS strong/weak-match info for post-install attribution.  
*/
await gapi.client.v1.installAttribution({  });
```