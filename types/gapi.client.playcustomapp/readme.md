# TypeScript typings for Google Play Custom App Publishing API v1
An API to publish custom Android apps.
For detailed description please check [documentation](https://developers.google.com/android/work/play/custom-app-api).

## Installing

Install typings for Google Play Custom App Publishing API:
```
npm install @types/gapi.client.playcustomapp@v1 --save-dev
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
gapi.client.load('playcustomapp', 'v1', () => {
    // now we can use gapi.client.playcustomapp
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

After that you can use Google Play Custom App Publishing API resources:

```typescript
```