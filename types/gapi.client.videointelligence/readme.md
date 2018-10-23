# TypeScript typings for Cloud Video Intelligence API v1beta1
Cloud Video Intelligence API.
For detailed description please check [documentation](https://cloud.google.com/video-intelligence/docs/).

## Installing

Install typings for Cloud Video Intelligence API:
```
npm install @types/gapi.client.videointelligence@v1beta1 --save-dev
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
gapi.client.load('videointelligence', 'v1beta1', () => {
    // now we can use gapi.client.videointelligence
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
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

After that you can use Cloud Video Intelligence API resources:

```typescript 
    
/* 
Performs asynchronous video annotation. Progress and results can be
retrieved through the `google.longrunning.Operations` interface.
`Operation.metadata` contains `AnnotateVideoProgress` (progress).
`Operation.response` contains `AnnotateVideoResponse` (results).  
*/
await gapi.client.videos.annotate({  });
```