# Typescript typings for Google App Engine Admin API
The App Engine Admin API enables developers to provision and manage their App Engine applications.
For detailed description please check [documentation](https://cloud.google.com/appengine/docs/admin-api/).

## Installing

Install typings for Google App Engine Admin API:
```
npm install @types/gapi.client.appengine-v1alpha --save-dev
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
gapi.client.load('appengine', 'v1alpha', () => {
    // now we can use gapi.client.appengine
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View and manage your applications deployed on Google App Engine
        'https://www.googleapis.com/auth/appengine.admin',
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
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

After that you can use Google App Engine Admin API resources:

```typescript
```