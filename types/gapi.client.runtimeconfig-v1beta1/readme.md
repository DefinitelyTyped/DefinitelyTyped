# Typescript typings for Google Cloud Runtime Configuration API
The Runtime Configurator allows you to dynamically configure and expose variables through Google Cloud Platform. In addition, you can also set Watchers and Waiters that will watch for changes to your data and return based on certain conditions.
For detailed description please check [documentation](https://cloud.google.com/deployment-manager/runtime-configurator/).

## Installing

Install typings for Google Cloud Runtime Configuration API:
```
npm install @types/gapi.client.runtimeconfig-v1beta1 --save-dev
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
gapi.client.load('runtimeconfig', 'v1beta1', () => {
    // now we can use gapi.client.runtimeconfig
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Google Cloud Platform services' runtime configuration
        'https://www.googleapis.com/auth/cloudruntimeconfig',
    
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

After that you can use Google Cloud Runtime Configuration API resources:

```typescript
```