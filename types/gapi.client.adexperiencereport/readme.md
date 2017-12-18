# TypeScript typings for Google Ad Experience Report API v1
View Ad Experience Report data, and get a list of sites that have a significant number of annoying ads.
For detailed description please check [documentation](https://developers.google.com/ad-experience-report/).

## Installing

Install typings for Google Ad Experience Report API:
```
npm install @types/gapi.client.adexperiencereport@v1 --save-dev
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
gapi.client.load('adexperiencereport', 'v1', () => {
    // now we can use gapi.client.adexperiencereport
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Test scope for access to the Zoo service
        'https://www.googleapis.com/auth/xapi.zoo',
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

After that you can use Google Ad Experience Report API resources:

```typescript 
    
/* 
Gets a summary of the ad experience rating of a site.  
*/
await gapi.client.sites.get({ name: "name",  }); 
    
/* 
Lists sites with Ad Experience Report statuses of "Failing" or "Warning".  
*/
await gapi.client.violatingSites.list({  });
```