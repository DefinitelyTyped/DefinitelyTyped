# TypeScript typings for Google Cloud Key Management Service (KMS) API v1
Manages encryption for your cloud services the same way you do on-premises. You can generate, use, rotate, and destroy AES256 encryption keys.
For detailed description please check [documentation](https://cloud.google.com/kms/).

## Installing

Install typings for Google Cloud Key Management Service (KMS) API:
```
npm install @types/gapi.client.cloudkms@v1 --save-dev
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
gapi.client.load('cloudkms', 'v1', () => {
    // now we can use gapi.client.cloudkms
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

After that you can use Google Cloud Key Management Service (KMS) API resources:

```typescript
```