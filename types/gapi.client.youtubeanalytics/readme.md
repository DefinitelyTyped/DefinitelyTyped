# TypeScript typings for YouTube Analytics API v1
Retrieves your YouTube Analytics data.
For detailed description please check [documentation](http://developers.google.com/youtube/analytics/).

## Installing

Install typings for YouTube Analytics API:
```
npm install @types/gapi.client.youtubeanalytics@v1 --save-dev
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
gapi.client.load('youtubeanalytics', 'v1', () => {
    // now we can use gapi.client.youtubeanalytics
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your YouTube account
        'https://www.googleapis.com/auth/youtube',
    
        // View your YouTube account
        'https://www.googleapis.com/auth/youtube.readonly',
    
        // View and manage your assets and associated content on YouTube
        'https://www.googleapis.com/auth/youtubepartner',
    
        // View monetary and non-monetary YouTube Analytics reports for your YouTube content
        'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
    
        // View YouTube Analytics reports for your YouTube content
        'https://www.googleapis.com/auth/yt-analytics.readonly',
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

After that you can use YouTube Analytics API resources:

```typescript 
    
/* 
Removes an item from a group.  
*/
await gapi.client.groupItems.delete({ id: "id",  }); 
    
/* 
Creates a group item.  
*/
await gapi.client.groupItems.insert({  }); 
    
/* 
Returns a collection of group items that match the API request parameters.  
*/
await gapi.client.groupItems.list({ groupId: "groupId",  }); 
    
/* 
Deletes a group.  
*/
await gapi.client.groups.delete({ id: "id",  }); 
    
/* 
Creates a group.  
*/
await gapi.client.groups.insert({  }); 
    
/* 
Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.  
*/
await gapi.client.groups.list({  }); 
    
/* 
Modifies a group. For example, you could change a group's title.  
*/
await gapi.client.groups.update({  }); 
    
/* 
Retrieve your YouTube Analytics reports.  
*/
await gapi.client.reports.query({ end-date: "end-date", ids: "ids", metrics: "metrics", start-date: "start-date",  });
```