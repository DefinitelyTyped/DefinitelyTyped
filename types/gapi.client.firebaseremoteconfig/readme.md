# TypeScript typings for Firebase Remote Config API v1
Firebase Remote Config API allows the 3P clients to manage Remote Config conditions and parameters for Firebase applications.
For detailed description please check [documentation](https://firebase.google.com/docs/remote-config/).

## Installing

Install typings for Firebase Remote Config API:
```
npm install @types/gapi.client.firebaseremoteconfig@v1 --save-dev
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
gapi.client.load('firebaseremoteconfig', 'v1', () => {
    // now we can use gapi.client.firebaseremoteconfig
    // ... 
});
```



After that you can use Firebase Remote Config API resources:

```typescript 
    
/* 
Get the latest version Remote Configuration for a project.
Returns the RemoteConfig as the payload, and also the eTag as a
response header.  
*/
await gapi.client.projects.getRemoteConfig({ project: "project",  }); 
    
/* 
Update a RemoteConfig. We treat this as an always-existing
resource (when it is not found in our data store, we treat it as version
0, a template with zero conditions and zero parameters). Hence there are
no Create or Delete operations. Returns the updated template when
successful (and the updated eTag as a response header), or an error if
things go wrong.
Possible error messages:
* VALIDATION_ERROR (HTTP status 400) with additional details if the
template being passed in can not be validated.
* AUTHENTICATION_ERROR (HTTP status 401) if the request can not be
authenticate (e.g. no access token, or invalid access token).
* AUTHORIZATION_ERROR (HTTP status 403) if the request can not be
authorized (e.g. the user has no access to the specified project id).
* VERSION_MISMATCH (HTTP status 412) when trying to update when the
expected eTag (passed in via the "If-match" header) is not specified, or
is specified but does does not match the current eTag.
* Internal error (HTTP status 500) for Database problems or other internal
errors.  
*/
await gapi.client.projects.updateRemoteConfig({ project: "project",  });
```