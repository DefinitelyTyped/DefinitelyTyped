# TypeScript typings for Google+ Domains API v1
Builds on top of the Google+ platform for Google Apps Domains.
For detailed description please check [documentation](https://developers.google.com/+/domains/).

## Installing

Install typings for Google+ Domains API:
```
npm install @types/gapi.client.plusdomains@v1 --save-dev
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
gapi.client.load('plusdomains', 'v1', () => {
    // now we can use gapi.client.plusdomains
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your circles and the people and pages in them
        'https://www.googleapis.com/auth/plus.circles.read',
    
        // Manage your circles and add people and pages. People and pages you add to your circles will be notified. Others may see this information publicly. People you add to circles can use Hangouts with you.
        'https://www.googleapis.com/auth/plus.circles.write',
    
        // Know the list of people in your circles, your age range, and language
        'https://www.googleapis.com/auth/plus.login',
    
        // Know who you are on Google
        'https://www.googleapis.com/auth/plus.me',
    
        // Send your photos and videos to Google+
        'https://www.googleapis.com/auth/plus.media.upload',
    
        // View your own Google+ profile and profiles visible to you
        'https://www.googleapis.com/auth/plus.profiles.read',
    
        // View your Google+ posts, comments, and stream
        'https://www.googleapis.com/auth/plus.stream.read',
    
        // Manage your Google+ posts, comments, and stream
        'https://www.googleapis.com/auth/plus.stream.write',
    
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

After that you can use Google+ Domains API resources:

```typescript 
    
/* 
Get an activity.  
*/
await gapi.client.activities.get({ activityId: "activityId",  }); 
    
/* 
Create a new activity for the authenticated user.  
*/
await gapi.client.activities.insert({ userId: "userId",  }); 
    
/* 
List all of the activities in the specified collection for a particular user.  
*/
await gapi.client.activities.list({ collection: "collection", userId: "userId",  }); 
    
/* 
List all of the audiences to which a user can share.  
*/
await gapi.client.audiences.list({ userId: "userId",  }); 
    
/* 
Add a person to a circle. Google+ limits certain circle operations, including the number of circle adds. Learn More.  
*/
await gapi.client.circles.addPeople({ circleId: "circleId",  }); 
    
/* 
Get a circle.  
*/
await gapi.client.circles.get({ circleId: "circleId",  }); 
    
/* 
Create a new circle for the authenticated user.  
*/
await gapi.client.circles.insert({ userId: "userId",  }); 
    
/* 
List all of the circles for a user.  
*/
await gapi.client.circles.list({ userId: "userId",  }); 
    
/* 
Update a circle's description. This method supports patch semantics.  
*/
await gapi.client.circles.patch({ circleId: "circleId",  }); 
    
/* 
Delete a circle.  
*/
await gapi.client.circles.remove({ circleId: "circleId",  }); 
    
/* 
Remove a person from a circle.  
*/
await gapi.client.circles.removePeople({ circleId: "circleId",  }); 
    
/* 
Update a circle's description.  
*/
await gapi.client.circles.update({ circleId: "circleId",  }); 
    
/* 
Get a comment.  
*/
await gapi.client.comments.get({ commentId: "commentId",  }); 
    
/* 
Create a new comment in reply to an activity.  
*/
await gapi.client.comments.insert({ activityId: "activityId",  }); 
    
/* 
List all of the comments for an activity.  
*/
await gapi.client.comments.list({ activityId: "activityId",  }); 
    
/* 
Add a new media item to an album. The current upload size limitations are 36MB for a photo and 1GB for a video. Uploads do not count against quota if photos are less than 2048 pixels on their longest side or videos are less than 15 minutes in length.  
*/
await gapi.client.media.insert({ collection: "collection", userId: "userId",  }); 
    
/* 
Get a person's profile.  
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
List all of the people who are members of a circle.  
*/
await gapi.client.people.listByCircle({ circleId: "circleId",  });
```