# Typescript typings for Prediction API
Lets you access a cloud hosted machine learning service that makes it easy to build smart apps
For detailed description please check [documentation](https://developers.google.com/prediction/docs/developer-guide).

## Installing

Install typings for Prediction API:
```
npm install @types/gapi.client.prediction-v1.4 --save-dev
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
gapi.client.load('prediction', 'v1.4', () => {
    // now we can use gapi.client.prediction
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your data and permissions in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.full_control',
    
        // View your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_only',
    
        // Manage your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_write',
    
        // Manage your data in the Google Prediction API
        'https://www.googleapis.com/auth/prediction',
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

After that you can use Prediction API resources:

```typescript 
    
/* 
Submit input and request an output against a hosted model.  
*/
await gapi.client.hostedmodels.predict({ hostedModelName: "hostedModelName",  }); 
    
/* 
Delete a trained model.  
*/
await gapi.client.trainedmodels.delete({ id: "id",  }); 
    
/* 
Check training status of your model.  
*/
await gapi.client.trainedmodels.get({ id: "id",  }); 
    
/* 
Begin training your model.  
*/
await gapi.client.trainedmodels.insert({  }); 
    
/* 
Submit model id and request a prediction  
*/
await gapi.client.trainedmodels.predict({ id: "id",  }); 
    
/* 
Add new data to a trained model.  
*/
await gapi.client.trainedmodels.update({ id: "id",  });
```