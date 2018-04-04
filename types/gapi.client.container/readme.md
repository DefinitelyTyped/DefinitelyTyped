# TypeScript typings for Google Container Engine API v1
The Google Container Engine API is used for building and managing container based applications, powered by the open source Kubernetes technology.
For detailed description please check [documentation](https://cloud.google.com/container-engine/).

## Installing

Install typings for Google Container Engine API:
```
npm install @types/gapi.client.container@v1 --save-dev
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
gapi.client.load('container', 'v1', () => {
    // now we can use gapi.client.container
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

After that you can use Google Container Engine API resources:

```typescript
```