# TypeScript typings for Street View Publish API v1
Publishes 360 photos to Google Maps, along with position, orientation, and connectivity metadata. Apps can offer an interface for positioning, connecting, and uploading user-generated Street View images.

For detailed description please check [documentation](https://developers.google.com/streetview/publish/).

## Installing

Install typings for Street View Publish API:
```
npm install @types/gapi.client.streetviewpublish@v1 --save-dev
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
gapi.client.load('streetviewpublish', 'v1', () => {
    // now we can use gapi.client.streetviewpublish
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Publish and manage your 360 photos on Google Street View
        'https://www.googleapis.com/auth/streetviewpublish',
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

After that you can use Street View Publish API resources:

```typescript 
    
/* 
After the client finishes uploading the photo with the returned
UploadRef,
CreatePhoto
publishes the uploaded Photo to
Street View on Google Maps.

Currently, the only way to set heading, pitch, and roll in CreatePhoto is
through the [Photo Sphere XMP
metadata](https://developers.google.com/streetview/spherical-metadata) in
the photo bytes. The `pose.heading`, `pose.pitch`, `pose.roll`,
`pose.altitude`, and `pose.level` fields in Pose are ignored for
CreatePhoto.

This method returns the following error codes:

* google.rpc.Code.INVALID_ARGUMENT if the request is malformed.
* google.rpc.Code.NOT_FOUND if the upload reference does not exist.
* google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the
storage limit.  
*/
await gapi.client.photo.create({  }); 
    
/* 
Deletes a Photo and its metadata.

This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not
create the requested photo.
* google.rpc.Code.NOT_FOUND if the photo ID does not exist.  
*/
await gapi.client.photo.delete({ photoId: "photoId",  }); 
    
/* 
Gets the metadata of the specified
Photo.

This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not
create the requested Photo.
* google.rpc.Code.NOT_FOUND if the requested
Photo does not exist.  
*/
await gapi.client.photo.get({ photoId: "photoId",  }); 
    
/* 
Creates an upload session to start uploading photo bytes. The upload URL of
the returned UploadRef is used to
upload the bytes for the Photo.

In addition to the photo requirements shown in
https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
the photo must also meet the following requirements:

* Photo Sphere XMP metadata must be included in the photo medadata. See
https://developers.google.com/streetview/spherical-metadata for the
required fields.
* The pixel size of the photo must meet the size requirements listed in
https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and
the photo must be a full 360 horizontally.

After the upload is complete, the
UploadRef is used with
CreatePhoto
to create the Photo object entry.  
*/
await gapi.client.photo.startUpload({  }); 
    
/* 
Updates the metadata of a Photo, such
as pose, place association, connections, etc. Changing the pixels of a
photo is not supported.

Only the fields specified in the
updateMask
field are used. If `updateMask` is not present, the update applies to all
fields.

<aside class="note"><b>Note:</b> To update
Pose.altitude,
Pose.latLngPair has to be
filled as well. Otherwise, the request will fail.</aside>

This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not
create the requested photo.
* google.rpc.Code.INVALID_ARGUMENT if the request is malformed.
* google.rpc.Code.NOT_FOUND if the requested photo does not exist.  
*/
await gapi.client.photo.update({ id: "id",  }); 
    
/* 
Deletes a list of Photos and their
metadata.

Note that if
BatchDeletePhotos
fails, either critical fields are missing or there was an authentication
error. Even if
BatchDeletePhotos
succeeds, there may have been failures for single photos in the batch.
These failures will be specified in each
PhotoResponse.status
in
BatchDeletePhotosResponse.results.
See
DeletePhoto
for specific failures that can occur per photo.  
*/
await gapi.client.photos.batchDelete({  }); 
    
/* 
Gets the metadata of the specified
Photo batch.

Note that if
BatchGetPhotos
fails, either critical fields are missing or there was an authentication
error. Even if
BatchGetPhotos
succeeds, there may have been failures for single photos in the batch.
These failures will be specified in each
PhotoResponse.status
in
BatchGetPhotosResponse.results.
See
GetPhoto
for specific failures that can occur per photo.  
*/
await gapi.client.photos.batchGet({  }); 
    
/* 
Updates the metadata of Photos, such
as pose, place association, connections, etc. Changing the pixels of photos
is not supported.

Note that if
BatchUpdatePhotos
fails, either critical fields are missing or there was an authentication
error. Even if
BatchUpdatePhotos
succeeds, there may have been failures for single photos in the batch.
These failures will be specified in each
PhotoResponse.status
in
BatchUpdatePhotosResponse.results.
See
UpdatePhoto
for specific failures that can occur per photo.

Only the fields specified in
updateMask
field are used. If `updateMask` is not present, the update applies to all
fields.

<aside class="note"><b>Note:</b> To update
Pose.altitude,
Pose.latLngPair has to be
filled as well. Otherwise, the request will fail.</aside>  
*/
await gapi.client.photos.batchUpdate({  }); 
    
/* 
Lists all the Photos that belong to
the user.  
*/
await gapi.client.photos.list({  });
```