# TypeScript typings for Cloud SQL Administration API v1beta4
Creates and configures Cloud SQL instances, which provide fully-managed MySQL databases.
For detailed description please check [documentation](https://cloud.google.com/sql/docs/reference/latest).

## Installing

Install typings for Cloud SQL Administration API:
```
npm install @types/gapi.client.sqladmin@v1beta4 --save-dev
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
gapi.client.load('sqladmin', 'v1beta4', () => {
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
Deletes the backup taken by a backup run.  
*/
await gapi.client.backupRuns.delete({ id: "id", instance: "instance", project: "project",  }); 
    
/* 
Retrieves a resource containing information about a backup run.  
*/
await gapi.client.backupRuns.get({ id: "id", instance: "instance", project: "project",  }); 
    
/* 
Creates a new backup run on demand. This method is applicable only to Second Generation instances.  
*/
await gapi.client.backupRuns.insert({ instance: "instance", project: "project",  }); 
    
/* 
Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the enqueued time.  
*/
await gapi.client.backupRuns.list({ instance: "instance", project: "project",  }); 
    
/* 
Deletes a database from a Cloud SQL instance.  
*/
await gapi.client.databases.delete({ database: "database", instance: "instance", project: "project",  }); 
    
/* 
Retrieves a resource containing information about a database inside a Cloud SQL instance.  
*/
await gapi.client.databases.get({ database: "database", instance: "instance", project: "project",  }); 
    
/* 
Inserts a resource containing information about a database inside a Cloud SQL instance.  
*/
await gapi.client.databases.insert({ instance: "instance", project: "project",  }); 
    
/* 
Lists databases in the specified Cloud SQL instance.  
*/
await gapi.client.databases.list({ instance: "instance", project: "project",  }); 
    
/* 
Updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.  
*/
await gapi.client.databases.patch({ database: "database", instance: "instance", project: "project",  }); 
    
/* 
Updates a resource containing information about a database inside a Cloud SQL instance.  
*/
await gapi.client.databases.update({ database: "database", instance: "instance", project: "project",  }); 
    
/* 
List all available database flags for Google Cloud SQL instances.  
*/
await gapi.client.flags.list({  }); 
    
/* 
Creates a Cloud SQL instance as a clone of the source instance. The API is not ready for Second Generation instances yet.  
*/
await gapi.client.instances.clone({ instance: "instance", project: "project",  }); 
    
/* 
Deletes a Cloud SQL instance.  
*/
await gapi.client.instances.delete({ instance: "instance", project: "project",  }); 
    
/* 
Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.  
*/
await gapi.client.instances.export({ instance: "instance", project: "project",  }); 
    
/* 
Failover the instance to its failover replica instance.  
*/
await gapi.client.instances.failover({ instance: "instance", project: "project",  }); 
    
/* 
Retrieves a resource containing information about a Cloud SQL instance.  
*/
await gapi.client.instances.get({ instance: "instance", project: "project",  }); 
    
/* 
Imports data into a Cloud SQL instance from a MySQL dump file in Google Cloud Storage.  
*/
await gapi.client.instances.import({ instance: "instance", project: "project",  }); 
    
/* 
Creates a new Cloud SQL instance.  
*/
await gapi.client.instances.insert({ project: "project",  }); 
    
/* 
Lists instances under a given project in the alphabetical order of the instance name.  
*/
await gapi.client.instances.list({ project: "project",  }); 
    
/* 
Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics.  
*/
await gapi.client.instances.patch({ instance: "instance", project: "project",  }); 
    
/* 
Promotes the read replica instance to be a stand-alone Cloud SQL instance.  
*/
await gapi.client.instances.promoteReplica({ instance: "instance", project: "project",  }); 
    
/* 
Deletes all client certificates and generates a new server SSL certificate for the instance. The changes will not take effect until the instance is restarted. Existing instances without a server certificate will need to call this once to set a server certificate.  
*/
await gapi.client.instances.resetSslConfig({ instance: "instance", project: "project",  }); 
    
/* 
Restarts a Cloud SQL instance.  
*/
await gapi.client.instances.restart({ instance: "instance", project: "project",  }); 
    
/* 
Restores a backup of a Cloud SQL instance.  
*/
await gapi.client.instances.restoreBackup({ instance: "instance", project: "project",  }); 
    
/* 
Starts the replication in the read replica instance.  
*/
await gapi.client.instances.startReplica({ instance: "instance", project: "project",  }); 
    
/* 
Stops the replication in the read replica instance.  
*/
await gapi.client.instances.stopReplica({ instance: "instance", project: "project",  }); 
    
/* 
Truncate MySQL general and slow query log tables  
*/
await gapi.client.instances.truncateLog({ instance: "instance", project: "project",  }); 
    
/* 
Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.  
*/
await gapi.client.instances.update({ instance: "instance", project: "project",  }); 
    
/* 
Retrieves an instance operation that has been performed on an instance.  
*/
await gapi.client.operations.get({ operation: "operation", project: "project",  }); 
    
/* 
Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.  
*/
await gapi.client.operations.list({ instance: "instance", project: "project",  }); 
    
/* 
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.  
*/
await gapi.client.sslCerts.createEphemeral({ instance: "instance", project: "project",  }); 
    
/* 
Deletes the SSL certificate. The change will not take effect until the instance is restarted.  
*/
await gapi.client.sslCerts.delete({ instance: "instance", project: "project", sha1Fingerprint: "sha1Fingerprint",  }); 
    
/* 
Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.  
*/
await gapi.client.sslCerts.get({ instance: "instance", project: "project", sha1Fingerprint: "sha1Fingerprint",  }); 
    
/* 
Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.  
*/
await gapi.client.sslCerts.insert({ instance: "instance", project: "project",  }); 
    
/* 
Lists all of the current SSL certificates for the instance.  
*/
await gapi.client.sslCerts.list({ instance: "instance", project: "project",  }); 
    
/* 
Lists all available service tiers for Google Cloud SQL, for example D1, D2. For related information, see Pricing.  
*/
await gapi.client.tiers.list({ project: "project",  }); 
    
/* 
Deletes a user from a Cloud SQL instance.  
*/
await gapi.client.users.delete({ host: "host", instance: "instance", name: "name", project: "project",  }); 
    
/* 
Creates a new user in a Cloud SQL instance.  
*/
await gapi.client.users.insert({ instance: "instance", project: "project",  }); 
    
/* 
Lists users in the specified Cloud SQL instance.  
*/
await gapi.client.users.list({ instance: "instance", project: "project",  }); 
    
/* 
Updates an existing user in a Cloud SQL instance.  
*/
await gapi.client.users.update({ host: "host", instance: "instance", name: "name", project: "project",  });
```