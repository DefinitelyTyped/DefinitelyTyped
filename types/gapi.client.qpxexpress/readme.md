# TypeScript typings for QPX Express API v1
Finds the least expensive flights between an origin and a destination.
For detailed description please check [documentation](http://developers.google.com/qpx-express).

## Installing

Install typings for QPX Express API:
```
npm install @types/gapi.client.qpxexpress@v1 --save-dev
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
gapi.client.load('qpxexpress', 'v1', () => {
    // now we can use gapi.client.qpxexpress
    // ... 
});
```



After that you can use QPX Express API resources:

```typescript 
    
/* 
Returns a list of flights.  
*/
await gapi.client.trips.search({  });
```