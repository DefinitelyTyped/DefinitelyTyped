# Typescript typings for Cloud SQL Administration API
Creates and configures Cloud SQL instances, which provide fully-managed MySQL databases.
For detailed description please check [documentation](https://cloud.google.com/sql/docs/reference/latest).

## Installing

Install typings for Cloud SQL Administration API:
```
npm install @types/gapi.client.sqladmin-v1beta3 --save-dev
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
gapi.client.load('sqladmin', 'v1beta3', () => {
    // now we can use gapi.client.sqladmin
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
    
        // Manage your Google SQL Service instances
        'https://www.googleapis.com/auth/sqlservice.admin',
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

After that you can use Cloud SQL Administration API resources:

```typescript 
    
/* 
Retrieves information about a specified backup run for a Cloud SQL instance.  
*/
await gapi.client.backupRuns.get({ backupConfiguration: "backupConfiguration", dueTime: "dueTime", instance: "instance", project: "project",  }); 
    
/* 
Lists all backup runs associated with a Cloud SQL instance.  
*/
await gapi.client.backupRuns.list({ backupConfiguration: "backupConfiguration", instance: "instance", project: "project",  }); 
    
/* 
Lists all database flags that can be set for Google Cloud SQL instances.  
*/
await gapi.client.flags.list({  }); 
    
/* 
Creates a Cloud SQL instance as a clone of a source instance.  
*/
await gapi.client.instances.clone({ project: "project",  }); 
    
/* 
Deletes a Cloud SQL instance.  
*/
await gapi.client.instances.delete({ instance: "instance", project: "project",  }); 
    
/* 
Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.  
*/
await gapi.client.instances.export({ instance: "instance", project: "project",  }); 
    
/* 
Retrieves information about a Cloud SQL instance.  
*/
await gapi.client.instances.get({ instance: "instance", project: "project",  }); 
    
/* 
Imports data into a Cloud SQL instance from a MySQL dump file stored in a Google Cloud Storage bucket.  
*/
await gapi.client.instances.import({ instance: "instance", project: "project",  }); 
    
/* 
Creates a new Cloud SQL instance.  
*/
await gapi.client.instances.insert({ project: "project",  }); 
    
/* 
Lists instances for a given project, in alphabetical order by instance name.  
*/
await gapi.client.instances.list({ project: "project",  }); 
    
/* 
Updates the settings of a Cloud SQL instance. This method supports patch semantics.  
*/
await gapi.client.instances.patch({ instance: "instance", project: "project",  }); 
    
/* 
Promotes the read replica instance to be a stand-alone Cloud SQL instance.  
*/
await gapi.client.instances.promoteReplica({ instance: "instance", project: "project",  }); 
    
/* 
Deletes all client certificates and generates a new server SSL certificate for a Cloud SQL instance.  
*/
await gapi.client.instances.resetSslConfig({ instance: "instance", project: "project",  }); 
    
/* 
Restarts a Cloud SQL instance.  
*/
await gapi.client.instances.restart({ instance: "instance", project: "project",  }); 
    
/* 
Restores a backup of a Cloud SQL instance.  
*/
await gapi.client.instances.restoreBackup({ backupConfiguration: "backupConfiguration", dueTime: "dueTime", instance: "instance", project: "project",  }); 
    
/* 
Sets the password for the root user of the specified Cloud SQL instance.  
*/
await gapi.client.instances.setRootPassword({ instance: "instance", project: "project",  }); 
    
/* 
Updates the settings of a Cloud SQL instance.  
*/
await gapi.client.instances.update({ instance: "instance", project: "project",  }); 
    
/* 
Retrieves information about a specific operation that was performed on a Cloud SQL instance.  
*/
await gapi.client.operations.get({ instance: "instance", operation: "operation", project: "project",  }); 
    
/* 
Lists all operations that have been performed on a Cloud SQL instance.  
*/
await gapi.client.operations.list({ instance: "instance", project: "project",  }); 
    
/* 
Deletes an SSL certificate from a Cloud SQL instance.  
*/
await gapi.client.sslCerts.delete({ instance: "instance", project: "project", sha1Fingerprint: "sha1Fingerprint",  }); 
    
/* 
Retrieves an SSL certificate as specified by its SHA-1 fingerprint.  
*/
await gapi.client.sslCerts.get({ instance: "instance", project: "project", sha1Fingerprint: "sha1Fingerprint",  }); 
    
/* 
Creates an SSL certificate and returns the certificate, the associated private key, and the server certificate authority.  
*/
await gapi.client.sslCerts.insert({ instance: "instance", project: "project",  }); 
    
/* 
Lists all of the current SSL certificates defined for a Cloud SQL instance.  
*/
await gapi.client.sslCerts.list({ instance: "instance", project: "project",  }); 
    
/* 
Lists service tiers that can be used to create Google Cloud SQL instances.  
*/
await gapi.client.tiers.list({ project: "project",  });
```