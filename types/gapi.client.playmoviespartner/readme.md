# TypeScript typings for Google Play Movies Partner API v1
Gets the delivery status of titles for Google Play Movies Partners.
For detailed description please check [documentation](https://developers.google.com/playmoviespartner/).

## Installing

Install typings for Google Play Movies Partner API:
```
npm install @types/gapi.client.playmoviespartner@v1 --save-dev
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
gapi.client.load('playmoviespartner', 'v1', () => {
    // now we can use gapi.client.playmoviespartner
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View the digital assets you publish on Google Play Movies and TV
        'https://www.googleapis.com/auth/playmovies_partner.readonly',
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

After that you can use Google Play Movies Partner API resources:

```typescript
```