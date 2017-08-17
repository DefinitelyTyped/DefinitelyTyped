# Typescript typings for Cloud Storage JSON API
Lets you store and retrieve potentially-large, immutable data objects.
For detailed description please check [documentation](https://developers.google.com/storage/docs/json_api/).

## Installing

Install typings for Cloud Storage JSON API:
```
npm install @types/gapi.client.storage-v1beta1 --save-dev
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
gapi.client.load('storage', 'v1beta1', () => {
    // now we can use gapi.client.storage
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your data and permissions in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.full_control',
    
        // View your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_only',
    
        // Manage your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_write',
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

After that you can use Cloud Storage JSON API resources:

```typescript 
    
/* 
Deletes the ACL entry for the specified entity on the specified bucket.  
*/
await gapi.client.bucketAccessControls.delete({ bucket: "bucket", entity: "entity",  }); 
    
/* 
Returns the ACL entry for the specified entity on the specified bucket.  
*/
await gapi.client.bucketAccessControls.get({ bucket: "bucket", entity: "entity",  }); 
    
/* 
Creates a new ACL entry on the specified bucket.  
*/
await gapi.client.bucketAccessControls.insert({ bucket: "bucket",  }); 
    
/* 
Retrieves ACL entries on the specified bucket.  
*/
await gapi.client.bucketAccessControls.list({ bucket: "bucket",  }); 
    
/* 
Updates an ACL entry on the specified bucket. This method supports patch semantics.  
*/
await gapi.client.bucketAccessControls.patch({ bucket: "bucket", entity: "entity",  }); 
    
/* 
Updates an ACL entry on the specified bucket.  
*/
await gapi.client.bucketAccessControls.update({ bucket: "bucket", entity: "entity",  }); 
    
/* 
Deletes an empty bucket.  
*/
await gapi.client.buckets.delete({ bucket: "bucket",  }); 
    
/* 
Returns metadata for the specified bucket.  
*/
await gapi.client.buckets.get({ bucket: "bucket",  }); 
    
/* 
Creates a new bucket.  
*/
await gapi.client.buckets.insert({  }); 
    
/* 
Retrieves a list of buckets for a given project.  
*/
await gapi.client.buckets.list({ projectId: "projectId",  }); 
    
/* 
Updates a bucket. This method supports patch semantics.  
*/
await gapi.client.buckets.patch({ bucket: "bucket",  }); 
    
/* 
Updates a bucket.  
*/
await gapi.client.buckets.update({ bucket: "bucket",  }); 
    
/* 
Deletes the ACL entry for the specified entity on the specified object.  
*/
await gapi.client.objectAccessControls.delete({ bucket: "bucket", entity: "entity", object: "object",  }); 
    
/* 
Returns the ACL entry for the specified entity on the specified object.  
*/
await gapi.client.objectAccessControls.get({ bucket: "bucket", entity: "entity", object: "object",  }); 
    
/* 
Creates a new ACL entry on the specified object.  
*/
await gapi.client.objectAccessControls.insert({ bucket: "bucket", object: "object",  }); 
    
/* 
Retrieves ACL entries on the specified object.  
*/
await gapi.client.objectAccessControls.list({ bucket: "bucket", object: "object",  }); 
    
/* 
Updates an ACL entry on the specified object. This method supports patch semantics.  
*/
await gapi.client.objectAccessControls.patch({ bucket: "bucket", entity: "entity", object: "object",  }); 
    
/* 
Updates an ACL entry on the specified object.  
*/
await gapi.client.objectAccessControls.update({ bucket: "bucket", entity: "entity", object: "object",  }); 
    
/* 
Deletes data blobs and associated metadata.  
*/
await gapi.client.objects.delete({ bucket: "bucket", object: "object",  }); 
    
/* 
Retrieves objects or their associated metadata.  
*/
await gapi.client.objects.get({ bucket: "bucket", object: "object",  }); 
    
/* 
Stores new data blobs and associated metadata.  
*/
await gapi.client.objects.insert({ bucket: "bucket",  }); 
    
/* 
Retrieves a list of objects matching the criteria.  
*/
await gapi.client.objects.list({ bucket: "bucket",  }); 
    
/* 
Updates a data blob's associated metadata. This method supports patch semantics.  
*/
await gapi.client.objects.patch({ bucket: "bucket", object: "object",  }); 
    
/* 
Updates a data blob's associated metadata.  
*/
await gapi.client.objects.update({ bucket: "bucket", object: "object",  });
```