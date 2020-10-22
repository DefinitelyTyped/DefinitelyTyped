# TypeScript typings for Google Fonts Developer API v1
Accesses the metadata for all families served by Google Fonts, providing a list of families currently available (including available styles and a list of supported script subsets).
For detailed description please check [documentation](https://developers.google.com/fonts/docs/developer_api).

## Installing

Install typings for Google Fonts Developer API:
```
npm install @types/gapi.client.webfonts@v1 --save-dev
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
gapi.client.load('webfonts', 'v1', () => {
    // now we can use gapi.client.webfonts
    // ... 
});
```



After that you can use Google Fonts Developer API resources:

```typescript 
    
/* 
Retrieves the list of fonts currently served by the Google Fonts Developer API  
*/
await gapi.client.webfonts.list({  });
```