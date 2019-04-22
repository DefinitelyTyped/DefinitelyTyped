# TypeScript typings for Accelerated Mobile Pages (AMP) URL API v1
Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).

For detailed description please check [documentation](https://developers.google.com/amp/cache/).

## Installing

Install typings for Accelerated Mobile Pages (AMP) URL API:
```
npm install @types/gapi.client.acceleratedmobilepageurl@v1 --save-dev
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
gapi.client.load('acceleratedmobilepageurl', 'v1', () => {
    // now we can use gapi.client.acceleratedmobilepageurl
    // ... 
});
```



After that you can use Accelerated Mobile Pages (AMP) URL API resources:

```typescript 
    
/* 
Returns AMP URL(s) and equivalent
[AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).  
*/
await gapi.client.ampUrls.batchGet({  });
```