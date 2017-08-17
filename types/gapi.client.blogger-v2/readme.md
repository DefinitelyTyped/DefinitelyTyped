# Typescript typings for Blogger API
API for access to the data within Blogger.
For detailed description please check [documentation](https://developers.google.com/blogger/docs/2.0/json/getting_started).

## Installing

Install typings for Blogger API:
```
npm install @types/gapi.client.blogger-v2 --save-dev
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
gapi.client.load('blogger', 'v2', () => {
    // now we can use gapi.client.blogger
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Blogger account
        'https://www.googleapis.com/auth/blogger',
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

After that you can use Blogger API resources:

```typescript 
    
/* 
Gets one blog by id.  
*/
await gapi.client.blogs.get({ blogId: "blogId",  }); 
    
/* 
Gets one comment by id.  
*/
await gapi.client.comments.get({ blogId: "blogId", commentId: "commentId", postId: "postId",  }); 
    
/* 
Retrieves the comments for a blog, possibly filtered.  
*/
await gapi.client.comments.list({ blogId: "blogId", postId: "postId",  }); 
    
/* 
Gets one blog page by id.  
*/
await gapi.client.pages.get({ blogId: "blogId", pageId: "pageId",  }); 
    
/* 
Retrieves pages for a blog, possibly filtered.  
*/
await gapi.client.pages.list({ blogId: "blogId",  }); 
    
/* 
Get a post by id.  
*/
await gapi.client.posts.get({ blogId: "blogId", postId: "postId",  }); 
    
/* 
Retrieves a list of posts, possibly filtered.  
*/
await gapi.client.posts.list({ blogId: "blogId",  }); 
    
/* 
Gets one user by id.  
*/
await gapi.client.users.get({ userId: "userId",  });
```