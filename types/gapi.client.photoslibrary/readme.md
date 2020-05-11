# TypeScript typings for Photos Library API v1
Manage photos, videos, and albums in Google Photos

For detailed description please check [documentation](https://developers.google.com/photos/).

## Installing

Install typings for Photos Library API:
```
npm install @types/gapi.client.photoslibrary@v1 --save-dev
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
gapi.client.load('photoslibrary', 'v1', () => {
    // now we can use gapi.client.photoslibrary
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Photos library
        'https://www.googleapis.com/auth/photoslibrary',
    
        // Add to your Google Photos library
        'https://www.googleapis.com/auth/photoslibrary.appendonly',
    
        // View your Google Photos library
        'https://www.googleapis.com/auth/photoslibrary.readonly',
    
        // Manage photos added by this app
        'https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata',
    
        // Manage and add to shared albums on your behalf
        'https://www.googleapis.com/auth/photoslibrary.sharing',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Photos Library API resources:

```typescript 
    
/* 
Adds an enrichment at a specified position in a defined album.  
*/
await gapi.client.albums.addEnrichment({ albumId: "albumId",  }); 
    
/* 
Adds one or more media items in a user's Google Photos library to
an album. The media items and albums must have been created by the
developer via the API.

Media items are added to the end of the album. If multiple media items are
given, they are added in the order specified in this call.

Each album can contain up to 20,000 media items.

Only media items that are in the user's library can be added to an
album. For albums that are shared, the album must either be owned by the
user or the user must have joined the album as a collaborator.

Partial success is not supported. The entire request will fail if an
invalid media item or album is specified.  
*/
await gapi.client.albums.batchAddMediaItems({ albumId: "albumId",  }); 
    
/* 
Removes one or more media items from a specified album. The media items and
the album must have been created by the developer via the API.

For albums that are shared, this action is only supported for media items
that were added to the album by this user, or for all media items if the
album was created by this user.

Partial success is not supported. The entire request will fail and no
action will be performed on the album if an invalid media item or album is
specified.  
*/
await gapi.client.albums.batchRemoveMediaItems({ albumId: "albumId",  }); 
    
/* 
Creates an album in a user's Google Photos library.  
*/
await gapi.client.albums.create({  }); 
    
/* 
Returns the album based on the specified `albumId`.
The `albumId` must be the ID of an album owned by the user or a shared
album that the user has joined.  
*/
await gapi.client.albums.get({ albumId: "albumId",  }); 
    
/* 
Lists all albums shown to a user in the Albums tab of the Google
Photos app.  
*/
await gapi.client.albums.list({  }); 
    
/* 
Marks an album as shared and accessible to other users. This action can
only be performed on albums which were created by the developer via the
API.  
*/
await gapi.client.albums.share({ albumId: "albumId",  }); 
    
/* 
Marks a previously shared album as private. This means that the album is
no longer shared and all the non-owners will lose access to the album. All
non-owner content will be removed from the album. If a non-owner has
previously added the album to their library, they will retain all photos in
their library. This action can only be performed on albums which were
created by the developer via the API.  
*/
await gapi.client.albums.unshare({ albumId: "albumId",  }); 
    
/* 
Creates one or more media items in a user's Google Photos library.

This is the second step for creating a media item. For details regarding
Step 1, uploading the raw bytes to a Google Server, see
<a href="/photos/library/guides/upload-media">Uploading media</a>.

This call adds the media item to the library. If an album `id` is
specified, the call adds the media item to the album too. Each album can
contain up to 20,000 media items. By default, the media item will be added
to the end of the library or album.

If an album `id` and position are both defined, the media item is
added to the album at the specified position.

If the call contains multiple media items, they're added at the specified
position.
If you are creating a media item in a shared album where you are not the
owner, you are not allowed to position the media item. Doing so will result
in a `BAD REQUEST` error.  
*/
await gapi.client.mediaItems.batchCreate({  }); 
    
/* 
Returns the list of media items for the specified media item identifiers.
Items are returned in the same order as the supplied identifiers.  
*/
await gapi.client.mediaItems.batchGet({  }); 
    
/* 
Returns the media item for the specified media item identifier.  
*/
await gapi.client.mediaItems.get({ mediaItemId: "mediaItemId",  }); 
    
/* 
List all media items from a user's Google Photos library.  
*/
await gapi.client.mediaItems.list({  }); 
    
/* 
Searches for media items in a user's Google Photos library.
If no filters are set, then all media items in the user's library are
returned.
If an album is set, all media items in the specified album are returned.
If filters are specified, media items that match the filters from the
user's library are listed. If you set both the album and the filters, the
request results in an error.  
*/
await gapi.client.mediaItems.search({  }); 
    
/* 
Returns the album based on the specified `shareToken`.  
*/
await gapi.client.sharedAlbums.get({ shareToken: "shareToken",  }); 
    
/* 
Joins a shared album on behalf of the Google Photos user.  
*/
await gapi.client.sharedAlbums.join({  }); 
    
/* 
Leaves a previously-joined shared album on behalf of the Google Photos
user. The user must not own this album.  
*/
await gapi.client.sharedAlbums.leave({  }); 
    
/* 
Lists all shared albums available in the Sharing tab of the
user's Google Photos app.  
*/
await gapi.client.sharedAlbums.list({  });
```
