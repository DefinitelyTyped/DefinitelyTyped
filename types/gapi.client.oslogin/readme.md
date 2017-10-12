# TypeScript typings for Google Cloud OS Login API v1alpha
Manages OS login configuration for Directory API users.
For detailed description please check [documentation](https://cloud.google.com/compute/docs/oslogin/rest/).

## Installing

Install typings for Google Cloud OS Login API:
```
npm install @types/gapi.client.oslogin@v1alpha --save-dev
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
gapi.client.load('oslogin', 'v1alpha', () => {
    // now we can use gapi.client.oslogin
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
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // View your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute.readonly',
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

After that you can use Google Cloud OS Login API resources:

```typescript 
    
/* 
Retrieves the profile information used for logging in to a virtual machine
on Google Compute Engine.  
*/
await gapi.client.users.getLoginProfile({ name: "name",  }); 
    
/* 
Adds an SSH public key and returns the profile information. Default POSIX
account information is set when no username and UID exist as part of the
login profile.  
*/
await gapi.client.users.importSshPublicKey({ parent: "parent",  });
```