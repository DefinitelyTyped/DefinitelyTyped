# TypeScript typings for Google Slides API v1
An API for creating and editing Google Slides presentations.
For detailed description please check [documentation](https://developers.google.com/slides/).

## Installing

Install typings for Google Slides API:
```
npm install @types/gapi.client.slides@v1 --save-dev
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
gapi.client.load('slides', 'v1', () => {
    // now we can use gapi.client.slides
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
    
        // View the files in your Google Drive
        'https://www.googleapis.com/auth/drive.readonly',
    
        // View and manage your Google Slides presentations
        'https://www.googleapis.com/auth/presentations',
    
        // View your Google Slides presentations
        'https://www.googleapis.com/auth/presentations.readonly',
    
        // View and manage your spreadsheets in Google Drive
        'https://www.googleapis.com/auth/spreadsheets',
    
        // View your Google Spreadsheets
        'https://www.googleapis.com/auth/spreadsheets.readonly',
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

After that you can use Google Slides API resources:

```typescript 
    
/* 
Applies one or more updates to the presentation.

Each request is validated before
being applied. If any request is not valid, then the entire request will
fail and nothing will be applied.

Some requests have replies to
give you some information about how they are applied. Other requests do
not need to return information; these each return an empty reply.
The order of replies matches that of the requests.

For example, suppose you call batchUpdate with four updates, and only the
third one returns information. The response would have two empty replies:
the reply to the third request, and another empty reply, in that order.

Because other users may be editing the presentation, the presentation
might not exactly reflect your changes: your changes may
be altered with respect to collaborator changes. If there are no
collaborators, the presentation should reflect your changes. In any case,
the updates in your request are guaranteed to be applied together
atomically.  
*/
await gapi.client.presentations.batchUpdate({ presentationId: "presentationId",  }); 
    
/* 
Creates a new presentation using the title given in the request. Other
fields in the request are ignored.
Returns the created presentation.  
*/
await gapi.client.presentations.create({  }); 
    
/* 
Gets the latest version of the specified presentation.  
*/
await gapi.client.presentations.get({ presentationId: "presentationId",  });
```