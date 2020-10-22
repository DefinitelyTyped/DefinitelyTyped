# TypeScript typings for Google Search Console URL Testing Tools API v1
Provides tools for running validation tests against single URLs
For detailed description please check [documentation](https://developers.google.com/webmaster-tools/search-console-api/).

## Installing

Install typings for Google Search Console URL Testing Tools API:
```
npm install @types/gapi.client.searchconsole@v1 --save-dev
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
gapi.client.load('searchconsole', 'v1', () => {
    // now we can use gapi.client.searchconsole
    // ... 
});
```



After that you can use Google Search Console URL Testing Tools API resources:

```typescript
```