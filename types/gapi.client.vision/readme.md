# TypeScript typings for Google Cloud Vision API v1
Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
For detailed description please check [documentation](https://cloud.google.com/vision/).

## Installing

Install typings for Google Cloud Vision API:
```
npm install @types/gapi.client.vision@v1 --save-dev
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
gapi.client.load('vision', 'v1', () => {
    // now we can use gapi.client.vision
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
    
        // Apply machine learning models to understand and label images
        'https://www.googleapis.com/auth/cloud-vision',
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

After that you can use Google Cloud Vision API resources:

```typescript 
    
/* 
Run image detection and annotation for a batch of images.  
*/
await gapi.client.images.annotate({  });
```