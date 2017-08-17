# Typescript typings for Stackdriver Logging API
Writes log entries and manages your Stackdriver Logging configuration.
For detailed description please check [documentation](https://cloud.google.com/logging/docs/).

## Installing

Install typings for Stackdriver Logging API:
```
npm install @types/gapi.client.logging-v2 --save-dev
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
gapi.client.load('logging', 'v2', () => {
    // now we can use gapi.client.logging
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
    
        // Submit log data for your projects
        'https://www.googleapis.com/auth/logging.write',
    
        // View log data for your projects
        'https://www.googleapis.com/auth/logging.read',
    
        // Administrate log data for your projects
        'https://www.googleapis.com/auth/logging.admin',
    
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

After that you can use Stackdriver Logging API resources:

```typescript 
    
/* 
Lists the descriptors for monitored resource types used by Stackdriver Logging.  
*/
await gapi.client.monitoredResourceDescriptors.list({  }); 
    
/* 
Writes log entries to Stackdriver Logging.  
*/
await gapi.client.entries.write({  }); 
    
/* 
Lists log entries. Use this method to retrieve log entries from Stackdriver Logging. For ways to export log entries, see Exporting Logs.  
*/
await gapi.client.entries.list({  });
```