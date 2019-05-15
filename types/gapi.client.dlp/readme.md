# TypeScript typings for DLP API v2beta1
The Google Data Loss Prevention API provides methods for detection of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.
For detailed description please check [documentation](https://cloud.google.com/dlp/docs/).

## Installing

Install typings for DLP API:
```
npm install @types/gapi.client.dlp@v2beta1 --save-dev
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
gapi.client.load('dlp', 'v2beta1', () => {
    // now we can use gapi.client.dlp
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

After that you can use DLP API resources:

```typescript 
    
/* 
De-identifies potentially sensitive info from a list of strings.
This method has limits on input size and output size.  
*/
await gapi.client.content.deidentify({  }); 
    
/* 
Finds potentially sensitive info in a list of strings.
This method has limits on input size, processing time, and output size.  
*/
await gapi.client.content.inspect({  }); 
    
/* 
Redacts potentially sensitive info from a list of strings.
This method has limits on input size, processing time, and output size.  
*/
await gapi.client.content.redact({  }); 
    
/* 
Schedules a job to compute risk analysis metrics over content in a Google
Cloud Platform repository.  
*/
await gapi.client.dataSource.analyze({  }); 
    
/* 
Returns the list of root categories of sensitive information.  
*/
await gapi.client.rootCategories.list({  });
```