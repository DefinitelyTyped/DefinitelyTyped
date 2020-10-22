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
gapi.load('client', () => {
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
      // See, edit, create, and delete all of your Google Drive files
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

      // See and download all your Google Drive files
      'https://www.googleapis.com/auth/drive.readonly',

      // Modify your Google Apps Script scripts' behavior
      'https://www.googleapis.com/auth/drive.scripts',
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

After that you can use Drive API resources:

```typescript

/*
Gets information about the user, the user's Drive, and system capabilities.
*/
await gapi.client.drive.about.get({  });

/*
Gets the starting pageToken for listing future changes.
*/
await gapi.client.drive.changes.getStartPageToken({  });

/*
Lists the changes for a user or shared drive.
*/
await gapi.client.drive.changes.list({ pageToken: "pageToken",  });

/*
Subscribes to changes for a user.
*/
await gapi.client.drive.changes.watch({ pageToken: "pageToken",  });

/*
Stop watching resources through this channel
*/
await gapi.client.drive.channels.stop({  });

/*
Creates a new comment on a file.
*/
await gapi.client.drive.comments.create({ fileId: "fileId",  });

/*
Deletes a comment.
*/
await gapi.client.drive.comments.delete({ commentId: "commentId", fileId: "fileId",  });

/*
Gets a comment by ID.
*/
await gapi.client.drive.comments.get({ commentId: "commentId", fileId: "fileId",  });

/*
Lists a file's comments.
*/
await gapi.client.drive.comments.list({ fileId: "fileId",  });

/*
Updates a comment with patch semantics.
*/
await gapi.client.drive.comments.update({ commentId: "commentId", fileId: "fileId",  });

/*
Creates a new shared drive.
*/
await gapi.client.drive.drives.create({ requestId: "requestId",  });

/*
Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
*/
await gapi.client.drive.drives.delete({ driveId: "driveId",  });

/*
Gets a shared drive's metadata by ID.
*/
await gapi.client.drive.drives.get({ driveId: "driveId",  });

/*
Hides a shared drive from the default view.
*/
await gapi.client.drive.drives.hide({ driveId: "driveId",  });

/*
Lists the user's shared drives.
*/
await gapi.client.drive.drives.list({  });

/*
Restores a shared drive to the default view.
*/
await gapi.client.drive.drives.unhide({ driveId: "driveId",  });

/*
Updates the metadate for a shared drive.
*/
await gapi.client.drive.drives.update({ driveId: "driveId",  });

/*
Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
*/
await gapi.client.drive.files.copy({ fileId: "fileId",  });

/*
Creates a new file.
*/
await gapi.client.drive.files.create({  });

/*
Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
*/
await gapi.client.drive.files.delete({ fileId: "fileId",  });

/*
Permanently deletes all of the user's trashed files.
*/
await gapi.client.drive.files.emptyTrash({  });

/*
Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.
*/
await gapi.client.drive.files.export({ fileId: "fileId", mimeType: "mimeType",  });

/*
Generates a set of file IDs which can be provided in create or copy requests.
*/
await gapi.client.drive.files.generateIds({  });

/*
Gets a file's metadata or content by ID.
*/
await gapi.client.drive.files.get({ fileId: "fileId",  });

/*
Lists or searches files.
*/
await gapi.client.drive.files.list({  });

/*
Updates a file's metadata and/or content. This method supports patch semantics.
*/
await gapi.client.drive.files.update({ fileId: "fileId",  });

/*
Subscribes to changes to a file
*/
await gapi.client.drive.files.watch({ fileId: "fileId",  });

/*
Creates a permission for a file or shared drive.
*/
await gapi.client.drive.permissions.create({ fileId: "fileId",  });

/*
Deletes a permission.
*/
await gapi.client.drive.permissions.delete({ fileId: "fileId", permissionId: "permissionId",  });

/*
Gets a permission by ID.
*/
await gapi.client.drive.permissions.get({ fileId: "fileId", permissionId: "permissionId",  });

/*
Lists a file's or shared drive's permissions.
*/
await gapi.client.drive.permissions.list({ fileId: "fileId",  });

/*
Updates a permission with patch semantics.
*/
await gapi.client.drive.permissions.update({ fileId: "fileId", permissionId: "permissionId",  });

/*
Creates a new reply to a comment.
*/
await gapi.client.drive.replies.create({ commentId: "commentId", fileId: "fileId",  });

/*
Deletes a reply.
*/
await gapi.client.drive.replies.delete({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  });

/*
Gets a reply by ID.
*/
await gapi.client.drive.replies.get({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  });

/*
Lists a comment's replies.
*/
await gapi.client.drive.replies.list({ commentId: "commentId", fileId: "fileId",  });

/*
Updates a reply with patch semantics.
*/
await gapi.client.drive.replies.update({ commentId: "commentId", fileId: "fileId", replyId: "replyId",  });

/*
Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
*/
await gapi.client.drive.revisions.delete({ fileId: "fileId", revisionId: "revisionId",  });

/*
Gets a revision's metadata or content by ID.
*/
await gapi.client.drive.revisions.get({ fileId: "fileId", revisionId: "revisionId",  });

/*
Lists a file's revisions.
*/
await gapi.client.drive.revisions.list({ fileId: "fileId",  });

/*
Updates a revision with patch semantics.
*/
await gapi.client.drive.revisions.update({ fileId: "fileId", revisionId: "revisionId",  });

/*
Deprecated use drives.create instead.
*/
await gapi.client.drive.teamdrives.create({ requestId: "requestId",  });

/*
Deprecated use drives.delete instead.
*/
await gapi.client.drive.teamdrives.delete({ teamDriveId: "teamDriveId",  });

/*
Deprecated use drives.get instead.
*/
await gapi.client.drive.teamdrives.get({ teamDriveId: "teamDriveId",  });

/*
Deprecated use drives.list instead.
*/
await gapi.client.drive.teamdrives.list({  });

/*
Deprecated use drives.update instead
*/
await gapi.client.drive.teamdrives.update({ teamDriveId: "teamDriveId",  });
```
