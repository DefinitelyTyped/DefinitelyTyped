# TypeScript typings for Drive API v3
Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.
For detailed description please check [documentation](https://developers.google.com/drive/).

## Installing

Install typings for Drive API:
```
npm install @types/gapi.client.drive@v3 --save-dev
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
gapi.client.load('drive', 'v3', () => {
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
Gets information about the user, the user's Drive, and system capabilities.  
*/
await gapi.client.about.get({  }); 
    
/* 
Gets the starting pageToken for listing future changes.  
*/
await gapi.client.changes.getStartPageToken({  }); 
    
/* 
Lists the changes for a user or Team Drive.  
*/
await gapi.client.changes.list({ pageToken: "pageToken",  }); 
    
/* 
Subscribes to changes for a user.  
*/
await gapi.client.changes.watch({ pageToken: "pageToken",  }); 
    
/* 
Stop watching resources through this channel  
*/
await gapi.client.channels.stop({  }); 
    
/* 
Creates a new comment on a file.  
*/
await gapi.client.comments.create({ fileId: "fileId",  }); 
    
/* 
Deletes a comment.  
*/
await gapi.client.comments.delete({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Gets a comment by ID.  
*/
await gapi.client.comments.get({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Lists a file's comments.  
*/
await gapi.client.comments.list({ fileId: "fileId",  }); 
    
/* 
Updates a comment with patch semantics.  
*/
await gapi.client.comments.update({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Creates a copy of a file and applies any requested updates with patch semantics.  
*/
await gapi.client.files.copy({ fileId: "fileId",  }); 
    
/* 
Creates a new file.  
*/
await gapi.client.files.create({  }); 
    
/* 
Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.  
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
Generates a set of file IDs which can be provided in create requests.  
*/
await gapi.client.files.generateIds({  }); 
    
/* 
Gets a file's metadata or content by ID.  
*/
await gapi.client.files.get({ fileId: "fileId",  }); 
    
/* 
Lists or searches files.  
*/
await gapi.client.files.list({  }); 
    
/* 
Updates a file's metadata and/or content with patch semantics.  
*/
await gapi.client.files.update({ fileId: "fileId",  }); 
    
/* 
Subscribes to changes to a file  
*/
await gapi.client.files.watch({ fileId: "fileId",  }); 
    
/* 
Creates a permission for a file or Team Drive.  
*/
await gapi.client.permissions.create({ fileId: "fileId",  }); 
    
/* 
Deletes a permission.  
*/
await gapi.client.permissions.delete({ fileId: "fileId", permissionId: "permissionId",  }); 
    
/* 
Gets a permission by ID.  
*/
await gapi.client.permissions.get({ fileId: "fileId", permissionId: "permissionId",  }); 
    
/* 
Lists a file's or Team Drive's permissions.  
*/
await gapi.client.permissions.list({ fileId: "fileId",  }); 
    
/* 
Updates a permission with patch semantics.  
*/
await gapi.client.permissions.update({ fileId: "fileId", permissionId: "permissionId",  }); 
    
/* 
Creates a new reply to a comment.  
*/
await gapi.client.replies.create({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Deletes a reply.  
*/
await gapi.client.replies.delete({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  }); 
    
/* 
Gets a reply by ID.  
*/
await gapi.client.replies.get({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  }); 
    
/* 
Lists a comment's replies.  
*/
await gapi.client.replies.list({ commentId: "commentId", fileId: "fileId",  }); 
    
/* 
Updates a reply with patch semantics.  
*/
await gapi.client.replies.update({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  }); 
    
/* 
Permanently deletes a revision. This method is only applicable to files with binary content in Drive.  
*/
await gapi.client.revisions.delete({ fileId: "fileId", revisionId: "revisionId",  }); 
    
/* 
Gets a revision's metadata or content by ID.  
*/
await gapi.client.revisions.get({ fileId: "fileId", revisionId: "revisionId",  }); 
    
/* 
Lists a file's revisions.  
*/
await gapi.client.revisions.list({ fileId: "fileId",  }); 
    
/* 
Updates a revision with patch semantics.  
*/
await gapi.client.revisions.update({ fileId: "fileId", revisionId: "revisionId",  }); 
    
/* 
Creates a new Team Drive.  
*/
await gapi.client.teamdrives.create({ requestId: "requestId",  }); 
    
/* 
Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.  
*/
await gapi.client.teamdrives.delete({ teamDriveId: "teamDriveId",  }); 
    
/* 
Gets a Team Drive's metadata by ID.  
*/
await gapi.client.teamdrives.get({ teamDriveId: "teamDriveId",  }); 
    
/* 
Lists the user's Team Drives.  
*/
await gapi.client.teamdrives.list({  }); 
    
/* 
Updates a Team Drive's metadata  
*/
await gapi.client.teamdrives.update({ teamDriveId: "teamDriveId",  });
```