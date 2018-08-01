# TypeScript typings for Google Service User API v1
Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use.
For detailed description please check [documentation](https://cloud.google.com/service-management/).

## Installing

Install typings for Google Service User API:
```
npm install @types/gapi.client.serviceuser@v1 --save-dev
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
gapi.client.load('serviceuser', 'v1', () => {
    // now we can use gapi.client.serviceuser
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
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // Manage your Google API service configuration
        'https://www.googleapis.com/auth/service.management',
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

After that you can use Google Service User API resources:

```typescript 
    
/* 
Search available services.

When no filter is specified, returns all accessible services. For
authenticated users, also returns all services the calling user has
"servicemanagement.services.bind" permission for.  
*/
await gapi.client.services.search({  });
```