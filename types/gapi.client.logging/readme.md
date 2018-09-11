# TypeScript typings for Stackdriver Logging API v2
Writes log entries and manages your Stackdriver Logging configuration.
For detailed description please check [documentation](https://cloud.google.com/logging/docs/).

## Installing

Install typings for Stackdriver Logging API:
```
npm install @types/gapi.client.logging@v2 --save-dev
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
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // Administrate log data for your projects
        'https://www.googleapis.com/auth/logging.admin',
    
        // View log data for your projects
        'https://www.googleapis.com/auth/logging.read',
    
        // Submit log data for your projects
        'https://www.googleapis.com/auth/logging.write',
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
Lists log entries. Use this method to retrieve log entries from Stackdriver Logging. For ways to export log entries, see Exporting Logs.  
*/
await gapi.client.entries.list({  }); 
    
/* 
Log entry resourcesWrites log entries to Stackdriver Logging. This API method is the only way to send log entries to Stackdriver Logging. This method is used, directly or indirectly, by the Stackdriver Logging agent (fluentd) and all logging libraries configured to use Stackdriver Logging.  
*/
await gapi.client.entries.write({  }); 
    
/* 
Lists the descriptors for monitored resource types used by Stackdriver Logging.  
*/
await gapi.client.monitoredResourceDescriptors.list({  });
```