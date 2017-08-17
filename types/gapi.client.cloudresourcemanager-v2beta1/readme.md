# Typescript typings for Google Cloud Resource Manager API
The Google Cloud Resource Manager API provides methods for creating, reading, and updating project metadata.
For detailed description please check [documentation](https://cloud.google.com/resource-manager).

## Installing

Install typings for Google Cloud Resource Manager API:
```
npm install @types/gapi.client.cloudresourcemanager-v2beta1 --save-dev
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
gapi.client.load('cloudresourcemanager', 'v2beta1', () => {
    // now we can use gapi.client.cloudresourcemanager
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
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

After that you can use Google Cloud Resource Manager API resources:

```typescript 
    
/* 
Requests deletion of a Folder. The Folder is moved into the
[DELETE_REQUESTED] state immediately, and is deleted approximately 30 days
later. This method may only be called on an empty Folder in the [ACTIVE]
state, where a Folder is empty if it doesn't contain any Folders or
Projects in the [ACTIVE] state.
The caller must have `resourcemanager.folders.delete` permission on the
identified folder.  
*/
await gapi.client.folders.delete({ name: "name",  }); 
    
/* 
Lists the Folders that are direct descendants of supplied parent resource.
List provides a strongly consistent view of the Folders underneath
the specified parent resource.
List returns Folders sorted based upon the (ascending) lexical ordering
of their display_name.
The caller must have `resourcemanager.folders.list` permission on the
identified parent.  
*/
await gapi.client.folders.list({  }); 
    
/* 
Sets the access control policy on a Folder, replacing any existing policy.
The `resource` field should be the Folder's resource name, e.g.
"folders/1234".
The caller must have `resourcemanager.folders.setIamPolicy` permission
on the identified folder.  
*/
await gapi.client.folders.setIamPolicy({ resource: "resource",  }); 
    
/* 
Creates a Folder in the resource hierarchy.
Returns an Operation which can be used to track the progress of the
folder creation workflow.
Upon success the Operation.response field will be populated with the
created Folder.

In order to succeed, the addition of this new Folder must not violate
the Folder naming, height or fanout constraints.
+ The Folder's display_name must be distinct from all other Folder's that
share its parent.
+ The addition of the Folder must not cause the active Folder hierarchy
to exceed a height of 4. Note, the full active + deleted Folder hierarchy
is allowed to reach a height of 8; this provides additional headroom when
moving folders that contain deleted folders.
+ The addition of the Folder must not cause the total number of Folders
under its parent to exceed 100.

If the operation fails due to a folder constraint violation,
a PreconditionFailure explaining the violation will be returned.
If the failure occurs synchronously then the PreconditionFailure
will be returned via the Status.details field and if it occurs
asynchronously then the PreconditionFailure will be returned
via the the Operation.error field.

The caller must have `resourcemanager.folders.create` permission on the
identified parent.  
*/
await gapi.client.folders.create({  }); 
    
/* 
Gets the access control policy for a Folder. The returned policy may be
empty if no such policy or resource exists. The `resource` field should
be the Folder's resource name, e.g. "folders/1234".
The caller must have `resourcemanager.folders.getIamPolicy` permission
on the identified folder.  
*/
await gapi.client.folders.getIamPolicy({ resource: "resource",  }); 
    
/* 
Search for folders that match specific filter criteria.
Search provides an eventually consistent view of the folders a user has
access to which meet the specified filter criteria.

This will only return folders on which the caller has the
permission `resourcemanager.folders.get`.  
*/
await gapi.client.folders.search({  }); 
    
/* 
Cancels the deletion request for a Folder. This method may only be
called on a Folder in the [DELETE_REQUESTED] state.
In order to succeed, the Folder's parent must be in the [ACTIVE] state.
In addition, reintroducing the folder into the tree must not violate
folder naming, height and fanout constraints described in the
[CreateFolder] documentation.
The caller must have `resourcemanager.folders.undelete` permission on the
identified folder.  
*/
await gapi.client.folders.undelete({ name: "name",  }); 
    
/* 
Retrieves a Folder identified by the supplied resource name.
Valid Folder resource names have the format `folders/{folder_id}`
(for example, `folders/1234`).
The caller must have `resourcemanager.folders.get` permission on the
identified folder.  
*/
await gapi.client.folders.get({ name: "name",  }); 
    
/* 
Updates a Folder, changing its display_name.
Changes to the folder display_name will be rejected if they violate either
the display_name formatting rules or naming constraints described in
the [CreateFolder] documentation.
+ The Folder's display name must start and end with a letter or digit,
may contain letters, digits, spaces, hyphens and underscores and can be
no longer than 30 characters. This is captured by the regular expression:
[\p{L}\p{N}]({\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?.
The caller must have `resourcemanager.folders.update` permission on the
identified folder.

If the update fails due to the unique name constraint then a
PreconditionFailure explaining this violation will be returned
in the Status.details field.  
*/
await gapi.client.folders.patch({ name: "name",  }); 
    
/* 
Moves a Folder under a new resource parent.
Returns an Operation which can be used to track the progress of the
folder move workflow.
Upon success the Operation.response field will be populated with the
moved Folder.
Upon failure, a FolderOperationError categorizing the failure cause will
be returned - if the failure occurs synchronously then the
FolderOperationError will be returned via the Status.details field
and if it occurs asynchronously then the FolderOperation will be returned
via the the Operation.error field.
In addition, the Operation.metadata field will be populated with a
FolderOperation message as an aid to stateless clients.
Folder moves will be rejected if they violate either the naming, height
or fanout constraints described in the [CreateFolder] documentation.
The caller must have `resourcemanager.folders.move` permission on the
folder's current and proposed new parent.  
*/
await gapi.client.folders.move({ name: "name",  }); 
    
/* 
Returns permissions that a caller has on the specified Folder.
The `resource` field should be the Folder's resource name,
e.g. "folders/1234".

There are no permissions required for making this API call.  
*/
await gapi.client.folders.testIamPermissions({ resource: "resource",  });
```