# TypeScript typings for URL Shortener API v1
Lets you create, inspect, and manage goo.gl short URLs
For detailed description please check [documentation](https://developers.google.com/url-shortener/v1/getting_started).

## Installing

Install typings for URL Shortener API:
```
npm install @types/gapi.client.urlshortener@v1 --save-dev
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
gapi.client.load('urlshortener', 'v1', () => {
    // now we can use gapi.client.urlshortener
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your goo.gl short URLs
        'https://www.googleapis.com/auth/urlshortener',
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

After that you can use URL Shortener API resources:

```typescript 
    
/* 
Expands a short URL or gets creation time and analytics.  
*/
await gapi.client.url.get({ shortUrl: "shortUrl",  }); 
    
/* 
Creates a new short URL.  
*/
await gapi.client.url.insert({  }); 
    
/* 
Retrieves a list of URLs shortened by a user.  
*/
await gapi.client.url.list({  });
```