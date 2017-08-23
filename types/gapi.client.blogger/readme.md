# TypeScript typings for Blogger API v3
API for access to the data within Blogger.
For detailed description please check [documentation](https://developers.google.com/blogger/docs/3.0/getting_started).

## Installing

Install typings for Blogger API:
```
npm install @types/gapi.client.blogger@v3 --save-dev
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
gapi.client.load('blogger', 'v3', () => {
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
    
        // View your Blogger account
        'https://www.googleapis.com/auth/blogger.readonly',
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
Gets one blog and user info pair by blogId and userId.  
*/
await gapi.client.blogUserInfos.get({ blogId: "blogId", userId: "userId",  }); 
    
/* 
Gets one blog by ID.  
*/
await gapi.client.blogs.get({ blogId: "blogId",  }); 
    
/* 
Retrieve a Blog by URL.  
*/
await gapi.client.blogs.getByUrl({ url: "url",  }); 
    
/* 
Retrieves a list of blogs, possibly filtered.  
*/
await gapi.client.blogs.listByUser({ userId: "userId",  }); 
    
/* 
Marks a comment as not spam.  
*/
await gapi.client.comments.approve({ blogId: "blogId", commentId: "commentId", postId: "postId",  }); 
    
/* 
Delete a comment by ID.  
*/
await gapi.client.comments.delete({ blogId: "blogId", commentId: "commentId", postId: "postId",  }); 
    
/* 
Gets one comment by ID.  
*/
await gapi.client.comments.get({ blogId: "blogId", commentId: "commentId", postId: "postId",  }); 
    
/* 
Retrieves the comments for a post, possibly filtered.  
*/
await gapi.client.comments.list({ blogId: "blogId", postId: "postId",  }); 
    
/* 
Retrieves the comments for a blog, across all posts, possibly filtered.  
*/
await gapi.client.comments.listByBlog({ blogId: "blogId",  }); 
    
/* 
Marks a comment as spam.  
*/
await gapi.client.comments.markAsSpam({ blogId: "blogId", commentId: "commentId", postId: "postId",  }); 
    
/* 
Removes the content of a comment.  
*/
await gapi.client.comments.removeContent({ blogId: "blogId", commentId: "commentId", postId: "postId",  }); 
    
/* 
Retrieve pageview stats for a Blog.  
*/
await gapi.client.pageViews.get({ blogId: "blogId",  }); 
    
/* 
Delete a page by ID.  
*/
await gapi.client.pages.delete({ blogId: "blogId", pageId: "pageId",  }); 
    
/* 
Gets one blog page by ID.  
*/
await gapi.client.pages.get({ blogId: "blogId", pageId: "pageId",  }); 
    
/* 
Add a page.  
*/
await gapi.client.pages.insert({ blogId: "blogId",  }); 
    
/* 
Retrieves the pages for a blog, optionally including non-LIVE statuses.  
*/
await gapi.client.pages.list({ blogId: "blogId",  }); 
    
/* 
Update a page. This method supports patch semantics.  
*/
await gapi.client.pages.patch({ blogId: "blogId", pageId: "pageId",  }); 
    
/* 
Publishes a draft page.  
*/
await gapi.client.pages.publish({ blogId: "blogId", pageId: "pageId",  }); 
    
/* 
Revert a published or scheduled page to draft state.  
*/
await gapi.client.pages.revert({ blogId: "blogId", pageId: "pageId",  }); 
    
/* 
Update a page.  
*/
await gapi.client.pages.update({ blogId: "blogId", pageId: "pageId",  }); 
    
/* 
Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights, specific to the user.  
*/
await gapi.client.postUserInfos.get({ blogId: "blogId", postId: "postId", userId: "userId",  }); 
    
/* 
Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user.  
*/
await gapi.client.postUserInfos.list({ blogId: "blogId", userId: "userId",  }); 
    
/* 
Delete a post by ID.  
*/
await gapi.client.posts.delete({ blogId: "blogId", postId: "postId",  }); 
    
/* 
Get a post by ID.  
*/
await gapi.client.posts.get({ blogId: "blogId", postId: "postId",  }); 
    
/* 
Retrieve a Post by Path.  
*/
await gapi.client.posts.getByPath({ blogId: "blogId", path: "path",  }); 
    
/* 
Add a post.  
*/
await gapi.client.posts.insert({ blogId: "blogId",  }); 
    
/* 
Retrieves a list of posts, possibly filtered.  
*/
await gapi.client.posts.list({ blogId: "blogId",  }); 
    
/* 
Update a post. This method supports patch semantics.  
*/
await gapi.client.posts.patch({ blogId: "blogId", postId: "postId",  }); 
    
/* 
Publishes a draft post, optionally at the specific time of the given publishDate parameter.  
*/
await gapi.client.posts.publish({ blogId: "blogId", postId: "postId",  }); 
    
/* 
Revert a published or scheduled post to draft state.  
*/
await gapi.client.posts.revert({ blogId: "blogId", postId: "postId",  }); 
    
/* 
Search for a post.  
*/
await gapi.client.posts.search({ blogId: "blogId", q: "q",  }); 
    
/* 
Update a post.  
*/
await gapi.client.posts.update({ blogId: "blogId", postId: "postId",  }); 
    
/* 
Gets one user by ID.  
*/
await gapi.client.users.get({ userId: "userId",  });
```