# TypeScript typings for Google+ API v1
Builds on top of the Google+ platform.
For detailed description please check [documentation](https://developers.google.com/+/api/).

## Installing

Install typings for Google+ API:
```
npm install @types/gapi.client.plus@v1 --save-dev
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
gapi.client.load('plus', 'v1', () => {
    // now we can use gapi.client.plus
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Know the list of people in your circles, your age range, and language
        'https://www.googleapis.com/auth/plus.login',
    
        // Know who you are on Google
        'https://www.googleapis.com/auth/plus.me',
    
        // View your email address
        'https://www.googleapis.com/auth/userinfo.email',
    
        // View your basic profile info
        'https://www.googleapis.com/auth/userinfo.profile',
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

After that you can use Google+ API resources:

```typescript 
    
/* 
Get an activity.  
*/
await gapi.client.activities.get({ activityId: "activityId",  }); 
    
/* 
List all of the activities in the specified collection for a particular user.  
*/
await gapi.client.activities.list({ collection: "collection", userId: "userId",  }); 
    
/* 
Search public activities.  
*/
await gapi.client.activities.search({ query: "query",  }); 
    
/* 
Get a comment.  
*/
await gapi.client.comments.get({ commentId: "commentId",  }); 
    
/* 
List all of the comments for an activity.  
*/
await gapi.client.comments.list({ activityId: "activityId",  }); 
    
/* 
Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.  
*/
await gapi.client.people.get({ userId: "userId",  }); 
    
/* 
List all of the people in the specified collection.  
*/
await gapi.client.people.list({ collection: "collection", userId: "userId",  }); 
    
/* 
List all of the people in the specified collection for a particular activity.  
*/
await gapi.client.people.listByActivity({ activityId: "activityId", collection: "collection",  }); 
    
/* 
Search all public profiles.  
*/
await gapi.client.people.search({ query: "query",  });
```