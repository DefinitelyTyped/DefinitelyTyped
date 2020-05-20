# TypeScript typings for Cloud Tasks API v2beta2
Manages the execution of large numbers of distributed requests. Cloud Tasks is in Alpha.
For detailed description please check [documentation](https://cloud.google.com/cloud-tasks/).

## Installing

Install typings for Cloud Tasks API:
```
npm install @types/gapi.client.cloudtasks@v2beta2 --save-dev
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
gapi.client.load('cloudtasks', 'v2beta2', () => {
    // now we can use gapi.client.cloudtasks
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

After that you can use Cloud Tasks API resources:

```typescript
```