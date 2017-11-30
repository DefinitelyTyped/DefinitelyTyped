# TypeScript typings for APIs Discovery Service v1
Provides information about other Google APIs, such as what APIs are available, the resource, and method details for each API.
For detailed description please check [documentation](https://developers.google.com/discovery/).

## Installing

Install typings for APIs Discovery Service:
```
npm install @types/gapi.client.discovery@v1 --save-dev
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
gapi.client.load('discovery', 'v1', () => {
    // now we can use gapi.client.discovery
    // ... 
});
```



After that you can use APIs Discovery Service resources:

```typescript 
    
/* 
Retrieve the description of a particular version of an api.  
*/
await gapi.client.apis.getRest({ api: "api", version: "version",  }); 
    
/* 
Retrieve the list of APIs supported at this endpoint.  
*/
await gapi.client.apis.list({  });
```