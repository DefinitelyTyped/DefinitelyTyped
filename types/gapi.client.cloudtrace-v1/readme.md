# Typescript typings for Stackdriver Trace API
Send and retrieve trace data from Stackdriver Trace. Data is generated and available by default for all App Engine applications. Data from other applications can be written to Stackdriver Trace for display, reporting, and analysis.

For detailed description please check [documentation](https://cloud.google.com/trace).

## Installing

Install typings for Stackdriver Trace API:
```
npm install @types/gapi.client.cloudtrace-v1 --save-dev
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
gapi.client.load('cloudtrace', 'v1', () => {
    // now we can use gapi.client.cloudtrace
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Read Trace data for a project or application
        'https://www.googleapis.com/auth/trace.readonly',
    
        // Write Trace data for a project or application
        'https://www.googleapis.com/auth/trace.append',
    
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

After that you can use Stackdriver Trace API resources:

```typescript 
    
/* 
Sends new traces to Stackdriver Trace or updates existing traces. If the ID
of a trace that you send matches that of an existing trace, any fields
in the existing trace and its spans are overwritten by the provided values,
and any new fields provided are merged with the existing trace data. If the
ID does not match, a new trace is created.  
*/
await gapi.client.projects.patchTraces({ projectId: "projectId",  });
```