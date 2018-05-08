# TypeScript typings for Google Site Verification API v1
Verifies ownership of websites or domains with Google.
For detailed description please check [documentation](https://developers.google.com/site-verification/).

## Installing

Install typings for Google Site Verification API:
```
npm install @types/gapi.client.siteverification@v1 --save-dev
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
gapi.client.load('siteverification', 'v1', () => {
    // now we can use gapi.client.siteverification
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage the list of sites and domains you control
        'https://www.googleapis.com/auth/siteverification',
    
        // Manage your new site verifications with Google
        'https://www.googleapis.com/auth/siteverification.verify_only',
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

After that you can use Google Site Verification API resources:

```typescript 
    
/* 
Relinquish ownership of a website or domain.  
*/
await gapi.client.webResource.delete({ id: "id",  }); 
    
/* 
Get the most current data for a website or domain.  
*/
await gapi.client.webResource.get({ id: "id",  }); 
    
/* 
Get a verification token for placing on a website or domain.  
*/
await gapi.client.webResource.getToken({  }); 
    
/* 
Attempt verification of a website or domain.  
*/
await gapi.client.webResource.insert({ verificationMethod: "verificationMethod",  }); 
    
/* 
Get the list of your verified websites and domains.  
*/
await gapi.client.webResource.list({  }); 
    
/* 
Modify the list of owners for your website or domain. This method supports patch semantics.  
*/
await gapi.client.webResource.patch({ id: "id",  }); 
    
/* 
Modify the list of owners for your website or domain.  
*/
await gapi.client.webResource.update({ id: "id",  });
```