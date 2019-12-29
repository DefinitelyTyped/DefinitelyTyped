# TypeScript typings for Stackdriver Error Reporting API v1beta1
Groups and counts similar errors from cloud services and applications, reports new errors, and provides access to error groups and their associated errors.

For detailed description please check [documentation](https://cloud.google.com/error-reporting/).

## Installing

Install typings for Stackdriver Error Reporting API:
```
npm install @types/gapi.client.clouderrorreporting@v1beta1 --save-dev
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
gapi.client.load('clouderrorreporting', 'v1beta1', () => {
    // now we can use gapi.client.clouderrorreporting
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

After that you can use Stackdriver Error Reporting API resources:

```typescript 
    
/* 
Deletes all error events of a given project.  
*/
await gapi.client.projects.deleteEvents({ projectName: "projectName",  });
```