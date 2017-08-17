# Typescript typings for Google App Engine Admin API
The App Engine Admin API enables developers to provision and manage their App Engine applications.
For detailed description please check [documentation](https://cloud.google.com/appengine/docs/admin-api/).

## Installing

Install typings for Google App Engine Admin API:
```
npm install @types/gapi.client.appengine-v1beta --save-dev
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
gapi.client.load('appengine', 'v1beta', () => {
    // now we can use gapi.client.appengine
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your applications deployed on Google App Engine
        'https://www.googleapis.com/auth/appengine.admin',
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
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

After that you can use Google App Engine Admin API resources:

```typescript 
    
/* 
Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account.  
*/
await gapi.client.apps.repair({ appsId: "appsId",  }); 
    
/* 
Updates the specified Application resource. You can update the following fields:
auth_domain - Google authentication domain for controlling user access to the application.
default_cookie_expiration - Cookie expiration policy for the application.  
*/
await gapi.client.apps.patch({ appsId: "appsId",  }); 
    
/* 
Gets information about an application.  
*/
await gapi.client.apps.get({ appsId: "appsId",  }); 
    
/* 
Creates an App Engine application for a Google Cloud Platform project. Required fields:
id - The ID of the target Cloud Platform project.
location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/python/console/).  
*/
await gapi.client.apps.create({  });
```