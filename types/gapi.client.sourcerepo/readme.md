# TypeScript typings for Cloud Source Repositories API v1
Access source code repositories hosted by Google.
For detailed description please check [documentation](https://cloud.google.com/source-repositories/docs/apis).

## Installing

Install typings for Cloud Source Repositories API:
```
npm install @types/gapi.client.sourcerepo@v1 --save-dev
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
gapi.client.load('sourcerepo', 'v1', () => {
    // now we can use gapi.client.sourcerepo
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
    
        // Manage your source code repositories
        'https://www.googleapis.com/auth/source.full_control',
    
        // View the contents of your source code repositories
        'https://www.googleapis.com/auth/source.read_only',
    
        // Manage the contents of your source code repositories
        'https://www.googleapis.com/auth/source.read_write',
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

After that you can use Cloud Source Repositories API resources:

```typescript
```