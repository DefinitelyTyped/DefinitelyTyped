# TypeScript typings for Google Cloud Machine Learning Engine v1
An API to enable creating and using machine learning models.
For detailed description please check [documentation](https://cloud.google.com/ml/).

## Installing

Install typings for Google Cloud Machine Learning Engine:
```
npm install @types/gapi.client.ml@v1 --save-dev
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
gapi.client.load('ml', 'v1', () => {
    // now we can use gapi.client.ml
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

After that you can use Google Cloud Machine Learning Engine resources:

```typescript 
    
/* 
Get the service account information associated with your project. You need
this information in order to grant the service account persmissions for
the Google Cloud Storage location where you put your model training code
for training the model with Google Cloud Machine Learning.  
*/
await gapi.client.projects.getConfig({ name: "name",  }); 
    
/* 
Performs prediction on the data in the request.

**** REMOVE FROM GENERATED DOCUMENTATION  
*/
await gapi.client.projects.predict({ name: "name",  });
```