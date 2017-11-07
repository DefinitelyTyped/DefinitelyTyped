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
Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.  
*/
await gapi.client.exclusions.create({ parent: "parent",  }); 
    
/* 
Deletes an exclusion.  
*/
await gapi.client.exclusions.delete({ name: "name",  }); 
    
/* 
Gets the description of an exclusion.  
*/
await gapi.client.exclusions.get({ name: "name",  }); 
    
/* 
Lists all the exclusions in a parent resource.  
*/
await gapi.client.exclusions.list({ parent: "parent",  }); 
    
/* 
Changes one or more properties of an existing exclusion.  
*/
await gapi.client.exclusions.patch({ name: "name",  }); 
    
/* 
Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.  
*/
await gapi.client.logs.delete({ logName: "logName",  }); 
    
/* 
Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.  
*/
await gapi.client.logs.list({ parent: "parent",  }); 
    
/* 
Lists the descriptors for monitored resource types used by Stackdriver Logging.  
*/
await gapi.client.monitoredResourceDescriptors.list({  }); 
    
/* 
Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.  
*/
await gapi.client.sinks.create({ parent: "parent",  }); 
    
/* 
Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.  
*/
await gapi.client.sinks.delete({ sinkName: "sinkName",  }); 
    
/* 
Gets a sink.  
*/
await gapi.client.sinks.get({ sinkName: "sinkName",  }); 
    
/* 
Lists sinks.  
*/
await gapi.client.sinks.list({ parent: "parent",  }); 
    
/* 
Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink might also have a new writer_identity; see the unique_writer_identity field.  
*/
await gapi.client.sinks.update({ sinkName: "sinkName",  });
```