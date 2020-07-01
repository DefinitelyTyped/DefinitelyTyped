# TypeScript typings for Google OAuth2 API v2
Obtains end-user authorization grants for use with other Google APIs.
For detailed description please check [documentation](https://developers.google.com/accounts/docs/OAuth2).

## Installing

Install typings for Google OAuth2 API:
```
npm install @types/gapi.client.oauth2@v2 --save-dev
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
gapi.client.load('oauth2', 'v2', () => {
    // now we can use gapi.client.oauth2
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Know the list of people in your circles, your age range, and language
        'https://www.googleapis.com/auth/plus.login',
    
        // Know who you are on Google
        'https://www.googleapis.com/auth/plus.me',
    
        // View your email address
        'https://www.googleapis.com/auth/userinfo.email',
    
        // View your basic profile info
        'https://www.googleapis.com/auth/userinfo.profile',
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

After that you can use Google OAuth2 API resources:

```typescript 
    
/* 
undefined  
*/
await gapi.client.userinfo.get({  });
```