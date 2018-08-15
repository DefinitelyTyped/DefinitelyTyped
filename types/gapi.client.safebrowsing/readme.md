# TypeScript typings for Google Safe Browsing API v4
Enables client applications to check web resources (most commonly URLs) against Google-generated lists of unsafe web resources.
For detailed description please check [documentation](https://developers.google.com/safe-browsing/).

## Installing

Install typings for Google Safe Browsing API:
```
npm install @types/gapi.client.safebrowsing@v4 --save-dev
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
gapi.client.load('safebrowsing', 'v4', () => {
    // now we can use gapi.client.safebrowsing
    // ... 
});
```



After that you can use Google Safe Browsing API resources:

```typescript 
    
/* 
  
*/
await gapi.client.encodedFullHashes.get({ encodedRequest: "encodedRequest",  }); 
    
/* 
  
*/
await gapi.client.encodedUpdates.get({ encodedRequest: "encodedRequest",  }); 
    
/* 
Finds the full hashes that match the requested hash prefixes.  
*/
await gapi.client.fullHashes.find({  }); 
    
/* 
Fetches the most recent threat list updates. A client can request updates
for multiple lists at once.  
*/
await gapi.client.threatListUpdates.fetch({  }); 
    
/* 
Lists the Safe Browsing threat lists available for download.  
*/
await gapi.client.threatLists.list({  }); 
    
/* 
Finds the threat entries that match the Safe Browsing lists.  
*/
await gapi.client.threatMatches.find({  });
```