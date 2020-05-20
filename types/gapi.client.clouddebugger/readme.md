# TypeScript typings for Stackdriver Debugger API v2
Examines the call stack and variables of a running application without stopping or slowing it down.

For detailed description please check [documentation](http://cloud.google.com/debugger).

## Installing

Install typings for Stackdriver Debugger API:
```
npm install @types/gapi.client.clouddebugger@v2 --save-dev
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
gapi.client.load('clouddebugger', 'v2', () => {
    // now we can use gapi.client.clouddebugger
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
    
        // Manage cloud debugger
        'https://www.googleapis.com/auth/cloud_debugger',
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

After that you can use Stackdriver Debugger API resources:

```typescript
```