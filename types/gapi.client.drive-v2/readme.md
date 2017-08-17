# Typescript typings for Drive API
Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.
For detailed description please check [documentation](https://developers.google.com/drive/).

## Installing

Install typings for Drive API:
```
npm install @types/gapi.client.drive-v2 --save-dev
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
gapi.client.load('drive', 'v2', () => {
    // now we can use gapi.client.drive
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage the files in your Google Drive
        'https://www.googleapis.com/auth/drive',
    
        // View and manage its own configuration data in your Google Drive
        'https://www.googleapis.com/auth/drive.appdata',
    
        // View your Google Drive apps
        'https://www.googleapis.com/auth/drive.apps.readonly',
    
        // View and manage Google Drive files and folders that you have opened or created with this app
        'https://www.googleapis.com/auth/drive.file',
    
        // View and manage metadata of files in your Google Drive
        'https://www.googleapis.com/auth/drive.metadata',
    
        // View metadata for files in your Google Drive
        'https://www.googleapis.com/auth/drive.metadata.readonly',
    
        // View the photos, videos and albums in your Google Photos
        'https://www.googleapis.com/auth/drive.photos.readonly',
    
        // View the files in your Google Drive
        'https://www.googleapis.com/auth/drive.readonly',
    
        // Modify your Google Apps Script scripts' behavior
        'https://www.googleapis.com/auth/drive.scripts',
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

After that you can use Drive API resources:

```typescript 
    
/* 
Gets the information about the current user along with Drive API settings  
*/
await gapi.client.about.get({  }); 
    
/* 
Gets a specific app.  
*/
await gapi.client.apps.get({ appId: "appId",  }); 
    
/* 
Lists a user's installed apps.  
*/
await gapi.client.apps.list({  }); 
    
/* 
Gets a specific change.  
*/
await gapi.client.changes.get({ changeId: "changeId",  }); 
    
/* 
Gets the starting pageToken for listing future changes.  
*/
await gapi.client.changes.getStartPageToken({  }); 
    
/* 
Lists the changes for a user or Team Drive.  
*/
await gapi.client.changes.list({  }); 
    
/* 
Subscribe to changes for a user.  
*/
await gapi.client.changes.watch({  }); 
    
/* 
Stop watching resources through this channel  
*/
await gapi.client.channels.stop({  }); 
    
/* 
Removes a child from a folder.  
*/
await gapi.client.children.delete({ childId: "childId", folderId: "folderId",  }); 
    
/* 
Gets a specific child reference.  
*/
await gapi.client.children.get({ childId: "childId", folderId: "folderId",  }); 
    
/* 
Inserts a file into a folder.  
*/
await gapi.client.children.insert({ folderId: "folderId",  }); 
    
/* 
Lists a folder's children.  
*/
await gapi.client.children.list({ folderId: "folderId",  }); 
    
/* 
Deletes a comment.  
*/
await gapi.client.comments.delete({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Gets a comment by ID.  
*/
await gapi.client.comments.get({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Creates a new comment on the given file.  
*/
await gapi.client.comments.insert({ fileId: "fileId",  }); 
    
/* 
Lists a file's comments.  
*/
await gapi.client.comments.list({ fileId: "fileId",  }); 
    
/* 
Updates an existing comment. This method supports patch semantics.  
*/
await gapi.client.comments.patch({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Updates an existing comment.  
*/
await gapi.client.comments.update({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Creates a copy of the specified file.  
*/
await gapi.client.files.copy({ fileId: "fileId",  }); 
    
/* 
Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.  
*/
await gapi.client.files.delete({ fileId: "fileId",  }); 
    
/* 
Permanently deletes all of the user's trashed files.  
*/
await gapi.client.files.emptyTrash({  }); 
    
/* 
Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.  
*/
await gapi.client.files.export({ fileId: "fileId", mimeType: "mimeType",  }); 
    
/* 
Generates a set of file IDs which can be provided in insert requests.  
*/
await gapi.client.files.generateIds({  }); 
    
/* 
Gets a file's metadata by ID.  
*/
await gapi.client.files.get({ fileId: "fileId",  }); 
    
/* 
Insert a new file.  
*/
await gapi.client.files.insert({  }); 
    
/* 
Lists the user's files.  
*/
await gapi.client.files.list({  }); 
    
/* 
Updates file metadata and/or content. This method supports patch semantics.  
*/
await gapi.client.files.patch({ fileId: "fileId",  }); 
    
/* 
Set the file's updated time to the current server time.  
*/
await gapi.client.files.touch({ fileId: "fileId",  }); 
    
/* 
Moves a file to the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.  
*/
await gapi.client.files.trash({ fileId: "fileId",  }); 
    
/* 
Restores a file from the trash.  
*/
await gapi.client.files.untrash({ fileId: "fileId",  }); 
    
/* 
Updates file metadata and/or content.  
*/
await gapi.client.files.update({ fileId: "fileId",  }); 
    
/* 
Subscribe to changes on a file  
*/
await gapi.client.files.watch({ fileId: "fileId",  }); 
    
/* 
Removes a parent from a file.  
*/
await gapi.client.parents.delete({ fileId: "fileId", parentId: "parentId",  }); 
    
/* 
Gets a specific parent reference.  
*/
await gapi.client.parents.get({ fileId: "fileId", parentId: "parentId",  }); 
    
/* 
Adds a parent folder for a file.  
*/
await gapi.client.parents.insert({ fileId: "fileId",  }); 
    
/* 
Lists a file's parents.  
*/
await gapi.client.parents.list({ fileId: "fileId",  }); 
    
/* 
Deletes a permission from a file or Team Drive.  
*/
await gapi.client.permissions.delete({ fileId: "fileId", permissionId: "permissionId",  }); 
    
/* 
Gets a permission by ID.  
*/
await gapi.client.permissions.get({ fileId: "fileId", permissionId: "permissionId",  }); 
    
/* 
Returns the permission ID for an email address.  
*/
await gapi.client.permissions.getIdForEmail({ email: "email",  }); 
    
/* 
Inserts a permission for a file or Team Drive.  
*/
await gapi.client.permissions.insert({ fileId: "fileId",  }); 
    
/* 
Lists a file's or Team Drive's permissions.  
*/
await gapi.client.permissions.list({ fileId: "fileId",  }); 
    
/* 
Updates a permission using patch semantics.  
*/
await gapi.client.permissions.patch({ fileId: "fileId", permissionId: "permissionId",  }); 
    
/* 
Updates a permission.  
*/
await gapi.client.permissions.update({ fileId: "fileId", permissionId: "permissionId",  }); 
    
/* 
Deletes a property.  
*/
await gapi.client.properties.delete({ fileId: "fileId", propertyKey: "propertyKey",  }); 
    
/* 
Gets a property by its key.  
*/
await gapi.client.properties.get({ fileId: "fileId", propertyKey: "propertyKey",  }); 
    
/* 
Adds a property to a file, or updates it if it already exists.  
*/
await gapi.client.properties.insert({ fileId: "fileId",  }); 
    
/* 
Lists a file's properties.  
*/
await gapi.client.properties.list({ fileId: "fileId",  }); 
    
/* 
Updates a property, or adds it if it doesn't exist. This method supports patch semantics.  
*/
await gapi.client.properties.patch({ fileId: "fileId", propertyKey: "propertyKey",  }); 
    
/* 
Updates a property, or adds it if it doesn't exist.  
*/
await gapi.client.properties.update({ fileId: "fileId", propertyKey: "propertyKey",  }); 
    
/* 
Exports the contents of the Realtime API data model associated with this file as JSON.  
*/
await gapi.client.realtime.get({ fileId: "fileId",  }); 
    
/* 
Overwrites the Realtime API data model associated with this file with the provided JSON data model.  
*/
await gapi.client.realtime.update({ fileId: "fileId",  }); 
    
/* 
Deletes a reply.  
*/
await gapi.client.replies.delete({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  }); 
    
/* 
Gets a reply.  
*/
await gapi.client.replies.get({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  }); 
    
/* 
Creates a new reply to the given comment.  
*/
await gapi.client.replies.insert({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Lists all of the replies to a comment.  
*/
await gapi.client.replies.list({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Updates an existing reply. This method supports patch semantics.  
*/
await gapi.client.replies.patch({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  }); 
    
/* 
Updates an existing reply.  
*/
await gapi.client.replies.update({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  }); 
    
/* 
Removes a revision.  
*/
await gapi.client.revisions.delete({ fileId: "fileId", revisionId: "revisionId",  }); 
    
/* 
Gets a specific revision.  
*/
await gapi.client.revisions.get({ fileId: "fileId", revisionId: "revisionId",  }); 
    
/* 
Lists a file's revisions.  
*/
await gapi.client.revisions.list({ fileId: "fileId",  }); 
    
/* 
Updates a revision. This method supports patch semantics.  
*/
await gapi.client.revisions.patch({ fileId: "fileId", revisionId: "revisionId",  }); 
    
/* 
Updates a revision.  
*/
await gapi.client.revisions.update({ fileId: "fileId", revisionId: "revisionId",  }); 
    
/* 
Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.  
*/
await gapi.client.teamdrives.delete({ teamDriveId: "teamDriveId",  }); 
    
/* 
Gets a Team Drive's metadata by ID.  
*/
await gapi.client.teamdrives.get({ teamDriveId: "teamDriveId",  }); 
    
/* 
Creates a new Team Drive.  
*/
await gapi.client.teamdrives.insert({ requestId: "requestId",  }); 
    
/* 
Lists the user's Team Drives.  
*/
await gapi.client.teamdrives.list({  }); 
    
/* 
Updates a Team Drive's metadata  
*/
await gapi.client.teamdrives.update({ teamDriveId: "teamDriveId",  });
```