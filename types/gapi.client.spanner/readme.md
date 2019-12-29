# TypeScript typings for Cloud Spanner API v1
Cloud Spanner is a managed, mission-critical, globally consistent and scalable relational database service.
For detailed description please check [documentation](https://cloud.google.com/spanner/).

## Installing

Install typings for Cloud Spanner API:
```
npm install @types/gapi.client.spanner@v1 --save-dev
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
gapi.client.load('spanner', 'v1', () => {
    // now we can use gapi.client.spanner
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
    
        // Administer your Spanner databases
        'https://www.googleapis.com/auth/spanner.admin',
    
        // View and manage the contents of your Spanner databases
        'https://www.googleapis.com/auth/spanner.data',
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

After that you can use Cloud Spanner API resources:

```typescript
```