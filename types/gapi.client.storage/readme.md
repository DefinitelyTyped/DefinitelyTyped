# TypeScript typings for Cloud Storage JSON API v1

Stores and retrieves potentially large, immutable data objects.
For detailed description please check [documentation](https://developers.google.com/storage/docs/json_api/).

## Installing

Install typings for Cloud Storage JSON API:

```
npm install @types/gapi.client.storage@v1 --save-dev
```

## Usage

You need to initialize Google API client in your code:

```typescript
gapi.load('client', () => {
  // now we can use gapi.client
  // ...
});
```

Then load api client wrapper:

```typescript
gapi.client.load('storage', 'v1', () => {
  // now we can use gapi.client.storage
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

      // Manage your data and permissions in Google Cloud Storage
      'https://www.googleapis.com/auth/devstorage.full_control',

      // View your data in Google Cloud Storage
      'https://www.googleapis.com/auth/devstorage.read_only',

      // Manage your data in Google Cloud Storage
      'https://www.googleapis.com/auth/devstorage.read_write',
    ],
    immediate = true;
// ...

gapi.auth.authorize(
  { client_id: client_id, scope: scope, immediate: immediate },
  authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
    } else {
        /* handle authorization error */
    }
});
```

After that you can use Cloud Storage JSON API resources:

```typescript

/*
Permanently deletes the ACL entry for the specified entity on the specified bucket.
*/
await gapi.client.storage.bucketAccessControls.delete({ bucket: "bucket", entity: "entity",  });

/*
Returns the ACL entry for the specified entity on the specified bucket.
*/
await gapi.client.storage.bucketAccessControls.get({ bucket: "bucket", entity: "entity",  });

/*
Creates a new ACL entry on the specified bucket.
*/
await gapi.client.storage.bucketAccessControls.insert({ bucket: "bucket",  });

/*
Retrieves ACL entries on the specified bucket.
*/
await gapi.client.storage.bucketAccessControls.list({ bucket: "bucket",  });

/*
Patches an ACL entry on the specified bucket.
*/
await gapi.client.storage.bucketAccessControls.patch({ bucket: "bucket", entity: "entity",  });

/*
Updates an ACL entry on the specified bucket.
*/
await gapi.client.storage.bucketAccessControls.update({ bucket: "bucket", entity: "entity",  });

/*
Permanently deletes an empty bucket.
*/
await gapi.client.storage.buckets.delete({ bucket: "bucket",  });

/*
Returns metadata for the specified bucket.
*/
await gapi.client.storage.buckets.get({ bucket: "bucket",  });

/*
Returns an IAM policy for the specified bucket.
*/
await gapi.client.storage.buckets.getIamPolicy({ bucket: "bucket",  });

/*
Creates a new bucket.
*/
await gapi.client.storage.buckets.insert({ project: "project",  });

/*
Retrieves a list of buckets for a given project.
*/
await gapi.client.storage.buckets.list({ project: "project",  });

/*
Locks retention policy on a bucket.
*/
await gapi.client.storage.buckets.lockRetentionPolicy({ bucket: "bucket", ifMetagenerationMatch: "ifMetagenerationMatch",  });

/*
Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
*/
await gapi.client.storage.buckets.patch({ bucket: "bucket",  });

/*
Updates an IAM policy for the specified bucket.
*/
await gapi.client.storage.buckets.setIamPolicy({ bucket: "bucket",  });

/*
Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
*/
await gapi.client.storage.buckets.testIamPermissions({ bucket: "bucket", permissions: "permissions",  });

/*
Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
*/
await gapi.client.storage.buckets.update({ bucket: "bucket",  });

/*
Stop watching resources through this channel
*/
await gapi.client.storage.channels.stop({  });

/*
Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
*/
await gapi.client.storage.defaultObjectAccessControls.delete({ bucket: "bucket", entity: "entity",  });

/*
Returns the default object ACL entry for the specified entity on the specified bucket.
*/
await gapi.client.storage.defaultObjectAccessControls.get({ bucket: "bucket", entity: "entity",  });

/*
Creates a new default object ACL entry on the specified bucket.
*/
await gapi.client.storage.defaultObjectAccessControls.insert({ bucket: "bucket",  });

/*
Retrieves default object ACL entries on the specified bucket.
*/
await gapi.client.storage.defaultObjectAccessControls.list({ bucket: "bucket",  });

/*
Patches a default object ACL entry on the specified bucket.
*/
await gapi.client.storage.defaultObjectAccessControls.patch({ bucket: "bucket", entity: "entity",  });

/*
Updates a default object ACL entry on the specified bucket.
*/
await gapi.client.storage.defaultObjectAccessControls.update({ bucket: "bucket", entity: "entity",  });

/*
Permanently deletes a notification subscription.
*/
await gapi.client.storage.notifications.delete({ bucket: "bucket", notification: "notification",  });

/*
View a notification configuration.
*/
await gapi.client.storage.notifications.get({ bucket: "bucket", notification: "notification",  });

/*
Creates a notification subscription for a given bucket.
*/
await gapi.client.storage.notifications.insert({ bucket: "bucket",  });

/*
Retrieves a list of notification subscriptions for a given bucket.
*/
await gapi.client.storage.notifications.list({ bucket: "bucket",  });

/*
Permanently deletes the ACL entry for the specified entity on the specified object.
*/
await gapi.client.storage.objectAccessControls.delete({ bucket: "bucket", entity: "entity", object: "object",  });

/*
Returns the ACL entry for the specified entity on the specified object.
*/
await gapi.client.storage.objectAccessControls.get({ bucket: "bucket", entity: "entity", object: "object",  });

/*
Creates a new ACL entry on the specified object.
*/
await gapi.client.storage.objectAccessControls.insert({ bucket: "bucket", object: "object",  });

/*
Retrieves ACL entries on the specified object.
*/
await gapi.client.storage.objectAccessControls.list({ bucket: "bucket", object: "object",  });

/*
Patches an ACL entry on the specified object.
*/
await gapi.client.storage.objectAccessControls.patch({ bucket: "bucket", entity: "entity", object: "object",  });

/*
Updates an ACL entry on the specified object.
*/
await gapi.client.storage.objectAccessControls.update({ bucket: "bucket", entity: "entity", object: "object",  });

/*
Concatenates a list of existing objects into a new object in the same bucket.
*/
await gapi.client.storage.objects.compose({ destinationBucket: "destinationBucket", destinationObject: "destinationObject",  });

/*
Copies a source object to a destination object. Optionally overrides metadata.
*/
await gapi.client.storage.objects.copy({ destinationBucket: "destinationBucket", destinationObject: "destinationObject", sourceBucket: "sourceBucket", sourceObject: "sourceObject",  });

/*
Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
*/
await gapi.client.storage.objects.delete({ bucket: "bucket", object: "object",  });

/*
Retrieves an object or its metadata.
*/
await gapi.client.storage.objects.get({ bucket: "bucket", object: "object",  });

/*
Returns an IAM policy for the specified object.
*/
await gapi.client.storage.objects.getIamPolicy({ bucket: "bucket", object: "object",  });

/*
Stores a new object and metadata.
*/
await gapi.client.storage.objects.insert({ bucket: "bucket",  });

/*
Retrieves a list of objects matching the criteria.
*/
await gapi.client.storage.objects.list({ bucket: "bucket",  });

/*
Patches an object's metadata.
*/
await gapi.client.storage.objects.patch({ bucket: "bucket", object: "object",  });

/*
Rewrites a source object to a destination object. Optionally overrides metadata.
*/
await gapi.client.storage.objects.rewrite({ destinationBucket: "destinationBucket", destinationObject: "destinationObject", sourceBucket: "sourceBucket", sourceObject: "sourceObject",  });

/*
Updates an IAM policy for the specified object.
*/
await gapi.client.storage.objects.setIamPolicy({ bucket: "bucket", object: "object",  });

/*
Tests a set of permissions on the given object to see which, if any, are held by the caller.
*/
await gapi.client.storage.objects.testIamPermissions({ bucket: "bucket", object: "object", permissions: "permissions",  });

/*
Updates an object's metadata.
*/
await gapi.client.storage.objects.update({ bucket: "bucket", object: "object",  });

/*
Watch for changes on all objects in a bucket.
*/
await gapi.client.storage.objects.watchAll({ bucket: "bucket",  });
```
