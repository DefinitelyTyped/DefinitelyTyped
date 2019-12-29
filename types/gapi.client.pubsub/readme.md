# TypeScript typings for Google Cloud Pub/Sub API v1
Provides reliable, many-to-many, asynchronous messaging between applications.

For detailed description please check [documentation](https://cloud.google.com/pubsub/docs).

## Installing

Install typings for Google Cloud Pub/Sub API:
```
npm install @types/gapi.client.pubsub@v1 --save-dev
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
gapi.client.load('pubsub', 'v1', () => {
    // now we can use gapi.client.pubsub
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
    
        // View and manage Pub/Sub topics and subscriptions
        'https://www.googleapis.com/auth/pubsub',
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

After that you can use Google Cloud Pub/Sub API resources:

```typescript
```