# TypeScript typings for Books API v1
Searches for books and manages your Google Books library.
For detailed description please check [documentation](https://developers.google.com/books/docs/v1/getting_started).

## Installing

Install typings for Books API:
```
npm install @types/gapi.client.books@v1 --save-dev
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
gapi.client.load('books', 'v1', () => {
    // now we can use gapi.client.books
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your books
        'https://www.googleapis.com/auth/books',
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

After that you can use Books API resources:

```typescript 
    
/* 
Retrieves metadata for a specific bookshelf for the specified user.  
*/
await gapi.client.bookshelves.get({ shelf: "shelf", userId: "userId",  }); 
    
/* 
Retrieves a list of public bookshelves for the specified user.  
*/
await gapi.client.bookshelves.list({ userId: "userId",  }); 
    
/* 
  
*/
await gapi.client.cloudloading.addBook({  }); 
    
/* 
Remove the book and its contents  
*/
await gapi.client.cloudloading.deleteBook({ volumeId: "volumeId",  }); 
    
/* 
  
*/
await gapi.client.cloudloading.updateBook({  }); 
    
/* 
Returns a list of offline dictionary metadata available  
*/
await gapi.client.dictionary.listOfflineMetadata({ cpksver: "cpksver",  }); 
    
/* 
Gets the layer summary for a volume.  
*/
await gapi.client.layers.get({ summaryId: "summaryId", volumeId: "volumeId",  }); 
    
/* 
List the layer summaries for a volume.  
*/
await gapi.client.layers.list({ volumeId: "volumeId",  }); 
    
/* 
Gets the current settings for the user.  
*/
await gapi.client.myconfig.getUserSettings({  }); 
    
/* 
Release downloaded content access restriction.  
*/
await gapi.client.myconfig.releaseDownloadAccess({ cpksver: "cpksver", volumeIds: "volumeIds",  }); 
    
/* 
Request concurrent and download access restrictions.  
*/
await gapi.client.myconfig.requestAccess({ cpksver: "cpksver", nonce: "nonce", source: "source", volumeId: "volumeId",  }); 
    
/* 
Request downloaded content access for specified volumes on the My eBooks shelf.  
*/
await gapi.client.myconfig.syncVolumeLicenses({ cpksver: "cpksver", nonce: "nonce", source: "source",  }); 
    
/* 
Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.  
*/
await gapi.client.myconfig.updateUserSettings({  }); 
    
/* 
Returns notification details for a given notification id.  
*/
await gapi.client.notification.get({ notification_id: "notification_id",  }); 
    
/* 
List categories for onboarding experience.  
*/
await gapi.client.onboarding.listCategories({  }); 
    
/* 
List available volumes under categories for onboarding experience.  
*/
await gapi.client.onboarding.listCategoryVolumes({  }); 
    
/* 
Returns a stream of personalized book clusters  
*/
await gapi.client.personalizedstream.get({  }); 
    
/* 
  
*/
await gapi.client.promooffer.accept({  }); 
    
/* 
  
*/
await gapi.client.promooffer.dismiss({  }); 
    
/* 
Returns a list of promo offers available to the user  
*/
await gapi.client.promooffer.get({  }); 
    
/* 
Returns Series metadata for the given series ids.  
*/
await gapi.client.series.get({ series_id: "series_id",  }); 
    
/* 
Gets volume information for a single volume.  
*/
await gapi.client.volumes.get({ volumeId: "volumeId",  }); 
    
/* 
Performs a book search.  
*/
await gapi.client.volumes.list({ q: "q",  });
```